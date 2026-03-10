# AmitabhC v4.0.0 API Reference

A Bollywood-themed esoteric programming language where every keyword is an Amitabh Bachchan film title, character, or dialogue.

---

## Table of Contents

1. [Program Structure](#1-program-structure)
2. [Variables & Constants](#2-variables--constants)
3. [Data Types](#3-data-types)
4. [Input/Output](#4-inputoutput)
5. [Operators](#5-operators)
6. [Control Flow](#6-control-flow)
7. [Loops](#7-loops)
8. [Functions](#8-functions)
9. [Error Handling](#9-error-handling)
10. [Dictionaries](#10-dictionaries)
11. [Built-in Namespaces](#11-built-in-namespaces)
12. [KBC Interactive Commands](#12-kbc-interactive-commands)
13. [Error Messages (Amitabh Dialogues)](#13-error-messages-amitabh-dialogues)
14. [Security & Limits](#14-security--limits)
15. [Version](#15-version)

---

## 1. Program Structure

Every AmitabhC program must be wrapped in the `LIGHTS` / `CAMERA` / `ACTION` structure. Think of it as a Bollywood film set: lights come on, camera rolls, and the action begins.

### LIGHTS

Marks the beginning of the program. Must be the very first non-comment line.

**Syntax:** `LIGHTS`

### CAMERA

Marks the start of the executable code section. Must appear after `LIGHTS` and before `ACTION`.

**Syntax:** `CAMERA`

### ACTION

Marks the end of the program. Must be the very last line.

**Syntax:** `ACTION`

### Minimal Program

```amitabhc
LIGHTS
CAMERA
    BOLO "Namaste Duniya!"
ACTION
```

### Comments

Single-line comments begin with `//`. They are stripped before execution.

**Syntax:** `// comment text`

```amitabhc
// This is a comment
VIJAY age = 25  // inline comment
```

---

## 2. Variables & Constants

### VIJAY (Mutable Variable)

Named after the iconic character Vijay that Amitabh played in numerous films. Declares a mutable variable.

**Syntax:** `VIJAY <name> = <expression>`

**Parameters:**
- `name` -- Identifier (must start with a letter or underscore, followed by letters, digits, or underscores)
- `expression` -- Any valid expression

**Example:**
```amitabhc
VIJAY name = "Amitabh"
VIJAY age = 80
VIJAY isLegend = SHAKTI
```

Variables can be reassigned without the `VIJAY` prefix once declared:

```amitabhc
VIJAY count = 0
count = 10
```

### DON (Immutable Constant)

Named after the film Don (1978). Declares an immutable constant that cannot be reassigned.

**Syntax:** `DON <name> = <expression>`

**Parameters:**
- `name` -- Identifier
- `expression` -- Value (cannot be changed after declaration)

**Example:**
```amitabhc
DON PI = 3.14159
DON MAX_SIZE = 100
```

Attempting to reassign a constant throws:
`"Main aaj bhi phenke hue paise nahin uthata!" - Cannot reassign constant`

---

## 3. Data Types

### Numbers

Integers and floating-point numbers. Must be finite and within `Number.MAX_SAFE_INTEGER`.

```amitabhc
VIJAY age = 25
VIJAY pi = 3.14159
VIJAY negative = -10
```

### Strings

Text enclosed in double quotes (`"`) or single quotes (`'`).

```amitabhc
VIJAY name = "Amitabh Bachchan"
VIJAY greeting = 'Namaste'
```

#### Escape Sequences

| Sequence | Result         |
|----------|----------------|
| `\n`     | Newline        |
| `\t`     | Tab            |
| `\\`     | Backslash      |
| `\"`     | Double quote   |
| `\'`     | Single quote   |
| `\r`     | Carriage return |

```amitabhc
BOLO "Line 1\nLine 2"
BOLO "He said \"Namaste\""
```

#### String Interpolation

Embed expressions inside strings with `${expression}`.

**Syntax:** `"text ${expression} text"`

```amitabhc
VIJAY name = "Vijay"
BOLO "Hello ${name}!"
BOLO "2 + 2 = ${2 + 2}"
```

**Returns:** The string with interpolated values substituted inline.

### Booleans

| Keyword   | Value | Film Reference         |
|-----------|-------|------------------------|
| `SHAKTI`  | true  | Shakti (1982)          |
| `KAALIA`  | false | Kaalia (1981)          |

```amitabhc
VIJAY isActive = SHAKTI
VIJAY isDone = KAALIA
```

### Arrays

Ordered collections of values. Zero-indexed.

**Syntax:** `VIJAY <name>[] = {<elements>}`

```amitabhc
VIJAY numbers[] = {10, 20, 30, 40, 50}
VIJAY names[] = {"Raj", "Simran", "Rahul"}
VIJAY empty[] = {}
VIJAY mixed[] = {"Hello", 42, SHAKTI}
```

**Access:** `arrayName[index]`

```amitabhc
BOLO numbers[0]    // 10
BOLO names[2]      // Rahul
```

**Assignment:** `arrayName[index] = value`

```amitabhc
numbers[0] = 99
```

### Dictionaries

Key-value maps created with `DEEWAR_BANAO`.

**Syntax:** `VIJAY <name> = DEEWAR_BANAO{"key": value, ...}`

```amitabhc
VIJAY person = DEEWAR_BANAO{"name": "Vijay", "age": 30}
```

See [Section 10: Dictionaries](#10-dictionaries) for full details.

### Null: LAAWARIS

Named after the film Laawaris (1981). Represents a null/empty value.

**Syntax:** `LAAWARIS`

```amitabhc
VIJAY nothing = LAAWARIS
```

---

## 4. Input/Output

### BOLO (Print)

Hindi for "speak." Prints a value to the output.

**Syntax:** `BOLO <expression>`

**Parameters:**
- `expression` -- Any expression (string, number, variable, complex expression)

**Return:** None (outputs to console/callback).

```amitabhc
BOLO "Hello World"
BOLO 42
BOLO "Sum: " + (10 + 20)
BOLO "Name: ${name}"
```

Booleans print as `SHAKTI`/`KAALIA`. Null prints as `LAAWARIS`. Arrays print as `[1, 2, 3]`. Dictionaries print as `{"key": "value"}`.

### SUNO (Input)

Hindi for "listen." Reads input from the user.

**Syntax:** `SUNO <variable>`

**Parameters:**
- `variable` -- Variable name to store the input into

**Behavior:**
- Prompts the user with `"Enter value for <variable>:"`
- Automatically converts numeric input to numbers
- Non-numeric input is stored as a string
- Rate-limited to one input per second
- Input is truncated to `maxStringLength` (10,000 characters)

```amitabhc
BOLO "What is your name?"
SUNO userName
BOLO "Hello " + userName
```

---

## 5. Operators

### Precedence Table (Lowest to Highest)

| Precedence | Operator(s)          | Description          | Example                          |
|------------|----------------------|----------------------|----------------------------------|
| 1 (lowest) | `\|\|`               | Logical OR           | `SHAKTI \|\| KAALIA` --> `SHAKTI`|
| 2          | `&&`                 | Logical AND          | `SHAKTI && KAALIA` --> `KAALIA`  |
| 3          | `==` `!=`            | Equality             | `5 == 5` --> `SHAKTI`            |
| 4          | `<` `>` `<=` `>=`    | Comparison           | `3 < 5` --> `SHAKTI`             |
| 5          | `+` `-`              | Addition/Subtraction | `10 - 4` --> `6`                 |
| 6 (highest)| `*` `/` `%`          | Multiply/Divide/Mod  | `10 % 3` --> `1`                 |

### Unary Operators

| Operator | Description | Example              |
|----------|-------------|----------------------|
| `-`      | Negate      | `-5` --> `-5`        |
| `!`      | Logical NOT | `!SHAKTI` --> `KAALIA`|

### Compound Assignment Operators

| Operator | Description       | Example       |
|----------|-------------------|---------------|
| `+=`     | Add and assign    | `x += 5`      |
| `-=`     | Subtract and assign | `x -= 3`   |
| `*=`     | Multiply and assign | `x *= 2`   |
| `/=`     | Divide and assign | `x /= 4`     |
| `%=`     | Modulo and assign | `x %= 3`     |

`+=` also works for string concatenation when either operand is a string.

### String Concatenation

The `+` operator concatenates when either operand is a string:

```amitabhc
BOLO "Hello " + "World"    // Hello World
BOLO "Age: " + 25          // Age: 25
```

---

## 6. Control Flow

### AGAR / NAHI TOH / NAHI TOH AGAR / BAS (If / Else / Else-If)

**Syntax:**
```
AGAR <condition>
    <statements>
NAHI TOH AGAR <condition2>
    <statements>
NAHI TOH
    <statements>
BAS
```

**Parameters:**
- `condition` -- Any expression that evaluates to a truthy or falsy value

**Block terminator:** `BAS` (Hindi for "enough")

```amitabhc
AGAR score >= 90
    BOLO "Excellent"
NAHI TOH AGAR score >= 50
    BOLO "Pass"
NAHI TOH
    BOLO "Fail"
BAS
```

### KBC_SAWAAL / OPTION / SAHI_JAWAB / AGLE_SAWAAL (Switch/Case)

Named after Kaun Banega Crorepati, the quiz show hosted by Amitabh Bachchan.

- `KBC_SAWAAL` -- switch (the question)
- `OPTION` -- case (an answer option)
- `SAHI_JAWAB` -- default (the correct answer / fallback)
- `AGLE_SAWAAL` -- end switch (next question)

**Syntax:**
```
KBC_SAWAAL <expression>
    OPTION <value1>
        <statements>
    OPTION <value2>
        <statements>
    SAHI_JAWAB
        <statements>
AGLE_SAWAAL
```

**Behavior:** No fallthrough. Once a matching `OPTION` executes, the switch exits.

```amitabhc
VIJAY grade = "A"

KBC_SAWAAL grade
    OPTION "A"
        BOLO "Outstanding!"
    OPTION "B"
        BOLO "Good"
    SAHI_JAWAB
        BOLO "Keep trying"
AGLE_SAWAAL
```

---

## 7. Loops

### BAAR BAAR N [MEIN counter] / KHATAM (For Loop)

Hindi for "again and again." Executes a block a fixed number of times.

**Syntax:**
```
BAAR BAAR <count>
    <statements>
KHATAM

BAAR BAAR <count> MEIN <counterVariable>
    <statements>
KHATAM
```

**Parameters:**
- `count` -- Integer literal for number of iterations (max 10,000)
- `counterVariable` -- (Optional) Named variable set to current iteration index (0-based)

**Auto variable:** `_GINTI` is automatically set to the current iteration index (0-based).

```amitabhc
BAAR BAAR 5
    BOLO "Iteration: " + _GINTI
KHATAM

BAAR BAAR 3 MEIN i
    BOLO "i = " + i
KHATAM
```

### JAB TAK condition / RAHEGA (While Loop)

"Jab tak" means "as long as." Executes while the condition is true.

**Syntax:**
```
JAB TAK <condition>
    <statements>
RAHEGA
```

**Parameters:**
- `condition` -- Boolean expression re-evaluated each iteration

**Block terminator:** `RAHEGA` (Hindi for "will remain")

```amitabhc
VIJAY i = 1
JAB TAK i <= 10
    BOLO i
    i += 1
RAHEGA
```

### ZANJEER_LOOP / TAB TAK condition (Do-While Loop)

Named after the film Zanjeer (1973). Executes the body at least once, then checks the condition.

**Syntax:**
```
ZANJEER_LOOP
    <statements>
TAB TAK <condition>
```

**Parameters:**
- `condition` -- Boolean expression checked after each iteration

```amitabhc
VIJAY x = 1
ZANJEER_LOOP
    BOLO x
    x += 1
TAB TAK x <= 5
```

### HAR EK item MEIN array / KHATAM (For-Each Loop)

"Har ek" means "each one." Iterates over every element in an array.

**Syntax:**
```
HAR EK <variable> MEIN <arrayExpression>
    <statements>
KHATAM
```

**Parameters:**
- `variable` -- Variable name assigned the current element each iteration
- `arrayExpression` -- Expression that evaluates to an array

**Auto variable:** `_GINTI` is set to the current index (0-based).

```amitabhc
VIJAY fruits[] = {"Apple", "Banana", "Mango"}
HAR EK fruit MEIN fruits
    BOLO "${_GINTI}: ${fruit}"
KHATAM
```

### Loop Control

#### DEEWAR (Break)

Named after the film Deewar (1975). A wall that stops the loop.

**Syntax:** `DEEWAR`

```amitabhc
BAAR BAAR 100
    AGAR _GINTI == 5
        DEEWAR
    BAS
    BOLO _GINTI
KHATAM
```

#### SILSILA (Continue)

Named after the film Silsila (1981). Skips to the next iteration.

**Syntax:** `SILSILA`

```amitabhc
BAAR BAAR 10
    AGAR _GINTI % 2 == 0
        SILSILA
    BAS
    BOLO _GINTI
KHATAM
```

### _GINTI (Auto Loop Counter)

Automatically available inside `BAAR BAAR`, `HAR EK`, and related loops. Holds the 0-based iteration index.

```amitabhc
BAAR BAAR 3
    BOLO "Index: " + _GINTI
KHATAM
// Output: Index: 0, Index: 1, Index: 2
```

### BADHAO / GHATAO (Increment / Decrement)

**Syntax:**
- `BADHAO <variable>` -- Increments the variable by 1
- `GHATAO <variable>` -- Decrements the variable by 1

```amitabhc
VIJAY count = 10
BADHAO count    // count is now 11
GHATAO count    // count is now 10
```

---

## 8. Functions

### NAAM funcName(params) / PURA (Define)

"Naam" means "name." Defines a named function. "Pura" means "complete."

**Syntax:**
```
NAAM <functionName>(<param1>, <param2>, ...)
    <statements>
PURA
```

**Parameters:**
- `functionName` -- Identifier for the function
- `param1, param2, ...` -- Comma-separated parameter names (can be empty)

```amitabhc
NAAM greet(name)
    BOLO "Hello " + name
PURA

NAAM add(a, b)
    WAPAS a + b
PURA
```

### WAPAS value (Return)

"Wapas" means "back/return." Returns a value from a function.

**Syntax:** `WAPAS <expression>`

**Parameters:**
- `expression` -- Value to return (optional; returns empty string if omitted)

**Constraint:** Can only be used inside a function body (inside `NAAM`/`PURA`).

```amitabhc
NAAM square(n)
    WAPAS n * n
PURA
```

### Function Calls

**Syntax:** `functionName(arg1, arg2, ...)`

```amitabhc
greet("Vijay")
VIJAY result = add(10, 20)
BOLO result    // 30
```

### Recursion

Recursion is fully supported up to `maxCallDepth` (100). Each function call creates a fresh variable scope; constants and functions are inherited.

```amitabhc
NAAM factorial(n)
    AGAR n <= 1
        WAPAS 1
    BAS
    WAPAS n * factorial(n - 1)
PURA

BOLO factorial(5)    // 120
```

---

## 9. Error Handling

### AGNEEPATH / MRITYU / PRATIGYA / KHATAM (Try / Catch / Finally)

Named after the films Agneepath (1990), and the concepts of Mrityu (death) and Pratigya (vow/promise).

**Syntax:**
```
AGNEEPATH
    <try statements>
MRITYU <errorVariable>
    <catch statements>
PRATIGYA
    <finally statements>
KHATAM
```

**Parameters:**
- `errorVariable` -- (Optional) Variable name to store the error message string

**Behavior:**
- `AGNEEPATH` begins the try block
- `MRITYU errorVar` begins the catch block; the error message is stored in `errorVar`
- `PRATIGYA` begins the finally block (always executes)
- `KHATAM` ends the entire block
- `MRITYU` and `PRATIGYA` are both optional, but at least one should be present
- If there is no `MRITYU` block, errors re-throw after `PRATIGYA` executes

```amitabhc
AGNEEPATH
    VIJAY result = 10 / 0
MRITYU err
    BOLO "Error caught: " + err
PRATIGYA
    BOLO "Cleanup done"
KHATAM
```

---

## 10. Dictionaries

### Creating: DEEWAR_BANAO

"Deewar banao" means "build a wall." Creates a dictionary (key-value map).

**Syntax:** `DEEWAR_BANAO{key1: value1, key2: value2, ...}`

**Parameters:**
- Keys must be strings or numbers
- Values can be any type

```amitabhc
VIJAY person = DEEWAR_BANAO{"name": "Vijay", "age": 30, "active": SHAKTI}
VIJAY empty = DEEWAR_BANAO{}
```

### Accessing: dict["key"]

```amitabhc
BOLO person["name"]    // Vijay
```

Returns `LAAWARIS` (null) for missing keys.

### Setting: dict["key"] = value

```amitabhc
person["city"] = "Mumbai"
```

### DEEWAR_JODO (Add Key)

"Deewar jodo" means "join/add to the wall."

**Syntax:** `DEEWAR_JODO <dictName> <keyExpr> <valueExpr>`

**Parameters:**
- `dictName` -- Variable name of an existing dictionary
- `keyExpr` -- Expression evaluating to the key
- `valueExpr` -- Expression evaluating to the value

```amitabhc
VIJAY d = DEEWAR_BANAO{}
DEEWAR_JODO d "color" "red"
BOLO d["color"]    // red
```

---

## 11. Built-in Namespaces

All namespaces are named after Amitabh Bachchan films. Functions are called as `NAMESPACE.function(args)`.

---

### SHAHENSHAH (String) -- Film: Shahenshah (1988)

String manipulation functions. The first argument is always the string to operate on.

| Function | Syntax | Description | Returns |
|----------|--------|-------------|---------|
| `length` | `SHAHENSHAH.length(str)` | Length of string | Number |
| `uppercase` | `SHAHENSHAH.uppercase(str)` | Convert to uppercase | String |
| `lowercase` | `SHAHENSHAH.lowercase(str)` | Convert to lowercase | String |
| `contains` | `SHAHENSHAH.contains(str, search)` | Check if str contains search | Boolean |
| `replace` | `SHAHENSHAH.replace(str, search, replacement)` | Replace all occurrences | String |
| `trim` | `SHAHENSHAH.trim(str)` | Remove leading/trailing whitespace | String |
| `trimStart` | `SHAHENSHAH.trimStart(str)` | Remove leading whitespace | String |
| `trimEnd` | `SHAHENSHAH.trimEnd(str)` | Remove trailing whitespace | String |
| `substring` | `SHAHENSHAH.substring(str, start)` or `SHAHENSHAH.substring(str, start, end)` | Extract substring | String |
| `charAt` | `SHAHENSHAH.charAt(str, index)` | Character at index | String |
| `indexOf` | `SHAHENSHAH.indexOf(str, search)` | First index of search (-1 if not found) | Number |
| `lastIndexOf` | `SHAHENSHAH.lastIndexOf(str, search)` | Last index of search (-1 if not found) | Number |
| `split` | `SHAHENSHAH.split(str, delimiter)` | Split string into array | Array |
| `startsWith` | `SHAHENSHAH.startsWith(str, prefix)` | Check if str starts with prefix | Boolean |
| `endsWith` | `SHAHENSHAH.endsWith(str, suffix)` | Check if str ends with suffix | Boolean |
| `repeat` | `SHAHENSHAH.repeat(str, count)` | Repeat string count times (max 1000) | String |
| `reverse` | `SHAHENSHAH.reverse(str)` | Reverse the string | String |
| `padStart` | `SHAHENSHAH.padStart(str, length)` or `SHAHENSHAH.padStart(str, length, padChar)` | Pad start to target length | String |
| `padEnd` | `SHAHENSHAH.padEnd(str, length)` or `SHAHENSHAH.padEnd(str, length, padChar)` | Pad end to target length | String |

**Examples:**
```amitabhc
VIJAY s = "Amitabh Bachchan"
BOLO SHAHENSHAH.length(s)             // 16
BOLO SHAHENSHAH.uppercase(s)          // AMITABH BACHCHAN
BOLO SHAHENSHAH.contains(s, "Bach")   // SHAKTI
BOLO SHAHENSHAH.replace(s, "Bachchan", "B.")  // Amitabh B.
BOLO SHAHENSHAH.substring(s, 0, 7)    // Amitabh
BOLO SHAHENSHAH.split(s, " ")         // [Amitabh, Bachchan]
BOLO SHAHENSHAH.reverse("abcd")       // dcba
BOLO SHAHENSHAH.padStart("42", 5, "0") // 00042
```

---

### COOLIE (Math) -- Film: Coolie (1983)

Mathematical functions and constants.

| Function | Syntax | Description | Returns |
|----------|--------|-------------|---------|
| `abs` | `COOLIE.abs(x)` | Absolute value | Number |
| `floor` | `COOLIE.floor(x)` | Round down | Number |
| `ceil` | `COOLIE.ceil(x)` | Round up | Number |
| `round` | `COOLIE.round(x)` | Round to nearest integer | Number |
| `sqrt` | `COOLIE.sqrt(x)` | Square root (x >= 0) | Number |
| `pow` | `COOLIE.pow(base, exp)` | Exponentiation | Number |
| `min` | `COOLIE.min(a, b, ...)` | Minimum of arguments | Number |
| `max` | `COOLIE.max(a, b, ...)` | Maximum of arguments | Number |
| `random` | `COOLIE.random()` | Random number in [0, 1) | Number |
| `sin` | `COOLIE.sin(x)` | Sine (radians) | Number |
| `cos` | `COOLIE.cos(x)` | Cosine (radians) | Number |
| `tan` | `COOLIE.tan(x)` | Tangent (radians) | Number |
| `log` | `COOLIE.log(x)` | Natural logarithm (x > 0) | Number |
| `PI` | `COOLIE.PI()` | Pi constant (3.14159...) | Number |
| `E` | `COOLIE.E()` | Euler's number (2.71828...) | Number |

**Examples:**
```amitabhc
BOLO COOLIE.abs(-42)           // 42
BOLO COOLIE.sqrt(144)          // 12
BOLO COOLIE.pow(2, 10)         // 1024
BOLO COOLIE.min(5, 3, 8)       // 3
BOLO COOLIE.PI()               // 3.141592653589793
BOLO COOLIE.round(3.7)         // 4
VIJAY r = COOLIE.random()      // e.g., 0.7291...
```

---

### KHAZANA (Array) -- Film: Khazana

Array manipulation functions. The first argument is always the array.

| Function | Syntax | Description | Returns |
|----------|--------|-------------|---------|
| `length` | `KHAZANA.length(arr)` | Number of elements | Number |
| `push` | `KHAZANA.push(arr, value)` | Append element to end | Array (mutated) |
| `pop` | `KHAZANA.pop(arr)` | Remove and return last element | The removed value |
| `shift` | `KHAZANA.shift(arr)` | Remove and return first element | The removed value |
| `unshift` | `KHAZANA.unshift(arr, value)` | Prepend element to start | Array (mutated) |
| `slice` | `KHAZANA.slice(arr, start)` or `KHAZANA.slice(arr, start, end)` | Extract sub-array | New Array |
| `join` | `KHAZANA.join(arr)` or `KHAZANA.join(arr, separator)` | Join elements into string | String |
| `reverse` | `KHAZANA.reverse(arr)` | Reverse the array | New Array (copy) |
| `includes` | `KHAZANA.includes(arr, value)` | Check if array contains value | Boolean |
| `indexOf` | `KHAZANA.indexOf(arr, value)` | First index of value (-1 if not found) | Number |
| `concat` | `KHAZANA.concat(arr1, arr2)` | Concatenate two arrays | New Array |
| `sort` | `KHAZANA.sort(arr)` | Sort array (numeric or lexicographic) | New Array (copy) |

**Examples:**
```amitabhc
VIJAY arr[] = {3, 1, 4, 1, 5}
BOLO KHAZANA.length(arr)           // 5
KHAZANA.push(arr, 9)               // arr is now {3, 1, 4, 1, 5, 9}
VIJAY last = KHAZANA.pop(arr)      // last = 9
BOLO KHAZANA.includes(arr, 4)      // SHAKTI
BOLO KHAZANA.join(arr, "-")        // 3-1-4-1-5
VIJAY sorted = KHAZANA.sort(arr)   // {1, 1, 3, 4, 5}
VIJAY sub = KHAZANA.slice(arr, 1, 3) // {1, 4}
```

---

### NASEEB (Time) -- Film: Naseeb (1981)

Date and time functions. Most take no arguments and return current date/time values.

| Function | Syntax | Description | Returns |
|----------|--------|-------------|---------|
| `abhi` | `NASEEB.abhi()` | Current time in milliseconds (epoch) | Number |
| `saal` | `NASEEB.saal()` | Current year | Number |
| `mahina` | `NASEEB.mahina()` | Current month (1-12) | Number |
| `din` | `NASEEB.din()` | Current day of month (1-31) | Number |
| `ghanta` | `NASEEB.ghanta()` | Current hour (0-23) | Number |
| `minute` | `NASEEB.minute()` | Current minute (0-59) | Number |
| `second` | `NASEEB.second()` | Current second (0-59) | Number |
| `tarikh` | `NASEEB.tarikh()` | Current date as `DD-MM-YYYY` string | String |
| `waqt` | `NASEEB.waqt()` | Current time as `HH:MM:SS` string | String |
| `timestamp` | `NASEEB.timestamp()` | Unix timestamp (seconds since epoch) | Number |

**Examples:**
```amitabhc
BOLO NASEEB.tarikh()     // e.g., 10-03-2026
BOLO NASEEB.waqt()       // e.g., 14:30:45
BOLO NASEEB.saal()       // e.g., 2026
VIJAY ts = NASEEB.timestamp()
```

---

### ZANJEER (Type) -- Film: Zanjeer (1973)

Type checking and conversion functions.

| Function | Syntax | Description | Returns |
|----------|--------|-------------|---------|
| `type` | `ZANJEER.type(value)` | Get type name | String: `"ank"`, `"shabd"`, `"shakti_kaalia"`, `"khazana"`, `"deewar"`, `"laawaris"`, or `"anjaan"` |
| `isAnk` | `ZANJEER.isAnk(value)` | Is it a number? | Boolean |
| `isShabd` | `ZANJEER.isShabd(value)` | Is it a string? | Boolean |
| `isKhazana` | `ZANJEER.isKhazana(value)` | Is it an array? | Boolean |
| `isShaktiKaalia` | `ZANJEER.isShaktiKaalia(value)` | Is it a boolean? | Boolean |
| `isLaawaris` | `ZANJEER.isLaawaris(value)` | Is it null? | Boolean |
| `isDeewar` | `ZANJEER.isDeewar(value)` | Is it a dictionary? | Boolean |
| `toAnk` | `ZANJEER.toAnk(value)` | Convert to number | Number |
| `toShabd` | `ZANJEER.toShabd(value)` | Convert to string | String |
| `toShaktiKaalia` | `ZANJEER.toShaktiKaalia(value)` | Convert to boolean | Boolean |

**Type name mapping:**

| AmitabhC Type Name | Meaning  |
|--------------------|----------|
| `ank`              | Number   |
| `shabd`            | String   |
| `shakti_kaalia`    | Boolean  |
| `khazana`          | Array    |
| `deewar`           | Dictionary |
| `laawaris`         | Null     |
| `anjaan`           | Unknown  |

**Examples:**
```amitabhc
BOLO ZANJEER.type(42)              // ank
BOLO ZANJEER.type("hello")         // shabd
BOLO ZANJEER.isAnk(3.14)           // SHAKTI
BOLO ZANJEER.isShabd(42)           // KAALIA
VIJAY num = ZANJEER.toAnk("123")   // 123
BOLO ZANJEER.toShabd(42)           // 42
```

---

### DEEWAR (Dict) -- Film: Deewar (1975)

Dictionary manipulation functions.

| Function | Syntax | Description | Returns |
|----------|--------|-------------|---------|
| `keys` | `DEEWAR.keys(dict)` | Get all keys | Array of strings |
| `values` | `DEEWAR.values(dict)` | Get all values | Array |
| `hasKey` | `DEEWAR.hasKey(dict, key)` | Check if key exists | Boolean |
| `remove` | `DEEWAR.remove(dict, key)` | Remove key and return its value | Removed value or `LAAWARIS` |
| `size` | `DEEWAR.size(dict)` | Number of key-value pairs | Number |
| `merge` | `DEEWAR.merge(dict1, dict2)` | Merge two dictionaries | New Dictionary |

**Examples:**
```amitabhc
VIJAY d = DEEWAR_BANAO{"x": 1, "y": 2, "z": 3}
BOLO DEEWAR.keys(d)           // [x, y, z]
BOLO DEEWAR.values(d)         // [1, 2, 3]
BOLO DEEWAR.hasKey(d, "x")    // SHAKTI
BOLO DEEWAR.size(d)           // 3

VIJAY removed = DEEWAR.remove(d, "z")  // removed = 3, d now has x and y

VIJAY d2 = DEEWAR_BANAO{"a": 10}
VIJAY merged = DEEWAR.merge(d, d2)     // {"x": 1, "y": 2, "a": 10}
```

---

## 12. KBC Interactive Commands

Named after "Kaun Banega Crorepati," the quiz show hosted by Amitabh Bachchan. These commands produce themed output messages.

| Command | Output |
|---------|--------|
| `DEVIYON_AUR_SAJJANO` | "Deviyon aur Sajjano, namaskar! Welcome to AmitabhC!" |
| `COMPUTER_JI_LOCK_KIYA_JAYE` | "Computer ji, lock kiya jaaye! Answer locked!" |
| `CONFIDENT_TO_LOCK_KIYA_JAYE` | "Confidence check: Answer locked with confidence!" |
| `LIFELINE_FIFTY_FIFTY` | "50-50 Lifeline activated! Two options eliminated!" |
| `AUDIENCE_POLL` | "Audience Poll: N% majority opinion received!" (N = random 60-89) |
| `PHONE_A_FRIEND "name"` | "Calling name... Getting expert advice!" |
| `EXPERT_ADVICE` | "Expert Advice: Based on analysis, this approach looks correct!" |
| `QUIT_GAME` | "Game quit successfully! Taking winnings home!" (terminates program) |
| `INTEZAAR <ms>` | Waits for the specified milliseconds (max 5000ms), then prints "Waited for Nms" |

**Examples:**
```amitabhc
DEVIYON_AUR_SAJJANO
PHONE_A_FRIEND "Jaya"
AUDIENCE_POLL
INTEZAAR 2000
```

### INTEZAAR (Wait/Sleep)

Named after the concept of waiting. Pauses execution.

**Syntax:** `INTEZAAR <milliseconds>`

**Parameters:**
- `milliseconds` -- Integer, capped at 5000ms. Defaults to 1000 if not specified.

---

## 13. Error Messages (Amitabh Dialogues)

All runtime errors are delivered as iconic Amitabh Bachchan dialogues.

| Error Scenario | Dialogue |
|----------------|----------|
| Undefined variable | "Don ko pakadna mushkil hi nahi, naamumkin hai!" - Undefined variable: X |
| Max call depth exceeded | "Deewar bahut oonchi ho gayi!" - Maximum call depth exceeded |
| Execution timeout | "Interval khatam!" - Execution timeout |
| Division by zero | "Zero se divide kaise kar sakte hain?" |
| Array index out of bounds | "Hum jahan khade hote hain, line wahi se shuru hoti hai!" - Array index N out of bounds |
| Type mismatch | "Aaj mere paas type hai, tumhare paas kya hai?" - 'X' is not an array or dictionary |
| Constant reassignment | "Main aaj bhi phenke hue paise nahin uthata!" - Cannot reassign constant |
| While loop exceeded max iterations | "Picture abhi baaki hai, lekin time khatam!" - While loop exceeded maximum iterations |
| For loop count too high | "Baar baar mat bol!" - Loop count exceeds maximum |
| Invalid dictionary entry | "Dialogue galat bol rahe ho!" - Dictionary entry must be key: value |
| Invalid argument | "Tumhara argument galat hai, sahab!" - Dictionary key must be a string or number |
| Function not found | "Yeh function toh aaya hi nahi!" - Function 'X' not found |
| String too long | "Mere paas bahut zyada memory hai... lekin limit toh limit hai!" - String too long |
| AGNEEPATH block unclosed | "Dialogue galat bol rahe ho!" - AGNEEPATH block must end with KHATAM |
| KBC_SAWAAL unclosed | "Dialogue galat bol rahe ho!" - KBC_SAWAAL must end with AGLE_SAWAAL |
| ZANJEER_LOOP unclosed | "Dialogue galat bol rahe ho!" - ZANJEER_LOOP must end with TAB TAK condition |

---

## 14. Security & Limits

The interpreter enforces the following safety limits to prevent abuse:

| Limit | Value | Description |
|-------|-------|-------------|
| `maxCallDepth` | 100 | Maximum function call / recursion depth |
| `maxLoopIterations` | 10,000 | Maximum iterations for any single loop |
| `maxExecutionTime` | 30,000 ms (30s) | Total execution time before timeout |
| `maxStringLength` | 10,000 | Maximum characters in a single string |
| `maxArraySize` | 1,000 | Maximum elements in an array or keys in a dictionary |
| `maxVariables` | 1,000 | Maximum variables per scope |
| `maxFunctions` | 100 | Maximum function definitions |
| Max code size | 100,000 bytes (100 KB) | Maximum source code length |
| Input rate limit | 1 per second | Minimum interval between SUNO calls |

**Reserved words** (cannot be used as variable or function names):
`__proto__`, `constructor`, `prototype`, `eval`, `function`, `window`, `document`, `global`, `this`, `self`, `top`, `parent`, `frames`, `location`, `history`

**Identifier rules:**
- Must start with a letter or underscore
- Can contain letters, digits, and underscores
- Case-sensitive
- Cannot be a reserved word or AmitabhC keyword

---

## 15. Version

**Version:** 4.0.0
**Compatibility:** Modern web browsers (Chrome, Firefox, Safari, Edge) and Node.js
**API Stability:** Stable

---

*AmitabhC v4.0.0 -- "Aaj khush toh bahut hoge tum!" -- A purely Amitabh Bachchan themed programming language.*
