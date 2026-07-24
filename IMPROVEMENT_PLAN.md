# AmitabhC — Audit Findings & Improvement Plan

**Date:** 2026-07-24 · **Audited version:** 4.0.0 · **Scope:** local repo (`C:\xampp\htdocs\amitabhc`), GitHub repo, esolangs.org wiki page

Every finding below was verified against the actual source (interpreter run, test execution, or file inspection) — not just read from docs.

---

## 1. What's healthy (keep as-is)

- **All 60 tests pass** (`node tests/run_tests.js` → 60 passed, 0 failed). The "60-test suite" claim in README/version.json is accurate.
- **Single interpreter source of truth.** `editor.html`, `pro.html`, `bin/amitabhc.js`, and `tests/run_tests.js` all load the same `interpreter.js` — no forked interpreter copies.
- **Security fundamentals are solid.** No `eval`/`new Function`; regex input escaped before `new RegExp`; variable stores use `Object.create(null)` with a reserved-word blocklist (prototype pollution blocked); web output is HTML-escaped before `innerHTML`.
- **VS Code grammar is complete.** `syntaxes/amitabhc.tmLanguage.json` exists and covers all keywords, including KBC commands and `BULAAO`.
- **GitHub is in sync** with the local folder (v4.0.0, LICENSE present, npm package `amitabhc` documented).

---

## 2. CRITICAL — Interpreter correctness bugs

These make valid-looking programs silently wrong. Each was reproduced.

### 2.1 Unary minus / `!` swallow the rest of the expression
`BOLO -5 + 3` prints **-8** instead of -2; `!a && b` evaluates as `!(a && b)`.
*Cause:* in `parseExpressionNew` (~interpreter.js:215), the `startsWith('-')` / `startsWith('!')` branches run **before** binary-operator splitting and consume the entire remaining expression.
*Fix:* handle unary operators only after binary-operator precedence splitting (or restrict unary to the immediate operand).

### 2.2 `KHATAM` terminator collision breaks nested blocks
Three constructs end with `KHATAM` (`BAAR BAAR`, `HAR EK`, `AGNEEPATH`) but each block scanner counts only its own opener:
- `BAAR BAAR` containing `HAR EK` → `HAR EK must end with KHATAM!`
- `AGNEEPATH` containing any loop → `BAAR BAAR must end with KHATAM!`
- (`HAR EK` containing `BAAR BAAR` happens to work — asymmetric.)

*Fix (pick one):* make every scanner count **all** KHATAM-terminated openers (`BAAR BAAR`, `HAR EK`, `AGNEEPATH`) when tracking depth; or (breaking change, cleaner long-term) give each construct a unique terminator.

### 2.3 Keyword dispatch by `startsWith` corrupts prefixed identifiers
`executeLine` routes with `content.startsWith('AGAR')`, `('BOLO')`, `('DON')`, etc. So `VIJAY AGARBATTI = 1` then `AGARBATTI = 2` fails with "AGAR block must end with BAS!". Any variable named `AGAR*`, `DON*`, `BOLO*`, `SUNO*`, `BADHAO*`… is unusable.
*Fix:* match keywords as whole words (`/^AGAR\b/` or split-first-token dispatch).

### 2.4 Unrecognized lines are silent no-ops
Any line the dispatcher doesn't recognize simply does nothing — no error. Consequences observed:
- `BULAAO greet()` does nothing (yet `docs/cheatsheet.md` documents `BULAAO` as "call function" — see §5).
- `VIJAY = 5` (malformed) and `SUNO 123bad` are silently skipped.

*Fix:* end `executeLine` with `throw new Error("Yeh kya likha hai? Unknown statement: …")` instead of `return null`, and make `executeVijay`/`executeSuno`/`executeDon` throw when their regex fails. This one change converts a whole class of silent failures into clear errors. Then either implement `BULAAO` as an alias for a call statement or remove it from the cheatsheet.

### 2.5 Only the first `LIGHTS…ACTION` program in a file runs
`run()` executes up to the **first** `ACTION`. `examples/kbc_quiz.amitabhc` actually contains **three** concatenated programs (marker comments `// File: examples/kbc_advanced.amitabhc` and `// File: examples/kbc_interactive.amitabhc` are still inside it) — programs 2 and 3 are dead code and never run.
*Fix:* split kbc_quiz into its three intended files, and make the validator reject content after `ACTION` (or at least warn).

### 2.6 Stray `DEEWAR` (break) at top level silently ends the program with exit 0
`{__break: true}` propagates to `run()` and is ignored — everything after is skipped, "successfully".
*Fix:* throw "DEEWAR outside a loop" when a break escapes all loops.

### 2.7 Nested `KBC_SAWAAL` broken; loose matching undocumented
The OPTION collector scans linearly to `AGLE_SAWAAL`, so a switch inside an OPTION errors out. All OPTION expressions are eagerly evaluated even when never matched, and matching uses loose `==` (deliberate, per the eslint-disable, but undocumented).
*Fix:* depth-count nested `KBC_SAWAAL`; evaluate OPTION expressions lazily; document the loose matching in the Bible.

### 2.8 Error messages accumulate noise
Each nesting level re-wraps errors, producing user-visible text like `Line 4: Line 5: HAR EK must end with KHATAM!`, and the `MRITYU` catch variable receives internal prefixes (`Line 11: Expression error: Division by zero - …`).
*Fix:* attach the line number once (at the innermost throw); strip prefixes before assigning to the MRITYU error variable. Also: the compound-assignment division path throws plain `'Division by zero'` while the normal path includes the "Zero se divide kaise kar sakte hain?" dialogue — unify.

### 2.9 Smaller correctness nits
- `DON` writes the constant into `currentContext.constants` **before** name validation, so a failed declaration can leave a phantom constant behind.
- Missing function arguments default to `''` instead of `LAAWARIS`.
- Chained comparisons (`a == b == c`) silently ignore the third operand.
- `sanitizeExpression` silently truncates expressions at 1000 chars → arbitrary misparses; should throw a clear "expression too long" error.
- `QUIT_GAME` is implemented as `throw new Error(...)` — it reports as a runtime *failure* (exit 1) and is catchable by `MRITYU`. Should be a clean, uncatchable termination signal.

---

## 3. HIGH — CLI (`bin/amitabhc.js`) issues

- **Piped stdin ends the program mid-run with exit 0.** Each `SUNO` creates a fresh readline interface; on EOF the pending question never resolves and Node just exits (verified with kbc_quiz: stopped after the 2nd SUNO, no error, exit 0). *Fix:* one shared readline interface; on EOF, throw "input stream ended".
- **`amitabhc <directory>` crashes with a raw EISDIR stack trace** — `fs.readFileSync` is outside the try/catch. *Fix:* wrap and print a friendly message.
- **Every runtime error prints twice** (once via the interpreter's output callback, once by `runFile`). *Fix:* print in one place.
- **Library use in Node without an input callback falls back to `window.prompt`** → crash. *Fix:* detect Node and fail with a clear message.
- **Web/CLI parity:** editor.html refuses any source containing the substrings `eval(`, `<script`, `javascript:` — even inside string literals (`BOLO "never use eval() kids"` runs in CLI, blocked on web). Scope the check to non-string content or drop it (output is already escaped).

---

## 4. HIGH — PWA / deployment breakage

- **`sw.js` is stuck at v2.0.1** (cache name `amitabhc-v2.0.1`) while everything else is 4.0.0 — returning PWA users keep getting pre-4.0 cached files.
- **Service worker install fails outright:** `cache.addAll(STATIC_ASSETS)` includes `/css/main.css`, `/css/critical.css`, `/js/core.js`, `/js/ui.js`, `/assets/icon-192.png`, `/assets/icon-512.png` — none of these paths exist (icons live at repo root; there is no css/ or js/ dir). One 404 rejects the whole `addAll`, so offline mode is effectively dead.
- **Root-absolute paths break GitHub Pages project hosting.** sw.js caches `/index.html` etc., manifest has `"start_url": "/"`, `"scope": "/"` — but the site is served at `https://jay123anta.github.io/amitabhc/`. Use relative paths (`./index.html`, `"start_url": "./"`).
- **`manifest.json` icons point at `assets/icon-*.png`** but the PNGs are at the repo root; screenshots referenced under `assets/` don't exist; `related_applications` URL is the wrong domain (`amitabhc.github.io`).
- **`pro.html` never registers the service worker** (index and editor do).
- **Dead code in sw.js:** background sync POSTs to `/api/sync-code` (no backend on GitHub Pages) with a stub that returns null.
- **pro.html CDN fallbacks** point at `css/vendor/*` and `js/vendor/*` files that don't exist — the fallback path can never work.
- **deploy.sh is stale:** renames `amitabhc-interpreter.html`/`amitabhc-landing.html` (don't exist), regenerates hello/factorial examples via heredoc (a second source of truth that silently overwrites), and writes a LICENSE with a different copyright line than the repo's actual LICENSE. **DEPLOY.md**'s file diagram omits `interpreter.js`, `docs/`, `bin/`, `tests/`.

---

## 5. MEDIUM — Documentation & spec drift

### 5.1 The esolangs.org wiki page is badly out of date (highest-visibility doc)
The wiki describes a language that no longer matches the implementation:

| Wiki claims | Reality (v4.0.0) |
|---|---|
| `COMPUTER_JI_LOCK_KIYA_JAYE` = **else clause** | It's a flavor/print command; else is `NAHI TOH` |
| Factorial example uses it as else | That example **will not work** on the real interpreter (no else branch runs; also `WAPAS` placement relies on it) |
| Program ends: `BOLO … ACTION` with `DEVIYON_AUR_SAJJANO` as "main function" | `DEVIYON_AUR_SAJJANO` is a greeting print; structure is LIGHTS/CAMERA/…/ACTION |
| Only ~17 keywords listed | No loops, no `SUNO`, no arrays/dicts, no 6 namespaces, no AGNEEPATH/MRITYU, no KBC_SAWAAL switch, no SHAKTI/KAALIA/LAAWARIS |
| `VIJAY`/`DON` described as "hero/antihero character types" | They are variable/constant declarations |

*Fix:* rewrite the wiki page from `docs/LANGUAGE_BIBLE.md` — correct keyword table, working Hello World + factorial (using `NAHI TOH`), link to docs. This is the public face of the language for the esolang community.

### 5.2 Internal doc contradictions (verified against interpreter behavior)
- `docs/cheatsheet.md` documents `BULAAO` as a working call statement; the Bible says "reserved for future use"; the interpreter ignores it silently (§2.4).
- `docs/examples.md` is written to a pre-4.0 spec: example #22 uses `BAAR BAAR rounds` (a variable — rejected at runtime, "BAAR BAAR requires a number!"); a note says "loop variable not accessible", contradicting `_GINTI` / `MEIN i` which work.
- The Bible's grammar says `BAAR BAAR <expression>`, but the implementation only accepts a **digit literal**. Either upgrade the implementation (recommended, see §8) or fix the Bible.
- `INTEZAAR`'s 5000 ms cap / 1000 ms default is documented in api.md but missing from Bible and cheatsheet.
- Keyword-as-identifier rule ("cannot use AmitabhC keywords as names") is documented but unenforced — and official samples violate it: `VIJAY KHAZANA[] = {…}` appears in editor.html's inline example and kbc_quiz, shadowing the KHAZANA namespace.
- interpreter.js keyword set contains `TAB_TAK` (underscore) but the parser matches `TAB TAK` (space) — dead entry. `SHOLAY` is registered as a keyword with no semantics anywhere.

### 5.3 Numbers that don't match reality
- Example counts: version.json says "13 Example Programs", README says "15+", index.html says "16" — actual: **16 files** in `examples/`.
- SHAHENSHAH: Bible/cheatsheet correctly say 19 functions; version.json and interpreter.js header say "20+".
- vscode-extension README says "20+ snippets"; snippets.json has **19**.

### 5.4 Website content bugs
- index.html's demo "Expected Output" shows `Caught: Division by zero!` but the interpreter emits the full dialogue message — the landing-page promise doesn't match real output.
- index.html footer: "API Documentation" links to `version.json` (real `docs/api.md` is never linked); doc links point at raw .md files, which don't render on GitHub Pages (consider linking to GitHub blob URLs or converting to HTML).
- Quick-reference cards: editor.html/pro.html label arrays as "`KHAZANA[]` — Array declaration" (conflating the namespace with `VIJAY arr[] =` syntax); editor.html's switch card omits `SAHI_JAWAB`; pro.html labels NASEEB "Random/Time" (Bible: time only); both cards list only 5 of the 8 KBC commands.
- Hello World drift: README/index terminal mock-up promise `Namaste, Duniya!`; `examples/hello.amitabhc` prints `Naam hai Shahenshah!`.

---

## 6. MEDIUM — Tooling gaps

**VS Code extension** (grammar + language-configuration are present and correct — good):
- `icon.png` referenced in package.json is **missing** → `vsce package` fails. Add one (repo root icons can be reused).
- Extension README's snippet table lists only 15 of 19 prefixes (omits `agaronly`, `zanjeerloop`, `naamwapas`, `agneepathfull`).
- No snippets for `INTEZAAR`, `BADHAO`/`GHATAO`, `DEEWAR`/`SILSILA`, `DEEWAR_JODO`, compound assignment, or any KBC interactive command.

**Editors:**
- pro.html runs CodeMirror in `mode: 'javascript'` while marketing "advanced AmitabhC syntax highlighting". Write a small `CodeMirror.defineSimpleMode('amitabhc', …)` — the keyword list can be generated from the same source as the tmLanguage grammar (see §8, single source of truth).
- Four separate copies of the example corpus exist (examples/, editor.html inline, pro.html virtual files, docs/examples.md) and are already diverging. Generate the embedded ones from `examples/` at build time, or fetch them.

---

## 7. LOW — Code quality & performance

- Dead code in interpreter.js: `this.keywords` set, `allowedOperators`, `lastInputTime`, `globalArrays`/`currentContext.arrays` (written, never read), redundant `=== 'KHATAM' || startsWith('KHATAM')` conditions.
- Deprecated `String.prototype.substr` (2 sites) → `substring`/`slice`.
- Performance: every loop iteration re-parses statement text and re-tokenizes expressions character by character; `await` on every expression node. For an esolang this is acceptable, but a pre-parse pass (parse each line once into a small struct, cache per line number) would give an easy 10–50× on hot loops and remove the `maxLoopIterations` pressure on nested-loop programs (each `JAB TAK` gets 10 000 iterations, so O(n²) algorithms hit the ceiling around n≈100).
- `getVariable` checks locals before constants, so a local can shadow an inherited constant — decide and document.

---

## 8. Suggested execution plan

**Phase 1 — Correctness (do first, ~1–2 days of focused work)**
1. Fix unary operator precedence (§2.1) — add regression tests (`BOLO -5 + 3` → -2, `BOLO !SHAKTI && KAALIA`).
2. Fix KHATAM depth counting across BAAR BAAR / HAR EK / AGNEEPATH (§2.2) — tests for all 6 nesting combinations.
3. Whole-word keyword dispatch (§2.3) — test `VIJAY AGARBATTI`.
4. Unknown statements throw (§2.4); decide `BULAAO` (implement alias or delete from cheatsheet).
5. Split `kbc_quiz.amitabhc` into 3 files; reject/warn on code after ACTION (§2.5).
6. `DEEWAR` outside loop throws (§2.6); nested KBC_SAWAAL (§2.7); single-wrap error messages (§2.8); §2.9 nits.
7. Grow the test suite past 60 with a regression test per bug above (the suite's format already supports this — keep the `// EXPECT:` convention).

**Phase 2 — Ship a working PWA (half a day)**
8. sw.js: bump cache to 4.0.0, remove nonexistent assets (or use resilient per-file caching instead of `addAll`), relative paths.
9. manifest.json: fix icon paths (root, not assets/), remove missing screenshots, fix related_applications, `"start_url": "./"`.
10. Register SW in pro.html; delete `/api/sync-code` dead code; fix/remove pro.html vendor fallbacks.
11. Update deploy.sh + DEPLOY.md to the real file layout; stop regenerating examples in deploy.sh.

**Phase 3 — Docs truth pass (1 day)**
12. **Rewrite the esolangs.org wiki page** from LANGUAGE_BIBLE.md with working examples (§5.1) — highest external visibility.
13. Fix examples.md to v4 semantics; reconcile all counts (16 examples, 19 SHAHENSHAH fns, 19 snippets); align Bible↔cheatsheet↔api.md on BULAAO, INTEZAAR cap, KBC_SAWAAL loose matching.
14. Fix index.html demo expected output, footer links, quick-ref cards; align hello.amitabhc with README.

**Phase 4 — Tooling (1 day)**
15. Add vscode-extension icon.png; update its README; add missing snippets; publish to marketplace if desired.
16. AmitabhC CodeMirror mode for pro.html/editor.html; generate keyword lists from one shared JSON consumed by interpreter, tmLanguage, and CodeMirror mode.
17. CLI fixes (§3): shared readline, EISDIR handling, single error print.
18. Add CI (GitHub Actions: `node tests/run_tests.js` on push) so regressions can't land.

**Phase 5 — Language evolution (v4.1+, optional)**
19. `BAAR BAAR <expression>` (variable loop counts) — examples.md already assumes it.
20. Inline `//` comments (currently only full-line comments work).
21. Chained indexing `arr[i][j]` / `dict["a"]["b"]` (tutorial already implies it).
22. Enforce keywords-as-identifiers rule with a clear error.
23. Consider `COMPUTER_JI_LOCK_KIYA_JAYE` as an accepted alias for `NAHI TOH` — it's the else keyword the wiki (and public perception) already expects, and it's a great KBC gag.
24. A simple pre-parsed AST + per-line cache for performance (§7).

---

## 9. Quick reference — verified fact corrections

For anyone updating docs, the true numbers as of this audit: **16** example programs, **60** tests (all passing), **19** SHAHENSHAH functions, **19** VS Code snippets, **8** KBC interactive commands, **6** namespaces, LICENSE exists (MIT, © 2024 jay123anta), grammar + language-configuration files exist; the only missing extension asset is `icon.png`.
