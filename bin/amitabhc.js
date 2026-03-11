#!/usr/bin/env node

/**
 * AmitabhC CLI — The Bollywood Programming Language
 *
 * Usage:
 *   amitabhc run <file.amitabhc>     Run a program
 *   amitabhc repl                     Interactive REPL
 *   amitabhc examples                 List example programs
 *   amitabhc version                  Show version
 *   amitabhc help                     Show help
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const SecureAmitabhCInterpreter = require('../interpreter.js');

const VERSION = '4.0.0';
const ORANGE = '\x1b[38;5;208m';
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const DIM = '\x1b[2m';
const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

const BANNER = `
${ORANGE}    ___          _ __        __    __  ______
   /   |  ____ _(_) /_____ _/ /_  / /_/ ____/
  / /| | / __ \`/ / __/ __ \`/ __ \\/ __ / /
 / ___ |/ / / / / /_/ /_/ / /_/ / / / / /___
/_/  |_/_/ /_/_/\\__/\\__,_/_.___/_/ /_/\\____/ ${RESET}

${DIM}  The Bollywood Programming Language v${VERSION}${RESET}
${DIM}  "Rishtey mein toh hum tumhare compiler lagte hain!"${RESET}
`;

function showHelp() {
    console.log(BANNER);
    console.log(`${BOLD}USAGE:${RESET}`);
    console.log(`  ${CYAN}amitabhc run${RESET} <file.amitabhc>     Run a program`);
    console.log(`  ${CYAN}amitabhc repl${RESET}                     Interactive mode`);
    console.log(`  ${CYAN}amitabhc examples${RESET}                 List example programs`);
    console.log(`  ${CYAN}amitabhc test${RESET}                     Run test suite`);
    console.log(`  ${CYAN}amitabhc version${RESET}                  Show version`);
    console.log(`  ${CYAN}amitabhc help${RESET}                     Show this help`);
    console.log();
    console.log(`${BOLD}EXAMPLES:${RESET}`);
    console.log(`  ${DIM}$${RESET} amitabhc run hello.amitabhc`);
    console.log(`  ${DIM}$${RESET} amitabhc run examples/factorial.amitabhc`);
    console.log(`  ${DIM}$${RESET} amitabhc repl`);
    console.log();
    console.log(`${BOLD}QUICK START:${RESET}`);
    console.log(`  Create a file ${YELLOW}hello.amitabhc${RESET}:`);
    console.log();
    console.log(`  ${GREEN}LIGHTS${RESET}`);
    console.log(`  ${GREEN}CAMERA${RESET}`);
    console.log(`      ${GREEN}BOLO "Namaste, Duniya!"${RESET}`);
    console.log(`  ${GREEN}ACTION${RESET}`);
    console.log();
    console.log(`  Then run: ${CYAN}amitabhc run hello.amitabhc${RESET}`);
    console.log();
}

function showVersion() {
    console.log(`${ORANGE}AmitabhC${RESET} v${VERSION}`);
}

function listExamples() {
    const examplesDir = path.join(__dirname, '..', 'examples');
    if (!fs.existsSync(examplesDir)) {
        console.log(`${RED}No examples directory found.${RESET}`);
        return;
    }
    const files = fs.readdirSync(examplesDir).filter(f => f.endsWith('.amitabhc')).sort();
    console.log(`${BOLD}${ORANGE}Available Example Programs:${RESET}`);
    console.log();
    files.forEach((file, i) => {
        const name = file.replace('.amitabhc', '').replace(/_/g, ' ');
        const filePath = path.join(examplesDir, file);
        const source = fs.readFileSync(filePath, 'utf8');
        const firstComment = source.split('\n').find(l => l.trim().startsWith('// TEST:') || l.trim().startsWith('//'));
        const desc = firstComment ? firstComment.replace(/\/\/\s*(TEST:\s*)?/, '').trim() : '';
        console.log(`  ${CYAN}${String(i + 1).padStart(2)}.${RESET} ${YELLOW}${file}${RESET}`);
        if (desc) console.log(`      ${DIM}${desc}${RESET}`);
    });
    console.log();
    console.log(`${DIM}Run with: amitabhc run examples/<filename>${RESET}`);
}

async function runFile(filePath) {
    // Resolve path
    let resolvedPath = path.resolve(filePath);

    // Try adding .amitabhc extension if not present
    if (!fs.existsSync(resolvedPath) && !resolvedPath.endsWith('.amitabhc')) {
        resolvedPath += '.amitabhc';
    }

    if (!fs.existsSync(resolvedPath)) {
        console.error(`${RED}File not found:${RESET} ${filePath}`);
        console.error(`${DIM}Make sure the file exists and has a .amitabhc extension${RESET}`);
        process.exit(1);
    }

    const source = fs.readFileSync(resolvedPath, 'utf8');

    if (source.length > 100000) {
        console.error(`${RED}File too large.${RESET} Maximum 100KB allowed.`);
        process.exit(1);
    }

    const interpreter = new SecureAmitabhCInterpreter();

    // Output callback — print to stdout
    interpreter.setOutputCallback((text) => {
        process.stdout.write(String(text) + '\n');
    });

    // Input callback — read from stdin
    interpreter.setInputCallback((prompt) => {
        return new Promise((resolve) => {
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stderr,
                terminal: true
            });
            process.stderr.write(`${YELLOW}${prompt}${RESET} `);
            rl.question('', (answer) => {
                rl.close();
                resolve(answer);
            });
        });
    });

    try {
        const result = await interpreter.run(source);
        if (result && result.error) {
            console.error(`\n${RED}${result.error}${RESET}`);
            process.exit(1);
        }
    } catch (err) {
        console.error(`\n${RED}Runtime Error:${RESET} ${err.message}`);
        process.exit(1);
    }
}

async function startRepl() {
    console.log(BANNER);
    console.log(`${GREEN}Interactive REPL${RESET} — Type AmitabhC code line by line.`);
    console.log(`${DIM}Commands: .run (execute), .clear (reset), .example, .exit${RESET}`);
    console.log();

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: `${ORANGE}amitabhc>${RESET} `,
        terminal: true
    });

    let buffer = [];

    rl.prompt();

    rl.on('line', async (line) => {
        const trimmed = line.trim();

        if (trimmed === '.exit' || trimmed === '.quit') {
            console.log(`${DIM}Alvida! (Goodbye)${RESET}`);
            process.exit(0);
        }

        if (trimmed === '.clear') {
            buffer = [];
            console.log(`${GREEN}Buffer cleared.${RESET}`);
            rl.prompt();
            return;
        }

        if (trimmed === '.show') {
            if (buffer.length === 0) {
                console.log(`${DIM}Buffer is empty.${RESET}`);
            } else {
                console.log(`${DIM}--- Buffer ---${RESET}`);
                buffer.forEach((l, i) => console.log(`${DIM}${String(i + 1).padStart(3)}|${RESET} ${l}`));
                console.log(`${DIM}--- End ---${RESET}`);
            }
            rl.prompt();
            return;
        }

        if (trimmed === '.example') {
            buffer = [
                'LIGHTS',
                'CAMERA',
                '    BOLO "Namaste, Duniya!"',
                '    BOLO "Main hoon AmitabhC!"',
                '    BAAR BAAR 3 MEIN i',
                '        BOLO "Iteration: ${i}"',
                '    KHATAM',
                'ACTION'
            ];
            console.log(`${GREEN}Example loaded. Type .run to execute.${RESET}`);
            rl.prompt();
            return;
        }

        if (trimmed === '.run') {
            if (buffer.length === 0) {
                console.log(`${YELLOW}Buffer is empty. Type some code first.${RESET}`);
                rl.prompt();
                return;
            }

            const source = buffer.join('\n');
            const interpreter = new SecureAmitabhCInterpreter();

            interpreter.setOutputCallback((text) => {
                process.stdout.write(`${GREEN}${String(text)}${RESET}\n`);
            });

            interpreter.setInputCallback((prompt) => {
                return new Promise((resolve) => {
                    const inputRl = readline.createInterface({
                        input: process.stdin,
                        output: process.stderr,
                        terminal: true
                    });
                    process.stderr.write(`${YELLOW}${prompt}${RESET} `);
                    inputRl.question('', (answer) => {
                        inputRl.close();
                        resolve(answer);
                    });
                });
            });

            console.log(`${DIM}--- Output ---${RESET}`);
            try {
                const result = await interpreter.run(source);
                if (result && result.error) {
                    console.error(`${RED}${result.error}${RESET}`);
                }
            } catch (err) {
                console.error(`${RED}Error: ${err.message}${RESET}`);
            }
            console.log(`${DIM}--- End ---${RESET}`);
            rl.prompt();
            return;
        }

        // Add line to buffer
        buffer.push(line);
        rl.prompt();
    });

    rl.on('close', () => {
        console.log(`\n${DIM}Alvida!${RESET}`);
        process.exit(0);
    });
}

async function runTests() {
    const testRunner = path.join(__dirname, '..', 'tests', 'run_tests.js');
    if (!fs.existsSync(testRunner)) {
        console.error(`${RED}Test runner not found.${RESET}`);
        process.exit(1);
    }
    const { execSync } = require('child_process');
    try {
        execSync(`node "${testRunner}"`, { stdio: 'inherit', cwd: path.join(__dirname, '..') });
    } catch (err) {
        process.exit(1);
    }
}

// --- Main ---
const args = process.argv.slice(2);
const command = args[0];

if (!command || command === 'help' || command === '--help' || command === '-h') {
    showHelp();
} else if (command === 'version' || command === '--version' || command === '-v') {
    showVersion();
} else if (command === 'run' || command === 'r') {
    const file = args[1];
    if (!file) {
        console.error(`${RED}Missing file path.${RESET} Usage: amitabhc run <file.amitabhc>`);
        process.exit(1);
    }
    runFile(file);
} else if (command === 'repl' || command === 'i') {
    startRepl();
} else if (command === 'examples' || command === 'ex') {
    listExamples();
} else if (command === 'test' || command === 't') {
    runTests();
} else if (command.endsWith('.amitabhc') || fs.existsSync(command)) {
    // Direct file: amitabhc hello.amitabhc
    runFile(command);
} else {
    console.error(`${RED}Unknown command:${RESET} ${command}`);
    console.error(`Run ${CYAN}amitabhc help${RESET} for usage.`);
    process.exit(1);
}
