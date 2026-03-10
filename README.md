# AmitabhC v4.0.0

### "Rishtey mein toh hum tumhare baap lagte hain... lekin code mein, hum Shahenshah hain."

**Code Like the Shahenshah!**

[![Version](https://img.shields.io/badge/Version-4.0.0-gold.svg)](https://jay123anta.github.io/amitabhc)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Tests](https://img.shields.io/badge/Tests-60%20passing-brightgreen.svg)](https://jay123anta.github.io/amitabhc)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![PWA](https://img.shields.io/badge/PWA-Ready-blue.svg)](https://jay123anta.github.io/amitabhc)

**AmitabhC** is a Bollywood-themed esoteric programming language where every keyword is an Amitabh Bachchan film title, dialogue, or character name. Modeled after [ArnoldC](https://lhartikk.github.io/ArnoldC/) (the Arnold Schwarzenegger esolang), AmitabhC brings the drama, power, and swagger of Indian cinema's greatest icon to your code.

Every variable is a **VIJAY**. Every constant is a **DON**. Every error message is an iconic Amitabh dialogue. This is not just a language -- it is a statement.

---

## Quick Examples

### Hello World

```
LIGHTS
CAMERA
    BOLO "Naam hai Shahenshah!"
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

    VIJAY result = factorial(10)
    BOLO "10! = ${result}"
ACTION
```

### Error Handling

```
LIGHTS
CAMERA
    AGNEEPATH
        VIJAY x = 10 / 0
    MRITYU error
        BOLO "Caught: ${error}"
    PRATIGYA
        BOLO "Cleanup complete"
    BAS
ACTION
```

---

## Language Reference

### Program Structure

Every AmitabhC program begins and ends the same way:

```
LIGHTS
CAMERA
    // your code here
ACTION
```

### Variables and Constants

```
VIJAY name = "Amitabh"       // mutable variable
DON PI = 3.14159             // constant (cannot be reassigned)
```

Attempt to reassign a `DON` and you will be told:

> "Main aaj bhi phenke hue paise nahin uthata!"

### Data Types

| Type | Syntax | Example |
|------|--------|---------|
| Number | Literal | `42`, `3.14` |
| String | Double quotes | `"Deewar"` |
| Boolean (true) | `SHAKTI` | `VIJAY alive = SHAKTI` |
| Boolean (false) | `KAALIA` | `VIJAY done = KAALIA` |
| Null | `LAAWARIS` | `VIJAY empty = LAAWARIS` |
| Array | Brackets | `VIJAY films = [1, 2, 3]` |
| Dictionary | `DEEWAR_BANAO` | `VIJAY d = DEEWAR_BANAO("key", val)` |

Strings support escape sequences (`\n`, `\t`, `\\`, `\"`) and interpolation (`"Hello ${name}"`).

### Input / Output

```
BOLO "What is your name?"    // print
SUNO name                    // read input into variable
BOLO "Welcome, ${name}"
```

### Control Flow

**If / Else:**
```
AGAR age >= 18
    BOLO "Allowed"
NAHI TOH
    BOLO "Not allowed"
BAS
```

**Switch (KBC-style):**
```
KBC_SAWAAL choice
    OPTION "A"
        BOLO "Option A selected"
    OPTION "B"
        BOLO "Option B selected"
    SAHI_JAWAB
        BOLO "No match"
AGLE_SAWAAL
```

### Loops

**For loop:**
```
BAAR BAAR 5
    BOLO "Iteration: ${_GINTI}"
KHATAM
```

**While loop:**
```
VIJAY x = 0
JAB TAK x < 10
    BOLO x
    BADHAO x
RAHEGA
```

**Do-While loop:**
```
VIJAY x = 0
ZANJEER_LOOP
    BOLO x
    BADHAO x
TAB TAK x < 5
```

**For-Each loop:**
```
VIJAY films = ["Deewar", "Sholay", "Don"]
HAR EK film MEIN films
    BOLO film
KHATAM
```

**Loop control:** `DEEWAR` (break), `SILSILA` (continue), `_GINTI` (loop counter).

### Functions

```
NAAM add(a, b)
    WAPAS a + b
PURA

VIJAY sum = add(3, 7)
BOLO sum
```

Functions support recursion. Use `WAPAS` to return a value.

### Error Handling

```
AGNEEPATH
    // risky code (try)
MRITYU error
    // handle error (catch)
PRATIGYA
    // always runs (finally)
BAS
```

### Increment / Decrement

```
VIJAY x = 5
BADHAO x       // x is now 6
GHATAO x       // x is now 5 again
```

### Operators

| Category | Operators |
|----------|-----------|
| Arithmetic | `+`, `-`, `*`, `/`, `%` |
| Comparison | `==`, `!=`, `<`, `>`, `<=`, `>=` |
| Logical | `&&`, `\|\|`, `!` |
| Assignment | `+=`, `-=`, `*=`, `/=`, `%=` |

---

## Built-in Namespaces

AmitabhC ships with 6 built-in namespaces, each named after an Amitabh Bachchan film.

### SHAHENSHAH (String)

Named after the 1988 film. String manipulation functions.

```
VIJAY text = "amitabh bachchan"
BOLO SHAHENSHAH.uppercase(text)     // "AMITABH BACHCHAN"
BOLO SHAHENSHAH.length(text)        // 16
BOLO SHAHENSHAH.contains(text, "bach")  // SHAKTI
BOLO SHAHENSHAH.reverse(text)       // "nahccab hbatima"
```

**All methods:** `length`, `uppercase`, `lowercase`, `contains`, `replace`, `trim`, `substring`, `charAt`, `indexOf`, `lastIndexOf`, `split`, `startsWith`, `endsWith`, `repeat`, `reverse`, `padStart`, `padEnd`, `trimStart`, `trimEnd`

### COOLIE (Math)

Named after the 1983 film. Mathematical operations.

```
BOLO COOLIE.sqrt(144)       // 12
BOLO COOLIE.pow(2, 10)      // 1024
BOLO COOLIE.random()         // random number between 0 and 1
BOLO COOLIE.PI               // 3.14159...
```

**All methods:** `abs`, `floor`, `ceil`, `round`, `sqrt`, `pow`, `min`, `max`, `random`, `sin`, `cos`, `tan`, `log`, `PI`, `E`

### KHAZANA (Array)

Named after the treasure theme. Array manipulation.

```
VIJAY arr = [3, 1, 4, 1, 5]
KHAZANA.push(arr, 9)
BOLO KHAZANA.length(arr)     // 6
VIJAY sorted = KHAZANA.sort(arr)
```

**All methods:** `length`, `push`, `pop`, `shift`, `unshift`, `slice`, `join`, `reverse`, `includes`, `indexOf`, `concat`, `sort`

### NASEEB (Time)

Named after the 1981 film. Date and time utilities.

```
BOLO NASEEB.abhi()           // current date-time
BOLO NASEEB.saal()           // current year
BOLO NASEEB.timestamp()      // Unix timestamp
```

**All methods:** `abhi`, `saal`, `mahina`, `din`, `ghanta`, `minute`, `second`, `tarikh`, `waqt`, `timestamp`

### ZANJEER (Type)

Named after the 1973 film. Type checking and conversion.

```
BOLO ZANJEER.type(42)            // "ank"
BOLO ZANJEER.isAnk("hello")     // KAALIA
BOLO ZANJEER.toShabd(123)       // "123"
```

**All methods:** `type`, `isAnk`, `isShabd`, `isKhazana`, `isShaktiKaalia`, `isLaawaris`, `isDeewar`, `toAnk`, `toShabd`, `toShaktiKaalia`

### DEEWAR (Dictionary)

Named after the 1975 film. Dictionary operations.

```
VIJAY d = DEEWAR_BANAO("name", "Vijay", "age", 30)
BOLO DEEWAR.keys(d)
BOLO DEEWAR.hasKey(d, "name")   // SHAKTI
DEEWAR.remove(d, "age")
```

**All methods:** `keys`, `values`, `hasKey`, `remove`, `size`, `merge`

---

## Keyword-to-Film Reference

Every keyword in AmitabhC traces back to an Amitabh Bachchan film, character, or cultural reference.

| Keyword | Film / Reference | Purpose |
|---------|-----------------|---------|
| `VIJAY` | Character (Deewar / Zanjeer / Don) | Mutable variable |
| `DON` | Don (1978) | Constant |
| `SHAKTI` | Shakti (1982) | Boolean true |
| `KAALIA` | Kaalia (1981) | Boolean false |
| `LAAWARIS` | Laawaris (1981) | Null |
| `DEEWAR` | Deewar (1975) | Break / Dict namespace |
| `SILSILA` | Silsila (1981) | Continue |
| `AGNEEPATH` | Agneepath (1990) | Try block |
| `MRITYU` | Death theme | Catch block |
| `PRATIGYA` | Pratigya (vow) | Finally block |
| `NAAM` | Naam (1986) | Function definition |
| `SHAHENSHAH` | Shahenshah (1988) | String namespace |
| `COOLIE` | Coolie (1983) | Math namespace |
| `KHAZANA` | Khazana (treasure) | Array namespace |
| `NASEEB` | Naseeb (1981) | Time namespace |
| `ZANJEER` | Zanjeer (1973) | Type namespace |
| `SHOLAY` | Sholay (1975) | Import (reserved) |

---

## Error Messages

When your code fails, AmitabhC does not whisper. It delivers dialogues.

| Error | Dialogue |
|-------|----------|
| Undefined variable | "Don ko pakadna mushkil hi nahi, naamumkin hai!" |
| Stack overflow | "Deewar bahut oonchi ho gayi!" |
| Constant reassignment | "Main aaj bhi phenke hue paise nahin uthata!" |

---

## KBC Commands

AmitabhC includes commands inspired by Kaun Banega Crorepati, hosted by Amitabh Bachchan himself.

| Command | Purpose |
|---------|---------|
| `DEVIYON_AUR_SAJJANO` | Program greeting / show open |
| `COMPUTER_JI_LOCK_KIYA_JAYE` | Lock / confirm an answer |

---

## How to Run

AmitabhC is entirely browser-based. No installation required.

### Online

- **Basic Editor:** [https://jay123anta.github.io/amitabhc/editor.html](https://jay123anta.github.io/amitabhc/editor.html)
- **Pro IDE (CodeMirror):** [https://jay123anta.github.io/amitabhc/pro.html](https://jay123anta.github.io/amitabhc/pro.html)

Both are available as a Progressive Web App (PWA) -- install it from the browser for offline use.

### Local

```bash
git clone https://github.com/jay123anta/amitabhc.git
cd amitabhc
python -m http.server 8000
# Open http://localhost:8000
```

Or simply open `index.html` in any modern browser.

---

## How AmitabhC Compares

| Feature | AmitabhC | ArnoldC | LOLCODE |
|---------|----------|---------|---------|
| Theme | Amitabh Bachchan films | Schwarzenegger films | Internet meme speak |
| Variables | `VIJAY x = 5` | `DECLARE x` | `I HAS A x ITZ 5` |
| Print | `BOLO "text"` | `TALK TO THE HAND "text"` | `VISIBLE "text"` |
| If | `AGAR ... BAS` | `BECAUSE I'M GOING TO SAY PLEASE` | `O RLY? ... OIC` |
| Functions | `NAAM ... PURA` | N/A | `HOW IZ I ... IF U SAY SO` |
| Error handling | `AGNEEPATH / MRITYU / PRATIGYA` | N/A | N/A |
| Namespaces | 6 built-in (films) | N/A | N/A |
| Booleans | `SHAKTI` / `KAALIA` | N/A | `WIN` / `FAIL` |
| Null | `LAAWARIS` | N/A | `NOOB` |
| Runtime | Browser / PWA | JVM | Interpreter |

AmitabhC has substantially more features than ArnoldC, including functions, error handling, six typed namespaces, dictionaries, multiple loop constructs, and switch statements.

---

## Testing

AmitabhC includes an automated test suite with 60 tests covering all language features.

---

## Contributing

Contributions are welcome. Here is the process:

1. Fork the repository
2. Create a branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

**Areas where contributions are valued:**
- New example programs
- Improved error messages (more Amitabh dialogues)
- Additional namespace methods
- Documentation and tutorials
- Bug reports and fixes

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Inspired by the legendary **Amitabh Bachchan** and his unmatched body of work in Indian cinema
- Modeled after [ArnoldC](https://lhartikk.github.io/ArnoldC/) by Lauri Hartikka
---

*"Aaj khush toh bahut hoge tum... ki tumne AmitabhC mein code kiya."*

Made by [jay123anta](https://github.com/jay123anta)
