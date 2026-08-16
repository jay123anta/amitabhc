# AmitabhC — Open Items

**Updated:** 2026-08-16 · **Current version:** 4.1.0

The original 2026-07-24 audit (of v4.0.0) is resolved: all interpreter correctness bugs, PWA/service-worker breakage, CLI issues, doc drift, and tooling gaps were fixed in the v4.1.0 release (see the changelog in `version.json`). The esolangs.org wiki page was rewritten from `docs/esolang_wiki_draft.txt` and now matches v4.1.0 (verified live 2026-08-16). Test suite: 75/75 passing, run in CI on every push.

What remains is optional future work.

## Language evolution ideas (v4.2+)

1. **Inline `//` comments** — only full-line comments work today; `VIJAY x = 5 // note` is a parse error.
2. **Chained indexing** — `arr[i][j]` / `dict["a"]["b"]` (the tutorial implies it; not implemented).
3. **`COMPUTER_JI_LOCK_KIYA_JAYE` as an accepted alias for `NAHI TOH`** — it's the else keyword public perception expects, and a great KBC gag. Currently it's a flavor command that prints the answer-locked message.
4. **Performance: pre-parsed AST with a per-line cache** — the interpreter re-parses statement text on every loop iteration. A one-time parse pass would give an easy 10–50× on hot loops and relieve the 10,000-iteration ceiling for O(n²) programs.

## Housekeeping (low priority)

- **Example corpus exists in several copies** (`examples/`, editor.html inline demos, pro.html virtual files, `docs/examples.md`) and can drift. Consider generating the embedded copies from `examples/` or accepting the duplication deliberately.
- `getVariable` lets a local shadow an inherited constant — decide whether that's intended and document it in the Language Bible.
