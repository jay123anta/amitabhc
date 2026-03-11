# AmitabhC

### The Bollywood Programming Language

*"Rishtey mein toh hum tumhare compiler lagte hain!"*

[![Version](https://img.shields.io/badge/version-4.0.0-gold.svg)](https://jay123anta.github.io/amitabhc)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-60%20passing-brightgreen.svg)](tests/)
[![npm](https://img.shields.io/badge/npm-amitabhc-red.svg)](https://www.npmjs.com/package/amitabhc)

**AmitabhC** is an esoteric programming language where every keyword is an **Amitabh Bachchan** film, character, or dialogue. Variables are VIJAY. Constants are DON. Errors are iconic dialogues. This isn't just a language — it's a statement.

---

## Install

```bash
npm install -g amitabhc
```

## Run

```bash
amitabhc run hello.amitabhc
amitabhc repl                    # Interactive mode
amitabhc examples                # List examples
amitabhc test                    # Run 60 tests
```

Or use the **web playground** — no install needed:
- [Basic Editor](https://jay123anta.github.io/amitabhc/editor.html)
- [Pro IDE](https://jay123anta.github.io/amitabhc/pro.html)

---

## Hello World

```
LIGHTS
CAMERA
    BOLO "Namaste, Duniya!"
ACTION
```

## More Examples

### Variables, Strings, Loops

```
LIGHTS
CAMERA
    VIJAY hero = "Amitabh"
    DON FILMS = 200

    BOLO "Star: ${hero}, Films: ${FILMS}"

    VIJAY top[] = {"Deewar", "Sholay", "Don", "Agneepath"}
    HAR EK film MEIN top
        BOLO "  ${film}"
    KHATAM
ACTION
```

### Functions with Recursion

```
LIGHTS
CAMERA
    NAAM factorial(n)
        AGAR n <= 1
            WAPAS 1
        BAS
        WAPAS n * factorial(n - 1)
    PURA

    BOLO "10! = ${factorial(10)}"
ACTION
```

### Error Handling

```
LIGHTS
CAMERA
    AGNEEPATH
        VIJAY x = 10 / 0
    MRITYU err
        BOLO "Caught: ${err}"
    PRATIGYA
        BOLO "Cleanup done"
    KHATAM
ACTION
```

### Switch-Case (KBC Style)

```
LIGHTS
CAMERA
    VIJAY grade = "A"
    KBC_SAWAAL grade
        OPTION "A"
            BOLO "Excellent!"
        OPTION "B"
            BOLO "Good"
        SAHI_JAWAB
            BOLO "Keep trying"
    AGLE_SAWAAL
ACTION
```

---

## Language at a Glance

```
PROGRAM:    LIGHTS ... CAMERA ... ACTION
VARIABLE:   VIJAY x = 10
CONSTANT:   DON PI = 3.14
ARRAY:      VIJAY a[] = {1, 2, 3}
DICT:       VIJAY d = DEEWAR_BANAO{"k": "v"}
PRINT:      BOLO "text"
INPUT:      SUNO variable
IF:         AGAR cond ... NAHI TOH ... BAS
FOR:        BAAR BAAR N MEIN i ... KHATAM
WHILE:      JAB TAK cond ... RAHEGA
DO-WHILE:   ZANJEER_LOOP ... TAB TAK cond
FOR-EACH:   HAR EK x MEIN arr ... KHATAM
FUNCTION:   NAAM f(a, b) ... WAPAS val ... PURA
TRY-CATCH:  AGNEEPATH ... MRITYU e ... PRATIGYA ... KHATAM
SWITCH:     KBC_SAWAAL val ... OPTION x ... SAHI_JAWAB ... AGLE_SAWAAL
BREAK:      DEEWAR
CONTINUE:   SILSILA
TRUE:       SHAKTI
FALSE:      KAALIA
NULL:       LAAWARIS
```

---

## Built-in Namespaces

6 namespaces, each named after an Amitabh Bachchan film:

| Namespace | Film | Purpose | Methods |
|-----------|------|---------|---------|
| **SHAHENSHAH** | Shahenshah (1988) | Strings | `length`, `uppercase`, `lowercase`, `contains`, `replace`, `trim`, `split`, `reverse`, `repeat`, ... (19 total) |
| **COOLIE** | Coolie (1983) | Math | `abs`, `floor`, `ceil`, `round`, `sqrt`, `pow`, `min`, `max`, `random`, `sin`, `cos`, `tan`, `log`, `PI`, `E` |
| **KHAZANA** | Treasure | Arrays | `length`, `push`, `pop`, `shift`, `unshift`, `slice`, `join`, `reverse`, `includes`, `indexOf`, `concat`, `sort` |
| **NASEEB** | Naseeb (1981) | Time | `abhi`, `saal`, `mahina`, `din`, `ghanta`, `minute`, `second`, `tarikh`, `waqt`, `timestamp` |
| **ZANJEER** | Zanjeer (1973) | Types | `type`, `isAnk`, `isShabd`, `isKhazana`, `isShaktiKaalia`, `isLaawaris`, `isDeewar`, `toAnk`, `toShabd`, `toShaktiKaalia` |
| **DEEWAR** | Deewar (1975) | Dicts | `keys`, `values`, `hasKey`, `remove`, `size`, `merge` |

---

## Error Messages

When your code fails, AmitabhC delivers Amitabh dialogues:

| Error | Dialogue |
|-------|----------|
| Undefined variable | *"Don ko pakadna mushkil hi nahi, naamumkin hai!"* |
| Stack overflow | *"Deewar bahut oonchi ho gayi!"* |
| Division by zero | *"Zero se divide kaise kar sakte hain?"* |
| Constant reassignment | *"Main aaj bhi phenke hue paise nahin uthata!"* |
| Type mismatch | *"Aaj mere paas type hai, tumhare paas kya hai?"* |
| Array out of bounds | *"Hum jahan khade hote hain, line wahi se shuru hoti hai!"* |

---

## How AmitabhC Compares

| Feature | AmitabhC | ArnoldC | LOLCODE |
|---------|----------|---------|---------|
| Theme | Amitabh Bachchan | Schwarzenegger | Internet memes |
| Variables | `VIJAY x = 5` | `DECLARE x` | `I HAS A x ITZ 5` |
| Print | `BOLO "text"` | `TALK TO THE HAND "text"` | `VISIBLE "text"` |
| Functions | `NAAM ... PURA` | N/A | `HOW IZ I ... IF U SAY SO` |
| Error handling | `AGNEEPATH / MRITYU` | N/A | N/A |
| Namespaces | 6 built-in | N/A | N/A |
| Dictionaries | `DEEWAR_BANAO{...}` | N/A | N/A |
| Switch-case | `KBC_SAWAAL` | N/A | N/A |
| Do-while | `ZANJEER_LOOP` | N/A | N/A |
| Runtime | Browser + Node.js CLI | JVM | Interpreter |

---

## VS Code Extension

Syntax highlighting and 20+ snippets for `.amitabhc` files. See [vscode-extension/](vscode-extension/).

---

## Documentation

- **[Language Bible](docs/LANGUAGE_BIBLE.md)** — Complete specification
- **[Tutorial](docs/tutorial.md)** — Step-by-step learning guide
- **[Cheat Sheet](docs/cheatsheet.md)** — Quick reference
- **[API Reference](docs/api.md)** — All functions documented
- **[Examples](docs/examples.md)** — 15+ example programs

---

## Testing

```bash
npm test                  # or
node tests/run_tests.js
```

60 tests covering all language features.

---

## Contributing

1. Fork the repository
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a Pull Request

**Valued contributions:** new examples, more Amitabh error dialogues, additional namespace methods, docs, bug fixes.

---

## License

MIT License. See [LICENSE](LICENSE).

---

*"Aaj khush toh bahut hoge tum... ki tumne AmitabhC mein code kiya."*

Made by [jay123anta](https://github.com/jay123anta)
