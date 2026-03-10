#!/usr/bin/env node
/**
 * AmitabhC Test Runner
 * Runs all .amitabhc test files and validates output against expected values.
 *
 * Test file format:
 *   // TEST: Description
 *   // EXPECT: expected output line 1
 *   // EXPECT: expected output line 2
 *   // EXPECT_ERROR: expected error substring (for error tests)
 *   // EXPECT_CONTAINS: substring that must appear in output
 *   // EXPECT_SUCCESS: (no output check, just verify it runs)
 *   LIGHTS
 *   CAMERA
 *       ...
 *   ACTION
 *
 * Usage: node tests/run_tests.js [pattern]
 *   pattern: optional glob/substring to filter test files
 */

const fs = require('fs');
const path = require('path');
const SecureAmitabhCInterpreter = require('../interpreter.js');

const COLORS = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    dim: '\x1b[2m',
    reset: '\x1b[0m',
    bold: '\x1b[1m'
};

async function runTestFile(filePath) {
    const source = fs.readFileSync(filePath, 'utf8');
    const lines = source.split('\n');

    // Parse test metadata from comments
    let testName = path.basename(filePath);
    const expectedLines = [];
    let expectError = null;
    let expectContains = null;
    let expectSuccess = false;

    for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('// TEST:')) {
            testName = trimmed.slice('// TEST:'.length).trim();
        } else if (trimmed.startsWith('// EXPECT:')) {
            expectedLines.push(trimmed.slice('// EXPECT:'.length).trim());
        } else if (trimmed.startsWith('// EXPECT_ERROR:')) {
            expectError = trimmed.slice('// EXPECT_ERROR:'.length).trim();
        } else if (trimmed.startsWith('// EXPECT_CONTAINS:')) {
            expectContains = trimmed.slice('// EXPECT_CONTAINS:'.length).trim();
        } else if (trimmed.startsWith('// EXPECT_SUCCESS')) {
            expectSuccess = true;
        }
    }

    // Run the program
    const interp = new SecureAmitabhCInterpreter();
    let output = '';
    interp.setOutputCallback(msg => { output += msg + '\n'; });
    // Mock input to return empty string (no interactive tests)
    interp.setInputCallback(async () => '');

    const result = await interp.run(source);
    output = output.trimEnd();

    // Validate
    let passed = true;
    let failReason = '';

    if (expectError) {
        if (result.success) {
            passed = false;
            failReason = `Expected error containing "${expectError}" but program succeeded`;
        } else if (!output.includes(expectError)) {
            passed = false;
            failReason = `Expected error containing "${expectError}"\n    Got: ${output}`;
        }
    } else if (expectContains) {
        if (!output.includes(expectContains)) {
            passed = false;
            failReason = `Expected output to contain "${expectContains}"\n    Got: ${output}`;
        }
    } else if (expectedLines.length > 0) {
        const expected = expectedLines.join('\n');
        if (output !== expected) {
            passed = false;
            failReason = `Expected: ${JSON.stringify(expected)}\n    Got:      ${JSON.stringify(output)}`;
        }
    } else if (expectSuccess) {
        if (!result.success) {
            passed = false;
            failReason = `Expected success but got error: ${output}`;
        }
    } else {
        // No expectation specified — just check it doesn't error
        if (!result.success) {
            passed = false;
            failReason = `Program errored: ${output}`;
        }
    }

    return { testName, passed, failReason, filePath };
}

async function main() {
    const filterPattern = process.argv[2] || '';
    const testsDir = path.join(__dirname);

    const files = fs.readdirSync(testsDir)
        .filter(f => f.endsWith('.amitabhc'))
        .filter(f => !filterPattern || f.includes(filterPattern))
        .sort();

    if (files.length === 0) {
        console.log('No test files found.');
        process.exit(1);
    }

    console.log(`\n${COLORS.bold}🎬 AmitabhC Test Suite${COLORS.reset}`);
    console.log(`${COLORS.dim}Running ${files.length} tests...${COLORS.reset}\n`);

    let passed = 0;
    let failed = 0;
    const failures = [];

    for (const file of files) {
        try {
            const result = await runTestFile(path.join(testsDir, file));
            if (result.passed) {
                passed++;
                console.log(`  ${COLORS.green}✓${COLORS.reset} ${result.testName}`);
            } else {
                failed++;
                failures.push(result);
                console.log(`  ${COLORS.red}✗${COLORS.reset} ${result.testName}`);
                console.log(`    ${COLORS.dim}${result.failReason}${COLORS.reset}`);
            }
        } catch (err) {
            failed++;
            console.log(`  ${COLORS.red}✗${COLORS.reset} ${file} — CRASH: ${err.message}`);
        }
    }

    console.log(`\n${COLORS.bold}Results:${COLORS.reset} ${COLORS.green}${passed} passed${COLORS.reset}, ${failed > 0 ? COLORS.red : COLORS.dim}${failed} failed${COLORS.reset} / ${passed + failed} total`);

    if (failed > 0) {
        console.log(`\n${COLORS.red}${COLORS.bold}FAILED TESTS:${COLORS.reset}`);
        for (const f of failures) {
            console.log(`  ${COLORS.red}✗${COLORS.reset} ${f.testName} (${path.basename(f.filePath)})`);
        }
    }

    console.log('');
    process.exit(failed > 0 ? 1 : 0);
}

main();
