# AmitabhC v4.0.0 Tutorial -- A Bollywood Journey Through Code

*"Aaj khush toh bahut hoge tum!" -- because today, you learn to code like the Shahenshah himself.*

Welcome to the definitive tutorial for AmitabhC v4.0.0, the programming language where every keyword is an Amitabh Bachchan film, character, or iconic dialogue. This tutorial is structured as a Bollywood screenplay in 10 Scenes. Each Scene builds on the last. By the finale, you will have built a complete KBC quiz game.

---

## Table of Contents

- [Scene 1: Pehla Kadam (First Step) -- Hello World](#scene-1-pehla-kadam-first-step--hello-world)
- [Scene 2: Vijay Ka Khel (The Hero's Game) -- Variables](#scene-2-vijay-ka-khel-the-heros-game--variables)
- [Scene 3: Faisla (The Decision) -- Conditionals](#scene-3-faisla-the-decision--conditionals)
- [Scene 4: Baar Baar (Again and Again) -- Loops](#scene-4-baar-baar-again-and-again--loops)
- [Scene 5: Naam Ka Jadoo (Magic of Names) -- Functions](#scene-5-naam-ka-jadoo-magic-of-names--functions)
- [Scene 6: Khazana Ki Duniya (World of Treasures) -- Arrays](#scene-6-khazana-ki-duniya-world-of-treasures--arrays)
- [Scene 7: Shahenshah Ka Raaj (Emperor's Rule) -- Strings](#scene-7-shahenshah-ka-raaj-emperors-rule--strings)
- [Scene 8: Coolie Ka Hisab (The Worker's Math) -- Math and Time](#scene-8-coolie-ka-hisab-the-workers-math--math-and-time)
- [Scene 9: Agneepath Pe Chalna (Walking the Path of Fire) -- Error Handling and Advanced Features](#scene-9-agneepath-pe-chalna-walking-the-path-of-fire--error-handling-and-advanced-features)
- [Scene 10: KBC Finale -- Build a Complete Quiz Game](#scene-10-kbc-finale--build-a-complete-quiz-game)

---

## Scene 1: Pehla Kadam (First Step) -- Hello World

*Every legend begins with a single step. Every Amitabh film begins with LIGHTS. So does every AmitabhC program.*

### The LIGHTS / CAMERA / ACTION Structure

Every AmitabhC program is framed like a Bollywood film shoot. Three keywords give it structure:

| Keyword  | Role                        |
|----------|-----------------------------|
| `LIGHTS` | Marks the start of the program (the set is ready) |
| `CAMERA` | Marks where your actual code begins (cameras rolling) |
| `ACTION` | Marks the end of the program (cut!) |

These three must always appear in this exact order. `LIGHTS` is the very first line, `ACTION` is the very last.

### Your First Program

```amitabhc
LIGHTS
CAMERA
    BOLO "Namaste Duniya!"
ACTION
```

**Output:**
```
Namaste Duniya!
```

`BOLO` (meaning "speak") prints text to the console. It accepts strings in double quotes, numbers, or expressions.

### Multiple Statements and Comments

Comments begin with `//` and are ignored by the interpreter. Use them to explain your thinking.

```amitabhc
LIGHTS
CAMERA
    // This is a comment -- the interpreter will skip this line
    BOLO "Rishtey mein toh hum tumhare compiler lagte hain!"
    BOLO "Main hoon AmitabhC!"  // Inline comment
    BOLO 42                      // Numbers work too
ACTION
```

**Output:**
```
Rishtey mein toh hum tumhare compiler lagte hain!
Main hoon AmitabhC!
42
```

### Getting User Input with SUNO

`SUNO` (meaning "listen") prompts the user for input and stores it in a variable. Numeric input is automatically converted to a number.

```amitabhc
LIGHTS
CAMERA
    BOLO "Aapka naam kya hai?"
    SUNO userName
    BOLO "Namaste, " + userName + " ji!"
ACTION
```

### Try It Yourself

Write a program that asks the user for their favourite Amitabh Bachchan film and prints: "Waah! [film] is a classic!"

### Common Mistakes to Avoid

1. **Forgetting LIGHTS or ACTION.** The interpreter will throw an error: "Program must start with LIGHTS" or "Program must end with ACTION."
2. **Placing code before CAMERA.** All executable code must come after `CAMERA` and before `ACTION`.
3. **Missing double quotes around strings.** `BOLO Hello` will fail. Write `BOLO "Hello"`.
4. **Using lowercase keywords.** `bolo` will not work. All AmitabhC keywords are UPPERCASE.

---

## Scene 2: Vijay Ka Khel (The Hero's Game) -- Variables

*Vijay -- the name Amitabh made immortal across dozens of films. In AmitabhC, VIJAY gives birth to every variable.*

### Declaring Variables with VIJAY

`VIJAY` creates a mutable variable. You give it a name and an initial value.

```amitabhc
LIGHTS
CAMERA
    VIJAY name = "Amitabh Bachchan"
    VIJAY age = 82
    VIJAY height = 6.2

    BOLO "Name: " + name
    BOLO "Age: " + age
    BOLO "Height: " + height + " feet"
ACTION
```

**Output:**
```
Name: Amitabh Bachchan
Age: 82
Height: 6.2 feet
```

Variables can be reassigned later without the `VIJAY` prefix (bare assignment), as long as they already exist:

```amitabhc
LIGHTS
CAMERA
    VIJAY score = 10
    BOLO "Before: " + score
    score = 50
    BOLO "After: " + score
ACTION
```

**Output:**
```
Before: 10
After: 50
```

### Constants with DON

`DON` creates an immutable constant. Once set, its value cannot be changed -- just like the Don himself, who can never be caught.

```amitabhc
LIGHTS
CAMERA
    DON PI = 3.14159
    DON MAX_LIVES = 3

    BOLO "Pi: " + PI
    BOLO "Max lives: " + MAX_LIVES

    // The next line would cause an error if uncommented:
    // PI = 3.14
ACTION
```

Attempting to reassign a `DON` constant triggers: *"Main aaj bhi phenke hue paise nahin uthata!" -- Cannot reassign constant.*

### Data Types

AmitabhC supports five core types:

| Type      | Keyword/Syntax       | Examples                     |
|-----------|----------------------|------------------------------|
| Number    | Integer or decimal   | `42`, `3.14`, `-10`          |
| String    | Double-quoted text   | `"Hello"`, `"Amitabh"`       |
| Boolean   | `SHAKTI` / `KAALIA`  | `SHAKTI` (true), `KAALIA` (false) |
| Null      | `LAAWARIS`           | Represents "no value"        |
| Array     | `{1, 2, 3}`         | See Scene 6                  |

```amitabhc
LIGHTS
CAMERA
    VIJAY isLegend = SHAKTI
    VIJAY isRetired = KAALIA
    VIJAY middleName = LAAWARIS

    BOLO "Legend? " + isLegend
    BOLO "Retired? " + isRetired
    BOLO "Middle name: " + middleName
ACTION
```

**Output:**
```
Legend? SHAKTI
Retired? KAALIA
Middle name: LAAWARIS
```

### String Interpolation

You can embed expressions directly inside strings using `${expression}` syntax. This is cleaner than concatenation with `+`.

```amitabhc
LIGHTS
CAMERA
    VIJAY name = "Vijay"
    VIJAY city = "Mumbai"
    BOLO "Mere paas ${name} hai, aur ${city} bhi hai!"

    VIJAY a = 10
    VIJAY b = 20
    BOLO "Sum of ${a} and ${b} is ${a + b}"
ACTION
```

**Output:**
```
Mere paas Vijay hai, aur Mumbai bhi hai!
Sum of 10 and 20 is 30
```

### Try It Yourself

Create a program that stores your name, birth year, and a constant for the current year. Calculate and print your age using string interpolation.

### Common Mistakes to Avoid

1. **Using a variable before declaring it.** `BOLO x` without a prior `VIJAY x = ...` will throw: *"Don ko pakadna mushkil hi nahi, naamumkin hai!" -- Undefined variable.*
2. **Reassigning a DON constant.** Constants are permanent. Use `VIJAY` if you need a value that changes.
3. **Confusing SHAKTI/KAALIA with strings.** `VIJAY flag = "SHAKTI"` creates a string, not a boolean. Write `VIJAY flag = SHAKTI` (no quotes).

---

## Scene 3: Faisla (The Decision) -- Conditionals

*In Deewar, Vijay stood at a crossroads and made his choice. In AmitabhC, AGAR is how your program makes choices.*

### The AGAR / BAS Block (if)

`AGAR` (meaning "if") evaluates a condition. If the condition is true, the indented block runs. `BAS` (meaning "enough") closes the block.

```amitabhc
LIGHTS
CAMERA
    VIJAY age = 25

    AGAR age >= 18
        BOLO "You can vote!"
    BAS
ACTION
```

### AGAR / NAHI TOH / BAS (if / else)

`NAHI TOH` (meaning "otherwise") provides an alternative path.

```amitabhc
LIGHTS
CAMERA
    VIJAY marks = 35

    AGAR marks >= 40
        BOLO "Pass! Well done."
    NAHI TOH
        BOLO "Fail. Try harder next time."
    BAS
ACTION
```

**Output:**
```
Fail. Try harder next time.
```

### NAHI TOH AGAR (else if)

Chain multiple conditions using `NAHI TOH AGAR`.

```amitabhc
LIGHTS
CAMERA
    VIJAY marks = 85

    AGAR marks >= 90
        BOLO "Grade: A+"
    NAHI TOH AGAR marks >= 80
        BOLO "Grade: A"
    NAHI TOH AGAR marks >= 70
        BOLO "Grade: B"
    NAHI TOH AGAR marks >= 60
        BOLO "Grade: C"
    NAHI TOH
        BOLO "Grade: F -- Need improvement"
    BAS
ACTION
```

**Output:**
```
Grade: A
```

### Comparison Operators

| Operator | Meaning                |
|----------|------------------------|
| `==`     | Equal to               |
| `!=`     | Not equal to           |
| `<`      | Less than              |
| `>`      | Greater than           |
| `<=`     | Less than or equal to  |
| `>=`     | Greater than or equal to |

### Logical Operators

| Operator | Meaning     | Example                          |
|----------|-------------|----------------------------------|
| `&&`     | Logical AND | `age >= 18 && hasID == SHAKTI`   |
| `\|\|`  | Logical OR  | `isVIP == SHAKTI \|\| hasPass == SHAKTI` |
| `!`      | Logical NOT | `!isBlocked`                     |

```amitabhc
LIGHTS
CAMERA
    VIJAY age = 25
    VIJAY hasLicense = SHAKTI

    AGAR age >= 18 && hasLicense == SHAKTI
        BOLO "You can drive!"
    NAHI TOH
        BOLO "You cannot drive."
    BAS
ACTION
```

### Nested Conditions

Conditions can be nested inside other conditions. Each `AGAR` needs its own `BAS`.

```amitabhc
LIGHTS
CAMERA
    VIJAY role = "admin"
    VIJAY isActive = SHAKTI

    AGAR isActive == SHAKTI
        AGAR role == "admin"
            BOLO "Welcome, Administrator!"
        NAHI TOH
            BOLO "Welcome, User!"
        BAS
    NAHI TOH
        BOLO "Account is inactive."
    BAS
ACTION
```

### Try It Yourself

Write a program that takes a number via `SUNO` and prints whether it is positive, negative, or zero.

### Common Mistakes to Avoid

1. **Forgetting BAS.** Every `AGAR` block must close with `BAS`. The error message: *"AGAR block must end with BAS!"*
2. **Using `=` instead of `==` in conditions.** `AGAR x = 5` is an assignment error. Use `AGAR x == 5`.
3. **Mismatched nesting.** When nesting conditions, each inner `AGAR` needs its own `BAS`. Count your BAS keywords carefully.

---

## Scene 4: Baar Baar (Again and Again) -- Loops

*Some dialogues deserve to be repeated. "Don ko pakadna mushkil hi nahi, namumkin hai!" -- and so loops were born.*

### For Loop: BAAR BAAR / KHATAM

`BAAR BAAR` (meaning "again and again") repeats a block a fixed number of times. `KHATAM` (meaning "finished") closes the loop. The built-in variable `_GINTI` (meaning "count") tracks the current iteration, starting at 0.

```amitabhc
LIGHTS
CAMERA
    BAAR BAAR 5
        BOLO "Iteration: " + _GINTI
    KHATAM
ACTION
```

**Output:**
```
Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
```

You can also name your own counter variable with `MEIN`:

```amitabhc
LIGHTS
CAMERA
    BAAR BAAR 3 MEIN i
        BOLO "Round ${i + 1}: Fight!"
    KHATAM
ACTION
```

**Output:**
```
Round 1: Fight!
Round 2: Fight!
Round 3: Fight!
```

### While Loop: JAB TAK / RAHEGA

`JAB TAK` (meaning "as long as") runs while a condition remains true. `RAHEGA` (meaning "will continue") closes the loop.

```amitabhc
LIGHTS
CAMERA
    VIJAY countdown = 5

    JAB TAK countdown > 0
        BOLO countdown + "..."
        countdown = countdown - 1
    RAHEGA

    BOLO "Launch!"
ACTION
```

**Output:**
```
5...
4...
3...
2...
1...
Launch!
```

### Do-While Loop: ZANJEER_LOOP / TAB TAK

`ZANJEER_LOOP` executes the body at least once, then checks the condition at the end with `TAB TAK` (meaning "until then"). The loop continues while the condition is true.

```amitabhc
LIGHTS
CAMERA
    VIJAY attempts = 0

    ZANJEER_LOOP
        BOLO "Attempt ${attempts + 1}"
        BADHAO attempts
    TAB TAK attempts < 3
ACTION
```

**Output:**
```
Attempt 1
Attempt 2
Attempt 3
```

### For-Each Loop: HAR EK / MEIN / KHATAM

`HAR EK` (meaning "each one") iterates over every element of an array. The `_GINTI` variable tracks the index.

```amitabhc
LIGHTS
CAMERA
    VIJAY movies[] = {"Sholay", "Deewar", "Don", "Agneepath"}

    HAR EK film MEIN movies
        BOLO "${_GINTI + 1}. ${film}"
    KHATAM
ACTION
```

**Output:**
```
1. Sholay
2. Deewar
3. Don
4. Agneepath
```

### Loop Control: DEEWAR and SILSILA

- `DEEWAR` (the wall) -- breaks out of the current loop entirely.
- `SILSILA` (the sequence continues) -- skips to the next iteration.

```amitabhc
LIGHTS
CAMERA
    // Print numbers 0-9, skip 3, stop at 7
    BAAR BAAR 10 MEIN i
        AGAR i == 3
            SILSILA
        BAS
        AGAR i == 7
            BOLO "Hit the DEEWAR at 7!"
            DEEWAR
        BAS
        BOLO i
    KHATAM
ACTION
```

**Output:**
```
0
1
2
4
5
6
Hit the DEEWAR at 7!
```

### Increment and Decrement: BADHAO and GHATAO

`BADHAO` (meaning "increase") adds 1. `GHATAO` (meaning "decrease") subtracts 1.

```amitabhc
LIGHTS
CAMERA
    VIJAY counter = 10
    BADHAO counter
    BOLO counter
    GHATAO counter
    GHATAO counter
    BOLO counter
ACTION
```

**Output:**
```
11
9
```

### Compound Assignment Operators

AmitabhC supports `+=`, `-=`, `*=`, `/=`, and `%=` for concise updates.

```amitabhc
LIGHTS
CAMERA
    VIJAY total = 100
    total += 50
    BOLO "After +=50: " + total
    total -= 30
    BOLO "After -=30: " + total
    total *= 2
    BOLO "After *=2: " + total
ACTION
```

**Output:**
```
After +=50: 150
After -=30: 120
After *=2: 240
```

### Try It Yourself

Write a program that prints all even numbers from 2 to 20 using a `JAB TAK` loop and `BADHAO`.

### Common Mistakes to Avoid

1. **Infinite loops.** If you use `JAB TAK`, make sure the condition eventually becomes false. AmitabhC has a safety limit of 10,000 iterations.
2. **Forgetting KHATAM or RAHEGA.** `BAAR BAAR` must end with `KHATAM`, `JAB TAK` must end with `RAHEGA`.
3. **Using DEEWAR outside a loop.** `DEEWAR` (break) and `SILSILA` (continue) only work inside loops.
4. **Not updating the loop variable in JAB TAK.** If `count` never changes, the loop runs forever.

---

## Scene 5: Naam Ka Jadoo (Magic of Names) -- Functions

*A function is like a scene in a film -- self-contained, reusable, and called whenever the director needs it. In AmitabhC, NAAM defines a function and PURA ends it.*

### Defining and Calling Functions

```amitabhc
LIGHTS
CAMERA
    NAAM greet()
        BOLO "Namaste!"
        BOLO "Welcome to the world of AmitabhC."
    PURA

    // Call the function
    greet()
ACTION
```

**Output:**
```
Namaste!
Welcome to the world of AmitabhC.
```

### Functions with Parameters

Parameters are listed inside parentheses, separated by commas.

```amitabhc
LIGHTS
CAMERA
    NAAM introduce(name, role)
        BOLO "${name} plays the role of ${role}."
    PURA

    introduce("Amitabh", "Vijay")
    introduce("Dharmendra", "Veeru")
ACTION
```

**Output:**
```
Amitabh plays the role of Vijay.
Dharmendra plays the role of Veeru.
```

### Returning Values with WAPAS

`WAPAS` (meaning "return") sends a value back to the caller.

```amitabhc
LIGHTS
CAMERA
    NAAM add(a, b)
        WAPAS a + b
    PURA

    NAAM multiply(x, y)
        WAPAS x * y
    PURA

    VIJAY sum = add(10, 20)
    BOLO "10 + 20 = " + sum

    VIJAY product = multiply(6, 7)
    BOLO "6 x 7 = " + product

    // Nested function calls
    VIJAY result = add(multiply(3, 4), multiply(5, 6))
    BOLO "(3*4) + (5*6) = " + result
ACTION
```

**Output:**
```
10 + 20 = 30
6 x 7 = 42
(3*4) + (5*6) = 42
```

### Recursion: A Function Calling Itself

The classic factorial example. AmitabhC supports recursion up to a depth of 100.

```amitabhc
LIGHTS
CAMERA
    NAAM factorial(n)
        AGAR n <= 1
            WAPAS 1
        NAHI TOH
            WAPAS n * factorial(n - 1)
        BAS
    PURA

    BOLO "5! = " + factorial(5)
    BOLO "7! = " + factorial(7)
    BOLO "10! = " + factorial(10)
ACTION
```

**Output:**
```
5! = 120
7! = 5040
10! = 3628800
```

### A Practical Example: Fibonacci

```amitabhc
LIGHTS
CAMERA
    NAAM fib(n)
        AGAR n <= 1
            WAPAS n
        NAHI TOH
            WAPAS fib(n - 1) + fib(n - 2)
        BAS
    PURA

    BAAR BAAR 10 MEIN i
        BOLO "fib(${i}) = ${fib(i)}"
    KHATAM
ACTION
```

### Try It Yourself

Write a function `power(base, exp)` that calculates `base` raised to the power `exp` using recursion (without using `COOLIE.pow`).

### Common Mistakes to Avoid

1. **Forgetting PURA.** Every `NAAM` block must end with `PURA`.
2. **Using WAPAS outside a function.** `WAPAS` only works inside a `NAAM ... PURA` block.
3. **Infinite recursion.** Always have a base case in recursive functions. AmitabhC will throw *"Deewar bahut oonchi ho gayi!"* if you exceed 100 levels of depth.

---

## Scene 6: Khazana Ki Duniya (World of Treasures) -- Arrays

*KHAZANA means "treasure." An array is a treasure chest of values, indexed and ordered.*

### Creating Arrays

Declare an array with `VIJAY`, empty brackets `[]`, and curly braces `{}` for values.

```amitabhc
LIGHTS
CAMERA
    VIJAY scores[] = {85, 92, 78, 95, 88}
    VIJAY movies[] = {"Sholay", "Deewar", "Don", "Agneepath"}
    VIJAY empty[] = {}

    BOLO "First score: " + scores[0]
    BOLO "Last movie: " + movies[3]
    BOLO "Number of scores: " + scores
ACTION
```

### Array Access and Assignment

Arrays are zero-indexed. You can read and write individual elements.

```amitabhc
LIGHTS
CAMERA
    VIJAY colors[] = {"Red", "Green", "Blue"}

    BOLO "Original: " + colors[1]
    colors[1] = "Yellow"
    BOLO "Changed: " + colors[1]
ACTION
```

**Output:**
```
Original: Green
Changed: Yellow
```

### KHAZANA Namespace Functions

The `KHAZANA` namespace provides powerful array operations.

| Function                      | Description                             |
|-------------------------------|-----------------------------------------|
| `KHAZANA.length(arr)`         | Returns the number of elements          |
| `KHAZANA.push(arr, value)`    | Adds a value to the end                 |
| `KHAZANA.pop(arr)`            | Removes and returns the last element    |
| `KHAZANA.shift(arr)`          | Removes and returns the first element   |
| `KHAZANA.unshift(arr, value)` | Adds a value to the beginning           |
| `KHAZANA.slice(arr, start, end)` | Returns a sub-array                  |
| `KHAZANA.join(arr, separator)` | Joins elements into a string           |
| `KHAZANA.reverse(arr)`       | Returns a reversed copy                  |
| `KHAZANA.includes(arr, val)` | Checks if a value exists (SHAKTI/KAALIA) |
| `KHAZANA.indexOf(arr, val)`  | Returns index of value (-1 if not found) |
| `KHAZANA.concat(arr1, arr2)` | Merges two arrays                        |
| `KHAZANA.sort(arr)`          | Returns a sorted copy                    |

```amitabhc
LIGHTS
CAMERA
    VIJAY heroes[] = {"Vijay", "Jai"}

    KHAZANA.push(heroes, "Anthony")
    BOLO "Heroes: " + KHAZANA.join(heroes, ", ")
    BOLO "Count: " + KHAZANA.length(heroes)

    VIJAY last = KHAZANA.pop(heroes)
    BOLO "Removed: " + last
    BOLO "Has Jai? " + KHAZANA.includes(heroes, "Jai")
ACTION
```

**Output:**
```
Heroes: Vijay, Jai, Anthony
Count: 3
Removed: Anthony
Has Jai? SHAKTI
```

### Iterating with HAR EK

```amitabhc
LIGHTS
CAMERA
    VIJAY nums[] = {10, 20, 30, 40, 50}
    VIJAY total = 0

    HAR EK n MEIN nums
        total += n
    KHATAM

    BOLO "Sum: " + total
    BOLO "Average: " + total / KHAZANA.length(nums)
ACTION
```

**Output:**
```
Sum: 150
Average: 30
```

### Try It Yourself

Create an array of 5 numbers. Write a program that finds and prints the maximum value using a `HAR EK` loop.

### Common Mistakes to Avoid

1. **Out-of-bounds access.** Accessing `arr[5]` on a 5-element array (indices 0-4) throws: *"Hum jahan khade hote hain, line wahi se shuru hoti hai!"*
2. **Forgetting the `[]` in declaration.** `VIJAY scores = {1, 2, 3}` without `[]` will not create an array.
3. **Modifying an array while iterating with HAR EK.** This can lead to unexpected behavior.

---

## Scene 7: Shahenshah Ka Raaj (Emperor's Rule) -- Strings

*The Shahenshah commands language itself. The SHAHENSHAH namespace gives you mastery over strings.*

### String Concatenation

Use `+` to join strings together.

```amitabhc
LIGHTS
CAMERA
    VIJAY first = "Amitabh"
    VIJAY last = "Bachchan"
    VIJAY full = first + " " + last
    BOLO full
ACTION
```

**Output:**
```
Amitabh Bachchan
```

### Escape Sequences

AmitabhC supports these escape sequences inside double-quoted strings:

| Sequence | Result        |
|----------|---------------|
| `\n`     | Newline       |
| `\t`     | Tab           |
| `\\`     | Backslash     |
| `\"`     | Double quote  |

```amitabhc
LIGHTS
CAMERA
    BOLO "Line One\nLine Two"
    BOLO "Name:\tAmitabh"
    BOLO "He said, \"I am the Shahenshah!\""
ACTION
```

**Output:**
```
Line One
Line Two
Name:	Amitabh
He said, "I am the Shahenshah!"
```

### String Interpolation

As introduced in Scene 2, `${expression}` embeds values directly into strings.

```amitabhc
LIGHTS
CAMERA
    VIJAY film = "Sholay"
    VIJAY year = 1975
    BOLO "${film} was released in ${year}. That was ${2026 - year} years ago."
ACTION
```

**Output:**
```
Sholay was released in 1975. That was 51 years ago.
```

### SHAHENSHAH Namespace Functions

The `SHAHENSHAH` namespace is your string toolkit.

| Function | Description |
|----------|-------------|
| `SHAHENSHAH.length(str)` | Returns string length |
| `SHAHENSHAH.uppercase(str)` | Converts to uppercase |
| `SHAHENSHAH.lowercase(str)` | Converts to lowercase |
| `SHAHENSHAH.contains(str, search)` | Checks if `search` exists in `str` |
| `SHAHENSHAH.replace(str, old, new)` | Replaces all occurrences |
| `SHAHENSHAH.trim(str)` | Removes leading/trailing whitespace |
| `SHAHENSHAH.substring(str, start, end)` | Extracts a portion |
| `SHAHENSHAH.charAt(str, index)` | Returns character at index |
| `SHAHENSHAH.indexOf(str, search)` | Returns index of first occurrence |
| `SHAHENSHAH.split(str, delimiter)` | Splits into an array |
| `SHAHENSHAH.startsWith(str, prefix)` | Checks prefix |
| `SHAHENSHAH.endsWith(str, suffix)` | Checks suffix |
| `SHAHENSHAH.repeat(str, count)` | Repeats the string |
| `SHAHENSHAH.reverse(str)` | Reverses the string |
| `SHAHENSHAH.padStart(str, length, char)` | Pads from the start |
| `SHAHENSHAH.padEnd(str, length, char)` | Pads from the end |

```amitabhc
LIGHTS
CAMERA
    VIJAY dialogue = "  Don ko pakadna mushkil hai  "

    BOLO SHAHENSHAH.trim(dialogue)
    BOLO SHAHENSHAH.uppercase("vijay")
    BOLO SHAHENSHAH.length("Amitabh")
    BOLO SHAHENSHAH.contains("Sholay", "lay")
    BOLO SHAHENSHAH.replace("Hello World", "World", "Duniya")
ACTION
```

**Output:**
```
Don ko pakadna mushkil hai
VIJAY
7
SHAKTI
Hello Duniya
```

### Practical Example: Name Formatter

```amitabhc
LIGHTS
CAMERA
    NAAM formatName(first, last)
        VIJAY f = SHAHENSHAH.trim(first)
        VIJAY l = SHAHENSHAH.trim(last)
        VIJAY fUpper = SHAHENSHAH.uppercase(SHAHENSHAH.charAt(f, 0))
        VIJAY fRest = SHAHENSHAH.lowercase(SHAHENSHAH.substring(f, 1))
        VIJAY lUpper = SHAHENSHAH.uppercase(l)
        WAPAS fUpper + fRest + " " + lUpper
    PURA

    BOLO formatName("amitabh", "bachchan")
    BOLO formatName("  dharmendra  ", "deol")
ACTION
```

**Output:**
```
Amitabh BACHCHAN
Dharmendra DEOL
```

### Try It Yourself

Write a function `isPalindrome(word)` that returns `SHAKTI` if the word reads the same forwards and backwards, using `SHAHENSHAH.reverse` and `SHAHENSHAH.lowercase`.

### Common Mistakes to Avoid

1. **Forgetting that string indices are zero-based.** `SHAHENSHAH.charAt("Hello", 5)` is out of bounds for a 5-character string (valid indices: 0-4).
2. **Passing wrong argument count.** Most `SHAHENSHAH` functions require the string as the first argument. `SHAHENSHAH.length()` with no arguments will error.
3. **Confusing `SHAHENSHAH.contains` return value.** It returns `SHAKTI` or `KAALIA`, not the matched text.

---

## Scene 8: Coolie Ka Hisab (The Worker's Math) -- Math and Time

*Coolie carried heavy loads. The COOLIE namespace carries the heavy mathematical lifting. NASEEB handles the unpredictable -- time itself.*

### COOLIE Math Functions

| Function | Description |
|----------|-------------|
| `COOLIE.abs(n)` | Absolute value |
| `COOLIE.floor(n)` | Round down |
| `COOLIE.ceil(n)` | Round up |
| `COOLIE.round(n)` | Round to nearest |
| `COOLIE.sqrt(n)` | Square root |
| `COOLIE.pow(base, exp)` | Exponentiation |
| `COOLIE.min(a, b)` | Smaller of two |
| `COOLIE.max(a, b)` | Larger of two |
| `COOLIE.random()` | Random number between 0 and 1 |
| `COOLIE.sin(n)`, `COOLIE.cos(n)`, `COOLIE.tan(n)` | Trigonometric functions |
| `COOLIE.log(n)` | Natural logarithm |
| `COOLIE.PI()` | Value of Pi |
| `COOLIE.E()` | Value of Euler's number |

```amitabhc
LIGHTS
CAMERA
    BOLO "Square root of 144: " + COOLIE.sqrt(144)
    BOLO "2 to the power 10: " + COOLIE.pow(2, 10)
    BOLO "Pi: " + COOLIE.PI()
    BOLO "Floor of 3.7: " + COOLIE.floor(3.7)
    BOLO "Ceil of 3.2: " + COOLIE.ceil(3.2)
    BOLO "Max of 42 and 99: " + COOLIE.max(42, 99)
    BOLO "Absolute of -15: " + COOLIE.abs(-15)
ACTION
```

**Output:**
```
Square root of 144: 12
2 to the power 10: 1024
Pi: 3.141592653589793
Floor of 3.7: 3
Ceil of 3.2: 4
Max of 42 and 99: 99
Absolute of -15: 15
```

### NASEEB Time Functions

`NASEEB` (meaning "fate/destiny") provides time-related information.

| Function | Returns |
|----------|---------|
| `NASEEB.abhi()` | Current timestamp in milliseconds |
| `NASEEB.saal()` | Current year |
| `NASEEB.mahina()` | Current month (1-12) |
| `NASEEB.din()` | Current day of month |
| `NASEEB.ghanta()` | Current hour (0-23) |
| `NASEEB.minute()` | Current minute |
| `NASEEB.second()` | Current second |
| `NASEEB.tarikh()` | Formatted date (DD-MM-YYYY) |
| `NASEEB.waqt()` | Formatted time (HH:MM:SS) |
| `NASEEB.timestamp()` | Unix timestamp in seconds |

```amitabhc
LIGHTS
CAMERA
    BOLO "Today's date: " + NASEEB.tarikh()
    BOLO "Current time: " + NASEEB.waqt()
    BOLO "Year: " + NASEEB.saal()

    VIJAY birthYear = 1942
    VIJAY currentAge = NASEEB.saal() - birthYear
    BOLO "Amitabh Bachchan is approximately ${currentAge} years old."
ACTION
```

### ZANJEER Type-Checking Functions

`ZANJEER` (meaning "chain") lets you inspect and convert types.

| Function | Description |
|----------|-------------|
| `ZANJEER.type(val)` | Returns type name: `"ank"`, `"shabd"`, `"shakti_kaalia"`, `"khazana"`, `"deewar"`, `"laawaris"` |
| `ZANJEER.isAnk(val)` | Is it a number? |
| `ZANJEER.isShabd(val)` | Is it a string? |
| `ZANJEER.isKhazana(val)` | Is it an array? |
| `ZANJEER.isDeewar(val)` | Is it a dictionary? |
| `ZANJEER.isLaawaris(val)` | Is it null? |
| `ZANJEER.toAnk(val)` | Convert to number |
| `ZANJEER.toShabd(val)` | Convert to string |
| `ZANJEER.toShaktiKaalia(val)` | Convert to boolean |

```amitabhc
LIGHTS
CAMERA
    VIJAY x = 42
    VIJAY y = "hello"
    VIJAY z = SHAKTI

    BOLO ZANJEER.type(x)
    BOLO ZANJEER.type(y)
    BOLO ZANJEER.type(z)
    BOLO ZANJEER.isAnk(x)
    BOLO ZANJEER.toAnk("123") + 1
ACTION
```

**Output:**
```
ank
shabd
shakti_kaalia
SHAKTI
124
```

### Practical Example: Simple Calculator

```amitabhc
LIGHTS
CAMERA
    NAAM calculate(a, b, op)
        AGAR op == "+"
            WAPAS a + b
        NAHI TOH AGAR op == "-"
            WAPAS a - b
        NAHI TOH AGAR op == "*"
            WAPAS a * b
        NAHI TOH AGAR op == "/"
            AGAR b == 0
                BOLO "Error: Division by zero!"
                WAPAS 0
            BAS
            WAPAS a / b
        NAHI TOH AGAR op == "sqrt"
            WAPAS COOLIE.sqrt(a)
        NAHI TOH AGAR op == "pow"
            WAPAS COOLIE.pow(a, b)
        NAHI TOH
            BOLO "Unknown operation: " + op
            WAPAS 0
        BAS
    PURA

    BOLO "25 + 17 = " + calculate(25, 17, "+")
    BOLO "100 - 37 = " + calculate(100, 37, "-")
    BOLO "12 * 8 = " + calculate(12, 8, "*")
    BOLO "sqrt(256) = " + calculate(256, 0, "sqrt")
    BOLO "2^16 = " + calculate(2, 16, "pow")
ACTION
```

**Output:**
```
25 + 17 = 42
100 - 37 = 63
12 * 8 = 96
sqrt(256) = 16
2^16 = 65536
```

### Try It Yourself

Write a program that calculates the area and circumference of a circle given its radius. Use `COOLIE.PI()` and `COOLIE.pow()`.

### Common Mistakes to Avoid

1. **Taking the square root of a negative number.** `COOLIE.sqrt(-1)` throws an error.
2. **Division by zero.** Both direct division and `COOLIE.pow` can overflow. Always validate inputs.
3. **Assuming NASEEB.mahina() is zero-indexed.** It returns 1-12, not 0-11.

---

## Scene 9: Agneepath Pe Chalna (Walking the Path of Fire) -- Error Handling and Advanced Features

*"Agneepath, Agneepath, Agneepath." The path of fire is treacherous, but the hero walks it anyway. Error handling ensures your program survives the flames.*

### Try/Catch/Finally: AGNEEPATH / MRITYU / PRATIGYA

- `AGNEEPATH` -- begins a protected block (try).
- `MRITYU errorVar` -- catches errors, storing the message in `errorVar` (catch).
- `PRATIGYA` -- runs cleanup code regardless of success or failure (finally).
- `KHATAM` -- closes the entire block.

```amitabhc
LIGHTS
CAMERA
    AGNEEPATH
        VIJAY result = 10 / 0
        BOLO "This line will not run."
    MRITYU err
        BOLO "Caught an error: " + err
    PRATIGYA
        BOLO "Cleanup complete. This always runs."
    KHATAM
ACTION
```

**Output:**
```
Caught an error: Division by zero - "Zero se divide kaise kar sakte hain?"
Cleanup complete. This always runs.
```

You can use `AGNEEPATH` without `MRITYU` (just `PRATIGYA`) or without `PRATIGYA` (just `MRITYU`).

```amitabhc
LIGHTS
CAMERA
    // Graceful handling of undefined variables
    AGNEEPATH
        BOLO unknownVariable
    MRITYU err
        BOLO "Variable not found! Using default."
        VIJAY unknownVariable = "default"
        BOLO unknownVariable
    KHATAM
ACTION
```

**Output:**
```
Variable not found! Using default.
default
```

### Switch-Case: KBC_SAWAAL

`KBC_SAWAAL` works like a switch statement. Think of it as "the KBC question" -- each `OPTION` is an answer, and `SAHI_JAWAB` (meaning "correct answer") is the default.

```amitabhc
LIGHTS
CAMERA
    VIJAY day = 3

    KBC_SAWAAL day
        OPTION 1
            BOLO "Monday - Somvaar"
        OPTION 2
            BOLO "Tuesday - Mangalvaar"
        OPTION 3
            BOLO "Wednesday - Budhvaar"
        OPTION 4
            BOLO "Thursday - Guruvaar"
        OPTION 5
            BOLO "Friday - Shukravaar"
        SAHI_JAWAB
            BOLO "Weekend!"
    AGLE_SAWAAL
ACTION
```

**Output:**
```
Wednesday - Budhvaar
```

There is no fallthrough -- once a matching `OPTION` runs, execution jumps past `AGLE_SAWAAL`.

### Dictionaries with DEEWAR_BANAO

`DEEWAR_BANAO` (meaning "build a wall") creates a dictionary -- a collection of key-value pairs.

```amitabhc
LIGHTS
CAMERA
    VIJAY hero = DEEWAR_BANAO{"name": "Vijay", "film": "Deewar", "year": 1975}

    BOLO "Name: " + hero["name"]
    BOLO "Film: " + hero["film"]
    BOLO "Year: " + hero["year"]

    // Modify a value
    hero["year"] = 2025
    BOLO "Updated year: " + hero["year"]
ACTION
```

**Output:**
```
Name: Vijay
Film: Deewar
Year: 1975
Updated year: 2025
```

You can also add keys with `DEEWAR_JODO` and use DEEWAR namespace functions:

```amitabhc
LIGHTS
CAMERA
    VIJAY config = DEEWAR_BANAO{"theme": "dark", "lang": "hi"}

    DEEWAR_JODO config "version" "4.0.0"

    BOLO "Keys: " + DEEWAR.keys(config)
    BOLO "Values: " + DEEWAR.values(config)
    BOLO "Size: " + DEEWAR.size(config)
    BOLO "Has theme? " + DEEWAR.hasKey(config, "theme")
ACTION
```

### DEEWAR Namespace Functions

| Function | Description |
|----------|-------------|
| `DEEWAR.keys(dict)` | Returns array of keys |
| `DEEWAR.values(dict)` | Returns array of values |
| `DEEWAR.hasKey(dict, key)` | Checks if key exists |
| `DEEWAR.remove(dict, key)` | Removes a key, returns value |
| `DEEWAR.size(dict)` | Number of key-value pairs |
| `DEEWAR.merge(dict1, dict2)` | Merges two dictionaries |

### Try It Yourself

Create a dictionary representing a movie with keys "title", "year", "hero", and "villain". Write a function that takes a dictionary and prints a formatted movie card using all four fields.

### Common Mistakes to Avoid

1. **Forgetting KHATAM after AGNEEPATH blocks.** Unlike `AGAR` (which uses `BAS`), error handling blocks close with `KHATAM`.
2. **Forgetting AGLE_SAWAAL after KBC_SAWAAL.** The switch block must be closed.
3. **Using array syntax on a non-dictionary.** `DEEWAR.keys(myArray)` will fail -- DEEWAR functions require dictionaries created with `DEEWAR_BANAO`.
4. **Accessing missing dictionary keys.** Returns `LAAWARIS` (null) instead of throwing an error.

---

## Scene 10: KBC Finale -- Build a Complete Quiz Game

*"Deviyon aur Sajjano!" The final Scene. You have learned every concept. Now, combine them all into a fully functional KBC (Kaun Banega Crorepati) quiz game.*

This program demonstrates: variables, constants, arrays, dictionaries, functions, loops, conditionals, switch-case, error handling, string interpolation, KHAZANA functions, and all KBC commands.

### The Complete KBC Quiz Game

```amitabhc
LIGHTS
CAMERA
    // ============================================================
    // KBC - KAUN BANEGA CROREPATI
    // A complete quiz game in AmitabhC v4.0.0
    // ============================================================

    DEVIYON_AUR_SAJJANO
    BOLO "============================================"
    BOLO "   KAUN BANEGA CROREPATI - AmitabhC Edition"
    BOLO "============================================\n"

    // Prize ladder (constant)
    DON PRIZES[] = {1000, 5000, 10000, 50000, 100000}

    // Questions stored as arrays: [question, optA, optB, optC, optD, correctAnswer]
    VIJAY q1[] = {"What keyword prints output in AmitabhC?", "PRINT", "BOLO", "DISPLAY", "ECHO", "B"}
    VIJAY q2[] = {"Which keyword declares a variable?", "LET", "VAR", "VIJAY", "DEFINE", "C"}
    VIJAY q3[] = {"What does SHAKTI represent?", "A string", "A number", "Boolean true", "Null", "C"}
    VIJAY q4[] = {"Which namespace handles math operations?", "SHAHENSHAH", "COOLIE", "NASEEB", "KHAZANA", "B"}
    VIJAY q5[] = {"What is the AmitabhC equivalent of 'break'?", "SILSILA", "KHATAM", "DEEWAR", "BAS", "C"}

    VIJAY questions[] = {q1, q2, q3, q4, q5}

    // Game state
    VIJAY score = 0
    VIJAY currentPrize = 0
    VIJAY questionsAnswered = 0
    VIJAY gameOver = KAALIA

    // Lifelines
    VIJAY hasLifeline5050 = SHAKTI
    VIJAY hasLifelineAudience = SHAKTI
    VIJAY hasLifelinePhone = SHAKTI

    // ---- Function: Display a question ----
    NAAM displayQuestion(qData, qNumber)
        VIJAY prizeAmount = PRIZES[qNumber]
        BOLO "\n--------------------------------------------"
        BOLO "Question ${qNumber + 1} for Rs. ${prizeAmount}:"
        BOLO "--------------------------------------------"
        BOLO qData[0]
        BOLO "  A) " + qData[1]
        BOLO "  B) " + qData[2]
        BOLO "  C) " + qData[3]
        BOLO "  D) " + qData[4]
    PURA

    // ---- Function: Show available lifelines ----
    NAAM showLifelines()
        BOLO "\nAvailable Lifelines:"
        AGAR hasLifeline5050 == SHAKTI
            BOLO "  [1] 50-50 Lifeline"
        BAS
        AGAR hasLifelineAudience == SHAKTI
            BOLO "  [2] Audience Poll"
        BAS
        AGAR hasLifelinePhone == SHAKTI
            BOLO "  [3] Phone a Friend"
        BAS
        BOLO "  [0] No lifeline, I will answer"
    PURA

    // ---- Function: Use a lifeline ----
    NAAM useLifeline(choice)
        AGAR choice == "1" && hasLifeline5050 == SHAKTI
            LIFELINE_FIFTY_FIFTY
            hasLifeline5050 = KAALIA
            WAPAS SHAKTI
        NAHI TOH AGAR choice == "2" && hasLifelineAudience == SHAKTI
            AUDIENCE_POLL
            hasLifelineAudience = KAALIA
            WAPAS SHAKTI
        NAHI TOH AGAR choice == "3" && hasLifelinePhone == SHAKTI
            PHONE_A_FRIEND "Bachchan Sahab"
            hasLifelinePhone = KAALIA
            WAPAS SHAKTI
        NAHI TOH
            BOLO "That lifeline is not available!"
            WAPAS KAALIA
        BAS
    PURA

    // ---- Function: Check answer ----
    NAAM checkAnswer(userAnswer, correctAnswer)
        VIJAY upper = SHAHENSHAH.uppercase(SHAHENSHAH.trim(userAnswer))
        AGAR upper == correctAnswer
            WAPAS SHAKTI
        NAHI TOH
            WAPAS KAALIA
        BAS
    PURA

    // ---- Main Game Loop ----
    BOLO "Let the game begin!\n"

    VIJAY qIndex = 0

    JAB TAK qIndex < KHAZANA.length(questions) && gameOver == KAALIA
        VIJAY currentQ = questions[qIndex]

        // Display the question
        displayQuestion(currentQ, qIndex)

        // Offer lifelines
        AGAR hasLifeline5050 == SHAKTI || hasLifelineAudience == SHAKTI || hasLifelinePhone == SHAKTI
            BOLO "\nWant to use a lifeline? (Y/N)"
            SUNO wantLifeline
            AGAR SHAHENSHAH.uppercase(wantLifeline) == "Y"
                showLifelines()
                BOLO "Choose lifeline number:"
                SUNO lifelineChoice
                useLifeline(lifelineChoice)
            BAS
        BAS

        // Get the answer
        BOLO "\nYour answer (A/B/C/D):"
        SUNO playerAnswer

        CONFIDENT_TO_LOCK_KIYA_JAYE

        // Check correctness
        VIJAY isCorrect = checkAnswer(playerAnswer, currentQ[5])

        AGAR isCorrect == SHAKTI
            COMPUTER_JI_LOCK_KIYA_JAYE
            currentPrize = PRIZES[qIndex]
            score = currentPrize
            questionsAnswered = questionsAnswered + 1
            BOLO "\nBilkul sahi jawab! You win Rs. ${currentPrize}!"
        NAHI TOH
            BOLO "\nGalat jawab!"
            BOLO "The correct answer was: ${currentQ[5]}"
            gameOver = SHAKTI
        BAS

        BADHAO qIndex
    RAHEGA

    // ---- Game Over Summary ----
    BOLO "\n============================================"
    BOLO "              GAME OVER"
    BOLO "============================================"
    BOLO "Questions answered correctly: ${questionsAnswered}"
    BOLO "Total winnings: Rs. ${score}"

    KBC_SAWAAL questionsAnswered
        OPTION 5
            BOLO "\nYou answered ALL questions correctly!"
            BOLO "You are the ultimate AmitabhC champion!"
            EXPERT_ADVICE
        OPTION 4
            BOLO "\nSo close to the top! Excellent performance!"
        OPTION 3
            BOLO "\nThree out of five -- a solid effort!"
        OPTION 2
            BOLO "\nGood start. Keep learning!"
        OPTION 1
            BOLO "\nOne correct. The journey has just begun."
        SAHI_JAWAB
            BOLO "\nBetter luck next time. Study the tutorial and try again!"
    AGLE_SAWAAL

    BOLO "\nThank you for playing KBC - AmitabhC Edition!"
    BOLO "\"Picture abhi baaki hai, mere dost!\""
ACTION
```

### What This Game Demonstrates

| Concept | Where It Appears |
|---------|-----------------|
| LIGHTS / CAMERA / ACTION | Program structure |
| VIJAY, DON | Variables and constants |
| SHAKTI, KAALIA | Boolean logic |
| AGAR / NAHI TOH / BAS | Conditional branching |
| JAB TAK / RAHEGA | While loop for game progression |
| NAAM / PURA / WAPAS | Functions for display, lifelines, answer checking |
| Arrays and `[]` access | Question data storage |
| KHAZANA.length() | Dynamic iteration |
| SHAHENSHAH.uppercase(), SHAHENSHAH.trim() | Input normalization |
| String interpolation `${}` | Dynamic output |
| KBC_SAWAAL / OPTION / SAHI_JAWAB / AGLE_SAWAAL | Switch-case for final score |
| BADHAO | Incrementing the question index |
| DEVIYON_AUR_SAJJANO | KBC opening greeting |
| COMPUTER_JI_LOCK_KIYA_JAYE | Locking answers |
| CONFIDENT_TO_LOCK_KIYA_JAYE | Confidence check |
| LIFELINE_FIFTY_FIFTY, AUDIENCE_POLL, PHONE_A_FRIEND | Lifeline mechanics |
| EXPERT_ADVICE | Expert commentary |
| Compound assignment (`+=`) | Score tracking |

### Try It Yourself

Extend the game:

1. Add 5 more questions to make it a 10-question game.
2. Add a "quit" option that lets the player walk away with their current winnings (use `QUIT_GAME`).
3. Track response times using `NASEEB.abhi()` and give bonus points for fast answers.
4. Store player statistics in a dictionary using `DEEWAR_BANAO`.
5. Add error handling with `AGNEEPATH` to gracefully handle unexpected input.

### Common Mistakes to Avoid

1. **Not closing all blocks.** In a complex program, it is easy to lose track of `BAS`, `KHATAM`, `RAHEGA`, and `AGLE_SAWAAL`. Maintain consistent indentation.
2. **Accessing nested array elements incorrectly.** `questions[0][1]` requires that `questions[0]` is itself an array.
3. **Forgetting that KBC commands produce output.** Commands like `DEVIYON_AUR_SAJJANO` print styled messages automatically. Do not add redundant `BOLO` calls for the same greeting.
4. **Not normalizing user input.** Always use `SHAHENSHAH.uppercase()` and `SHAHENSHAH.trim()` on input before comparison.

---

## Quick Reference Card

### Program Structure
```
LIGHTS ... CAMERA ... ACTION
```

### Variables and Constants
```
VIJAY x = 10          // Mutable variable
DON Y = 42            // Immutable constant
x = 20                // Bare reassignment (existing vars only)
x += 5                // Compound assignment (+=, -=, *=, /=, %=)
BADHAO x              // Increment by 1
GHATAO x              // Decrement by 1
```

### Data Types
```
42, 3.14              // Numbers
"Hello"               // Strings
SHAKTI / KAALIA        // Booleans (true / false)
LAAWARIS               // Null
{1, 2, 3}             // Array literal
DEEWAR_BANAO{...}     // Dictionary literal
```

### I/O
```
BOLO expression        // Print
SUNO variable          // Read input
```

### Control Flow
```
AGAR condition ... NAHI TOH AGAR ... NAHI TOH ... BAS
KBC_SAWAAL expr ... OPTION val ... SAHI_JAWAB ... AGLE_SAWAAL
```

### Loops
```
BAAR BAAR N ... KHATAM                  // For loop (_GINTI counter)
BAAR BAAR N MEIN i ... KHATAM           // For loop (named counter)
JAB TAK condition ... RAHEGA            // While loop
ZANJEER_LOOP ... TAB TAK condition      // Do-while loop
HAR EK item MEIN array ... KHATAM      // For-each loop
DEEWAR                                  // Break
SILSILA                                 // Continue
```

### Functions
```
NAAM funcName(params) ... PURA          // Define
WAPAS expression                        // Return
funcName(args)                          // Call
```

### Error Handling
```
AGNEEPATH ... MRITYU errVar ... PRATIGYA ... KHATAM
```

### Namespaces
```
COOLIE.sqrt(n)          // Math
KHAZANA.push(arr, val)  // Arrays
SHAHENSHAH.length(str)  // Strings
NASEEB.tarikh()         // Time
ZANJEER.type(val)       // Type checking
DEEWAR.keys(dict)       // Dictionaries
```

### KBC Commands
```
DEVIYON_AUR_SAJJANO           // Welcome greeting
COMPUTER_JI_LOCK_KIYA_JAYE    // Lock answer
CONFIDENT_TO_LOCK_KIYA_JAYE   // Confidence check
LIFELINE_FIFTY_FIFTY           // 50-50 lifeline
AUDIENCE_POLL                  // Audience poll
PHONE_A_FRIEND "name"          // Phone a friend
EXPERT_ADVICE                  // Expert advice
QUIT_GAME                      // Quit with winnings
```

---

*"Picture abhi baaki hai, mere dost!" -- Keep coding, keep learning, and remember: in AmitabhC, every error is just another dialogue waiting to be delivered.*
