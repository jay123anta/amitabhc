# AmitabhC — Open Items

**Updated:** 2026-10-09 · **Current version:** 4.3.1

The original 2026-07-24 audit (of v4.0.0) is resolved: all interpreter correctness bugs, PWA/service-worker breakage, CLI issues, doc drift, and tooling gaps were fixed in the v4.1.0 release (see the changelog in `version.json`). The esolangs.org wiki page was rewritten from `docs/esolang_wiki_draft.txt` and now matches v4.1.0 (verified live 2026-08-16). Inline `//` comments shipped in v4.2.0 and the Janamdin (birthday) edition in v4.3.0. Test suite: 76/76 language tests plus 34 Janamdin tests, run in CI on every push.

What remains is optional future work.

## Language evolution ideas

1. **Chained indexing** — `arr[i][j]` / `dict["a"]["b"]` (the tutorial implies it; not implemented).
2. **`COMPUTER_JI_LOCK_KIYA_JAYE` as an accepted alias for `NAHI TOH`** — it's the else keyword public perception expects, and a great KBC gag. Currently it's a flavor command that prints the answer-locked message.
3. **Performance: pre-parsed AST with a per-line cache** — the interpreter re-parses statement text on every loop iteration. A one-time parse pass would give an easy 10–50× on hot loops and relieve the 10,000-iteration ceiling for O(n²) programs.

## Housekeeping (low priority)

- **Example corpus exists in several copies** (`examples/`, editor.html inline demos, pro.html virtual files, `docs/examples.md`) and can drift. Consider generating the embedded copies from `examples/` or accepting the duplication deliberately. (The Janamdin wish already does this the safe way: `birthday.js` embeds it and a test checks it against `examples/janamdin.amitabhc`.)
- `getVariable` lets a local shadow an inherited constant — decide whether that's intended and document it in the Language Bible.
- **Pro IDE on phones** — the wrapped header (about 268px tall) lies over the top of the editor, and the grid is wider than the screen on tablets, so the Settings button is off screen at 1024px. A fix tried in v4.3.0 (letting the header row grow) hid the output console on short phones and was reverted in v4.3.1. It needs a compact phone header or a workspace that scrolls.
