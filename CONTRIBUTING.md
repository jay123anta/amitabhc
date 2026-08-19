# Contributing to AmitabhC

*"Rishtey mein toh hum tumhare compiler lagte hain!"*

Thanks for wanting to contribute! AmitabhC is a joke taken completely seriously — the humor only works because the language actually works. Contributions are held to both standards.

## The Golden Rule: Theme Purity

**Every keyword, error message, and dialogue must trace back to Amitabh Bachchan** — his films, his characters, his dialogues, or KBC. Not Bollywood in general. Not another actor's iconic line. (We once shipped an SRK dialogue by accident. Never again.)

When proposing a dialogue, cite the film. Persona-level catchphrases are fine if they're unmistakably his.

## Suggesting a Dialogue or Keyword

This is the most-wanted contribution! Open an issue with this template:

```
**Dialogue / keyword:** (the exact line, in romanized Hindi)
**Film / source:** (film + year, or KBC)
**Maps to:** (which programming concept or error it should become)
**Why it fits:** (one line — the joke should be explainable)
**English gloss:** (translation for non-Hindi speakers)
```

Example of a great mapping: `DON` for constants — *"Main aaj bhi phenke hue paise nahin uthata!"* fires on reassignment, because Don doesn't take what's thrown at him. The semantics ARE the joke. Aim for that.

## Code Contributions

- **No build step, no dependencies.** The interpreter is one file ([interpreter.js](interpreter.js)) of plain browser-compatible JavaScript. Keep it that way.
- **Run the tests:** `node tests/run_tests.js` — all must pass.
- **Add a test** for any behavior change: drop a `.amitabhc` file in `tests/` using the `// TEST:` / `// EXPECT:` / `// EXPECT_ERROR:` convention (see existing tests).
- **Error messages must be in character.** A bare "unexpected token" is a bug even when it's accurate.
- Language spec changes must update [docs/LANGUAGE_BIBLE.md](docs/LANGUAGE_BIBLE.md) in the same PR.

## Pull Request Checklist

- [ ] `node tests/run_tests.js` passes
- [ ] New behavior has a test
- [ ] New dialogues cite their film
- [ ] Docs updated (Bible / cheatsheet / api.md as applicable)
- [ ] No new dependencies, no build tools

## Questions

Open an issue, or try the language first at [jay123anta.github.io/amitabhc](https://jay123anta.github.io/amitabhc).

*"Tu na thakega kabhi, tu na rukega kabhi!"*
