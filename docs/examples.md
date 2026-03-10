# AmitabhC Example Programs

A comprehensive collection of example programs to help you learn AmitabhC programming language. Each example is designed to demonstrate specific concepts and features.

## Table of Contents

1. [Basic Examples](#basic-examples)
2. [Control Flow Examples](#control-flow-examples)
3. [Loop Examples](#loop-examples)
4. [Function Examples](#function-examples)
5. [Array Examples](#array-examples)
6. [KBC Interactive Examples](#kbc-interactive-examples)
7. [Mathematical Examples](#mathematical-examples)
8. [Pattern Examples](#pattern-examples)
9. [Game Examples](#game-examples)
10. [Advanced Examples](#advanced-examples)

---

## Basic Examples

### 1. Hello World
The classic first program in AmitabhC style.

```amitabhc
LIGHTS
CAMERA
    BOLO "Namaste Duniya!"
    BOLO "Main hoon AmitabhC!"
    BOLO "Rishtey mein toh hum tumhare compiler lagte hain!"
ACTION
```

**Output:**
```
Namaste Duniya!
Main hoon AmitabhC!
Rishtey mein toh hum tumhare compiler lagte hain!
```

### 2. Variable Declaration
Working with variables and constants.

```amitabhc
LIGHTS
CAMERA
    // Variables
    VIJAY name = "Amitabh Bachchan"
    VIJAY age = 80
    VIJAY height = 6.2
    
    // Constants
    DON birthYear = 1942
    
    BOLO "Name: " + name
    BOLO "Age: " + age + " years"
    BOLO "Height: " + height + " feet"
    BOLO "Born in: " + birthYear
ACTION
```

### 3. User Input
Getting input from the user.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== Welcome to AmitabhC ==="
    
    BOLO "Aapka naam kya hai?"
    SUNO userName
    
    BOLO "Aapki age kya hai?"
    SUNO userAge
    
    BOLO "\nNamaste " + userName + " ji!"
    BOLO "You are " + userAge + " years old"
    
    AGAR userAge >= 18
        BOLO "You are an adult"
    NAHI TOH
        BOLO "You are a minor"
    BAS
ACTION
```

---

## Control Flow Examples

### 4. Simple If-Else
Basic conditional statements.

```amitabhc
LIGHTS
CAMERA
    VIJAY temperature = 35
    
    AGAR temperature > 30
        BOLO "It's hot! ☀️"
        BOLO "Drink plenty of water"
    NAHI TOH
        BOLO "Weather is pleasant"
    BAS
    
    // Checking boolean
    VIJAY isRaining = KAALIA
    
    AGAR isRaining == SHAKTI
        BOLO "Take an umbrella ☔"
    NAHI TOH
        BOLO "Enjoy the day!"
    BAS
ACTION
```

### 5. Grade Calculator
Multiple conditions with else-if.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== Grade Calculator ==="
    BOLO "Enter your marks (out of 100):"
    SUNO marks
    
    AGAR marks >= 90
        BOLO "Grade: A+"
        BOLO "Outstanding! 🌟"
    NAHI TOH AGAR marks >= 80
        BOLO "Grade: A"
        BOLO "Excellent!"
    NAHI TOH AGAR marks >= 70
        BOLO "Grade: B"
        BOLO "Very Good!"
    NAHI TOH AGAR marks >= 60
        BOLO "Grade: C"
        BOLO "Good"
    NAHI TOH AGAR marks >= 50
        BOLO "Grade: D"
        BOLO "Pass"
    NAHI TOH
        BOLO "Grade: F"
        BOLO "Fail - Try harder next time"
    BAS
ACTION
```

### 6. Logical Operators
Using AND (&&) and OR (||) operators.

```amitabhc
LIGHTS
CAMERA
    VIJAY age = 25
    VIJAY hasLicense = SHAKTI
    VIJAY hasCar = KAALIA
    
    // AND operator
    AGAR age >= 18 && hasLicense == SHAKTI
        BOLO "You can drive legally"
    NAHI TOH
        BOLO "You cannot drive"
    BAS
    
    // OR operator
    VIJAY isWeekend = KAALIA
    VIJAY isHoliday = SHAKTI
    
    AGAR isWeekend == SHAKTI || isHoliday == SHAKTI
        BOLO "Time to relax! 🎉"
    NAHI TOH
        BOLO "Work day - stay focused"
    BAS
    
    // Complex condition
    AGAR age >= 18 && hasLicense == SHAKTI && hasCar == SHAKTI
        BOLO "You can go on a road trip!"
    NAHI TOH
        BOLO "Missing requirements for road trip"
    BAS
ACTION
```

---

## Loop Examples

### 7. Basic For Loop
Using BAAR BAAR for repetition.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== Counting Example ==="
    
    // Simple repetition
    BAAR BAAR 5
        BOLO "Don ko pakadna mushkil hi nahi, namumkin hai!"
    KHATAM
    
    BOLO "\n=== Number Series ==="
    
    // Printing numbers (Note: loop variable not accessible)
    VIJAY counter = 1
    BAAR BAAR 10
        BOLO "Number: " + counter
        VIJAY counter = counter + 1
    KHATAM
ACTION
```

### 8. While Loop
Using JAB TAK for conditional loops.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== Countdown Timer ==="
    
    VIJAY timer = 10
    
    JAB TAK timer > 0
        BOLO timer + " seconds remaining"
        VIJAY timer = timer - 1
    RAHEGA
    
    BOLO "Time's up! 💥"
    
    BOLO "\n=== Password Checker ==="
    
    VIJAY password = ""
    VIJAY attempts = 0
    
    JAB TAK password != "amitabh" && attempts < 3
        BOLO "Enter password:"
        SUNO password
        VIJAY attempts = attempts + 1
        
        AGAR password != "amitabh"
            BOLO "Wrong password! Try again"
        BAS
    RAHEGA
    
    AGAR password == "amitabh"
        BOLO "Access granted! Welcome!"
    NAHI TOH
        BOLO "Access denied! Too many attempts"
    BAS
ACTION
```

### 9. Nested Loops
Loops within loops.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== Multiplication Table ==="
    
    VIJAY i = 1
    
    JAB TAK i <= 5
        BOLO "\nTable of " + i + ":"
        
        VIJAY j = 1
        JAB TAK j <= 10
            VIJAY result = i * j
            BOLO i + " × " + j + " = " + result
            VIJAY j = j + 1
        RAHEGA
        
        VIJAY i = i + 1
    RAHEGA
ACTION
```

---

## Function Examples

### 10. Basic Functions
Simple function definitions and calls.

```amitabhc
LIGHTS
CAMERA
    // Function without parameters
    NAAM welcome()
        BOLO "=== Welcome to AmitabhC ==="
        BOLO "Programming with Bollywood style!"
        BOLO "===================="
    PURA
    
    // Function with parameters
    NAAM greet(name, time)
        BOLO "Good " + time + ", " + name + "!"
        BOLO "How are you today?"
    PURA
    
    // Function calls
    welcome()
    greet("Raj", "Morning")
    greet("Simran", "Evening")
ACTION
```

### 11. Functions with Return Values
Using WAPAS to return values.

```amitabhc
LIGHTS
CAMERA
    // Math functions
    NAAM add(a, b)
        WAPAS a + b
    PURA
    
    NAAM multiply(x, y)
        WAPAS x * y
    PURA
    
    NAAM square(n)
        WAPAS n * n
    PURA
    
    // Using the functions
    VIJAY sum = add(10, 20)
    BOLO "10 + 20 = " + sum
    
    VIJAY product = multiply(5, 6)
    BOLO "5 × 6 = " + product
    
    VIJAY squared = square(7)
    BOLO "7² = " + squared
    
    // Nested function calls
    VIJAY result = add(square(3), square(4))
    BOLO "3² + 4² = " + result
ACTION
```

### 12. Recursive Functions
Functions that call themselves.

```amitabhc
LIGHTS
CAMERA
    // Factorial function
    NAAM factorial(n)
        AGAR n <= 1
            WAPAS 1
        NAHI TOH
            WAPAS n * factorial(n - 1)
        BAS
    PURA
    
    // Fibonacci function
    NAAM fibonacci(n)
        AGAR n <= 1
            WAPAS n
        NAHI TOH
            WAPAS fibonacci(n - 1) + fibonacci(n - 2)
        BAS
    PURA
    
    // Test factorial
    BOLO "Factorial of 5: " + factorial(5)
    BOLO "Factorial of 7: " + factorial(7)
    
    // Test fibonacci
    BOLO "\nFibonacci sequence:"
    VIJAY i = 0
    JAB TAK i < 10
        BOLO "F(" + i + ") = " + fibonacci(i)
        VIJAY i = i + 1
    RAHEGA
ACTION
```

---

## Array Examples

### 13. Basic Arrays
Creating and accessing arrays.

```amitabhc
LIGHTS
CAMERA
    // Number array
    VIJAY scores[] = {85, 92, 78, 95, 88}
    
    BOLO "Test Scores:"
    BOLO "First score: " + scores[0]
    BOLO "Last score: " + scores[4]
    
    // String array
    VIJAY movies[] = {"Sholay", "Deewar", "Don", "Agneepath", "Coolie"}
    
    BOLO "\nFavorite Movies:"
    BOLO "1. " + movies[0]
    BOLO "2. " + movies[1]
    BOLO "3. " + movies[2]
    
    // Mixed array
    VIJAY data[] = {"Amitabh", 80, SHAKTI, 200}
    BOLO "\nMixed data: " + data
ACTION
```

### 14. Array Operations
Working with array elements.

```amitabhc
LIGHTS
CAMERA
    VIJAY numbers[] = {10, 25, 15, 30, 20}
    
    // Sum of array elements
    VIJAY sum = 0
    VIJAY i = 0
    
    JAB TAK i < 5
        VIJAY sum = sum + numbers[i]
        VIJAY i = i + 1
    RAHEGA
    
    BOLO "Sum of array: " + sum
    BOLO "Average: " + (sum / 5)
    
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
    
    // Find minimum
    VIJAY min = numbers[0]
    VIJAY k = 1
    
    JAB TAK k < 5
        AGAR numbers[k] < min
            VIJAY min = numbers[k]
        BAS
        VIJAY k = k + 1
    RAHEGA
    
    BOLO "Minimum value: " + min
ACTION
```

---

## KBC Interactive Examples

### 15. Simple KBC Quiz
Basic quiz with scoring.

```amitabhc
LIGHTS
CAMERA
    DEVIYON_AUR_SAJJANO
    BOLO "Welcome to KBC - Programming Edition!"
    BOLO "Answer the questions to win prizes!\n"
    
    VIJAY score = 0
    
    // Question 1
    BOLO "Question 1 for Rs. 1000:"
    BOLO "Which command is used to print in AmitabhC?"
    BOLO "A) PRINT  B) BOLO  C) DISPLAY  D) OUTPUT"
    
    SUNO answer1
    AGAR answer1 == "B"
        BOLO "Bilkul sahi jawab! ✅"
        COMPUTER_JI_LOCK_KIYA_JAYE
        VIJAY score = score + 1000
    NAHI TOH
        BOLO "Galat jawab! ❌ Correct answer is B) BOLO"
    BAS
    
    // Question 2
    BOLO "\nQuestion 2 for Rs. 5000:"
    BOLO "What creates a variable in AmitabhC?"
    BOLO "A) VAR  B) LET  C) VIJAY  D) CREATE"
    
    SUNO answer2
    AGAR answer2 == "C"
        BOLO "Sahi jawab! ✅"
        COMPUTER_JI_LOCK_KIYA_JAYE
        VIJAY score = score + 5000
    NAHI TOH
        BOLO "Galat! ❌ Correct answer is C) VIJAY"
    BAS
    
    BOLO "\n=== Game Over ==="
    BOLO "Your total winnings: Rs. " + score
    
    AGAR score >= 5000
        BOLO "Excellent performance! 🎉"
    NAHI TOH AGAR score > 0
        BOLO "Good effort! Keep learning!"
    NAHI TOH
        BOLO "Better luck next time!"
    BAS
ACTION
```

### 16. KBC with Lifelines
Advanced quiz with lifeline usage.

```amitabhc
LIGHTS
CAMERA
    DEVIYON_AUR_SAJJANO
    BOLO "=== KBC with Lifelines ==="
    
    VIJAY score = 0
    VIJAY lifeline5050 = SHAKTI
    VIJAY lifelineAudience = SHAKTI
    VIJAY lifelinePhone = SHAKTI
    
    // Question
    BOLO "\nDifficult Question for Rs. 10,000:"
    BOLO "Which film command represents 'true' in AmitabhC?"
    BOLO "A) SHOLAY  B) DEEWAR  C) SHAKTI  D) KAALIA"
    
    BOLO "\nWant to use a lifeline? (Y/N)"
    SUNO useLifeline
    
    AGAR useLifeline == "Y"
        BOLO "\nAvailable Lifelines:"
        AGAR lifeline5050 == SHAKTI
            BOLO "1. Fifty-Fifty"
        BAS
        AGAR lifelineAudience == SHAKTI
            BOLO "2. Audience Poll"
        BAS
        AGAR lifelinePhone == SHAKTI
            BOLO "3. Phone a Friend"
        BAS
        
        BOLO "Choose lifeline number:"
        SUNO choice
        
        AGAR choice == "1" && lifeline5050 == SHAKTI
            LIFELINE_FIFTY_FIFTY
            BOLO "Options A and B have been removed!"
            BOLO "Remaining: C) SHAKTI  D) KAALIA"
            VIJAY lifeline5050 = KAALIA
        NAHI TOH AGAR choice == "2" && lifelineAudience == SHAKTI
            AUDIENCE_POLL
            VIJAY lifelineAudience = KAALIA
        NAHI TOH AGAR choice == "3" && lifelinePhone == SHAKTI
            PHONE_A_FRIEND "Programming Expert"
            VIJAY lifelinePhone = KAALIA
        BAS
    BAS
    
    BOLO "\nYour final answer?"
    SUNO finalAnswer
    
    CONFIDENT_TO_LOCK_KIYA_JAYE
    
    AGAR finalAnswer == "C"
        BOLO "\nAbsolutely correct! ✅"
        COMPUTER_JI_LOCK_KIYA_JAYE
        VIJAY score = 10000
        BOLO "You've won Rs. 10,000!"
    NAHI TOH
        BOLO "\nWrong answer! ❌"
        BOLO "The correct answer was C) SHAKTI"
        EXPERT_ADVICE
    BAS
ACTION
```

---

## Mathematical Examples

### 17. Calculator
Basic arithmetic calculator.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== AmitabhC Calculator ==="
    
    NAAM calculate(a, b, operation)
        AGAR operation == "+"
            WAPAS a + b
        NAHI TOH AGAR operation == "-"
            WAPAS a - b
        NAHI TOH AGAR operation == "*"
            WAPAS a * b
        NAHI TOH AGAR operation == "/"
            AGAR b != 0
                WAPAS a / b
            NAHI TOH
                BOLO "Error: Division by zero!"
                WAPAS 0
            BAS
        NAHI TOH
            BOLO "Invalid operation!"
            WAPAS 0
        BAS
    PURA
    
    BOLO "Enter first number:"
    SUNO num1
    
    BOLO "Enter operation (+, -, *, /):"
    SUNO op
    
    BOLO "Enter second number:"
    SUNO num2
    
    VIJAY result = calculate(num1, num2, op)
    BOLO num1 + " " + op + " " + num2 + " = " + result
ACTION
```

### 18. Prime Number Checker
Check if a number is prime.

```amitabhc
LIGHTS
CAMERA
    NAAM isPrime(n)
        AGAR n <= 1
            WAPAS KAALIA
        BAS
        
        VIJAY i = 2
        JAB TAK i * i <= n
            AGAR n % i == 0
                WAPAS KAALIA
            BAS
            VIJAY i = i + 1
        RAHEGA
        
        WAPAS SHAKTI
    PURA
    
    BOLO "Enter a number to check:"
    SUNO number
    
    VIJAY result = isPrime(number)
    
    AGAR result == SHAKTI
        BOLO number + " is a prime number! ✅"
    NAHI TOH
        BOLO number + " is not a prime number ❌"
    BAS
    
    // Print prime numbers up to 50
    BOLO "\nPrime numbers from 1 to 50:"
    VIJAY j = 2
    JAB TAK j <= 50
        AGAR isPrime(j) == SHAKTI
            BOLO j + " "
        BAS
        VIJAY j = j + 1
    RAHEGA
ACTION
```

---

## Pattern Examples

### 19. Star Patterns
Various star pattern programs.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== Star Patterns ==="
    
    // Square pattern
    BOLO "\n1. Square Pattern:"
    BAAR BAAR 5
        BAAR BAAR 5
            BOLO "* "
        KHATAM
        BOLO ""
    KHATAM
    
    // Right triangle
    BOLO "\n2. Right Triangle:"
    VIJAY i = 1
    JAB TAK i <= 5
        VIJAY j = 1
        JAB TAK j <= i
            BOLO "* "
            VIJAY j = j + 1
        RAHEGA
        BOLO ""
        VIJAY i = i + 1
    RAHEGA
    
    // Number pyramid
    BOLO "\n3. Number Pyramid:"
    VIJAY row = 1
    JAB TAK row <= 5
        VIJAY col = 1
        JAB TAK col <= row
            BOLO col + " "
            VIJAY col = col + 1
        RAHEGA
        BOLO ""
        VIJAY row = row + 1
    RAHEGA
ACTION
```

### 20. Diamond Pattern
Creating a diamond shape.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== Diamond Pattern ==="
    
    VIJAY n = 5
    
    // Upper half
    VIJAY i = 1
    JAB TAK i <= n
        // Spaces
        VIJAY j = 1
        JAB TAK j <= n - i
            BOLO " "
            VIJAY j = j + 1
        RAHEGA
        
        // Stars
        VIJAY k = 1
        JAB TAK k <= 2 * i - 1
            BOLO "*"
            VIJAY k = k + 1
        RAHEGA
        
        BOLO ""
        VIJAY i = i + 1
    RAHEGA
    
    // Lower half
    VIJAY i = n - 1
    JAB TAK i >= 1
        // Spaces
        VIJAY j = 1
        JAB TAK j <= n - i
            BOLO " "
            VIJAY j = j + 1
        RAHEGA
        
        // Stars
        VIJAY k = 1
        JAB TAK k <= 2 * i - 1
            BOLO "*"
            VIJAY k = k + 1
        RAHEGA
        
        BOLO ""
        VIJAY i = i - 1
    RAHEGA
ACTION
```

---

## Game Examples

### 21. Number Guessing Game
Simple guessing game with hints.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== Number Guessing Game ==="
    BOLO "I'm thinking of a number between 1 and 10"
    
    DON secretNumber = 7
    VIJAY guess = 0
    VIJAY attempts = 0
    VIJAY maxAttempts = 3
    
    JAB TAK guess != secretNumber && attempts < maxAttempts
        BOLO "\nGuess the number:"
        SUNO guess
        VIJAY attempts = attempts + 1
        
        AGAR guess == secretNumber
            BOLO "🎉 Congratulations! You got it!"
            BOLO "Attempts taken: " + attempts
        NAHI TOH AGAR guess < secretNumber
            BOLO "Too low! Try higher"
        NAHI TOH
            BOLO "Too high! Try lower"
        BAS
        
        AGAR attempts < maxAttempts && guess != secretNumber
            VIJAY remaining = maxAttempts - attempts
            BOLO "Attempts remaining: " + remaining
        BAS
    RAHEGA
    
    AGAR guess != secretNumber
        BOLO "\n😢 Game Over! The number was " + secretNumber
    BAS
ACTION
```

### 22. Rock Paper Scissors
Classic game implementation.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== Rock Paper Scissors ==="
    
    NAAM getWinner(player, computer)
        AGAR player == computer
            WAPAS "Draw"
        NAHI TOH AGAR player == "Rock" && computer == "Scissors"
            WAPAS "Player"
        NAHI TOH AGAR player == "Paper" && computer == "Rock"
            WAPAS "Player"
        NAHI TOH AGAR player == "Scissors" && computer == "Paper"
            WAPAS "Player"
        NAHI TOH
            WAPAS "Computer"
        BAS
    PURA
    
    VIJAY playerScore = 0
    VIJAY computerScore = 0
    VIJAY rounds = 3
    
    BOLO "Best of " + rounds + " rounds!\n"
    
    BAAR BAAR rounds
        BOLO "\nChoose: Rock, Paper, or Scissors"
        SUNO playerChoice
        
        // Simple computer choice (always Rock for demo)
        VIJAY computerChoice = "Rock"
        
        BOLO "You chose: " + playerChoice
        BOLO "Computer chose: " + computerChoice
        
        VIJAY winner = getWinner(playerChoice, computerChoice)
        
        AGAR winner == "Player"
            BOLO "You win this round! 🎉"
            VIJAY playerScore = playerScore + 1
        NAHI TOH AGAR winner == "Computer"
            BOLO "Computer wins this round! 🤖"
            VIJAY computerScore = computerScore + 1
        NAHI TOH
            BOLO "It's a draw! 🤝"
        BAS
    KHATAM
    
    BOLO "\n=== Final Score ==="
    BOLO "You: " + playerScore
    BOLO "Computer: " + computerScore
    
    AGAR playerScore > computerScore
        BOLO "You are the champion! 🏆"
    NAHI TOH AGAR computerScore > playerScore
        BOLO "Computer wins the game! 🤖"
    NAHI TOH
        BOLO "It's a tie! Well played!"
    BAS
ACTION
```

---

## Advanced Examples

### 23. Bubble Sort
Sorting algorithm implementation.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== Bubble Sort Example ==="
    
    VIJAY numbers[] = {64, 34, 25, 12, 22}
    VIJAY size = 5
    
    BOLO "Original array: " + numbers
    
    // Bubble sort algorithm
    VIJAY i = 0
    JAB TAK i < size - 1
        VIJAY j = 0
        JAB TAK j < size - i - 1
            AGAR numbers[j] > numbers[j + 1]
                // Swap elements
                VIJAY temp = numbers[j]
                VIJAY numbers[j] = numbers[j + 1]
                VIJAY numbers[j + 1] = temp
            BAS
            VIJAY j = j + 1
        RAHEGA
        VIJAY i = i + 1
    RAHEGA
    
    BOLO "Sorted array: " + numbers
ACTION
```

### 24. Temperature Converter
Multi-unit temperature converter.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== Temperature Converter ==="
    
    NAAM celsiusToFahrenheit(c)
        WAPAS (c * 9/5) + 32
    PURA
    
    NAAM fahrenheitToCelsius(f)
        WAPAS (f - 32) * 5/9
    PURA
    
    NAAM celsiusToKelvin(c)
        WAPAS c + 273.15
    PURA
    
    BOLO "Choose conversion:"
    BOLO "1. Celsius to Fahrenheit"
    BOLO "2. Fahrenheit to Celsius"
    BOLO "3. Celsius to Kelvin"
    
    SUNO choice
    
    AGAR choice == 1
        BOLO "Enter temperature in Celsius:"
        SUNO temp
        VIJAY result = celsiusToFahrenheit(temp)
        BOLO temp + "°C = " + result + "°F"
    NAHI TOH AGAR choice == 2
        BOLO "Enter temperature in Fahrenheit:"
        SUNO temp
        VIJAY result = fahrenheitToCelsius(temp)
        BOLO temp + "°F = " + result + "°C"
    NAHI TOH AGAR choice == 3
        BOLO "Enter temperature in Celsius:"
        SUNO temp
        VIJAY result = celsiusToKelvin(temp)
        BOLO temp + "°C = " + result + "K"
    NAHI TOH
        BOLO "Invalid choice!"
    BAS
ACTION
```

### 25. FizzBuzz
The classic programming challenge.

```amitabhc
LIGHTS
CAMERA
    BOLO "=== FizzBuzz Challenge ==="
    BOLO "Numbers from 1 to 30:\n"
    
    VIJAY i = 1
    
    JAB TAK i <= 30
        AGAR i % 15 == 0
            BOLO "FizzBuzz"
        NAHI TOH AGAR i % 3 == 0
            BOLO "Fizz"
        NAHI TOH AGAR i % 5 == 0
            BOLO "Buzz"
        NAHI TOH
            BOLO i
        BAS
        
        VIJAY i = i + 1
    RAHEGA
ACTION
```

---

## Tips for Running Examples

1. **Copy and Paste**: Copy any example and paste it into the AmitabhC editor
2. **Modify**: Feel free to modify the examples to learn how things work
3. **Experiment**: Try changing values, conditions, and logic
4. **Combine**: Mix concepts from different examples to create new programs

## Common Patterns

### Input Validation
```amitabhc
JAB TAK input < 0 || input > 100
    BOLO "Please enter a valid number (0-100):"
    SUNO input
RAHEGA
```

### Menu-Driven Program
```amitabhc
VIJAY choice = 0
JAB TAK choice != 4
    BOLO "\n1. Option 1"
    BOLO "2. Option 2"
    BOLO "3. Option 3"
    BOLO "4. Exit"
    SUNO choice
    
    // Handle choices...
RAHEGA
```

### Error Handling
```amitabhc
AGAR denominator == 0
    BOLO "Error: Cannot divide by zero!"
    WAPAS 0
BAS
```

### Array Search
```amitabhc
VIJAY found = KAALIA
VIJAY i = 0
JAB TAK i < size && found == KAALIA
    AGAR array[i] == searchValue
        VIJAY found = SHAKTI
        BOLO "Found at position: " + i
    BAS
    VIJAY i = i + 1
RAHEGA
```

---

## Debugging Tips

1. **Use BOLO for debugging**: Print variable values at different points
   ```amitabhc
   BOLO "Debug: value = " + value
   ```

2. **Check loop conditions**: Ensure loops don't run infinitely
   ```amitabhc
   VIJAY counter = 0
   JAB TAK condition && counter < 1000
       // Your code
       VIJAY counter = counter + 1
   RAHEGA
   ```

3. **Validate input**: Always check user input
   ```amitabhc
   SUNO age
   AGAR age < 0 || age > 150
       BOLO "Invalid age!"
   BAS
   ```

---

## Challenge Exercises

Try these exercises to test your skills:

1. **Palindrome Checker**: Write a program to check if a word is a palindrome
2. **Fibonacci Series**: Generate Fibonacci numbers up to n terms
3. **Bank Account**: Create a simple banking system with deposit/withdraw
4. **Tic-Tac-Toe**: Build a two-player tic-tac-toe game
5. **Student Database**: Manage student records with arrays

---

## Conclusion

These examples cover the fundamental concepts of AmitabhC programming. Start with the basic examples and gradually move to more complex ones. Remember:

- **Practice makes perfect**: The more you code, the better you'll get
- **Experiment freely**: Don't be afraid to modify examples
- **Have fun**: Enjoy coding with Bollywood style!

**"Code mein emotion hona chahiye, logic toh baad ki baat hai!"** 🎬

---

*For more examples and updates, visit the [AmitabhC GitHub repository](https://github.com/jay123anta/amitabhc)*

---

## v4.0.0 New Features

The following examples demonstrate features introduced in AmitabhC v4.0.0.

---

### String Interpolation

Embed variables and expressions directly inside strings using `${...}` syntax.

```amitabhc
LIGHTS
CAMERA
    VIJAY naam = "Amitabh"
    VIJAY umar = 82
    BOLO "Mere paas ${naam} hai!"
    BOLO "${naam} ki umar ${umar} saal hai"
    BOLO "2 + 3 = ${2 + 3}"
ACTION
```

**Output:**
```
Mere paas Amitabh hai!
Amitabh ki umar 82 saal hai
2 + 3 = 5
```

---

### Try-Catch-Finally (AGNEEPATH / MRITYU / PRATIGYA)

Handle runtime errors gracefully using AGNEEPATH (try), MRITYU (catch), and PRATIGYA (finally).

#### Basic Try-Catch

```amitabhc
LIGHTS
CAMERA
    AGNEEPATH
        VIJAY x = 10 / 0
        BOLO "This line won't run"
    MRITYU err
        BOLO "Error pakda gaya: ${err}"
    KHATAM
ACTION
```

#### Nested Try-Catch

```amitabhc
LIGHTS
CAMERA
    AGNEEPATH
        BOLO "Outer try block"
        AGNEEPATH
            VIJAY arr[] = {1, 2, 3}
            BOLO arr[99]
        MRITYU innerErr
            BOLO "Inner error: ${innerErr}"
        KHATAM
        BOLO "Outer try continues"
    MRITYU outerErr
        BOLO "Outer error: ${outerErr}"
    KHATAM
ACTION
```

#### Try-Catch-Finally

```amitabhc
LIGHTS
CAMERA
    AGNEEPATH
        BOLO "Kaam shuru..."
        VIJAY result = 100 / 0
    MRITYU err
        BOLO "Galti hui: ${err}"
    PRATIGYA
        BOLO "Safai ho gayi -- yeh hamesha chalega"
    KHATAM
ACTION
```

---

### Switch-Case (KBC_SAWAAL / OPTION / SAHI_JAWAB / AGLE_SAWAAL)

Match a value against multiple options. No fallthrough -- only the matched OPTION block runs.

#### String Matching

```amitabhc
LIGHTS
CAMERA
    VIJAY hero = "Vijay"

    KBC_SAWAAL hero
        OPTION "Vijay"
            BOLO "Deewar ka hero!"
        OPTION "Jai"
            BOLO "Sholay ka hero!"
        OPTION "Don"
            BOLO "Don ko pakadna mushkil hai!"
        SAHI_JAWAB
            BOLO "Yeh kaun hai bhai?"
    AGLE_SAWAAL
ACTION
```

#### Number Matching with Default

```amitabhc
LIGHTS
CAMERA
    VIJAY day = 3

    KBC_SAWAAL day
        OPTION 1
            BOLO "Somvaar"
        OPTION 2
            BOLO "Mangalvaar"
        OPTION 3
            BOLO "Budhvaar"
        OPTION 4
            BOLO "Guruvaar"
        OPTION 5
            BOLO "Shukravaar"
        SAHI_JAWAB
            BOLO "Weekend hai!"
    AGLE_SAWAAL
ACTION
```

---

### Do-While Loop (ZANJEER_LOOP / TAB TAK)

Runs the body at least once before checking the condition.

```amitabhc
LIGHTS
CAMERA
    VIJAY count = 1

    ZANJEER_LOOP
        BOLO "Attempt number: ${count}"
        BADHAO count
    TAB TAK count <= 5

    BOLO "Loop khatam. Total attempts: ${count - 1}"
ACTION
```

#### Menu-Driven with Do-While

```amitabhc
LIGHTS
CAMERA
    VIJAY choice = 0

    ZANJEER_LOOP
        BOLO "\n=== Menu ==="
        BOLO "1. Namaste"
        BOLO "2. Alvida"
        BOLO "3. Exit"
        BOLO "Choose:"
        SUNO choice

        KBC_SAWAAL choice
            OPTION 1
                BOLO "Namaste Duniya!"
            OPTION 2
                BOLO "Alvida Duniya!"
            OPTION 3
                BOLO "Bahar nikal rahe hain..."
            SAHI_JAWAB
                BOLO "Galat choice!"
        AGLE_SAWAAL
    TAB TAK choice != 3
ACTION
```

---

### Dictionaries (DEEWAR_BANAO / DEEWAR_JODO / DEEWAR namespace)

Create key-value stores with DEEWAR_BANAO, add keys with DEEWAR_JODO, and use DEEWAR namespace functions.

#### Create and Access

```amitabhc
LIGHTS
CAMERA
    VIJAY person = DEEWAR_BANAO{"naam": "Amitabh", "umar": 82, "city": "Mumbai"}

    BOLO "Naam: ${person["naam"]}"
    BOLO "Umar: ${person["umar"]}"
    BOLO "City: ${person["city"]}"
ACTION
```

#### Modify and Add Keys

```amitabhc
LIGHTS
CAMERA
    VIJAY movie = DEEWAR_BANAO{"title": "Sholay", "year": 1975}

    // Add a new key
    DEEWAR_JODO movie "director" "Ramesh Sippy"

    // Overwrite an existing key
    DEEWAR_JODO movie "year" 2025

    BOLO "Title: ${movie["title"]}"
    BOLO "Year: ${movie["year"]}"
    BOLO "Director: ${movie["director"]}"
ACTION
```

#### DEEWAR Namespace Functions

```amitabhc
LIGHTS
CAMERA
    VIJAY info = DEEWAR_BANAO{"a": 1, "b": 2, "c": 3}

    // Get all keys
    VIJAY k = DEEWAR.keys(info)
    BOLO "Keys: " + k

    // Get all values
    VIJAY v = DEEWAR.values(info)
    BOLO "Values: " + v

    // Check if key exists
    VIJAY found = DEEWAR.hasKey(info, "b")
    BOLO "Has key b: " + found

    // Get size
    VIJAY s = DEEWAR.size(info)
    BOLO "Size: " + s

    // Remove a key
    DEEWAR.remove(info, "c")
    BOLO "After remove: size = " + DEEWAR.size(info)

    // Merge two dictionaries
    VIJAY extra = DEEWAR_BANAO{"d": 4, "e": 5}
    VIJAY merged = DEEWAR.merge(info, extra)
    BOLO "Merged keys: " + DEEWAR.keys(merged)
ACTION
```

---

### Increment / Decrement (BADHAO / GHATAO)

Shorthand to add or subtract 1 from a variable.

```amitabhc
LIGHTS
CAMERA
    VIJAY score = 0

    BOLO "Starting score: ${score}"

    BADHAO score
    BADHAO score
    BADHAO score
    BOLO "After 3 BADHAO: ${score}"

    GHATAO score
    BOLO "After 1 GHATAO: ${score}"

    // Using in a loop
    VIJAY i = 0
    JAB TAK i < 5
        BOLO "i = ${i}"
        BADHAO i
    RAHEGA
ACTION
```

---

### For-Each Loop (HAR EK ... MEIN)

Iterate over every element of an array. The built-in `_GINTI` variable tracks the current index (starting from 0).

```amitabhc
LIGHTS
CAMERA
    VIJAY movies[] = {"Sholay", "Deewar", "Don", "Agneepath", "Coolie"}

    BOLO "Amitabh's top movies:"
    HAR EK film MEIN movies
        BOLO "${_GINTI + 1}. ${film}"
    KHATAM
ACTION
```

#### Summing an Array

```amitabhc
LIGHTS
CAMERA
    VIJAY nums[] = {10, 20, 30, 40, 50}
    VIJAY total = 0

    HAR EK n MEIN nums
        VIJAY total = total + n
    KHATAM

    BOLO "Sum: ${total}"
ACTION
```

---

### Error Handling Patterns

#### Safe Division Function

```amitabhc
LIGHTS
CAMERA
    NAAM safeDivide(a, b)
        AGNEEPATH
            AGAR b == 0
                BOLO "Warning: division by zero"
                WAPAS 0
            BAS
            WAPAS a / b
        MRITYU err
            BOLO "Error in division: ${err}"
            WAPAS 0
        KHATAM
    PURA

    BOLO "10 / 2 = " + safeDivide(10, 2)
    BOLO "10 / 0 = " + safeDivide(10, 0)
    BOLO "99 / 3 = " + safeDivide(99, 3)
ACTION
```

#### Nested Try-Catch for Multiple Operations

```amitabhc
LIGHTS
CAMERA
    VIJAY data[] = {100, 200, 300}

    AGNEEPATH
        BOLO "Step 1: Reading data..."
        VIJAY val = data[0]
        BOLO "Got: ${val}"

        AGNEEPATH
            BOLO "Step 2: Processing..."
            VIJAY result = val / 0
        MRITYU processErr
            BOLO "Processing failed: ${processErr}"
            VIJAY result = -1
        KHATAM

        BOLO "Step 3: Result = ${result}"
    MRITYU mainErr
        BOLO "Main error: ${mainErr}"
    PRATIGYA
        BOLO "Cleanup complete"
    KHATAM
ACTION
```

---

### Bubble Sort Algorithm

Sorting an array using nested loops with array element swapping.

```amitabhc
LIGHTS
CAMERA
    VIJAY arr[] = {64, 25, 12, 22, 11}
    VIJAY size = 5

    BOLO "Before sorting:"
    HAR EK item MEIN arr
        BOLO "${item} "
    KHATAM

    // Bubble sort
    VIJAY i = 0
    JAB TAK i < size - 1
        VIJAY j = 0
        JAB TAK j < size - i - 1
            AGAR arr[j] > arr[j + 1]
                VIJAY temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            BAS
            BADHAO j
        RAHEGA
        BADHAO i
    RAHEGA

    BOLO "\nAfter sorting:"
    HAR EK item MEIN arr
        BOLO "${item} "
    KHATAM
ACTION
```

---

### FizzBuzz Bollywood Style

The classic FizzBuzz, renamed with iconic Amitabh films: SHOLAY (divisible by 3), DEEWAR (divisible by 5), SHAHENSHAH (divisible by both).

```amitabhc
LIGHTS
CAMERA
    BOLO "=== FizzBuzz Bollywood Edition ==="

    VIJAY i = 1
    JAB TAK i <= 30
        AGAR i % 15 == 0
            BOLO "${i}: SHAHENSHAH"
        NAHI TOH AGAR i % 3 == 0
            BOLO "${i}: SHOLAY"
        NAHI TOH AGAR i % 5 == 0
            BOLO "${i}: DEEWAR"
        NAHI TOH
            BOLO i
        BAS
        BADHAO i
    RAHEGA
ACTION
```