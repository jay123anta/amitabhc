# AmitabhC API Reference

## Table of Contents
1. [Program Structure](#program-structure)
2. [Variables and Constants](#variables-and-constants)
3. [Input/Output](#inputoutput)
4. [Control Flow](#control-flow)
5. [Loops](#loops)
6. [Functions](#functions)
7. [Arrays](#arrays)
8. [Film Commands](#film-commands)
9. [KBC Commands](#kbc-commands)
10. [Operators](#operators)
11. [Data Types](#data-types)
12. [Built-in Functions](#built-in-functions)
13. [Error Handling](#error-handling)
14. [Advanced Features](#advanced-features)

---

## Program Structure

### LIGHTS
Marks the beginning of an AmitabhC program.

**Syntax:** `LIGHTS`

**Example:**
```amitabhc
LIGHTS
CAMERA
    BOLO "Program started"
ACTION
```

### CAMERA
Indicates the start of the main code section.

**Syntax:** `CAMERA`

**Requirements:** Must come after `LIGHTS` and before `ACTION`

### ACTION
Marks the end of the program.

**Syntax:** `ACTION`

**Requirements:** Must be the last statement

---

## Variables and Constants

### VIJAY
Declares a mutable variable.

**Syntax:** `VIJAY <identifier> = <expression>`

**Parameters:**
- `identifier`: Variable name (alphanumeric, must start with letter)
- `expression`: Initial value

**Example:**
```amitabhc
VIJAY name = "Amitabh"
VIJAY age = 80
VIJAY isLegend = SHAKTI
```

### DON
Declares an immutable constant.

**Syntax:** `DON <identifier> = <expression>`

**Parameters:**
- `identifier`: Constant name
- `expression`: Value (cannot be changed)

**Example:**
```amitabhc
DON PI = 3.14159
DON MAX_SIZE = 100
```

---

## Input/Output

### BOLO
Prints output to the console.

**Syntax:** `BOLO <expression>`

**Parameters:**
- `expression`: Value to print (string, number, or variable)

**Example:**
```amitabhc
BOLO "Hello World"
BOLO 42
BOLO "Age: " + age
```

### SUNO
Gets input from the user.

**Syntax:** `SUNO <variable>`

**Parameters:**
- `variable`: Variable to store input

**Behavior:**
- Shows prompt dialog
- Automatically converts numeric input to numbers

**Example:**
```amitabhc
BOLO "Enter your name:"
SUNO userName
BOLO "Hello " + userName
```

---

## Control Flow

### AGAR
Conditional if statement.

**Syntax:** 
```
AGAR <condition>
    <statements>
BAS
```

**Parameters:**
- `condition`: Boolean expression

**Example:**
```amitabhc
AGAR age >= 18
    BOLO "You are an adult"
BAS
```

### NAHI TOH
Else clause for conditional statements.

**Syntax:**
```
AGAR <condition>
    <statements>
NAHI TOH
    <statements>
BAS
```

**Example:**
```amitabhc
AGAR score >= 50
    BOLO "Pass"
NAHI TOH
    BOLO "Fail"
BAS
```

### NAHI TOH AGAR
Else-if clause for multiple conditions.

**Syntax:**
```
AGAR <condition1>
    <statements>
NAHI TOH AGAR <condition2>
    <statements>
NAHI TOH
    <statements>
BAS
```

### BAS
Ends a conditional block.

**Syntax:** `BAS`

---

## Loops

### BAAR BAAR
For loop - executes a fixed number of times.

**Syntax:**
```
BAAR BAAR <count>
    <statements>
KHATAM
```

**Parameters:**
- `count`: Number of iterations

**Example:**
```amitabhc
BAAR BAAR 5
    BOLO "Repeating..."
KHATAM
```

### KHATAM
Ends a BAAR BAAR loop.

**Syntax:** `KHATAM`

### JAB TAK
While loop - executes while condition is true.

**Syntax:**
```
JAB TAK <condition>
    <statements>
RAHEGA
```

**Parameters:**
- `condition`: Boolean expression

**Example:**
```amitabhc
VIJAY i = 1
JAB TAK i <= 10
    BOLO i
    VIJAY i = i + 1
RAHEGA
```

### RAHEGA
Ends a JAB TAK loop.

**Syntax:** `RAHEGA`

---

## Functions

### NAAM
Declares a function.

**Syntax:**
```
NAAM <functionName>(<parameters>)
    <statements>
PURA
```

**Parameters:**
- `functionName`: Function identifier
- `parameters`: Comma-separated parameter list

**Example:**
```amitabhc
NAAM greet(name)
    BOLO "Hello " + name
PURA
```

### PURA
Ends a function definition.

**Syntax:** `PURA`

### WAPAS
Returns a value from a function.

**Syntax:** `WAPAS <expression>`

**Parameters:**
- `expression`: Value to return

**Example:**
```amitabhc
NAAM add(a, b)
    WAPAS a + b
PURA
```

### Function Call
Invokes a function.

**Syntax:** `<functionName>(<arguments>)`

**Example:**
```amitabhc
greet("Raj")
VIJAY sum = add(10, 20)
```

---

## Arrays

### Array Declaration
Declares an array using KHAZANA notation.

**Syntax:** `VIJAY <arrayName>[] = {<elements>}`

**Parameters:**
- `arrayName`: Array identifier
- `elements`: Comma-separated values

**Example:**
```amitabhc
VIJAY KHAZANA[] = {10, 20, 30, 40, 50}
VIJAY names[] = {"Raj", "Simran", "Rahul"}
```

### Array Access
Access array elements by index (0-based).

**Syntax:** `<arrayName>[<index>]`

**Example:**
```amitabhc
BOLO KHAZANA[0]  // First element
BOLO names[2]    // Third element
```

---

## Film Commands

### SHOLAY
Import/Include functionality (reserved for future use).

**Syntax:** `SHOLAY <module>`

### DEEWAR
Break statement - exits current loop.

**Syntax:** `DEEWAR`

**Context:** Must be inside a loop

**Example:**
```amitabhc
BAAR BAAR 10
    AGAR i == 5
        DEEWAR  // Exit loop
    BAS
KHATAM
```

### SILSILA
Continue statement - skips to next iteration.

**Syntax:** `SILSILA`

**Context:** Must be inside a loop

**Example:**
```amitabhc
BAAR BAAR 10
    AGAR i % 2 == 0
        SILSILA  // Skip even numbers
    BAS
    BOLO i
KHATAM
```

### SHAKTI
Boolean true value.

**Syntax:** `SHAKTI`

**Type:** Boolean constant

**Example:**
```amitabhc
VIJAY isActive = SHAKTI
```

### KAALIA
Boolean false value.

**Syntax:** `KAALIA`

**Type:** Boolean constant

**Example:**
```amitabhc
VIJAY isComplete = KAALIA
```

### INTEZAAR
Sleep/Wait function (simulated).

**Syntax:** `INTEZAAR <seconds>`

**Parameters:**
- `seconds`: Wait duration

**Example:**
```amitabhc
BOLO "Loading..."
INTEZAAR 2
BOLO "Done!"
```

---

## KBC Commands

### DEVIYON_AUR_SAJJANO
Program greeting - displays welcome message.

**Syntax:** `DEVIYON_AUR_SAJJANO`

**Output:** "🎯 Deviyon aur Sajjano, welcome to the program!"

### COMPUTER_JI_LOCK_KIYA_JAYE
Locks/confirms an answer.

**Syntax:** `COMPUTER_JI_LOCK_KIYA_JAYE`

**Output:** "💻 Computer ji ne answer lock kar diya! ✅"

### CONFIDENT_TO_LOCK_KIYA_JAYE
Interactive confirmation prompt.

**Syntax:** `CONFIDENT_TO_LOCK_KIYA_JAYE`

**Behavior:** Shows confirm dialog to user

### LIFELINE_FIFTY_FIFTY
Activates 50-50 lifeline.

**Syntax:** `LIFELINE_FIFTY_FIFTY`

**Output:** "🎯 50-50 Lifeline Used! Two wrong options removed."

### AUDIENCE_POLL
Shows audience poll results.

**Syntax:** `AUDIENCE_POLL`

**Behavior:** Displays random poll percentage (60-100%)

### PHONE_A_FRIEND
Simulates phone-a-friend lifeline.

**Syntax:** `PHONE_A_FRIEND "<friendName>"`

**Parameters:**
- `friendName`: Name of friend to call

**Example:**
```amitabhc
PHONE_A_FRIEND "Expert"
```

### EXPERT_ADVICE
Shows expert advice.

**Syntax:** `EXPERT_ADVICE`

**Output:** "🎓 Expert Advice: Based on my analysis, option B looks correct!"

### QUIT_GAME
Exits the game with winnings.

**Syntax:** `QUIT_GAME`

**Behavior:** Throws exit exception

---

## Operators

### Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `5 + 3` → `8` |
| `-` | Subtraction | `10 - 4` → `6` |
| `*` | Multiplication | `6 * 7` → `42` |
| `/` | Division | `20 / 4` → `5` |
| `%` | Modulo | `10 % 3` → `1` |

### Comparison Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Equal to | `5 == 5` → `SHAKTI` |
| `!=` | Not equal to | `5 != 3` → `SHAKTI` |
| `<` | Less than | `3 < 5` → `SHAKTI` |
| `>` | Greater than | `5 > 3` → `SHAKTI` |
| `<=` | Less than or equal | `5 <= 5` → `SHAKTI` |
| `>=` | Greater than or equal | `5 >= 3` → `SHAKTI` |

### Logical Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | Logical AND | `SHAKTI && SHAKTI` → `SHAKTI` |
| `\|\|` | Logical OR | `SHAKTI \|\| KAALIA` → `SHAKTI` |

### String Concatenation

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Concatenate strings | `"Hello " + "World"` → `"Hello World"` |

---

## Data Types

### Number
Integer and floating-point numbers.

**Examples:**
```amitabhc
VIJAY age = 25
VIJAY pi = 3.14159
VIJAY negative = -10
```

### String
Text enclosed in double quotes.

**Examples:**
```amitabhc
VIJAY name = "Amitabh"
VIJAY message = "Hello World"
```

### Boolean
True (`SHAKTI`) or false (`KAALIA`).

**Examples:**
```amitabhc
VIJAY isActive = SHAKTI
VIJAY isComplete = KAALIA
```

### Array
Ordered collection of values.

**Examples:**
```amitabhc
VIJAY numbers[] = {1, 2, 3, 4, 5}
VIJAY mixed[] = {"Hello", 42, SHAKTI}
```

---

## Built-in Functions

### Type Conversion

The interpreter automatically handles type conversion:
- String to Number when numeric operations are performed
- Number to String when concatenating with strings

**Example:**
```amitabhc
SUNO age        // User enters "25"
VIJAY nextAge = age + 1  // Automatically converts to number
```

---

## Error Handling

### AGNEEPATH
Try-catch block for error handling.

**Syntax:**
```
AGNEEPATH
    <statements>
MRITYU
```

**Example:**
```amitabhc
AGNEEPATH
    VIJAY result = 10 / 0
    BOLO result
MRITYU
```

---

## Advanced Features

### SHAHENSHAH
Class declaration (syntax reserved for future).

**Planned Syntax:**
```
SHAHENSHAH <className> {
    <properties>
    <methods>
}
```

### TRISHUL
Three-way conditional (planned feature).

**Planned Syntax:**
```
TRISHUL <expression>
    JYADA: <statements>
    BARABAR: <statements>
    KAM: <statements>
TRISHUL_END
```

### Comments
Single-line comments start with `//`.

**Syntax:** `// <comment text>`

**Example:**
```amitabhc
// This is a comment
VIJAY age = 25  // This is also a comment
```

---

## Special Characters and Limitations

### Reserved Words
The following words are reserved and cannot be used as identifiers:
- All command keywords (LIGHTS, CAMERA, ACTION, etc.)
- Film names used as commands
- KBC command names

### Identifier Rules
- Must start with a letter
- Can contain letters, numbers, and underscores
- Case-sensitive
- Cannot be reserved words

### String Escape Sequences
Currently, the language does not support escape sequences. Use concatenation for special formatting.

---

## Error Messages

Common error messages and their meanings:

| Error | Meaning |
|-------|---------|
| "Galti se mistake ho gaya! Program LIGHTS se shuru karo!" | Program must start with LIGHTS |
| "Picture abhi baaki hai! Program ACTION pe khatam karo!" | Program must end with ACTION |
| "Camera kahan hai? CAMERA section chahiye!" | Missing CAMERA section |
| "Ye kya ho gaya! AGAR must end with BAS" | Unclosed IF statement |
| "Kitne baar? BAAR BAAR needs a number!" | BAAR BAAR requires numeric count |
| "Bas karo! Infinite loop detected!" | Loop exceeded maximum iterations |

---

## Performance Considerations

- Maximum recursion depth: 100 calls
- Maximum loop iterations: 10,000 (safety limit)
- String concatenation is performed left-to-right
- Arrays are zero-indexed

---

## Version Information

**Current Version:** 2.0.0
**API Stability:** Stable
**Compatibility:** Modern web browsers (Chrome, Firefox, Safari, Edge)

---

## Future Enhancements

Planned features for future versions:
- Module system with SHOLAY
- Class support with SHAHENSHAH
- Exception handling improvements
- More built-in functions
- File I/O operations
- Network requests
- Database connectivity

---

*This API reference is for AmitabhC version 2.0.0. For updates, visit the [official repository](https://github.com/jay123anta/amitabhc).*