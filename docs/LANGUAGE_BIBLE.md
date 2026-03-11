# AmitabhC Language Bible

**The Complete & Authoritative Specification of AmitabhC v4.0.0**

*"Rishtey mein toh hum tumhare compiler lagte hain!"*

---

## Table of Contents

1. [Philosophy & Origins](#1-philosophy--origins)
2. [Program Structure](#2-program-structure)
3. [Data Types](#3-data-types)
4. [Variables & Constants](#4-variables--constants)
5. [Operators](#5-operators)
6. [Input & Output](#6-input--output)
7. [Conditionals](#7-conditionals)
8. [Loops](#8-loops)
9. [Functions](#9-functions)
10. [Error Handling](#10-error-handling)
11. [Switch-Case (KBC)](#11-switch-case-kbc)
12. [Arrays](#12-arrays)
13. [Dictionaries](#13-dictionaries)
14. [Built-in Namespaces](#14-built-in-namespaces)
15. [String Interpolation](#15-string-interpolation)
16. [KBC Interactive Commands](#16-kbc-interactive-commands)
17. [Keyword–Film Reference Map](#17-keywordfilm-reference-map)
18. [Error Messages (Iconic Dialogues)](#18-error-messages-iconic-dialogues)
19. [Execution Limits & Security](#19-execution-limits--security)
20. [Grammar Summary (BNF-like)](#20-grammar-summary-bnf-like)

---

## 1. Philosophy & Origins

AmitabhC is an **esoteric programming language** where every keyword, namespace, and error message is derived from the filmography, characters, and iconic dialogues of **Amitabh Bachchan** — the greatest actor in Indian cinema history.

It follows the pattern established by ArnoldC (Arnold Schwarzenegger) but goes further by mapping the entire language to a single actor's body of work spanning 50+ years and 200+ films.

**Design Principles:**

- Every keyword MUST trace back to an Amitabh Bachchan film, character, dialogue, or cultural reference
- The language must be functionally complete — not a toy, but a real programming language
- Error messages are iconic Amitabh dialogues that match the error context
- Hindi/Urdu words are used where they naturally map to programming concepts
- The language is case-sensitive — all keywords are UPPERCASE

**Creator:** jay123anta (Anupam Kakati)

---

## 2. Program Structure

Every AmitabhC program follows a film set metaphor:

```
LIGHTS        ← Set is ready (program header)
CAMERA        ← Start rolling (begin executable code)
  ...         ← Your code here
ACTION        ← That's a wrap (end program)
```

| Keyword  | Role              | Metaphor                          |
|----------|-------------------|-----------------------------------|
| `LIGHTS` | Program start     | Lights are set up on a film set   |
| `CAMERA` | Code block begins | Camera starts rolling             |
| `ACTION` | Program ends      | Director calls "Action!" — cut    |

**Rules:**
- `LIGHTS` must be the first non-empty, non-comment line
- `CAMERA` must follow `LIGHTS` (with or without blank lines between)
- `ACTION` must be the last statement
- Code outside `CAMERA...ACTION` is ignored
- Comments start with `//` and extend to end of line

**Minimal valid program:**
```
LIGHTS
CAMERA
ACTION
```

---

## 3. Data Types

AmitabhC has 7 data types:

| Type         | AmitabhC Name    | Literal Syntax                 | Example                        |
|--------------|------------------|--------------------------------|--------------------------------|
| Number       | `ank`            | Integer or decimal             | `42`, `3.14`, `-10`, `0`       |
| String       | `shabd`          | Double or single quotes        | `"Hello"`, `'World'`           |
| Boolean true | `shakti_kaalia`  | `SHAKTI`                       | `VIJAY alive = SHAKTI`         |
| Boolean false| `shakti_kaalia`  | `KAALIA`                       | `VIJAY done = KAALIA`          |
| Null         | `laawaris`       | `LAAWARIS`                     | `VIJAY empty = LAAWARIS`       |
| Array        | `khazana`        | Curly braces with commas       | `{1, 2, 3}`, `{"a", "b"}`     |
| Dictionary   | `deewar`         | `DEEWAR_BANAO{...}`           | `DEEWAR_BANAO{"k": "v"}`      |

### Type Names (as returned by `ZANJEER.type()`)

| JavaScript Type | AmitabhC Type Name | Film/Hindi Reference         |
|-----------------|--------------------|-----------------------------|
| number          | `ank`              | Hindi: "digit/number"       |
| string          | `shabd`            | Hindi: "word"               |
| boolean         | `shakti_kaalia`    | Shakti (true) / Kaalia (false) |
| array           | `khazana`          | "treasure" (collection)     |
| object/dict     | `deewar`           | "wall" (structured)         |
| null            | `laawaris`         | "orphan" (nothing)          |
| unknown         | `anjaan`           | "stranger" (unknown)        |

### String Escape Sequences

| Sequence | Produces     |
|----------|-------------|
| `\n`     | Newline      |
| `\t`     | Tab          |
| `\\`     | Backslash    |
| `\"`     | Double quote |
| `\'`     | Single quote |
| `\r`     | Carriage return |

---

## 4. Variables & Constants

### Variables (`VIJAY`)

Named after Vijay — the character name Amitabh played in Deewar (1975), Agneepath (1990), Don (1978), and many other films.

```
VIJAY name = "Amitabh"
VIJAY age = 81
VIJAY isLegend = SHAKTI
VIJAY scores[] = {100, 95, 88}
```

**Rules:**
- Identifiers must start with a letter or underscore: `[a-zA-Z_]`
- Followed by letters, digits, or underscores: `[a-zA-Z0-9_]*`
- Case-sensitive
- Cannot use reserved words or AmitabhC keywords as names
- Arrays declared with `[]` suffix: `VIJAY arr[] = {1, 2, 3}`

### Constants (`DON`)

Named after Don (1978) — immutable, untouchable, like Don himself.

```
DON PI = 3.14159
DON GRAVITY = 9.8
DON GREETING = "Namaste"
```

**Rules:**
- Cannot be reassigned after declaration
- Attempting reassignment throws: *"Main aaj bhi phenke hue paise nahin uthata!"* (from Deewar — "I still don't pick up thrown money")

### Bare Reassignment

Variables can be reassigned without the `VIJAY` prefix:

```
VIJAY x = 10
x = 20          // Valid — reassigns x to 20
x += 5          // Valid — compound assignment
```

### Increment & Decrement

| Keyword   | Operation      | Hindi Meaning | Example        |
|-----------|---------------|---------------|----------------|
| `BADHAO`  | Increment by 1 | "Increase"    | `BADHAO count` |
| `GHATAO`  | Decrement by 1 | "Decrease"    | `GHATAO count` |

---

## 5. Operators

### Arithmetic

| Operator | Operation               | Example              | Result |
|----------|------------------------|----------------------|--------|
| `+`      | Addition / Concatenation | `10 + 5`, `"a" + "b"` | `15`, `"ab"` |
| `-`      | Subtraction             | `10 - 3`             | `7`    |
| `*`      | Multiplication          | `4 * 5`              | `20`   |
| `/`      | Division                | `20 / 4`             | `5`    |
| `%`      | Modulo                  | `10 % 3`             | `1`    |

### Comparison

| Operator | Meaning            | Example     | Result   |
|----------|--------------------|-------------|----------|
| `==`     | Equal              | `5 == 5`    | `SHAKTI` |
| `!=`     | Not equal           | `5 != 3`    | `SHAKTI` |
| `<`      | Less than           | `3 < 5`     | `SHAKTI` |
| `>`      | Greater than        | `5 > 3`     | `SHAKTI` |
| `<=`     | Less than or equal  | `5 <= 5`    | `SHAKTI` |
| `>=`     | Greater than or equal| `5 >= 3`   | `SHAKTI` |

### Logical

| Operator | Meaning     | Example                | Result   |
|----------|-------------|------------------------|----------|
| `&&`     | Logical AND | `SHAKTI && KAALIA`     | `KAALIA` |
| `\|\|`   | Logical OR  | `SHAKTI \|\| KAALIA`   | `SHAKTI` |
| `!`      | Logical NOT | `!SHAKTI`              | `KAALIA` |

### Compound Assignment

| Operator | Equivalent       | Example  |
|----------|-----------------|----------|
| `+=`     | `x = x + value` | `x += 5` |
| `-=`     | `x = x - value` | `x -= 3` |
| `*=`     | `x = x * value` | `x *= 2` |
| `/=`     | `x = x / value` | `x /= 4` |
| `%=`     | `x = x % value` | `x %= 3` |

### Operator Precedence (lowest to highest)

1. `||` — Logical OR
2. `&&` — Logical AND
3. `==`, `!=` — Equality
4. `<`, `>`, `<=`, `>=` — Comparison
5. `+`, `-` — Addition, Subtraction
6. `*`, `/`, `%` — Multiplication, Division, Modulo
7. `!`, unary `-` — Unary operators

---

## 6. Input & Output

### Output: `BOLO` ("Speak")

```
BOLO "Hello, Duniya!"              // Print string
BOLO 42                             // Print number
BOLO "Sum = " + (10 + 20)          // Print expression
BOLO "Name: ${name}"               // Print with interpolation
```

Output goes to the console/output panel. Each `BOLO` prints on a new line.

### Input: `SUNO` ("Listen")

```
SUNO answer                         // Prompts user, stores in 'answer'
```

- Prompts the user with a dialog/input box
- Stores the entered value as a string in the variable
- The variable is created if it doesn't exist
- Use `ZANJEER.toAnk()` to convert to number: `VIJAY num = ZANJEER.toAnk(answer)`

### Wait: `INTEZAAR` ("Wait")

```
INTEZAAR 1000                       // Pause execution for 1000 milliseconds
```

---

## 7. Conditionals

### If-Else: `AGAR / NAHI TOH / BAS`

| Keyword        | Role      | Hindi Meaning              |
|----------------|-----------|---------------------------|
| `AGAR`         | if        | "If"                      |
| `NAHI TOH`     | else      | "Otherwise"               |
| `NAHI TOH AGAR`| else-if   | "Otherwise if"            |
| `BAS`          | end block | "Enough" / "That's it"    |

**Syntax:**
```
AGAR condition
    // code if true
BAS

AGAR condition
    // code if true
NAHI TOH
    // code if false
BAS

AGAR condition1
    // code
NAHI TOH AGAR condition2
    // code
NAHI TOH
    // default code
BAS
```

**Example:**
```
VIJAY age = 25

AGAR age >= 18
    BOLO "You can vote!"
NAHI TOH AGAR age >= 13
    BOLO "Teenager"
NAHI TOH
    BOLO "Child"
BAS
```

**Rules:**
- Every `AGAR` must have a matching `BAS`
- `NAHI TOH` and `NAHI TOH AGAR` are optional
- Conditions are evaluated as truthy/falsy
- Blocks can be nested

---

## 8. Loops

### 8.1 For Loop: `BAAR BAAR` ("Again and Again")

```
BAAR BAAR N
    // repeats N times, counter available as _GINTI (0-based)
KHATAM

BAAR BAAR N MEIN i
    // repeats N times, counter available as i (0-based)
KHATAM
```

| Keyword     | Role           | Reference                    |
|-------------|----------------|------------------------------|
| `BAAR BAAR` | For loop       | Hindi: "again and again"     |
| `MEIN`      | Counter name   | Hindi: "in"                  |
| `_GINTI`    | Default counter| Hindi: "counting" (auto var) |
| `KHATAM`    | End loop       | Hindi: "finished"            |

**Example:**
```
BAAR BAAR 5 MEIN i
    BOLO "Iteration: ${i}"
KHATAM
// Prints 0, 1, 2, 3, 4
```

### 8.2 While Loop: `JAB TAK ... RAHEGA` ("As long as ... will remain")

```
JAB TAK condition
    // code
RAHEGA
```

**Example:**
```
VIJAY count = 0
JAB TAK count < 5
    BOLO count
    BADHAO count
RAHEGA
```

### 8.3 Do-While Loop: `ZANJEER_LOOP ... TAB TAK`

Named after Zanjeer (1973) — the chains that keep you looping.

```
ZANJEER_LOOP
    // code (executes at least once)
TAB TAK condition
```

**Example:**
```
VIJAY x = 0
ZANJEER_LOOP
    BOLO x
    BADHAO x
TAB TAK x < 3
```

### 8.4 For-Each Loop: `HAR EK ... MEIN` ("Each one ... in")

```
HAR EK item MEIN array
    // code using item
KHATAM
```

**Example:**
```
VIJAY names[] = {"Vijay", "Jai", "Don"}
HAR EK naam MEIN names
    BOLO "Hero: ${naam}"
KHATAM
```

### 8.5 Loop Control

| Keyword   | Role     | Film Reference                            |
|-----------|----------|-------------------------------------------|
| `DEEWAR`  | Break    | Deewar (1975) — "the wall" stops you      |
| `SILSILA` | Continue | Silsila (1981) — "the sequence" continues |

**Example:**
```
BAAR BAAR 10 MEIN i
    AGAR i == 5
        DEEWAR          // breaks out of loop at i=5
    BAS
    AGAR i % 2 == 0
        SILSILA         // skip even numbers
    BAS
    BOLO i
KHATAM
```

---

## 9. Functions

### Definition: `NAAM ... PURA` ("Name ... Complete")

Named after Naam (1986). A function is a named block of reusable code.

```
NAAM functionName(param1, param2)
    // function body
    WAPAS value           // optional return
PURA
```

| Keyword | Role             | Hindi Meaning          |
|---------|------------------|------------------------|
| `NAAM`  | Define function  | "Name" (film: Naam)    |
| `PURA`  | End function     | "Complete"             |
| `WAPAS` | Return value     | "Return" / "Come back" |

**Example:**
```
NAAM add(a, b)
    WAPAS a + b
PURA

VIJAY result = add(10, 20)
BOLO result               // Output: 30
```

**Rules:**
- Functions must be defined before they are called
- Functions can take 0 or more parameters
- `WAPAS` is optional — functions without it return `LAAWARIS` (null)
- Functions have their own scope — local variables don't leak out
- Max 100 function definitions per program
- Max 100 call depth (recursion limit)
- Functions can call other functions and themselves (recursion)

**Recursion example:**
```
NAAM factorial(n)
    AGAR n <= 1
        WAPAS 1
    BAS
    WAPAS n * factorial(n - 1)
PURA

BOLO factorial(5)         // Output: 120
```

---

## 10. Error Handling

### Try-Catch-Finally: `AGNEEPATH / MRITYU / PRATIGYA`

Named after the poetic metaphor of life's journey:

| Keyword     | Role    | Film/Meaning                                   |
|-------------|---------|------------------------------------------------|
| `AGNEEPATH` | try     | Agneepath (1990) — "the path of fire" (risky)  |
| `MRITYU`    | catch   | "Death" — what catches you when you fall        |
| `PRATIGYA`  | finally | Pratigya — "vow/promise" (always executed)     |
| `KHATAM`    | end     | "Finished"                                      |

**Syntax:**
```
AGNEEPATH
    // risky code
MRITYU errorVariable
    // error handling code
PRATIGYA
    // always runs (optional)
KHATAM
```

**Example:**
```
AGNEEPATH
    VIJAY result = 10 / 0
MRITYU err
    BOLO "Caught: " + err
PRATIGYA
    BOLO "Cleanup done"
KHATAM
```

**Rules:**
- `AGNEEPATH` requires at least `MRITYU`
- `PRATIGYA` is optional
- The error variable in `MRITYU` receives the error message as a string
- `KHATAM` closes the entire try-catch-finally block

---

## 11. Switch-Case (KBC)

### `KBC_SAWAAL / OPTION / SAHI_JAWAB / AGLE_SAWAAL`

Named after **Kaun Banega Crorepati** — the quiz show hosted by Amitabh Bachchan.

| Keyword        | Role    | KBC Meaning                        |
|----------------|---------|------------------------------------|
| `KBC_SAWAAL`   | switch  | "KBC Question" — the question      |
| `OPTION`       | case    | "Option A/B/C/D" — answer choice   |
| `SAHI_JAWAB`   | default | "Correct answer" — fallback        |
| `AGLE_SAWAAL`  | end     | "Next question" — move on          |

**Syntax:**
```
KBC_SAWAAL expression
    OPTION value1
        // code for value1
    OPTION value2
        // code for value2
    SAHI_JAWAB
        // default code
AGLE_SAWAAL
```

**Example:**
```
VIJAY grade = "A"

KBC_SAWAAL grade
    OPTION "A"
        BOLO "Excellent!"
    OPTION "B"
        BOLO "Good"
    OPTION "C"
        BOLO "Average"
    SAHI_JAWAB
        BOLO "Unknown grade"
AGLE_SAWAAL
```

**Rules:**
- `KBC_SAWAAL` must end with `AGLE_SAWAAL` (NOT `KHATAM`)
- Each `OPTION` matches using `==` equality
- `SAHI_JAWAB` is the default (optional, runs if no OPTION matches)
- Only the first matching OPTION executes (implicit break)
- Options can be numbers, strings, or boolean values

---

## 12. Arrays

### Declaration

```
VIJAY fruits[] = {"apple", "banana", "mango"}
VIJAY numbers[] = {1, 2, 3, 4, 5}
VIJAY empty[] = {}
VIJAY mixed[] = {1, "hello", SHAKTI, LAAWARIS}
```

### Access & Assignment

```
BOLO fruits[0]              // "apple" (0-indexed)
fruits[1] = "kiwi"          // Replace "banana" with "kiwi"
```

### Array Namespace: `KHAZANA` ("Treasure")

| Function    | Signature                       | Returns | Description              |
|-------------|--------------------------------|---------|--------------------------|
| `length`    | `KHAZANA.length(arr)`          | Number  | Number of elements       |
| `push`      | `KHAZANA.push(arr, value)`     | Array   | Append element (mutates) |
| `pop`       | `KHAZANA.pop(arr)`             | Any     | Remove & return last     |
| `shift`     | `KHAZANA.shift(arr)`           | Any     | Remove & return first    |
| `unshift`   | `KHAZANA.unshift(arr, value)`  | Array   | Prepend element (mutates)|
| `slice`     | `KHAZANA.slice(arr, start, end)` | Array | Extract subarray (new)   |
| `join`      | `KHAZANA.join(arr, separator)` | String  | Join into string         |
| `reverse`   | `KHAZANA.reverse(arr)`         | Array   | New reversed array       |
| `includes`  | `KHAZANA.includes(arr, value)` | Boolean | Contains element?        |
| `indexOf`   | `KHAZANA.indexOf(arr, value)`  | Number  | First index (-1 if none) |
| `concat`    | `KHAZANA.concat(arr1, arr2)`   | Array   | Merge arrays (new)       |
| `sort`      | `KHAZANA.sort(arr)`            | Array   | New sorted array         |

**Example:**
```
VIJAY heroes[] = {"Vijay", "Jai"}
KHAZANA.push(heroes, "Don")
BOLO KHAZANA.length(heroes)     // 3
BOLO KHAZANA.join(heroes, ", ") // "Vijay, Jai, Don"
```

---

## 13. Dictionaries

### Creation: `DEEWAR_BANAO` ("Build a Wall")

```
VIJAY hero = DEEWAR_BANAO{"name": "Vijay", "age": 30, "legend": SHAKTI}
```

### Access & Assignment

```
BOLO hero["name"]               // "Vijay"
hero["age"] = 31                // Update value
```

### Adding entries: `DEEWAR_JODO` ("Join the Wall")

```
DEEWAR_JODO hero "city" "Mumbai"
```

### Dictionary Namespace: `DEEWAR`

| Function  | Signature                      | Returns    | Description               |
|-----------|-------------------------------|------------|---------------------------|
| `keys`    | `DEEWAR.keys(dict)`           | Array      | All keys                  |
| `values`  | `DEEWAR.values(dict)`         | Array      | All values                |
| `hasKey`  | `DEEWAR.hasKey(dict, key)`    | Boolean    | Key exists?               |
| `remove`  | `DEEWAR.remove(dict, key)`    | Any        | Remove & return value     |
| `size`    | `DEEWAR.size(dict)`           | Number     | Number of entries         |
| `merge`   | `DEEWAR.merge(dict1, dict2)`  | Dictionary | New merged dictionary     |

**Example:**
```
VIJAY movie = DEEWAR_BANAO{"title": "Deewar", "year": 1975}
BOLO DEEWAR.keys(movie)         // ["title", "year"]
BOLO DEEWAR.size(movie)         // 2
DEEWAR_JODO movie "director" "Yash Chopra"
BOLO DEEWAR.hasKey(movie, "director")  // SHAKTI
```

---

## 14. Built-in Namespaces

Every namespace is an Amitabh Bachchan film.

### 14.1 COOLIE — Math (Film: Coolie, 1983)

The hardworking number cruncher.

| Function | Signature              | Returns | Description                  |
|----------|------------------------|---------|------------------------------|
| `abs`    | `COOLIE.abs(x)`        | Number  | Absolute value               |
| `floor`  | `COOLIE.floor(x)`      | Number  | Round down                   |
| `ceil`   | `COOLIE.ceil(x)`       | Number  | Round up                     |
| `round`  | `COOLIE.round(x)`      | Number  | Round to nearest integer     |
| `sqrt`   | `COOLIE.sqrt(x)`       | Number  | Square root (x must be >= 0) |
| `pow`    | `COOLIE.pow(base, exp)` | Number | Exponentiation               |
| `min`    | `COOLIE.min(a, b, ...)` | Number | Minimum value                |
| `max`    | `COOLIE.max(a, b, ...)` | Number | Maximum value                |
| `random` | `COOLIE.random()`      | Number  | Random float in [0, 1)       |
| `sin`    | `COOLIE.sin(x)`        | Number  | Sine (radians)               |
| `cos`    | `COOLIE.cos(x)`        | Number  | Cosine (radians)             |
| `tan`    | `COOLIE.tan(x)`        | Number  | Tangent (radians)            |
| `log`    | `COOLIE.log(x)`        | Number  | Natural logarithm (x > 0)   |
| `PI`     | `COOLIE.PI()`          | Number  | 3.141592653589793            |
| `E`      | `COOLIE.E()`           | Number  | 2.718281828459045            |

**Random number in range:**
```
// Random integer between 1 and 100:
VIJAY roll = COOLIE.floor(COOLIE.random() * 100) + 1
```

### 14.2 SHAHENSHAH — Strings (Film: Shahenshah, 1988)

The emperor of text manipulation.

| Function      | Signature                                  | Returns | Description                    |
|---------------|--------------------------------------------|---------|--------------------------------|
| `length`      | `SHAHENSHAH.length(str)`                   | Number  | String length                  |
| `uppercase`   | `SHAHENSHAH.uppercase(str)`                | String  | Convert to UPPERCASE           |
| `lowercase`   | `SHAHENSHAH.lowercase(str)`                | String  | Convert to lowercase           |
| `contains`    | `SHAHENSHAH.contains(str, search)`         | Boolean | Contains substring?            |
| `replace`     | `SHAHENSHAH.replace(str, old, new)`        | String  | Replace all occurrences        |
| `trim`        | `SHAHENSHAH.trim(str)`                     | String  | Remove leading/trailing spaces |
| `trimStart`   | `SHAHENSHAH.trimStart(str)`                | String  | Remove leading spaces          |
| `trimEnd`     | `SHAHENSHAH.trimEnd(str)`                  | String  | Remove trailing spaces         |
| `substring`   | `SHAHENSHAH.substring(str, start, end?)`   | String  | Extract substring              |
| `charAt`      | `SHAHENSHAH.charAt(str, index)`            | String  | Character at position          |
| `indexOf`     | `SHAHENSHAH.indexOf(str, search)`          | Number  | First index (-1 if none)       |
| `lastIndexOf` | `SHAHENSHAH.lastIndexOf(str, search)`      | Number  | Last index (-1 if none)        |
| `split`       | `SHAHENSHAH.split(str, delimiter)`         | Array   | Split into array               |
| `startsWith`  | `SHAHENSHAH.startsWith(str, prefix)`       | Boolean | Starts with prefix?            |
| `endsWith`    | `SHAHENSHAH.endsWith(str, suffix)`         | Boolean | Ends with suffix?              |
| `repeat`      | `SHAHENSHAH.repeat(str, count)`            | String  | Repeat N times (max 1000)      |
| `reverse`     | `SHAHENSHAH.reverse(str)`                  | String  | Reverse the string             |
| `padStart`    | `SHAHENSHAH.padStart(str, length, char?)`  | String  | Pad start to target length     |
| `padEnd`      | `SHAHENSHAH.padEnd(str, length, char?)`    | String  | Pad end to target length       |

### 14.3 NASEEB — Time/Date (Film: Naseeb, 1981)

Destiny controls time.

| Function    | Signature            | Returns | Description              |
|-------------|----------------------|---------|--------------------------|
| `abhi`      | `NASEEB.abhi()`      | Number  | Current epoch (ms)       |
| `saal`      | `NASEEB.saal()`      | Number  | Current year             |
| `mahina`    | `NASEEB.mahina()`    | Number  | Current month (1–12)     |
| `din`       | `NASEEB.din()`       | Number  | Current day (1–31)       |
| `ghanta`    | `NASEEB.ghanta()`    | Number  | Current hour (0–23)      |
| `minute`    | `NASEEB.minute()`    | Number  | Current minute (0–59)    |
| `second`    | `NASEEB.second()`    | Number  | Current second (0–59)    |
| `tarikh`    | `NASEEB.tarikh()`    | String  | Date as "DD-MM-YYYY"     |
| `waqt`      | `NASEEB.waqt()`      | String  | Time as "HH:MM:SS"       |
| `timestamp` | `NASEEB.timestamp()` | Number  | Unix timestamp (seconds) |

**IMPORTANT:** NASEEB is for time only. For random numbers, use `COOLIE.random()`.

### 14.4 ZANJEER — Type System (Film: Zanjeer, 1973)

The chains that bind types together.

| Function          | Signature                       | Returns | Description           |
|-------------------|---------------------------------|---------|-----------------------|
| `type`            | `ZANJEER.type(value)`           | String  | Type name (see §3)    |
| `isAnk`           | `ZANJEER.isAnk(value)`          | Boolean | Is number?            |
| `isShabd`         | `ZANJEER.isShabd(value)`        | Boolean | Is string?            |
| `isKhazana`       | `ZANJEER.isKhazana(value)`      | Boolean | Is array?             |
| `isShaktiKaalia`  | `ZANJEER.isShaktiKaalia(value)` | Boolean | Is boolean?           |
| `isLaawaris`      | `ZANJEER.isLaawaris(value)`     | Boolean | Is null?              |
| `isDeewar`        | `ZANJEER.isDeewar(value)`       | Boolean | Is dictionary?        |
| `toAnk`           | `ZANJEER.toAnk(value)`          | Number  | Convert to number     |
| `toShabd`         | `ZANJEER.toShabd(value)`        | String  | Convert to string     |
| `toShaktiKaalia`  | `ZANJEER.toShaktiKaalia(value)` | Boolean | Convert to boolean    |

**IMPORTANT:** The conversion function is `toAnk()` — NOT `toNumber()`.

---

## 15. String Interpolation

Embed expressions directly inside strings using `${expression}`:

```
VIJAY name = "Vijay"
VIJAY age = 30
BOLO "My name is ${name} and I am ${age} years old"
// Output: My name is Vijay and I am 30 years old

BOLO "Sum: ${10 + 20}"
// Output: Sum: 30

BOLO "Type: ${ZANJEER.type(42)}"
// Output: Type: ank
```

**Rules:**
- Works in both double-quoted and single-quoted strings
- Expressions inside `${}` are evaluated at runtime
- Can contain arithmetic, function calls, variable references
- Nested quotes inside `${}` must be different from the outer quotes

---

## 16. KBC Interactive Commands

Special one-liner commands inspired by Kaun Banega Crorepati show catchphrases:

| Command                              | Output                                    |
|--------------------------------------|-------------------------------------------|
| `DEVIYON_AUR_SAJJANO`               | Welcome message to the show               |
| `COMPUTER_JI_LOCK_KIYA_JAYE`        | "Answer locked!" confirmation             |
| `CONFIDENT_TO_LOCK_KIYA_JAYE`       | "Confident? Answer locked!"               |
| `LIFELINE_FIFTY_FIFTY`              | "50-50 lifeline activated"                |
| `AUDIENCE_POLL`                      | Audience poll with random percentage       |
| `PHONE_A_FRIEND "name"`             | "Calling [name]..."                       |
| `EXPERT_ADVICE`                      | Expert advice message                      |
| `QUIT_GAME`                          | Terminates the program immediately         |

**Example:**
```
DEVIYON_AUR_SAJJANO
BOLO "Question: What is 2 + 2?"
SUNO answer
COMPUTER_JI_LOCK_KIYA_JAYE
AGAR answer == "4"
    BOLO "Correct! You win!"
NAHI TOH
    BOLO "Wrong answer!"
BAS
```

---

## 17. Keyword–Film Reference Map

Every keyword in AmitabhC traces back to an Amitabh Bachchan film, character, or cultural reference:

| Keyword              | Film/Reference                                              | Year |
|----------------------|-------------------------------------------------------------|------|
| `VIJAY`              | Character in Deewar, Agneepath, Don, Trishul, Muqaddar Ka Sikandar | Multiple |
| `DON`                | Don                                                         | 1978 |
| `SHAKTI`             | Shakti                                                      | 1982 |
| `KAALIA`             | Kaalia                                                      | 1981 |
| `LAAWARIS`           | Laawaris                                                    | 1981 |
| `DEEWAR`             | Deewar                                                      | 1975 |
| `ZANJEER`            | Zanjeer                                                     | 1973 |
| `COOLIE`             | Coolie                                                      | 1983 |
| `AGNEEPATH`          | Agneepath                                                   | 1990 |
| `SILSILA`            | Silsila                                                     | 1981 |
| `NASEEB`             | Naseeb                                                      | 1981 |
| `SHAHENSHAH`         | Shahenshah                                                  | 1988 |
| `KHAZANA`            | Khazana (treasure)                                          | — |
| `NAAM`               | Naam                                                        | 1986 |
| `SHOLAY`             | Sholay                                                      | 1975 |
| `MRITYU`             | Mrityu (death — recurring theme in Agneepath)               | — |
| `PRATIGYA`           | Pratigya                                                    | 1975 |
| `KBC_SAWAAL`         | Kaun Banega Crorepati (TV show hosted by Amitabh)           | 2000+ |
| `BOLO`               | Hindi: "Speak" (Amitabh's commanding voice)                 | — |
| `SUNO`               | Hindi: "Listen" (classic Amitabh dialogue style)            | — |
| `AGAR`               | Hindi: "If"                                                 | — |
| `NAHI TOH`           | Hindi: "Otherwise"                                          | — |
| `BAS`                | Hindi: "Enough" / "Stop"                                    | — |
| `BAAR BAAR`          | Hindi: "Again and again"                                    | — |
| `KHATAM`             | Hindi: "Finished"                                           | — |
| `JAB TAK`            | Hindi: "As long as"                                         | — |
| `RAHEGA`             | Hindi: "Will remain"                                        | — |
| `WAPAS`              | Hindi: "Return"                                             | — |
| `PURA`               | Hindi: "Complete"                                           | — |
| `HAR EK`             | Hindi: "Each one"                                           | — |
| `MEIN`               | Hindi: "In"                                                 | — |
| `BADHAO`             | Hindi: "Increase"                                           | — |
| `GHATAO`             | Hindi: "Decrease"                                           | — |
| `INTEZAAR`           | Hindi: "Wait" (also an Amitabh song)                        | — |
| `DEEWAR_BANAO`       | Hindi: "Build a wall" (Deewar reference)                    | — |
| `DEEWAR_JODO`        | Hindi: "Join the wall"                                      | — |
| `OPTION`             | KBC answer options                                          | — |
| `SAHI_JAWAB`         | Hindi: "Correct answer" (KBC catchphrase)                   | — |
| `AGLE_SAWAAL`        | Hindi: "Next question" (KBC catchphrase)                    | — |
| `ZANJEER_LOOP`       | Do-while loop (chained like Zanjeer)                        | — |
| `TAB TAK`            | Hindi: "Until then"                                         | — |
| `BULAAO`             | Hindi: "Call" (reserved for future use)                     | — |
| `DEVIYON_AUR_SAJJANO`| KBC opening: "Ladies and gentlemen"                         | — |
| `QUIT_GAME`          | KBC: Player quits                                           | — |

---

## 18. Error Messages (Iconic Dialogues)

Every runtime error in AmitabhC is an iconic Amitabh Bachchan dialogue:

| Error Condition          | Dialogue (Hindi)                                                | Translation / Film                    |
|--------------------------|-----------------------------------------------------------------|---------------------------------------|
| Undefined variable       | "Don ko pakadna mushkil hi nahi, naamumkin hai!"                | "Catching Don is not difficult, it's impossible!" — Don |
| Max call depth exceeded  | "Deewar bahut oonchi ho gayi!"                                  | "The wall has grown too high!" — Deewar |
| Execution timeout        | "Interval khatam!"                                              | "Time's up!" |
| Division by zero         | "Zero se divide kaise kar sakte hain?"                          | "How can you divide by zero?" |
| Array out of bounds      | "Hum jahan khade hote hain, line wahi se shuru hoti hai!"       | "Where I stand, the line begins there!" — Don |
| Type mismatch            | "Aaj mere paas type hai, tumhare paas kya hai?"                 | "Today I have the type, what do you have?" — Deewar |
| Constant reassignment    | "Main aaj bhi phenke hue paise nahin uthata!"                   | "I still don't pick up thrown money!" — Deewar |
| While loop limit         | "Picture abhi baaki hai, lekin time khatam!"                    | "The movie's not over, but time is up!" |
| For loop too many        | "Baar baar mat bol!"                                            | "Don't say it again and again!" |
| Invalid dict entry       | "Dialogue galat bol rahe ho!"                                   | "You're saying the dialogue wrong!" |
| Syntax error             | "Dialogue galat bol rahe ho!"                                   | "You're saying the dialogue wrong!" |
| Function not found       | "Yeh function toh aaya hi nahi!"                                | "This function never even showed up!" |
| String too long          | "Mere paas bahut zyada memory hai... lekin limit toh limit hai!"| "I have too much memory... but a limit is a limit!" |

---

## 19. Execution Limits & Security

| Limit                | Value       | Purpose                              |
|----------------------|-------------|---------------------------------------|
| Max call depth       | 100         | Prevents infinite recursion           |
| Max loop iterations  | 10,000      | Prevents infinite loops               |
| Max execution time   | 30 seconds  | Prevents runaway programs             |
| Max string length    | 10,000 chars| Prevents memory exhaustion            |
| Max array/dict size  | 1,000       | Prevents memory exhaustion            |
| Max variables        | 1,000       | Prevents memory exhaustion            |
| Max functions        | 100         | Prevents excessive definitions        |
| Max code size        | 100 KB      | Prevents oversized programs           |
| Max input prompt     | 200 chars   | Prevents prompt injection             |

### Reserved Identifiers (Cannot be used as variable/function names)

```
__proto__, constructor, prototype, eval, function, window, document,
global, this, self, top, parent, frames, location, history
```

---

## 20. Grammar Summary (BNF-like)

```
<program>        ::= "LIGHTS" <newline> "CAMERA" <newline> <statements> "ACTION"
<statements>     ::= <statement>*
<statement>      ::= <declaration> | <assignment> | <output> | <input>
                    | <conditional> | <loop> | <function-def> | <function-call>
                    | <try-catch> | <switch> | <increment> | <dict-add>
                    | <kbc-command> | <wait> | <comment>

<declaration>    ::= "VIJAY" <identifier> "=" <expression>
                    | "VIJAY" <identifier> "[]" "=" "{" <expression-list> "}"
                    | "DON" <identifier> "=" <expression>

<assignment>     ::= <identifier> "=" <expression>
                    | <identifier> "[" <expression> "]" "=" <expression>
                    | <identifier> <compound-op> <expression>

<compound-op>    ::= "+=" | "-=" | "*=" | "/=" | "%="

<output>         ::= "BOLO" <expression>
<input>          ::= "SUNO" <identifier>
<wait>           ::= "INTEZAAR" <number>

<conditional>    ::= "AGAR" <expression> <newline> <statements>
                     ("NAHI TOH AGAR" <expression> <newline> <statements>)*
                     ("NAHI TOH" <newline> <statements>)?
                     "BAS"

<for-loop>       ::= "BAAR BAAR" <expression> ("MEIN" <identifier>)? <newline>
                     <statements> "KHATAM"

<while-loop>     ::= "JAB TAK" <expression> <newline>
                     <statements> "RAHEGA"

<do-while>       ::= "ZANJEER_LOOP" <newline> <statements>
                     "TAB TAK" <expression>

<for-each>       ::= "HAR EK" <identifier> "MEIN" <identifier> <newline>
                     <statements> "KHATAM"

<function-def>   ::= "NAAM" <identifier> "(" <param-list>? ")" <newline>
                     <statements> "PURA"

<function-call>  ::= <identifier> "(" <expression-list>? ")"

<try-catch>      ::= "AGNEEPATH" <newline> <statements>
                     "MRITYU" <identifier> <newline> <statements>
                     ("PRATIGYA" <newline> <statements>)?
                     "KHATAM"

<switch>         ::= "KBC_SAWAAL" <expression> <newline>
                     ("OPTION" <expression> <newline> <statements>)*
                     ("SAHI_JAWAB" <newline> <statements>)?
                     "AGLE_SAWAAL"

<increment>      ::= "BADHAO" <identifier> | "GHATAO" <identifier>
<dict-add>       ::= "DEEWAR_JODO" <identifier> <expression> <expression>

<expression>     ::= <literal> | <identifier> | <unary-op> <expression>
                    | <expression> <binary-op> <expression>
                    | <namespace-call> | <function-call>
                    | <identifier> "[" <expression> "]"
                    | "(" <expression> ")"

<literal>        ::= <number> | <string> | "SHAKTI" | "KAALIA" | "LAAWARIS"
                    | "{" <expression-list> "}"
                    | "DEEWAR_BANAO" "{" <dict-entries> "}"

<namespace-call> ::= <namespace> "." <method> "(" <expression-list>? ")"
<namespace>      ::= "COOLIE" | "SHAHENSHAH" | "KHAZANA" | "NASEEB"
                    | "ZANJEER" | "DEEWAR"

<comment>        ::= "//" <text-to-end-of-line>

<identifier>     ::= [a-zA-Z_][a-zA-Z0-9_]*
<number>         ::= [0-9]+("."[0-9]+)?
<string>         ::= '"' <string-chars> '"' | "'" <string-chars> "'"
<string-chars>   ::= (<any-char> | <escape-sequence> | "${" <expression> "}")*
<escape-sequence>::= "\n" | "\t" | "\\" | "\"" | "\'" | "\r"
```

---

## Appendix A: Complete Example Program

```
LIGHTS
CAMERA

    // Film Database
    VIJAY films[] = {"Zanjeer", "Deewar", "Sholay", "Don", "Agneepath"}
    VIJAY years[] = {1973, 1975, 1975, 1978, 1990}

    // Hero profile
    VIJAY hero = DEEWAR_BANAO{"name": "Amitabh Bachchan", "films": 200, "legend": SHAKTI}

    // Welcome
    DEVIYON_AUR_SAJJANO
    BOLO "Welcome to the Amitabh Bachchan Film Quiz!"
    BOLO ""

    // Quiz
    VIJAY score = 0
    VIJAY total = KHAZANA.length(films)

    HAR EK film MEIN films
        BOLO "Which year was '${film}' released?"
        SUNO answer
        VIJAY answerNum = ZANJEER.toAnk(answer)
        VIJAY idx = KHAZANA.indexOf(films, film)

        AGAR answerNum == years[idx]
            BOLO "Correct!"
            BADHAO score
        NAHI TOH
            BOLO "Wrong! It was ${years[idx]}"
        BAS
        BOLO ""
    KHATAM

    // Results
    BOLO "Final Score: ${score}/${total}"

    KBC_SAWAAL score
        OPTION 5
            BOLO "Perfect! You're a true Amitabh fan!"
        OPTION 4
            BOLO "Almost perfect!"
        OPTION 3
            BOLO "Not bad!"
        SAHI_JAWAB
            BOLO "Watch more Amitabh films!"
    AGLE_SAWAAL

ACTION
```

---

## Appendix B: Quick Reference Card

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
INCREMENT:  BADHAO x
DECREMENT:  GHATAO x
TRUE:       SHAKTI
FALSE:      KAALIA
NULL:       LAAWARIS
WAIT:       INTEZAAR 1000
```

---

*"Hum jahan khade hote hain, line wahi se shuru hoti hai!"*
*— Where AmitabhC stands, the programming language line begins there.*

**AmitabhC v4.0.0 | Created by jay123anta**
