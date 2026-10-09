#!/usr/bin/env node
/**
 * AmitabhC Janamdin (birthday edition) tests
 * Covers the date gate, the birthday wish program and the share text in birthday.js.
 *
 * Usage: node tests/birthday.test.js
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const SecureAmitabhCInterpreter = require('../interpreter.js');
const Birthday = require('../birthday.js');

const COLORS = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    dim: '\x1b[2m',
    reset: '\x1b[0m',
    bold: '\x1b[1m'
};

const tests = [];
function test(name, fn) {
    tests.push({ name, fn });
}

// IST is UTC+5:30, so 11 October IST runs from 10 Oct 18:30Z to 11 Oct 18:30Z.
const BIRTHDAY_START = new Date('2026-10-10T18:30:00Z');
const BIRTHDAY_NOON = new Date('2026-10-11T06:30:00Z');
const BIRTHDAY_LAST_SECOND = new Date('2026-10-11T18:29:59Z');
const DAY_BEFORE_LAST_SECOND = new Date('2026-10-10T18:29:59Z');
const DAY_AFTER_START = new Date('2026-10-11T18:30:00Z');
const ORDINARY_DAY = new Date('2026-03-05T06:30:00Z');

async function runProgram(source) {
    const interp = new SecureAmitabhCInterpreter();
    let output = '';
    interp.setOutputCallback(msg => { output += msg + '\n'; });
    interp.setInputCallback(async () => '');
    const result = await interp.run(source);
    return { result, output: output.trimEnd() };
}

function personalise(name) {
    return Birthday.PROGRAM.replace('VIJAY fan = "AmitabhC"', `VIJAY fan = "${name}"`);
}

// X counts most Latin text as 1 and everything else (emoji included) as 2.
function xWeightedLength(text) {
    let total = 0;
    for (const ch of text) {
        const cp = ch.codePointAt(0);
        const light = cp <= 4351 || (cp >= 8192 && cp <= 8205) ||
            (cp >= 8208 && cp <= 8223) || (cp >= 8242 && cp <= 8247);
        total += light ? 1 : 2;
    }
    return total;
}

// Mirrors how shareOnX() in editor.html / pro.html builds the X intent link.
function xIntentUrl(text, code) {
    const encoded = Buffer.from(code, 'utf8').toString('base64');
    const shareUrl = 'https://jay123anta.github.io/amitabhc/editor.html?janamdin=1#code=' + encoded;
    return 'https://x.com/intent/post?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(shareUrl);
}

// --- Date gate ---

test('11 October IST is the birthday, from the first second to the last', () => {
    assert.strictEqual(Birthday.isBirthday(BIRTHDAY_START), true);
    assert.strictEqual(Birthday.isBirthday(BIRTHDAY_NOON), true);
    assert.strictEqual(Birthday.isBirthday(BIRTHDAY_LAST_SECOND), true);
});

test('10 and 12 October IST are not the birthday', () => {
    assert.strictEqual(Birthday.isBirthday(DAY_BEFORE_LAST_SECOND), false);
    assert.strictEqual(Birthday.isBirthday(DAY_AFTER_START), false);
    assert.strictEqual(Birthday.isBirthday(ORDINARY_DAY), false);
});

test('Birthday edition is off on an ordinary day', () => {
    assert.strictEqual(Birthday.isActive(ORDINARY_DAY, ''), false);
    assert.strictEqual(Birthday.isActive(ORDINARY_DAY, '?utm_source=x'), false);
});

test('Birthday edition is on for the whole birthday', () => {
    assert.strictEqual(Birthday.isActive(BIRTHDAY_NOON, ''), true);
});

test('?janamdin=1 turns the birthday edition on any day', () => {
    assert.strictEqual(Birthday.isActive(ORDINARY_DAY, '?janamdin=1'), true);
    assert.strictEqual(Birthday.isActive(ORDINARY_DAY, '?utm_source=x&janamdin=1'), true);
});

test('Look-alike query strings do not turn the birthday edition on', () => {
    assert.strictEqual(Birthday.isActive(ORDINARY_DAY, '?janamdin=0'), false);
    assert.strictEqual(Birthday.isActive(ORDINARY_DAY, '?notjanamdin=1'), false);
    assert.strictEqual(Birthday.isActive(ORDINARY_DAY, '?janamdin=11'), false);
});

// --- Age and ordinals ---

test('He turns 84 in 2026 and 85 in 2027', () => {
    assert.strictEqual(Birthday.age(BIRTHDAY_NOON), 84);
    assert.strictEqual(Birthday.age(new Date('2027-10-11T06:30:00Z')), 85);
});

test('Age follows the IST year, not the UTC year', () => {
    // 31 Dec 2026 20:00Z is already 1 Jan 2027 in India.
    assert.strictEqual(Birthday.age(new Date('2026-12-31T20:00:00Z')), 85);
});

test('Ordinals read naturally', () => {
    assert.strictEqual(Birthday.ordinal(84), '84th');
    assert.strictEqual(Birthday.ordinal(81), '81st');
    assert.strictEqual(Birthday.ordinal(82), '82nd');
    assert.strictEqual(Birthday.ordinal(83), '83rd');
    assert.strictEqual(Birthday.ordinal(91), '91st');
    assert.strictEqual(Birthday.ordinal(111), '111th');
    assert.strictEqual(Birthday.ordinal(112), '112th');
    assert.strictEqual(Birthday.ordinal(113), '113th');
});

// --- The birthday wish program ---

test('Embedded wish matches examples/janamdin.amitabhc', () => {
    const file = fs.readFileSync(path.join(__dirname, '..', 'examples', 'janamdin.amitabhc'), 'utf8');
    const normalise = s => s.replace(/\r\n/g, '\n').trim();
    assert.strictEqual(normalise(Birthday.PROGRAM), normalise(file));
});

test('The wish runs and greets him with his age this year', async () => {
    const { result, output } = await runProgram(Birthday.PROGRAM);
    assert.strictEqual(result.success, true, `program failed: ${result.error}`);
    const lines = output.split('\n');
    const umar = new Date().getFullYear() - 1942;
    assert.ok(lines.includes('🎂 Janamdin Mubarak, Amitabh Bachchan! 🎂'), output);
    assert.ok(lines.includes(`${umar} saal, aur aaj bhi Shahenshah!`), output);
});

test('The wish thanks him for five films', async () => {
    const { output } = await runProgram(Birthday.PROGRAM);
    const thanks = output.split('\n').filter(line => line.startsWith('Shukriya for '));
    assert.deepStrictEqual(thanks, [
        'Shukriya for Zanjeer!',
        'Shukriya for Deewar!',
        'Shukriya for Sholay!',
        'Shukriya for Don!',
        'Shukriya for Agneepath!'
    ]);
});

test('The wish is signed AmitabhC by default', async () => {
    const { output } = await runProgram(Birthday.PROGRAM);
    assert.ok(output.endsWith('Rishtey mein toh hum aapke fan lagte hain,\nnaam hai AmitabhC!'), output);
});

test('Changing the one fan line signs the wish with your name', async () => {
    assert.strictEqual(Birthday.PROGRAM.split('VIJAY fan = "AmitabhC"').length, 2, 'expected exactly one fan line');
    const { result, output } = await runProgram(personalise('Jayanta'));
    assert.strictEqual(result.success, true, `program failed: ${result.error}`);
    assert.ok(output.endsWith('naam hai Jayanta!'), output);
});

test('A wish is recognised, an ordinary program is not', () => {
    const hello = fs.readFileSync(path.join(__dirname, '..', 'examples', 'hello.amitabhc'), 'utf8');
    assert.strictEqual(Birthday.isWish(Birthday.PROGRAM), true);
    assert.strictEqual(Birthday.isWish(personalise('Jayanta')), true);
    assert.strictEqual(Birthday.isWish(hello), false);
    assert.strictEqual(Birthday.isWish(''), false);
});

// --- Signing the wish from the banner's name box ---

test('Signing puts your name on the fan line and in the output', async () => {
    const signed = Birthday.signWish(Birthday.PROGRAM, 'Jayanta');
    assert.ok(signed.includes('VIJAY fan = "Jayanta"'), signed);
    const { result, output } = await runProgram(signed);
    assert.strictEqual(result.success, true, `program failed: ${result.error}`);
    assert.ok(output.endsWith('naam hai Jayanta!'), output);
});

test('Signing again replaces the previous name', () => {
    const signed = Birthday.signWish(Birthday.signWish(Birthday.PROGRAM, 'Jayanta'), 'Anupam');
    assert.ok(signed.includes('VIJAY fan = "Anupam"'), signed);
    assert.ok(!signed.includes('Jayanta'), signed);
});

test('A name in Hindi signs the wish too', async () => {
    const { result, output } = await runProgram(Birthday.signWish(Birthday.PROGRAM, 'जयंत'));
    assert.strictEqual(result.success, true, `program failed: ${result.error}`);
    assert.ok(output.endsWith('naam hai जयंत!'), output);
});

test('Quotes, code and markup typed as a name cannot break the program', async () => {
    const signed = Birthday.signWish(Birthday.PROGRAM, '  Jay"anta ${1+1}\n<b> ');
    assert.ok(signed.includes('VIJAY fan = "Jayanta 11 b"'), signed);
    const { result, output } = await runProgram(signed);
    assert.strictEqual(result.success, true, `program failed: ${result.error}`);
    assert.ok(output.endsWith('naam hai Jayanta 11 b!'), output);
});

test('A very long name is cut to 40 characters', () => {
    const signed = Birthday.signWish(Birthday.PROGRAM, 'A'.repeat(100));
    assert.ok(signed.includes(`VIJAY fan = "${'A'.repeat(40)}"`), signed);
    assert.ok(!signed.includes('A'.repeat(41)), signed);
});

test('A blank name leaves the wish as it is', () => {
    assert.strictEqual(Birthday.signWish(Birthday.PROGRAM, ''), Birthday.PROGRAM);
    assert.strictEqual(Birthday.signWish(Birthday.PROGRAM, '   '), Birthday.PROGRAM);
    assert.strictEqual(Birthday.signWish(Birthday.PROGRAM, '"${}"'), Birthday.PROGRAM);
});

test('Signing leaves a program without a fan line untouched', () => {
    const hello = 'LIGHTS\nCAMERA\n    BOLO "Namaste, Duniya!"\nACTION';
    assert.strictEqual(Birthday.signWish(hello, 'Jayanta'), hello);
});

test('Signing still finds a fan line whose spacing was edited by hand', () => {
    const edited = Birthday.PROGRAM.replace('VIJAY fan = "AmitabhC"', 'VIJAY  fan="AmitabhC"');
    assert.ok(Birthday.signWish(edited, 'Jayanta').includes('VIJAY  fan="Jayanta"'));
});

test('Names keep their apostrophes, ampersands and commas', async () => {
    for (const name of ["D'Souza", 'O’Brien', 'Raj & Simran', 'Jai, Veeru']) {
        const signed = Birthday.signWish(Birthday.PROGRAM, name);
        assert.ok(signed.includes(`VIJAY fan = "${name}"`), signed);
        const { result, output } = await runProgram(signed);
        assert.strictEqual(result.success, true, `program failed for ${name}: ${result.error}`);
        assert.ok(output.endsWith(`naam hai ${name}!`), output);
    }
});

test('A name written with a zero-width joiner keeps it', () => {
    const name = 'علی‌رضا';
    assert.ok(Birthday.signWish(Birthday.PROGRAM, name).includes(`VIJAY fan = "${name}"`));
});

test('Emoji are dropped from a name without leaving invisible characters behind', () => {
    assert.ok(Birthday.signWish(Birthday.PROGRAM, 'Raj❤️').includes('VIJAY fan = "Raj"'));
    assert.ok(Birthday.signWish(Birthday.PROGRAM, '\u{1F468}‍\u{1F469}‍\u{1F467} Raj').includes('VIJAY fan = "Raj"'));
});

test('A name with no letters or digits leaves the wish as it is', () => {
    assert.strictEqual(Birthday.signWish(Birthday.PROGRAM, '❤️'), Birthday.PROGRAM);
    assert.strictEqual(Birthday.signWish(Birthday.PROGRAM, '\u{1F468}‍\u{1F469}‍\u{1F467}'), Birthday.PROGRAM);
    assert.strictEqual(Birthday.signWish(Birthday.PROGRAM, "' & , - ."), Birthday.PROGRAM);
});

// --- Protecting the visitor's own code ---

test('Code the visitor wrote counts as their own work', () => {
    const samples = ['LIGHTS\nCAMERA\n    BOLO "Namaste, Duniya!"\nACTION'];
    assert.strictEqual(Birthday.isOwnWork('LIGHTS\nCAMERA\n    BOLO "mine"\nACTION', samples), true);
    assert.strictEqual(Birthday.isOwnWork('LIGHTS\nCAMERA\n    BOLO "mine"\nACTION'), true);
});

test('A blank editor, a wish, or an untouched sample is not their own work', () => {
    const sample = 'LIGHTS\nCAMERA\n    BOLO "Namaste, Duniya!"\nACTION';
    assert.strictEqual(Birthday.isOwnWork('', [sample]), false);
    assert.strictEqual(Birthday.isOwnWork('   \n', [sample]), false);
    assert.strictEqual(Birthday.isOwnWork(Birthday.PROGRAM, [sample]), false);
    assert.strictEqual(Birthday.isOwnWork(personalise('Jayanta'), [sample]), false);
    assert.strictEqual(Birthday.isOwnWork(sample, [sample]), false);
    assert.strictEqual(Birthday.isOwnWork(sample.replace(/\n/g, '\r\n') + '\n', [sample]), false);
});

// --- The birthday dressing must never break the page it decorates ---

test('Page helpers log and carry on instead of throwing', () => {
    const realError = console.error;
    const logged = [];
    console.error = (...args) => logged.push(args);
    try {
        // Node has no document or window, so each of these fails inside
        assert.doesNotThrow(() => Birthday.mountBanner({ variant: 'editor', container: {} }));
        assert.doesNotThrow(() => Birthday.celebrate());
        assert.doesNotThrow(() => Birthday.welcome());
    } finally {
        console.error = realError;
    }
    assert.strictEqual(logged.length, 3, 'each failure should be logged');
});

// --- Sharing ---

test('Share text carries the age and the birthday hashtag', () => {
    const text = Birthday.shareText(BIRTHDAY_NOON);
    assert.ok(text.includes('84th'), text);
    assert.ok(text.includes('#HappyBirthdayAmitabhBachchan'), text);
});

test('Share text plus a link fits in one X post', () => {
    const T_CO_LINK = 23;
    const length = xWeightedLength(Birthday.shareText(BIRTHDAY_NOON)) + 1 + T_CO_LINK;
    assert.ok(length <= 280, `post is ${length} characters`);
});

test('Birthday share text is used only for a wish, only while the edition is on', () => {
    const hello = 'LIGHTS\nCAMERA\n    BOLO "Namaste, Duniya!"\nACTION';
    assert.strictEqual(Birthday.shareTextFor(Birthday.PROGRAM, BIRTHDAY_NOON, ''), Birthday.shareText(BIRTHDAY_NOON));
    assert.strictEqual(Birthday.shareTextFor(Birthday.PROGRAM, ORDINARY_DAY, '?janamdin=1'), Birthday.shareText(ORDINARY_DAY));
    assert.strictEqual(Birthday.shareTextFor(hello, BIRTHDAY_NOON, ''), null);
    assert.strictEqual(Birthday.shareTextFor(Birthday.PROGRAM, ORDINARY_DAY, ''), null);
});

test('A personalised wish still fits in the X share link', () => {
    const longName = 'A'.repeat(40);
    const url = xIntentUrl(Birthday.shareText(BIRTHDAY_NOON), personalise(longName));
    assert.ok(url.length < 4000, `intent URL is ${url.length} characters`);
});

async function main() {
    console.log(`\n${COLORS.bold}🎂 AmitabhC Janamdin Tests${COLORS.reset}`);
    console.log(`${COLORS.dim}Running ${tests.length} tests...${COLORS.reset}\n`);

    let passed = 0;
    const failures = [];

    for (const { name, fn } of tests) {
        try {
            await fn();
            passed++;
            console.log(`  ${COLORS.green}✓${COLORS.reset} ${name}`);
        } catch (err) {
            failures.push(name);
            console.log(`  ${COLORS.red}✗${COLORS.reset} ${name}`);
            console.log(`    ${COLORS.dim}${err.message}${COLORS.reset}`);
        }
    }

    const failed = failures.length;
    console.log(`\n${COLORS.bold}Results:${COLORS.reset} ${COLORS.green}${passed} passed${COLORS.reset}, ${failed > 0 ? COLORS.red : COLORS.dim}${failed} failed${COLORS.reset} / ${tests.length} total\n`);
    process.exit(failed > 0 ? 1 : 0);
}

main();
