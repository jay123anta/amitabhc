# AmitabhC Tutorial - Learn Programming Bollywood Style! 🎬

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Basic Syntax](#basic-syntax)
4. [Variables and Constants](#variables-and-constants)
5. [Input and Output](#input-and-output)
6. [Control Flow](#control-flow)
7. [Loops](#loops)
8. [Functions](#functions)
9. [Arrays](#arrays)
10. [KBC Interactive Features](#kbc-interactive-features)
11. [Advanced Topics](#advanced-topics)
12. [Best Practices](#best-practices)

## Introduction

Welcome to AmitabhC - where Bollywood meets programming! This language uses Amitabh Bachchan's iconic dialogues and film names to teach programming concepts in a fun, culturally relevant way.

### Why AmitabhC?
- 🎭 Learn programming with familiar Bollywood references
- 🎬 Remember commands easily through movie associations
- 🎯 Interactive KBC features make learning fun
- 💡 Perfect for beginners and Bollywood fans

## Getting Started

### Your First Program

Every AmitabhC program follows this structure:

```amitabhc
LIGHTS      // Program start
CAMERA      // Main code section begins
    // Your code here
ACTION      // Program end
```

Let's write "Hello World":

```amitabhc
LIGHTS
CAMERA
    BOLO "Namaste Duniya!"
    BOLO "Main hoon AmitabhC!"
ACTION
```

**Output:**
```
Namaste Duniya!
Main hoon AmitabhC!
```

### Running Your Code
1. Open the [AmitabhC Editor](https://jay123anta.github.io/amitabhc/editor.html)
2. Type your code
3. Click "Run Code" or press F5
4. See the output in the console

## Basic Syntax

### Comments
Use `//` for single-line comments:

```amitabhc
LIGHTS
CAMERA
    // This is a comment
    BOLO "Hello!"  // This is also a comment
ACTION
```

### Code Structure
- Each statement goes on a new line
- Indentation improves readability (recommended: 4 spaces)
- Commands are UPPERCASE
- Variable names are lowercase

## Variables and Constants

### Variables with VIJAY
`VIJAY` creates variables (named after the iconic character):

```amitabhc
LIGHTS
CAMERA
    VIJAY name = "Amitabh"
    VIJAY age = 80
    VIJAY height = 6.2
    
    BOLO "Name: " + name
    BOLO "Age: " + age
ACTION
```

### Constants with DON
`DON` creates constants that cannot be changed:

```amitabhc
LIGHTS
CAMERA
    DON pi = 3.14159
    DON movieCount = 200
    
    BOLO "Pi value: " + pi
    // DON pi = 3.14  // This would cause an error!
ACTION
```

### Data Types
- **Numbers**: `42`, `3.14`, `-10`
- **Strings**: `"Hello"`, `"Amitabh"`
- **Booleans**: `SHAKTI` (true), `KAALIA` (false)

## Input and Output

### Output with BOLO
`BOLO` prints to the console:

```amitabhc
LIGHTS
CAMERA
    BOLO "Rishtey mein toh hum tumhare compiler lagte hain!"
    
    VIJAY score = 100
    BOLO "Your score is: " + score
ACTION
```

### Input with SUNO
`SUNO` gets input from the user:

```amitabhc
LIGHTS
CAMERA
    BOLO "Aapka naam kya hai?"
    SUNO name
    
    BOLO "Welcome " + name + " ji!"
    
    BOLO "Aapki age?"
    SUNO age
    
    BOLO "You are " + age + " years old"
ACTION
```

## Control Flow

### If-Else with AGAR/NAHI TOH/BAS

```amitabhc
LIGHTS
CAMERA
    VIJAY age = 25
    
    AGAR age >= 18
        BOLO "You can vote!"
        BOLO "You can drive!"
    NAHI TOH
        BOLO "Abhi aap bacche hain"
    BAS
ACTION
```

### Multiple Conditions

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
    NAHI TOH
        BOLO "Need improvement"
    BAS
ACTION
```

### Logical Operators

```amitabhc
LIGHTS
CAMERA
    VIJAY age = 25
    VIJAY hasLicense = SHAKTI
    
    AGAR age >= 18 && hasLicense == SHAKTI
        BOLO "You can drive!"
    BAS
    
    VIJAY isWeekend = KAALIA
    VIJAY isHoliday = SHAKTI
    
    AGAR isWeekend == SHAKTI || isHoliday == SHAKTI
        BOLO "It's time to relax!"
    BAS
ACTION
```

## Loops

### For Loop with BAAR BAAR/KHATAM

```amitabhc
LIGHTS
CAMERA
    // Print 5 times
    BAAR BAAR 5
        BOLO "Don ko pakadna mushkil hi nahi, namumkin hai!"
    KHATAM
    
    // Print numbers 1 to 10
    BOLO "\nCounting:"
    BAAR BAAR 10
        BOLO "Number..."
    KHATAM
ACTION
```

### While Loop with JAB TAK/RAHEGA

```amitabhc
LIGHTS
CAMERA
    VIJAY count = 1
    
    JAB TAK count <= 5
        BOLO "Count: " + count
        VIJAY count = count + 1
    RAHEGA
    
    // Countdown
    BOLO "\nCountdown:"
    VIJAY timer = 10
    
    JAB TAK timer > 0
        BOLO timer + " seconds remaining"
        VIJAY timer = timer - 1
    RAHEGA
    
    BOLO "Time's up!"
ACTION
```

### Break with DEEWAR

```amitabhc
LIGHTS
CAMERA
    VIJAY i = 1
    
    JAB TAK i <= 10
        AGAR i == 5
            BOLO "Breaking at 5!"
            DEEWAR  // Break the loop
        BAS
        
        BOLO i
        VIJAY i = i + 1
    RAHEGA
ACTION
```

### Continue with SILSILA

```amitabhc
LIGHTS
CAMERA
    BAAR BAAR 10
        AGAR i % 2 == 0
            SILSILA  // Skip even numbers
        BAS
        
        BOLO i  // Only prints odd numbers
    KHATAM
ACTION
```

## Functions

### Basic Function with NAAM/PURA

```amitabhc
LIGHTS
CAMERA
    // Define function
    NAAM greet()
        BOLO "Namaste!"
        BOLO "Welcome to AmitabhC!"
    PURA
    
    // Call function
    greet()
ACTION
```

### Functions with Parameters

```amitabhc
LIGHTS
CAMERA
    NAAM sayHello(name)
        BOLO "Hello " + name + "!"
        BOLO "Aap kaise hain?"
    PURA
    
    sayHello("Raj")
    sayHello("Simran")
ACTION
```

### Functions with Return Values (WAPAS)

```amitabhc
LIGHTS
CAMERA
    NAAM add(a, b)
        VIJAY sum = a + b
        WAPAS sum
    PURA
    
    NAAM multiply(x, y)
        WAPAS x * y
    PURA
    
    VIJAY result1 = add(10, 20)
    BOLO "10 + 20 = " + result1
    
    VIJAY result2 = multiply(5, 6)
    BOLO "5 × 6 = " + result2
ACTION
```

### Recursive Functions

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
    
    BOLO "Factorial of 5: " + factorial(5)
    BOLO "Factorial of 7: " + factorial(7)
ACTION
```

## Arrays

### Creating Arrays with KHAZANA

```amitabhc
LIGHTS
CAMERA
    // Create array
    VIJAY KHAZANA[] = {10, 20, 30, 40, 50}
    
    // Access elements
    BOLO "First element: " + KHAZANA[0]
    BOLO "Third element: " + KHAZANA[2]
    
    // String array
    VIJAY movies[] = {"Sholay", "Deewar", "Don", "Agneepath"}
    BOLO "Best movie: " + movies[0]
ACTION
```

### Array Operations

```amitabhc
LIGHTS
CAMERA
    VIJAY numbers[] = {5, 10, 15, 20, 25}
    
    // Sum all elements
    VIJAY total = 0
    VIJAY i = 0
    
    JAB TAK i < 5
        VIJAY total = total + numbers[i]
        VIJAY i = i + 1
    RAHEGA
    
    BOLO "Sum of array: " + total
    
    // Find maximum
    VIJAY max = numbers[0]
    VIJAY j = 1
    
    JAB TAK j < 5
        AGAR numbers[j] > max
            VIJAY max = numbers[j]
        BAS
        VIJAY j = j + 1
    RAHEGA
    
    BOLO "Maximum value: " + max
ACTION
```

## KBC Interactive Features

### Basic KBC Quiz

```amitabhc
LIGHTS
CAMERA
    DEVIYON_AUR_SAJJANO  // Greeting
    BOLO "Welcome to KBC - Kaun Banega Crorepati!"
    
    VIJAY score = 0
    
    // Question 1
    BOLO "\nQuestion 1 for Rs. 1000:"
    BOLO "What is the capital of India?"
    BOLO "A) Mumbai  B) Delhi  C) Kolkata  D) Chennai"
    
    SUNO answer
    
    AGAR answer == "B"
        BOLO "Bilkul sahi jawab!"
        COMPUTER_JI_LOCK_KIYA_JAYE  // Lock the answer
        VIJAY score = score + 1000
    NAHI TOH
        BOLO "Galat jawab! Sahi jawab hai B) Delhi"
    BAS
    
    BOLO "\nYour total: Rs. " + score
ACTION
```

### Using Lifelines

```amitabhc
LIGHTS
CAMERA
    BOLO "Difficult question ahead!"
    BOLO "Which keyword creates a variable in AmitabhC?"
    BOLO "A) VAR  B) LET  C) VIJAY  D) CREATE"
    
    BOLO "\nNeed help? Use a lifeline!"
    BOLO "1. Fifty-Fifty"
    BOLO "2. Audience Poll"
    BOLO "3. Phone a Friend"
    
    SUNO choice
    
    AGAR choice == "1"
        LIFELINE_FIFTY_FIFTY
        BOLO "Options eliminated! Only C and D remain"
    NAHI TOH AGAR choice == "2"
        AUDIENCE_POLL
    NAHI TOH AGAR choice == "3"
        PHONE_A_FRIEND "Programming Expert"
    BAS
    
    CONFIDENT_TO_LOCK_KIYA_JAYE  // Confirm answer
ACTION
```

## Advanced Topics

### Nested Loops

```amitabhc
LIGHTS
CAMERA
    // Multiplication table
    BAAR BAAR 5
        BAAR BAAR 5
            BOLO "* "
        KHATAM
        BOLO ""  // New line
    KHATAM
    
    // Number pyramid
    VIJAY rows = 5
    VIJAY i = 1
    
    JAB TAK i <= rows
        VIJAY j = 1
        JAB TAK j <= i
            BOLO j + " "
            VIJAY j = j + 1
        RAHEGA
        BOLO ""
        VIJAY i = i + 1
    RAHEGA
ACTION
```

### Complex Conditions

```amitabhc
LIGHTS
CAMERA
    VIJAY age = 25
    VIJAY income = 50000
    VIJAY hasJob = SHAKTI
    
    AGAR age >= 21 && age <= 30 && income > 30000 && hasJob == SHAKTI
        BOLO "Eligible for loan!"
    NAHI TOH
        BOLO "Not eligible"
    BAS
ACTION
```

### Error Handling with AGNEEPATH

```amitabhc
LIGHTS
CAMERA
    AGNEEPATH
        VIJAY num = 10
        VIJAY divisor = 0
        
        AGAR divisor == 0
            BOLO "Error: Cannot divide by zero!"
            DEEWAR
        BAS
        
        VIJAY result = num / divisor
        BOLO "Result: " + result
    MRITYU
ACTION
```

## Best Practices

### 1. Use Meaningful Variable Names
```amitabhc
// Good
VIJAY studentName = "Raj"
VIJAY totalMarks = 95

// Avoid
VIJAY x = "Raj"
VIJAY y = 95
```

### 2. Comment Your Code
```amitabhc
// Calculate the average of three numbers
VIJAY num1 = 10
VIJAY num2 = 20
VIJAY num3 = 30
VIJAY average = (num1 + num2 + num3) / 3
```

### 3. Organize with Functions
```amitabhc
NAAM calculateArea(length, width)
    WAPAS length * width
PURA

NAAM calculatePerimeter(length, width)
    WAPAS 2 * (length + width)
PURA
```

### 4. Handle Edge Cases
```amitabhc
NAAM divide(a, b)
    AGAR b == 0
        BOLO "Error: Division by zero!"
        WAPAS 0
    BAS
    WAPAS a / b
PURA
```

### 5. Use Constants for Fixed Values
```amitabhc
DON MAX_ATTEMPTS = 3
DON PASSING_MARKS = 40
DON PI = 3.14159
```

## Practice Exercises

### Exercise 1: Temperature Converter
Write a program that converts Celsius to Fahrenheit.

### Exercise 2: Prime Number Checker
Create a function to check if a number is prime.

### Exercise 3: Simple Calculator
Build a calculator with add, subtract, multiply, and divide functions.

### Exercise 4: KBC Game
Create a quiz game with 5 questions and score tracking.

## Conclusion

Congratulations! You've learned the basics of AmitabhC. Keep practicing and remember:

**"Pushpa, I hate tears... Par I love code!"**

Happy Coding! 🎬💻