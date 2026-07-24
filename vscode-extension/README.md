# AmitabhC for Visual Studio Code

Syntax highlighting, code snippets, and language support for **AmitabhC** — The Bollywood Programming Language.

Every keyword is an Amitabh Bachchan film reference. Every error message is an iconic dialogue.

## Features

- Syntax highlighting for `.amitabhc` files
- 28 code snippets (type `lights`, `bolo`, `vijay`, `agar`, `naam`, etc.)
- Auto-closing brackets and quotes
- Code folding for blocks
- Smart indentation

## Snippets

| Prefix          | Expands To                          |
|-----------------|-------------------------------------|
| `lights`        | Full program skeleton               |
| `hello`         | Complete Hello World program        |
| `bolo`          | Print statement                     |
| `vijay`         | Variable declaration                |
| `don`           | Constant declaration                |
| `suno`          | Input statement                     |
| `sunoprompt`    | Input with custom prompt            |
| `agar`          | If-else block                       |
| `agaronly`      | If block (no else)                  |
| `baarbaar`      | For loop                            |
| `jabtak`        | While loop                          |
| `zanjeerloop`   | Do-while loop                       |
| `harek`         | For-each loop                       |
| `deewar`        | Break                               |
| `silsila`       | Continue                            |
| `badhao`        | Increment variable                  |
| `ghatao`        | Decrement variable                  |
| `naam`          | Function definition                 |
| `naamwapas`     | Function with return                |
| `bulaao`        | Explicit function call              |
| `agneepath`     | Try-catch block                     |
| `agneepathfull` | Try-catch-finally block             |
| `kbc`           | Switch-case block                   |
| `khazana`       | Array declaration                   |
| `deewarbanao`   | Dictionary creation                 |
| `deewarjodo`    | Add dictionary key                  |
| `intezaar`      | Pause execution                     |
| `lifelines`     | KBC interactive commands demo       |

## Quick Start

1. Install this extension
2. Create a file with `.amitabhc` extension
3. Type `hello` and press Tab for a Hello World program
4. Install CLI: `npm install -g amitabhc`
5. Run: `amitabhc run yourfile.amitabhc`

## Example

```
LIGHTS
CAMERA
    VIJAY name = "Amitabh"
    BOLO "Namaste, ${name}!"

    AGAR name == "Amitabh"
        BOLO "Legend detected!"
    BAS
ACTION
```

## Links

- [GitHub](https://github.com/jay123anta/amitabhc)
- [Language Bible](https://github.com/jay123anta/amitabhc/blob/main/docs/LANGUAGE_BIBLE.md)
- [npm Package](https://www.npmjs.com/package/amitabhc)
