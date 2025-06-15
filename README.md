# 🎬 AmitabhC - The Bollywood Programming Language

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Website-Live-green.svg)](https://jay123anta.github.io/amitabhc)
[![Version](https://img.shields.io/badge/Version-2.1_Pro-blue.svg)](https://jay123anta.github.io/amitabhc/pro.html)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Learn programming with the power of Amitabh Bachchan's iconic dialogues from films AND Kaun Banega Crorepati!

## 🌟 Features

### Basic Edition
- **🎭 Iconic Dialogues as Commands**: Use `BOLO` for print, `VIJAY` for variables, and more!
- **🎬 Film Names as Keywords**: `SHOLAY` for imports, `DEEWAR` for breaks, `COOLIE` for functions
- **🎯 KBC Commands**: Interactive quiz features with `COMPUTER_JI_LOCK_KIYA_JAYE`, lifelines, and more!
- **📝 String Functions**: Built-in `SHABD` namespace for string manipulation
- **🚀 Browser-Based**: No installation needed - runs completely in your browser
- **📚 19+ Examples**: From Hello World to KBC quiz games
- **🎯 Beginner Friendly**: Perfect for learning programming concepts
- **💯 100% Free**: Open source and free forever

### 🚀 Pro Edition (New!)
- **🤖 AI-Powered Assistant**: Get intelligent code suggestions and debugging help
- **🛠️ Professional IDE**: VS Code-style interface with advanced features
- **🐛 Advanced Debugging**: Breakpoints, step-through debugging, variable watch
- **📊 Performance Profiler**: Analyze execution time and memory usage
- **🎤 Voice Coding**: Code by speaking commands
- **☁️ Cloud Sync**: Never lose your code with automatic cloud backup
- **🔄 Export Code**: Convert to JavaScript, Python, Java, or compile to EXE
- **🧩 Plugin System**: Extend functionality with custom plugins

## 🚀 Quick Start

### Try it Online
- **Basic Editor**: [https://jay123anta.github.io/amitabhc/editor.html](https://jay123anta.github.io/amitabhc/editor.html)
- **Pro IDE**: [https://jay123anta.github.io/amitabhc/pro.html](https://jay123anta.github.io/amitabhc/pro.html)

### Run Locally
```bash
# Clone the repository
git clone https://github.com/jay123anta/amitabhc.git

# Navigate to the directory
cd amitabhc

# Open in browser
open index.html
# or
python -m http.server 8000
# then visit http://localhost:8000
```

## 📖 Language Basics

### Hello World
```amitabhc
LIGHTS
CAMERA
    BOLO "Naam hai Shahenshah!"
ACTION
```

### Variables
```amitabhc
VIJAY name = "Amitabh"     // Variable
DON pi = 3.14              // Constant
```

### Conditions
```amitabhc
AGAR age >= 18
    BOLO "Adult"
NAHI TOH
    BOLO "Minor"
BAS
```

### Loops
```amitabhc
BAAR BAAR 5
    BOLO "Hello"
KHATAM

JAB TAK x < 10
    BOLO x
    VIJAY x = x + 1
RAHEGA
```

### Functions
```amitabhc
NAAM greet(name)
    BOLO "Hello " + name
    WAPAS SHAKTI
PURA
```

### String Functions (SHABD)
```amitabhc
// String manipulation with SHABD namespace
VIJAY text = "Hello World"
VIJAY length = SHABD.length(text)          // 11
VIJAY upper = SHABD.uppercase(text)        // "HELLO WORLD"
VIJAY lower = SHABD.lowercase(text)        // "hello world"
VIJAY hasHello = SHABD.contains(text, "Hello")  // SHAKTI (true)
VIJAY replaced = SHABD.replace(text, "World", "Duniya")  // "Hello Duniya"

// Practical example
VIJAY name = "amitabh bachchan"
VIJAY formatted = SHABD.uppercase(SHABD.replace(name, " ", "_"))
BOLO formatted  // "AMITABH_BACHCHAN"
```

### KBC Interactive Features
```amitabhc
// KBC Quiz Example
DEVIYON_AUR_SAJJANO
BOLO "Welcome to KBC!"

BOLO "Your answer?"
SUNO answer

AGAR answer == "correct"
    COMPUTER_JI_LOCK_KIYA_JAYE
    BOLO "Sahi jawab!"
NAHI TOH
    LIFELINE_FIFTY_FIFTY
    AUDIENCE_POLL
    PHONE_A_FRIEND "Expert"
BAS
```

### Classes (Pro)
```amitabhc
SHAHENSHAH Person {
    PRIVATE VIJAY name
    PUBLIC NAAM setName(n) {
        name = n
    }
}
```

### Async Programming (Pro)
```amitabhc
ASYNC NAAM fetchData() {
    INTEZAAR 1000
    WAPAS "Data loaded!"
}
```

## 🎬 Film Commands Reference

| Film | Command | Purpose |
|------|---------|---------|
| SHOLAY | Import | Import modules |
| DEEWAR | Break | Exit loop |
| ZANJEER | Chain | Link data structures |
| COOLIE | Function | Worker functions |
| SHAKTI | True | Boolean true |
| KAALIA | False | Boolean false |
| AGNEEPATH | Try/Catch | Error handling |
| SHAHENSHAH | Class | Define classes |
| SILSILA | Continue | Continue loop |
| NASEEB | Random | Random number |

## 🎯 KBC Commands Reference

| Command | Purpose | Example |
|---------|---------|---------|
| DEVIYON_AUR_SAJJANO | Program greeting | Start of show |
| COMPUTER_JI_LOCK_KIYA_JAYE | Lock/confirm answer | Confirm choice |
| CONFIDENT_TO_LOCK_KIYA_JAYE | Ask for confirmation | Interactive prompt |
| LIFELINE_FIFTY_FIFTY | Remove 2 wrong options | 50-50 lifeline |
| AUDIENCE_POLL | Get audience opinion | Poll results |
| PHONE_A_FRIEND | Call someone for help | Get advice |
| EXPERT_ADVICE | Get expert analysis | Expert opinion |
| QUIT_GAME | Exit with winnings | End game |

## 📝 Built-in Functions Reference

### String Functions (SHABD)

| Function | Description | Example |
|----------|-------------|---------|
| SHABD.length(text) | Get string length | `SHABD.length("Hello")` returns 5 |
| SHABD.uppercase(text) | Convert to uppercase | `SHABD.uppercase("hello")` returns "HELLO" |
| SHABD.lowercase(text) | Convert to lowercase | `SHABD.lowercase("HELLO")` returns "hello" |
| SHABD.contains(text, search) | Check if contains | `SHABD.contains("Hello", "ell")` returns SHAKTI |
| SHABD.replace(text, old, new) | Replace all occurrences | `SHABD.replace("Hello", "l", "L")` returns "HeLLo" |

## 🛠️ Technical Details

- **Language Type**: Esoteric, Educational, Professional
- **Implementation**: JavaScript-based interpreter with AST
- **IDE**: CodeMirror-based with custom language mode
- **Requirements**: Modern web browser (Chrome, Firefox, Safari, Edge)
- **File Extension**: `.amitabhc` or `.amc`
- **Version**: 2.1.0 (Added String Functions)

## 📁 Project Structure

```
amitabhc/
├── index.html          # Landing page
├── editor.html         # Basic interpreter/editor
├── pro.html           # Professional IDE (New!)
├── manifest.json       # PWA configuration v2
├── sw.js              # Service Worker v2
├── version.json       # Version tracking
├── README.md          # This file
├── LICENSE            # MIT License
├── docs/              # Documentation
│   ├── tutorial.md
│   ├── api.md
│   └── examples.md
└── examples/          # Example programs
    ├── hello.amitabhc
    ├── factorial.amitabhc
    ├── game.amitabhc
    ├── kbc_quiz.amitabhc     # NEW!
    ├── kbc_advanced.amitabhc # NEW!
    ├── string_utils.amitabhc # NEW!
    └── advanced/
        ├── classes.amitabhc
        ├── async.amitabhc
        └── modules.amitabhc
```

## 🎮 KBC Game Examples

### Simple Quiz
```amitabhc
LIGHTS
CAMERA
    DEVIYON_AUR_SAJJANO
    BOLO "Question: What is 2+2?"
    SUNO answer
    
    AGAR answer == 4
        COMPUTER_JI_LOCK_KIYA_JAYE
        BOLO "Correct!"
    NAHI TOH
        BOLO "Wrong answer!"
    BAS
ACTION
```

### Advanced Game with Lifelines
```amitabhc
LIGHTS
CAMERA
    // Initialize game
    VIJAY score = 0
    VIJAY lifelines = 3
    
    // Ask question
    BOLO "Which command prints output?"
    BOLO "A) PRINT  B) BOLO  C) SHOW  D) DISPLAY"
    
    // Use lifeline
    LIFELINE_FIFTY_FIFTY
    BOLO "Now only B and D remain!"
    
    SUNO answer
    CONFIDENT_TO_LOCK_KIYA_JAYE
    
    AGAR answer == "B"
        COMPUTER_JI_LOCK_KIYA_JAYE
        VIJAY score = score + 1000
    BAS
ACTION
```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a new branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Ideas for Contributions
- Add more built-in functions (GANIT for math, SAMAY for time)
- Create more KBC-themed examples
- Add more example programs
- Improve error messages in Hindi
- Add new film-based commands
- Create video tutorials
- Translate to regional languages
- Add more themes
- Create VS Code extension
- Build mobile app

## 🎯 Roadmap

### Version 2.1 ✅
- [x] SHABD String Functions
- [ ] GANIT Math Functions
- [ ] KHAZANA Array Functions
- [ ] SAMAY Time Functions

### Version 2.2
- [ ] Object/Dictionary support (TIJORI)
- [ ] For-each loops (HAR_EK)
- [ ] Try-catch blocks (KOSHISH/PAKDO)

### Version 2.3
- [ ] Module system (FILM imports)
- [ ] Classes (HERO/VILLAIN)
- [ ] Async/await (INTEZAAR)


## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by the legendary **Amitabh Bachchan** and his iconic dialogues
- Special thanks to **Kaun Banega Crorepati** for the interactive elements
- Thanks to all Bollywood fans who love programming
- Special thanks to contributors and the open source community
- Built with ❤️ for the intersection of culture and code

## 📞 Contact

- Website: [https://jay123anta.github.io/amitabhc](https://jay123anta.github.io/amitabhc)
- Email: jay123anta@gmail.com
- Twitter: [] 
- Discord: [Join our community] 

## 🏆 Awards & Recognition

---

**"Jahan code shuru hota hai, wahin se programming ki line shuru hoti hai!"** 🎬
**"Computer ji, lock kiya jaaye!"** 🎯

Made with ❤️ by the AmitabhC Community

## Support the Project

If you like AmitabhC, please:
- ⭐ Star this repository
- 🐦 Share on social media
- 📝 Write about it
- 🤝 Contribute code

Together, let's make programming more fun and culturally relevant!