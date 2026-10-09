/**
 * AmitabhC Interpreter
 * Version: 4.3.1 - The Bollywood Programming Language
 *
 * NAMESPACES (All Amitabh Bachchan films):
 * - COOLIE (Math): abs, floor, ceil, round, sqrt, pow, min, max, random, sin, cos, tan, log, PI, E
 * - KHAZANA (Array): length, push, pop, shift, unshift, slice, join, reverse, includes, indexOf, concat, sort
 * - NASEEB (Time): abhi, saal, mahina, din, ghanta, minute, second, tarikh, waqt, timestamp
 * - SHAHENSHAH (String): 19 functions including trim, substring, charAt, indexOf, split, startsWith, endsWith, repeat, reverse, padStart, padEnd
 * - ZANJEER (Type): type checking (isAnk, isShabd, isKhazana, isDeewar) and conversion (toAnk, toShabd, toShaktiKaalia)
 * - DEEWAR (Dict): keys, values, hasKey, remove, size, merge
 *
 * CONTROL FLOW:
 * - AGAR / NAHI TOH / NAHI TOH AGAR / BAS (if/else-if/else)
 * - BAAR BAAR N (for loop), JAB TAK ... RAHEGA (while loop)
 * - HAR EK item MEIN array (for-each loop)
 * - DEEWAR (break) and SILSILA (continue) for loop control
 * - AGNEEPATH / MRITYU / PRATIGYA (try/catch/finally)
 * - KBC_SAWAAL / OPTION / SAHI_JAWAB / AGLE_SAWAAL (switch/case/default)
 * - ZANJEER_LOOP / TAB TAK (do-while loop)
 *
 * FEATURES:
 * - Compound assignment operators (+=, -=, *=, /=, %=)
 * - BADHAO/GHATAO (increment/decrement)
 * - Bare variable reassignment (x = 5 without VIJAY prefix)
 * - Array element assignment (arr[i] = value)
 * - Dictionary literals: DEEWAR_BANAO{"key": value}
 * - String escape sequences: \n, \t, \\, \"
 * - String interpolation: "Hello ${name}!"
 * - Loop counter variable (_GINTI)
 * - LAAWARIS (null) type
 * - All error messages are iconic Amitabh Bachchan dialogues
 */

class SecureAmitabhCInterpreter {
    constructor() {
        this.globalVariables = Object.create(null);
        this.globalConstants = Object.create(null);
        this.globalFunctions = Object.create(null);
        this.globalArrays = Object.create(null);
        
        // Function execution context stack
        this.executionStack = [];
        this.currentContext = {
            variables: this.globalVariables,
            constants: this.globalConstants,
            functions: this.globalFunctions,
            arrays: this.globalArrays
        };
        
        // Security limits
        this.maxCallDepth = 100;
        this.maxExecutionTime = 30000;
        this.maxLoopIterations = 10000;
        this.maxStringLength = 10000;
        this.maxVariables = 1000;
        this.maxArraySize = 1000;
        this.maxFunctions = 100;
        
        // Runtime state
        this.startTime = Date.now();
        this.lastInputTime = 0;
        this.outputCallback = null;
        this.inputCallback = null;
        this.isRunning = false;
        this.shouldStop = false;
        
        // Security whitelist
        this.allowedOperators = ['+', '-', '*', '/', '%', '==', '!=', '<', '>', '<=', '>=', '&&', '||', '!'];
        this.reservedWords = new Set([
            '__proto__', 'constructor', 'prototype', 'eval', 'function', 'window', 'document',
            'global', 'this', 'self', 'top', 'parent', 'frames', 'location', 'history'
        ]);
        
        // AmitabhC keywords — every one is an Amitabh Bachchan film/dialogue/character reference
        this.keywords = new Set([
            'LIGHTS', 'CAMERA', 'ACTION', 'BOLO', 'SUNO', 'VIJAY', 'DON', 'AGAR', 'NAHI', 'TOH', 'BAS',
            'BAAR', 'KHATAM', 'JAB', 'TAK', 'RAHEGA', 'NAAM', 'PURA', 'WAPAS', 'SHAKTI', 'KAALIA',
            'LAAWARIS', 'SHOLAY', 'DEEWAR', 'ZANJEER', 'COOLIE', 'AGNEEPATH', 'MRITYU', 'PRATIGYA',
            'SILSILA', 'NASEEB', 'SHAHENSHAH', 'KHAZANA',
            'DEVIYON_AUR_SAJJANO', 'COMPUTER_JI_LOCK_KIYA_JAYE', 'CONFIDENT_TO_LOCK_KIYA_JAYE',
            'LIFELINE_FIFTY_FIFTY', 'AUDIENCE_POLL', 'PHONE_A_FRIEND', 'EXPERT_ADVICE', 'QUIT_GAME',
            'INTEZAAR', 'HAR', 'EK', 'MEIN',
            'KBC_SAWAAL', 'OPTION', 'SAHI_JAWAB', 'AGLE_SAWAAL',
            'ZANJEER_LOOP', 'TAB',
            'DEEWAR_BANAO', 'DEEWAR_JODO',
            'BADHAO', 'GHATAO', 'BULAAO'
        ]);
    }

    // Set callbacks
    setOutputCallback(callback) {
        if (typeof callback === 'function') {
            this.outputCallback = callback;
        }
    }

    setInputCallback(callback) {
        if (typeof callback === 'function') {
            this.inputCallback = callback;
        }
    }

    // Stop execution
    stop() {
        this.shouldStop = true;
        this.isRunning = false;
    }

    // Context management for function calls - FIXED
    pushContext() {
        if (this.executionStack.length >= this.maxCallDepth) {
            throw new Error('"Deewar bahut oonchi ho gayi!" - Maximum call depth exceeded');
        }

        this.executionStack.push(this.currentContext);
        
        // Create new context for the function
        this.currentContext = {
            variables: Object.create(null), // Fresh variable scope
            constants: { ...this.currentContext.constants }, // Constants are inherited
            functions: this.currentContext.functions, // Functions are shared
            arrays: Object.create(null) // Fresh array scope
        };
    }

    popContext() {
        if (this.executionStack.length > 0) {
            this.currentContext = this.executionStack.pop();
        }
    }

    // Get current variable value with proper scoping - FIXED
    getVariable(name) {
        // First check current context variables
        if (Object.prototype.hasOwnProperty.call(this.currentContext.variables, name)) {
            return this.currentContext.variables[name];
        }
        // Then check constants
        if (Object.prototype.hasOwnProperty.call(this.currentContext.constants, name)) {
            return this.currentContext.constants[name];
        }
        // Finally check global variables (fallback)
        if (Object.prototype.hasOwnProperty.call(this.globalVariables, name)) {
            return this.globalVariables[name];
        }
        if (Object.prototype.hasOwnProperty.call(this.globalConstants, name)) {
            return this.globalConstants[name];
        }
        throw new Error(`"Don ko pakadna mushkil hi nahi, naamumkin hai!" - Undefined variable: ${name}`);
    }

    // Set variable with proper scoping
    setVariable(name, value) {
        if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name)) {
            throw new Error(`Invalid variable name: ${name}`);
        }
        
        if (this.reservedWords.has(name.toLowerCase())) {
            throw new Error(`Reserved variable name: ${name}`);
        }

        if (this.keywords.has(name)) {
            throw new Error(`"Yeh naam toh hamara hai!" - Cannot use AmitabhC keyword '${name}' as a variable name`);
        }

        if (Object.keys(this.currentContext.variables).length >= this.maxVariables &&
            !Object.prototype.hasOwnProperty.call(this.currentContext.variables, name)) {
            throw new Error('Too many variables created');
        }
        
        if (Array.isArray(value) && value.length > this.maxArraySize) {
            throw new Error('Array too large');
        }

        if (typeof value === 'string' && value.length > this.maxStringLength) {
            throw new Error('String too long');
        }
        
        this.currentContext.variables[name] = value;
    }

    // Expression evaluator
    async evaluateExpression(expr) {
        if (!expr || typeof expr !== 'string') {
            return '';
        }

        try {
            return await this.parseExpressionNew(expr.trim());
        } catch (error) {
            if (error && error.__exprTagged) throw error;
            const wrapped = new Error(`Expression error: ${this.sanitizeErrorMessage(error.message)}`);
            wrapped.__exprTagged = true;
            throw wrapped;
        }
    }

    // Complete expression parser with operator precedence
    async parseExpressionNew(expr) {
        if (this.shouldStop) {
            throw new Error('Execution stopped');
        }
        
        if (this.isRunning && this.startTime > 0) {
            if (Date.now() - this.startTime > this.maxExecutionTime) {
                throw new Error('"Interval khatam!" - Execution timeout');
            }
        }

        if (!expr) return '';

        expr = this.sanitizeExpression(expr);
        expr = this.stripOuterParens(expr);

        // Check for operators before literal parsing
        // (unary !/- are handled inside parseComplexExpression so they bind
        //  only to their immediate operand, not the whole rest of the expression)
        if (this.hasOperatorsOutsideQuotes(expr)) {
            return await this.parseComplexExpression(expr);
        }

        // Handle simple quoted strings (only if no operators outside quotes)
        if ((expr.startsWith('"') && expr.endsWith('"')) ||
            (expr.startsWith("'") && expr.endsWith("'"))) {
            let str = expr.slice(1, -1);
            // Process escape sequences
            str = str.replace(/\\n/g, '\n').replace(/\\t/g, '\t').replace(/\\\\/g, '\\').replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\r/g, '\r');
            // Process string interpolation: ${expression}
            if (str.includes('${')) {
                str = await this.processStringInterpolation(str);
            }
            if (str.length > this.maxStringLength) {
                throw new Error('"Mere paas bahut zyada memory hai... lekin limit toh limit hai!" - String too long');
            }
            return str;
        }

        // Handle numbers
        if (/^-?\d+(\.\d+)?$/.test(expr)) {
            const num = Number(expr);
            if (!Number.isFinite(num) || Math.abs(num) > Number.MAX_SAFE_INTEGER) {
                throw new Error('Invalid or unsafe number: ' + expr);
            }
            return num;
        }

        // Boolean constants
        if (expr === 'SHAKTI') return true;
        if (expr === 'KAALIA') return false;
        if (expr === 'LAAWARIS') return null;

        // Dictionary literal: DEEWAR_BANAO{"key": value, ...}
        if (expr.startsWith('DEEWAR_BANAO{') && expr.endsWith('}')) {
            const content = expr.slice('DEEWAR_BANAO{'.length, -1).trim();
            return await this.parseDictionaryLiteral(content);
        }

        // Array literal
        if (expr.startsWith('{') && expr.endsWith('}')) {
            const content = expr.slice(1, -1).trim();
            if (!content) return [];

            const items = this.parseArrayItems(content);
            if (items.length > this.maxArraySize) {
                throw new Error('Array too large');
            }
            const values = await Promise.all(items.map(item => this.parseExpressionNew(item)));
            return values;
        }

        // Built-in function calls
        if (expr.includes('.') && expr.includes('(')) {
            const builtInMatch = expr.match(/^(SHAHENSHAH|COOLIE|KHAZANA|NASEEB|ZANJEER|DEEWAR)\.(\w+)\s*\((.*)\)$/);
            if (builtInMatch) {
                return await this.evaluateBuiltInFunction(expr);
            }
        }

        // Function calls
        const funcCallMatch = expr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\((.*)\)$/);
        if (funcCallMatch) {
            return await this.evaluateFunctionCall(expr);
        }

        // Array/Dictionary access: arr[0] or dict["key"]
        const arrayMatch = expr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\[(.+)\]$/);
        if (arrayMatch) {
            const [, varName, indexExpr] = arrayMatch;

            if (this.reservedWords.has(varName.toLowerCase())) {
                throw new Error(`Reserved word cannot be used: ${varName}`);
            }

            const container = this.getVariable(varName);
            const indexValue = await this.parseExpressionNew(indexExpr.trim());

            // Dictionary access
            if (container !== null && typeof container === 'object' && !Array.isArray(container)) {
                const key = String(indexValue);
                if (!Object.prototype.hasOwnProperty.call(container, key)) {
                    return null; // LAAWARIS for missing keys
                }
                return container[key];
            }

            // Array access
            if (!Array.isArray(container)) {
                throw new Error(`"Aaj mere paas type hai, tumhare paas kya hai?" - '${varName}' is not an array or dictionary`);
            }

            const index = this.toNumber(indexValue, 'Array index');
            if (!Number.isInteger(index)) {
                throw new Error(`Array index must be an integer: ${indexValue}`);
            }

            if (index < 0 || index >= container.length) {
                throw new Error(`"Hum jahan khade hote hain, line wahi se shuru hoti hai!" - Array index ${index} out of bounds for '${varName}' (length: ${container.length})`);
            }

            return container[index];
        }

        // Variable lookup
        if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(expr)) {
            if (this.reservedWords.has(expr.toLowerCase())) {
                throw new Error(`Reserved word cannot be used: ${expr}`);
            }
            return this.getVariable(expr);
        }

        throw new Error(`Unable to parse expression: ${expr}`);
    }

    // Complex expression parser with operator precedence
    async parseComplexExpression(expr) {
        // Handle logical OR (lowest precedence)
        if (this.containsOperatorAtTopLevel(expr, '||')) {
            const parts = this.splitByOperatorAtTopLevel(expr, '||');
            let result = await this.parseExpressionNew(parts[0]);
            for (let i = 1; i < parts.length; i++) {
                if (this.coerceBoolean(result)) {
                    return true;
                }
                result = await this.parseExpressionNew(parts[i]);
            }
            return this.coerceBoolean(result);
        }

        // Handle logical AND
        if (this.containsOperatorAtTopLevel(expr, '&&')) {
            const parts = this.splitByOperatorAtTopLevel(expr, '&&');
            let result = await this.parseExpressionNew(parts[0]);
            for (let i = 1; i < parts.length; i++) {
                if (!this.coerceBoolean(result)) {
                    return false;
                }
                result = await this.parseExpressionNew(parts[i]);
            }
            return this.coerceBoolean(result);
        }

        // Handle equality operators
        for (const op of ['==', '!=']) {
            if (this.containsOperatorAtTopLevel(expr, op)) {
                const parts = this.splitByOperatorAtTopLevel(expr, op);
                if (parts.length > 2) {
                    throw new Error(`Chained '${op}' comparisons are not supported. Use && to combine comparisons.`);
                }
                if (parts.length >= 2) {
                    const left = await this.parseExpressionNew(parts[0]);
                    const right = await this.parseExpressionNew(parts[1]);
                    return op === '==' ? (left == right) : (left != right);
                }
            }
        }

        // Handle comparison operators
        for (const op of ['<=', '>=', '<', '>']) {
            if (this.containsOperatorAtTopLevel(expr, op)) {
                const parts = this.splitByOperatorAtTopLevel(expr, op);
                if (parts.length > 2) {
                    throw new Error(`Chained '${op}' comparisons are not supported. Use && to combine comparisons.`);
                }
                if (parts.length >= 2) {
                    const left = await this.parseExpressionNew(parts[0]);
                    const right = await this.parseExpressionNew(parts[1]);
                    const leftNum = this.toNumber(left, 'Comparison');
                    const rightNum = this.toNumber(right, 'Comparison');
                    
                    switch (op) {
                        case '<=': return leftNum <= rightNum;
                        case '>=': return leftNum >= rightNum;
                        case '<': return leftNum < rightNum;
                        case '>': return leftNum > rightNum;
                    }
                }
            }
        }

        // Handle addition and subtraction
        for (const op of ['+', '-']) {
            if (this.containsOperatorAtTopLevel(expr, op)) {
                const parts = this.splitByOperatorAtTopLevel(expr, op);
                if (parts.length >= 2) {
                    let result = await this.parseExpressionNew(parts[0]);
                    
                    for (let i = 1; i < parts.length; i++) {
                        const operand = await this.parseExpressionNew(parts[i]);
                        
                        if (op === '+') {
                            if (typeof result === 'string' || typeof operand === 'string') {
                                const resultStr = this.stringifyValue(result) + this.stringifyValue(operand);
                                if (resultStr.length > this.maxStringLength) {
                                    throw new Error('Result string too long');
                                }
                                result = resultStr;
                            } else {
                                const sum = this.toNumber(result, 'Addition') + this.toNumber(operand, 'Addition');
                                if (!Number.isFinite(sum) || Math.abs(sum) > Number.MAX_SAFE_INTEGER) {
                                    throw new Error('Addition overflow');
                                }
                                result = sum;
                            }
                        } else {
                            const diff = this.toNumber(result, 'Subtraction') - this.toNumber(operand, 'Subtraction');
                            if (!Number.isFinite(diff) || Math.abs(diff) > Number.MAX_SAFE_INTEGER) {
                                throw new Error('Subtraction overflow');
                            }
                            result = diff;
                        }
                    }
                    return result;
                }
            }
        }

        // Handle multiplication, division, modulo
        for (const op of ['*', '/', '%']) {
            if (this.containsOperatorAtTopLevel(expr, op)) {
                const parts = this.splitByOperatorAtTopLevel(expr, op);
                if (parts.length >= 2) {
                    let result = this.toNumber(await this.parseExpressionNew(parts[0]), 'Arithmetic');
                    
                    for (let i = 1; i < parts.length; i++) {
                        const operand = this.toNumber(await this.parseExpressionNew(parts[i]), 'Arithmetic');
                        
                        if (op === '*') {
                            const product = result * operand;
                            if (!Number.isFinite(product) || Math.abs(product) > Number.MAX_SAFE_INTEGER) {
                                throw new Error('Multiplication overflow');
                            }
                            result = product;
                        } else if (op === '/') {
                            if (operand === 0) {
                                throw new Error('Division by zero - "Zero se divide kaise kar sakte hain?"');
                            }
                            const quotient = result / operand;
                            if (!Number.isFinite(quotient)) {
                                throw new Error('Division overflow');
                            }
                            result = quotient;
                        } else {
                            if (operand === 0) {
                                throw new Error('Modulo by zero');
                            }
                            result = result % operand;
                        }
                    }
                    return result;
                }
            }
        }

        // Unary operators (highest precedence — bind to the immediate operand only)
        if (expr.startsWith('!')) {
            const value = await this.parseExpressionNew(expr.slice(1).trim());
            return !this.coerceBoolean(value);
        }
        if (expr.startsWith('-')) {
            const value = await this.parseExpressionNew(expr.slice(1).trim());
            return -this.toNumber(value, 'Unary minus');
        }

        throw new Error(`Unable to parse expression: ${expr}`);
    }

    stripOuterParens(expr) {
        let current = expr.trim();
        while (this.isWrappedInParens(current)) {
            current = current.slice(1, -1).trim();
        }
        return current;
    }

    isWrappedInParens(expr) {
        if (!expr.startsWith('(') || !expr.endsWith(')')) {
            return false;
        }

        let depth = 0;
        let inString = false;
        let stringChar = '';

        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];
            const prevChar = i > 0 ? expr[i - 1] : '';

            if ((char === '"' || char === "'") && prevChar !== '\\') {
                if (!inString) {
                    inString = true;
                    stringChar = char;
                } else if (char === stringChar) {
                    inString = false;
                    stringChar = '';
                }
                continue;
            }

            if (inString) continue;

            if (char === '(' || char === '[') depth++;
            if (char === ')' || char === ']') depth--;

            if (depth === 0 && i < expr.length - 1) {
                return false;
            }
        }

        return depth === 0;
    }

    coerceBoolean(value) {
        if (typeof value === 'boolean') return value;
        if (value === null || value === undefined) return false;
        if (typeof value === 'number') return value !== 0;
        if (typeof value === 'string') {
            if (value === 'SHAKTI') return true;
            if (value === 'KAALIA' || value === 'LAAWARIS') return false;
            return value !== '';
        }
        return Boolean(value);
    }

    stringifyValue(value) {
        if (typeof value === 'boolean') return value ? 'SHAKTI' : 'KAALIA';
        if (value === null || value === undefined) return 'LAAWARIS';
        if (Array.isArray(value)) {
            return `[${value.map(item => this.stringifyValue(item)).join(', ')}]`;
        }
        if (typeof value === 'object') {
            const entries = Object.keys(value).map(k => `"${k}": ${this.stringifyValue(value[k])}`);
            return `{${entries.join(', ')}}`;
        }
        return String(value);
    }

    toNumber(value, context) {
        const num = Number(value);
        if (!Number.isFinite(num) || Math.abs(num) > Number.MAX_SAFE_INTEGER) {
            throw new Error(`${context} requires a finite number`);
        }
        return num;
    }

    // Check if expression contains operator at top level
    containsOperatorAtTopLevel(expr, operator) {
        let depth = 0;
        let inString = false;
        let stringChar = '';
        let i = 0;

        while (i < expr.length) {
            const char = expr[i];
            const prevChar = i > 0 ? expr[i - 1] : '';

            if ((char === '"' || char === "'") && prevChar !== '\\') {
                if (!inString) {
                    inString = true;
                    stringChar = char;
                } else if (char === stringChar) {
                    inString = false;
                    stringChar = '';
                }
                i++;
                continue;
            }

            if (inString) {
                i++;
                continue;
            }

            if (char === '(' || char === '[') depth++;
            if (char === ')' || char === ']') depth--;

            if (depth === 0) {
                if (expr.slice(i, i + operator.length) === operator) {
                    const before = i > 0 ? expr[i - 1] : '';
                    const after = i + operator.length < expr.length ? expr[i + operator.length] : '';
                    
                    if (!this.isOperatorChar(before) && !this.isOperatorChar(after)) {
                        return true;
                    }
                }
            }

            i++;
        }
        return false;
    }

    // Split expression by operator at top level
    splitByOperatorAtTopLevel(expr, operator) {
        const parts = [];
        let current = '';
        let depth = 0;
        let inString = false;
        let stringChar = '';
        let i = 0;

        while (i < expr.length) {
            const char = expr[i];
            const prevChar = i > 0 ? expr[i - 1] : '';

            if ((char === '"' || char === "'") && prevChar !== '\\') {
                if (!inString) {
                    inString = true;
                    stringChar = char;
                } else if (char === stringChar) {
                    inString = false;
                    stringChar = '';
                }
            }

            if (!inString) {
                if (char === '(' || char === '[') depth++;
                if (char === ')' || char === ']') depth--;

                if (depth === 0 && expr.slice(i, i + operator.length) === operator) {
                    const before = i > 0 ? expr[i - 1] : '';
                    const after = i + operator.length < expr.length ? expr[i + operator.length] : '';

                    // A leading +/- with nothing accumulated yet is a unary sign,
                    // not a binary operator — keep it attached to its operand.
                    const trimmedCurrent = current.trim();
                    const isUnarySign = (operator === '-' || operator === '+') &&
                        (trimmedCurrent === '' || this.isOperatorChar(trimmedCurrent.slice(-1)));

                    if (!this.isOperatorChar(before) && !this.isOperatorChar(after) && !isUnarySign) {
                        parts.push(current.trim());
                        current = '';
                        i += operator.length;
                        continue;
                    }
                }
            }

            current += char;
            i++;
        }

        if (current.trim()) {
            parts.push(current.trim());
        }

        return parts;
    }

    hasOperatorsOutsideQuotes(expr) {
        let inString = false;
        let stringChar = '';
        let depth = 0;

        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];
            const prevChar = i > 0 ? expr[i - 1] : '';

            if ((char === '"' || char === "'") && prevChar !== '\\') {
                if (!inString) {
                    inString = true;
                    stringChar = char;
                } else if (char === stringChar) {
                    inString = false;
                    stringChar = '';
                }
                continue;
            }

            if (inString) continue;

            if (char === '(' || char === '[') depth++;
            if (char === ')' || char === ']') depth--;

            if (depth === 0) {
                // Check for multi-character operators first
                if (i < expr.length - 1) {
                    const twoChar = expr.slice(i, i + 2);
                    if (['==', '!=', '<=', '>=', '&&', '||'].includes(twoChar)) {
                        return true;
                    }
                }

                // Check single character operators
                if (['+', '-', '*', '/', '%', '<', '>', '!'].includes(char)) {
                    // Make sure it's not a negative number
                    if (char === '-') {
                        const nextChar = i < expr.length - 1 ? expr[i + 1] : '';
                        const isNegativeNumber = /\d/.test(nextChar) && (i === 0 || /[\+\-\*\/\%\=\!\<\>\&\|\(\,\s]/.test(prevChar));
                        if (isNegativeNumber) continue;
                    }
                    return true;
                }
            }
        }
        return false;
    }

    isOperatorChar(char) {
        return ['=', '!', '<', '>', '&', '|', '+', '-', '*', '/', '%'].includes(char);
    }

    // Built-in function evaluator
    async evaluateBuiltInFunction(expr) {
        const match = expr.match(/^(SHAHENSHAH|COOLIE|KHAZANA|NASEEB|ZANJEER|DEEWAR)\.(\w+)\s*\((.*)\)$/);
        if (!match) {
            throw new Error(`Invalid built-in function call: ${expr}`);
        }
        
        const [, namespace, functionName, argsStr] = match;
        const args = argsStr
            ? await Promise.all(this.parseArrayItems(argsStr).map(arg => this.evaluateExpression(arg)))
            : [];
        
        if (this.shouldStop || (this.isRunning && Date.now() - this.startTime > this.maxExecutionTime)) {
            throw new Error('Execution timeout or stopped');
        }
        
        switch (namespace) {
            case 'SHAHENSHAH':
                return this.evaluateStringFunction(functionName, args);
            case 'COOLIE':
                return this.evaluateMathFunction(functionName, args);
            case 'KHAZANA':
                return this.evaluateArrayFunction(functionName, args);
            case 'NASEEB':
                return this.evaluateTimeFunction(functionName, args);
            case 'ZANJEER':
                return this.evaluateTypeFunction(functionName, args);
            case 'DEEWAR':
                return this.evaluateDictFunction(functionName, args);
            default:
                throw new Error(`Unknown namespace: ${namespace}`);
        }
    }

    evaluateStringFunction(functionName, args) {
        if (args.length === 0) {
            throw new Error(`SHAHENSHAH.${functionName} requires at least one argument`);
        }
        
        const str = String(args[0]);
        
        switch (functionName) {
            case 'length':
                return str.length;
                
            case 'uppercase':
                return str.toUpperCase();
                
            case 'lowercase':
                return str.toLowerCase();
                
            case 'contains':
                if (args.length < 2) {
                    throw new Error('SHAHENSHAH.contains requires two arguments');
                }
                return str.includes(String(args[1]));
                
            case 'replace':
                if (args.length < 3) {
                    throw new Error('SHAHENSHAH.replace requires three arguments');
                }
                const searchStr = String(args[1]);
                const replaceStr = String(args[2]);
                const replaced = str.replace(new RegExp(this.escapeRegExp(searchStr), 'g'), replaceStr);
                if (replaced.length > this.maxStringLength) {
                    throw new Error('Result string too long');
                }
                return replaced;

            case 'trim':
                return str.trim();

            case 'trimStart':
                return str.trimStart();

            case 'trimEnd':
                return str.trimEnd();

            case 'substring': {
                if (args.length < 2) throw new Error('SHAHENSHAH.substring requires at least two arguments (string, start)');
                const subStart = this.toNumber(args[1], 'SHAHENSHAH.substring');
                const subEnd = args.length >= 3 ? this.toNumber(args[2], 'SHAHENSHAH.substring') : str.length;
                return str.substring(subStart, subEnd);
            }

            case 'charAt': {
                if (args.length < 2) throw new Error('SHAHENSHAH.charAt requires two arguments');
                const charIdx = this.toNumber(args[1], 'SHAHENSHAH.charAt');
                if (charIdx < 0 || charIdx >= str.length) throw new Error(`SHAHENSHAH.charAt: index ${charIdx} out of bounds`);
                return str.charAt(charIdx);
            }

            case 'indexOf': {
                if (args.length < 2) throw new Error('SHAHENSHAH.indexOf requires two arguments');
                return str.indexOf(String(args[1]));
            }

            case 'lastIndexOf': {
                if (args.length < 2) throw new Error('SHAHENSHAH.lastIndexOf requires two arguments');
                return str.lastIndexOf(String(args[1]));
            }

            case 'split': {
                if (args.length < 2) throw new Error('SHAHENSHAH.split requires two arguments');
                const splitResult = str.split(String(args[1]));
                if (splitResult.length > this.maxArraySize) throw new Error('Split result too large');
                return splitResult;
            }

            case 'startsWith': {
                if (args.length < 2) throw new Error('SHAHENSHAH.startsWith requires two arguments');
                return str.startsWith(String(args[1]));
            }

            case 'endsWith': {
                if (args.length < 2) throw new Error('SHAHENSHAH.endsWith requires two arguments');
                return str.endsWith(String(args[1]));
            }

            case 'repeat': {
                if (args.length < 2) throw new Error('SHAHENSHAH.repeat requires two arguments');
                const repeatCount = this.toNumber(args[1], 'SHAHENSHAH.repeat');
                if (repeatCount < 0 || repeatCount > 1000) throw new Error('SHAHENSHAH.repeat: count must be between 0 and 1000');
                const repeated = str.repeat(repeatCount);
                if (repeated.length > this.maxStringLength) throw new Error('Result string too long');
                return repeated;
            }

            case 'reverse': {
                return str.split('').reverse().join('');
            }

            case 'padStart': {
                if (args.length < 2) throw new Error('SHAHENSHAH.padStart requires at least two arguments');
                const padLen = this.toNumber(args[1], 'SHAHENSHAH.padStart');
                const padChar = args.length >= 3 ? String(args[2]) : ' ';
                if (padLen > this.maxStringLength) throw new Error('SHAHENSHAH.padStart: target length too large');
                return str.padStart(padLen, padChar);
            }

            case 'padEnd': {
                if (args.length < 2) throw new Error('SHAHENSHAH.padEnd requires at least two arguments');
                const padEndLen = this.toNumber(args[1], 'SHAHENSHAH.padEnd');
                const padEndChar = args.length >= 3 ? String(args[2]) : ' ';
                if (padEndLen > this.maxStringLength) throw new Error('SHAHENSHAH.padEnd: target length too large');
                return str.padEnd(padEndLen, padEndChar);
            }

            default:
                throw new Error(`Unknown SHAHENSHAH function: ${functionName}`);
        }
    }

    evaluateMathFunction(functionName, args) {
        switch (functionName) {
            case 'abs':
                if (args.length < 1) throw new Error('COOLIE.abs requires one argument');
                return Math.abs(this.toNumber(args[0], 'COOLIE.abs'));
            case 'floor':
                if (args.length < 1) throw new Error('COOLIE.floor requires one argument');
                return Math.floor(this.toNumber(args[0], 'COOLIE.floor'));
            case 'ceil':
                if (args.length < 1) throw new Error('COOLIE.ceil requires one argument');
                return Math.ceil(this.toNumber(args[0], 'COOLIE.ceil'));
            case 'round':
                if (args.length < 1) throw new Error('COOLIE.round requires one argument');
                return Math.round(this.toNumber(args[0], 'COOLIE.round'));
            case 'sqrt': {
                if (args.length < 1) throw new Error('COOLIE.sqrt requires one argument');
                const sqrtVal = this.toNumber(args[0], 'COOLIE.sqrt');
                if (sqrtVal < 0) throw new Error('COOLIE.sqrt: cannot take square root of negative number');
                return Math.sqrt(sqrtVal);
            }
            case 'pow': {
                if (args.length < 2) throw new Error('COOLIE.pow requires two arguments');
                const base = this.toNumber(args[0], 'COOLIE.pow');
                const exp = this.toNumber(args[1], 'COOLIE.pow');
                const powResult = Math.pow(base, exp);
                if (!Number.isFinite(powResult) || Math.abs(powResult) > Number.MAX_SAFE_INTEGER) {
                    throw new Error('COOLIE.pow: result overflow');
                }
                return powResult;
            }
            case 'min':
                if (args.length < 2) throw new Error('COOLIE.min requires at least two arguments');
                return Math.min(...args.map(a => this.toNumber(a, 'COOLIE.min')));
            case 'max':
                if (args.length < 2) throw new Error('COOLIE.max requires at least two arguments');
                return Math.max(...args.map(a => this.toNumber(a, 'COOLIE.max')));
            case 'random':
                return Math.random();
            case 'sin':
                if (args.length < 1) throw new Error('COOLIE.sin requires one argument');
                return Math.sin(this.toNumber(args[0], 'COOLIE.sin'));
            case 'cos':
                if (args.length < 1) throw new Error('COOLIE.cos requires one argument');
                return Math.cos(this.toNumber(args[0], 'COOLIE.cos'));
            case 'tan':
                if (args.length < 1) throw new Error('COOLIE.tan requires one argument');
                return Math.tan(this.toNumber(args[0], 'COOLIE.tan'));
            case 'log': {
                if (args.length < 1) throw new Error('COOLIE.log requires one argument');
                const logVal = this.toNumber(args[0], 'COOLIE.log');
                if (logVal <= 0) throw new Error('COOLIE.log: argument must be positive');
                return Math.log(logVal);
            }
            case 'PI':
                return Math.PI;
            case 'E':
                return Math.E;
            default:
                throw new Error(`Unknown COOLIE function: ${functionName}`);
        }
    }

    evaluateArrayFunction(functionName, args) {
        switch (functionName) {
            case 'length': {
                if (args.length < 1) throw new Error('KHAZANA.length requires one argument');
                if (!Array.isArray(args[0])) throw new Error('KHAZANA.length: argument must be an array');
                return args[0].length;
            }
            case 'push': {
                if (args.length < 2) throw new Error('KHAZANA.push requires array and value arguments');
                if (!Array.isArray(args[0])) throw new Error('KHAZANA.push: first argument must be an array');
                if (args[0].length >= this.maxArraySize) throw new Error('Array too large');
                args[0].push(args[1]);
                return args[0];
            }
            case 'pop': {
                if (args.length < 1) throw new Error('KHAZANA.pop requires one argument');
                if (!Array.isArray(args[0])) throw new Error('KHAZANA.pop: argument must be an array');
                if (args[0].length === 0) throw new Error('KHAZANA.pop: array is empty');
                return args[0].pop();
            }
            case 'shift': {
                if (args.length < 1) throw new Error('KHAZANA.shift requires one argument');
                if (!Array.isArray(args[0])) throw new Error('KHAZANA.shift: argument must be an array');
                if (args[0].length === 0) throw new Error('KHAZANA.shift: array is empty');
                return args[0].shift();
            }
            case 'unshift': {
                if (args.length < 2) throw new Error('KHAZANA.unshift requires array and value arguments');
                if (!Array.isArray(args[0])) throw new Error('KHAZANA.unshift: first argument must be an array');
                if (args[0].length >= this.maxArraySize) throw new Error('Array too large');
                args[0].unshift(args[1]);
                return args[0];
            }
            case 'slice': {
                if (args.length < 2) throw new Error('KHAZANA.slice requires array and start index');
                if (!Array.isArray(args[0])) throw new Error('KHAZANA.slice: first argument must be an array');
                const start = this.toNumber(args[1], 'KHAZANA.slice');
                const end = args.length >= 3 ? this.toNumber(args[2], 'KHAZANA.slice') : args[0].length;
                return args[0].slice(start, end);
            }
            case 'join': {
                if (args.length < 1) throw new Error('KHAZANA.join requires one argument');
                if (!Array.isArray(args[0])) throw new Error('KHAZANA.join: first argument must be an array');
                const separator = args.length >= 2 ? String(args[1]) : ',';
                const joined = args[0].map(v => this.stringifyValue(v)).join(separator);
                if (joined.length > this.maxStringLength) throw new Error('Result string too long');
                return joined;
            }
            case 'reverse': {
                if (args.length < 1) throw new Error('KHAZANA.reverse requires one argument');
                if (!Array.isArray(args[0])) throw new Error('KHAZANA.reverse: argument must be an array');
                return [...args[0]].reverse();
            }
            case 'includes': {
                if (args.length < 2) throw new Error('KHAZANA.includes requires array and value arguments');
                if (!Array.isArray(args[0])) throw new Error('KHAZANA.includes: first argument must be an array');
                return args[0].includes(args[1]);
            }
            case 'indexOf': {
                if (args.length < 2) throw new Error('KHAZANA.indexOf requires array and value arguments');
                if (!Array.isArray(args[0])) throw new Error('KHAZANA.indexOf: first argument must be an array');
                return args[0].indexOf(args[1]);
            }
            case 'concat': {
                if (args.length < 2) throw new Error('KHAZANA.concat requires two array arguments');
                if (!Array.isArray(args[0]) || !Array.isArray(args[1])) throw new Error('KHAZANA.concat: both arguments must be arrays');
                const concatResult = args[0].concat(args[1]);
                if (concatResult.length > this.maxArraySize) throw new Error('Array too large');
                return concatResult;
            }
            case 'sort': {
                if (args.length < 1) throw new Error('KHAZANA.sort requires one argument');
                if (!Array.isArray(args[0])) throw new Error('KHAZANA.sort: argument must be an array');
                return [...args[0]].sort((a, b) => {
                    if (typeof a === 'number' && typeof b === 'number') return a - b;
                    return String(a).localeCompare(String(b));
                });
            }
            default:
                throw new Error(`Unknown KHAZANA function: ${functionName}`);
        }
    }

    evaluateTimeFunction(functionName, args) {
        switch (functionName) {
            case 'abhi':
                return Date.now();
            case 'saal':
                return new Date().getFullYear();
            case 'mahina':
                return new Date().getMonth() + 1;
            case 'din':
                return new Date().getDate();
            case 'ghanta':
                return new Date().getHours();
            case 'minute':
                return new Date().getMinutes();
            case 'second':
                return new Date().getSeconds();
            case 'tarikh': {
                const now = new Date();
                const dd = String(now.getDate()).padStart(2, '0');
                const mm = String(now.getMonth() + 1).padStart(2, '0');
                const yyyy = now.getFullYear();
                return `${dd}-${mm}-${yyyy}`;
            }
            case 'waqt': {
                const now = new Date();
                const hh = String(now.getHours()).padStart(2, '0');
                const mi = String(now.getMinutes()).padStart(2, '0');
                const ss = String(now.getSeconds()).padStart(2, '0');
                return `${hh}:${mi}:${ss}`;
            }
            case 'timestamp':
                return Math.floor(Date.now() / 1000);
            default:
                throw new Error(`Unknown NASEEB function: ${functionName}`);
        }
    }

    evaluateTypeFunction(functionName, args) {
        if (args.length < 1) {
            throw new Error(`ZANJEER.${functionName} requires at least one argument`);
        }
        switch (functionName) {
            case 'type': {
                const val = args[0];
                if (val === null || val === undefined) return 'laawaris';
                if (typeof val === 'boolean') return 'shakti_kaalia';
                if (typeof val === 'number') return 'ank';
                if (typeof val === 'string') return 'shabd';
                if (Array.isArray(val)) return 'khazana';
                if (typeof val === 'object') return 'deewar';
                return 'anjaan';
            }
            case 'isAnk':
                return typeof args[0] === 'number';
            case 'isShabd':
                return typeof args[0] === 'string';
            case 'isKhazana':
                return Array.isArray(args[0]);
            case 'isShaktiKaalia':
                return typeof args[0] === 'boolean';
            case 'isLaawaris':
                return args[0] === null || args[0] === undefined;
            case 'isDeewar':
                return args[0] !== null && typeof args[0] === 'object' && !Array.isArray(args[0]);
            case 'toAnk': {
                const num = Number(args[0]);
                if (!Number.isFinite(num)) throw new Error('ZANJEER.toAnk: cannot convert to number');
                return num;
            }
            case 'toShabd':
                return this.stringifyValue(args[0]);
            case 'toShaktiKaalia':
                return this.coerceBoolean(args[0]);
            default:
                throw new Error(`Unknown ZANJEER function: ${functionName}`);
        }
    }

    // Dictionary literal parser
    async parseDictionaryLiteral(content) {
        if (!content) return Object.create(null);
        const dict = Object.create(null);
        const items = this.parseArrayItems(content);
        for (const item of items) {
            const colonIdx = item.indexOf(':');
            if (colonIdx === -1) throw new Error('"Dialogue galat bol rahe ho!" - Dictionary entry must be key: value');
            const keyExpr = item.slice(0, colonIdx).trim();
            const valExpr = item.slice(colonIdx + 1).trim();
            const key = await this.evaluateExpression(keyExpr);
            const value = await this.evaluateExpression(valExpr);
            if (typeof key !== 'string' && typeof key !== 'number') {
                throw new Error('"Tumhara argument galat hai, sahab!" - Dictionary key must be a string or number');
            }
            dict[String(key)] = value;
        }
        if (Object.keys(dict).length > this.maxArraySize) {
            throw new Error('Dictionary too large');
        }
        return dict;
    }

    // Dictionary (DEEWAR) namespace functions
    evaluateDictFunction(functionName, args) {
        switch (functionName) {
            case 'keys': {
                if (args.length < 1) throw new Error('DEEWAR.keys requires one argument');
                const d = this.ensureDict(args[0], 'DEEWAR.keys');
                return Object.keys(d);
            }
            case 'values': {
                if (args.length < 1) throw new Error('DEEWAR.values requires one argument');
                const d = this.ensureDict(args[0], 'DEEWAR.values');
                return Object.values(d);
            }
            case 'hasKey': {
                if (args.length < 2) throw new Error('DEEWAR.hasKey requires two arguments');
                const d = this.ensureDict(args[0], 'DEEWAR.hasKey');
                return Object.prototype.hasOwnProperty.call(d, String(args[1]));
            }
            case 'remove': {
                if (args.length < 2) throw new Error('DEEWAR.remove requires two arguments');
                const d = this.ensureDict(args[0], 'DEEWAR.remove');
                const key = String(args[1]);
                if (Object.prototype.hasOwnProperty.call(d, key)) {
                    const removed = d[key];
                    delete d[key];
                    return removed;
                }
                return null;
            }
            case 'size': {
                if (args.length < 1) throw new Error('DEEWAR.size requires one argument');
                const d = this.ensureDict(args[0], 'DEEWAR.size');
                return Object.keys(d).length;
            }
            case 'merge': {
                if (args.length < 2) throw new Error('DEEWAR.merge requires two arguments');
                const d1 = this.ensureDict(args[0], 'DEEWAR.merge');
                const d2 = this.ensureDict(args[1], 'DEEWAR.merge');
                const merged = Object.create(null);
                Object.assign(merged, d1, d2);
                if (Object.keys(merged).length > this.maxArraySize) throw new Error('Dictionary too large');
                return merged;
            }
            default:
                throw new Error(`Unknown DEEWAR function: ${functionName}`);
        }
    }

    ensureDict(val, context) {
        if (val === null || val === undefined || typeof val !== 'object' || Array.isArray(val)) {
            throw new Error(`${context}: argument must be a dictionary (DEEWAR_BANAO)`);
        }
        return val;
    }

    // String interpolation: process ${expr} inside strings
    async processStringInterpolation(str) {
        let result = '';
        let i = 0;
        while (i < str.length) {
            if (str[i] === '$' && str[i + 1] === '{') {
                let depth = 1;
                let j = i + 2;
                while (j < str.length && depth > 0) {
                    if (str[j] === '{') depth++;
                    if (str[j] === '}') depth--;
                    j++;
                }
                const exprInside = str.slice(i + 2, j - 1);
                const value = await this.evaluateExpression(exprInside);
                result += this.stringifyValue(value);
                i = j;
            } else {
                result += str[i];
                i++;
            }
        }
        return result;
    }

    escapeRegExp(value) {
        return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    async evaluateFunctionCall(expr) {
        const match = expr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\((.*)\)$/);
        if (!match) {
            throw new Error(`Invalid function call: ${expr}`);
        }

        const funcName = match[1];
        const argsStr = match[2];
        
        if (!Object.prototype.hasOwnProperty.call(this.currentContext.functions, funcName)) {
            throw new Error(`"Yeh function toh aaya hi nahi!" - Function '${funcName}' not found`);
        }

        const args = argsStr
            ? await Promise.all(this.parseArrayItems(argsStr).map(arg => this.evaluateExpression(arg)))
            : [];
        return await this.callFunction(funcName, args);
    }

    async callFunction(funcName, args) {
        const func = this.currentContext.functions[funcName];
        if (!func) {
            throw new Error(`Function '${funcName}' not found`);
        }

        this.pushContext();
        try {
            func.params.forEach((param, index) => {
                const argValue = args[index] !== undefined ? args[index] : null; // missing args are LAAWARIS
                this.setVariable(param, argValue);
            });

            const result = await this.executeBlock(func.body);
            if (result && result.__return) {
                return result.value;
            }
            if (result && (result.__break || result.__continue)) {
                throw new Error('"Yeh loop ke bahar kya kar rahe ho?" - DEEWAR/SILSILA used outside a loop');
            }
            return '';
        } finally {
            this.popContext();
        }
    }

    sanitizeExpression(expr) {
        if (expr.length > 1000) {
            throw new Error('"Itna lamba dialogue nahi chalega!" - Expression too long (max 1000 characters)');
        }
        return expr;
    }

    parseArrayItems(content) {
        const items = [];
        let current = '';
        let depth = 0;
        let inString = false;
        let stringChar = '';
        let escapeNext = false;

        for (let i = 0; i < content.length; i++) {
            const char = content[i];
            
            if (escapeNext) {
                current += char;
                escapeNext = false;
                continue;
            }
            
            if (char === '\\') {
                escapeNext = true;
                current += char;
                continue;
            }
            
            if ((char === '"' || char === "'") && !escapeNext) {
                if (!inString) {
                    inString = true;
                    stringChar = char;
                } else if (char === stringChar) {
                    inString = false;
                }
            }
            
            if (!inString) {
                if (char === '{' || char === '(') depth++;
                if (char === '}' || char === ')') depth--;
                
                if (char === ',' && depth === 0) {
                    if (current.trim()) {
                        items.push(current.trim());
                    }
                    current = '';
                    continue;
                }
            }
            
            current += char;
        }
        
        if (current.trim()) {
            items.push(current.trim());
        }
        
        return items;
    }

    sanitizeErrorMessage(message) {
        return String(message || 'Unknown error').slice(0, 200);
    }

    // Strip internal prefixes (Line N:, Expression error:) for user-facing catch variables
    cleanErrorMessage(message) {
        return this.sanitizeErrorMessage(message)
            .replace(/^(?:Line \d+:\s*|Expression error:\s*)+/, '');
    }

    // Block openers that are terminated by KHATAM (they share the terminator,
    // so every scanner must count all of them when tracking nesting depth)
    isKhatamOpener(content) {
        return /^BAAR BAAR(\s|$)/.test(content) ||
               /^HAR EK(\s|$)/.test(content) ||
               content === 'AGNEEPATH';
    }

    // Get user input with validation
    async getUserInput(prompt) {
        
        const sanitizedPrompt = String(prompt || 'Enter value:').slice(0, 200);
        
        let input;
        if (this.inputCallback) {
            input = await this.inputCallback(sanitizedPrompt);
        } else if (typeof window !== 'undefined' && typeof window.prompt === 'function') {
            input = window.prompt(sanitizedPrompt);
        } else {
            throw new Error('"Awaaz kahan se aayegi?" - SUNO needs an input callback in this environment (use setInputCallback)');
        }
        
        if (input === null) {
            return null;
        }
        
        return String(input).slice(0, this.maxStringLength);
    }

    // Safe output
    output(message) {
        const outputMessage = String(message || '');
        
        if (this.outputCallback) {
            this.outputCallback(outputMessage);
        } else {
            console.log(outputMessage);
        }
    }

    // Strip an inline // comment from a source line.
    // A // inside a double-quoted string literal (escapes respected) is not a comment.
    stripInlineComment(text) {
        let inString = false;
        for (let i = 0; i < text.length - 1; i++) {
            const ch = text[i];
            if (inString && ch === '\\') {
                i++;
                continue;
            }
            if (ch === '"') {
                inString = !inString;
                continue;
            }
            if (!inString && ch === '/' && text[i + 1] === '/') {
                return text.slice(0, i);
            }
        }
        return text;
    }

    // Main execution entry point
    async run(code) {
        this.startTime = Date.now();
        this.isRunning = true;
        this.shouldStop = false;
        
        try {
            if (!code || typeof code !== 'string') {
                throw new Error('Invalid code provided');
            }
            
            if (code.length > 100000) {
                throw new Error('Code too large (max 100KB)');
            }
            
            // Reset state
            this.globalVariables = Object.create(null);
            this.globalConstants = Object.create(null);
            this.globalFunctions = Object.create(null);
            this.globalArrays = Object.create(null);
            this.executionStack = [];
            this.currentContext = {
                variables: this.globalVariables,
                constants: this.globalConstants,
                functions: this.globalFunctions,
                arrays: this.globalArrays
            };
            
            // Parse code
            const lines = code
                .split('\n')
                .map((line, index) => ({
                    content: this.stripInlineComment(line).trim(),
                    number: index + 1
                }))
                .filter(line => line.content && !line.content.startsWith('//'));
            
            if (lines.length === 0) {
                throw new Error('Empty program');
            }
            
            // Validate structure
            if (lines[0].content !== 'LIGHTS') {
                throw new Error('Program must start with LIGHTS');
            }

            if (lines[lines.length - 1].content !== 'ACTION') {
                throw new Error('Program must end with ACTION');
            }

            if (lines.length < 2 || lines[1].content !== 'CAMERA') {
                throw new Error('Missing CAMERA section - CAMERA must come right after LIGHTS');
            }
            const cameraIndex = 1;

            const actionIndex = lines.findIndex(line => line.content === 'ACTION');
            if (actionIndex !== lines.length - 1) {
                throw new Error(`"Ek picture mein ek hi kahani!" - Unexpected code after ACTION (line ${lines[actionIndex + 1].number}). Only one LIGHTS...ACTION program is allowed per file.`);
            }
            const programLines = lines.slice(cameraIndex + 1, actionIndex);

            // Execute program
            const blockResult = await this.executeBlock(programLines);
            if (blockResult && blockResult.__break) {
                throw new Error('"Deewar loop ke andar hi khadi hoti hai!" - DEEWAR (break) used outside a loop');
            }
            if (blockResult && blockResult.__continue) {
                throw new Error('"Silsila loop ke andar hi chalta hai!" - SILSILA (continue) used outside a loop');
            }

            return {
                success: true,
                executionTime: Date.now() - this.startTime,
                memoryUsage: {
                    variables: Object.keys(this.globalVariables).length,
                    arrays: Object.keys(this.globalArrays).length,
                    functions: Object.keys(this.globalFunctions).length
                }
            };
            
        } catch (error) {
            // QUIT_GAME is a clean, intentional termination — not a failure
            if (error && error.__quit) {
                return {
                    success: true,
                    quit: true,
                    executionTime: Date.now() - this.startTime,
                    memoryUsage: {
                        variables: Object.keys(this.globalVariables).length,
                        arrays: Object.keys(this.globalArrays).length,
                        functions: Object.keys(this.globalFunctions).length
                    }
                };
            }
            const errorMessage = this.sanitizeErrorMessage(error.message);
            return {
                success: false,
                error: errorMessage,
                executionTime: Date.now() - this.startTime
            };
        } finally {
            this.isRunning = false;
        }
    }

    async executeBlock(lines) {
        let i = 0;

        while (i < lines.length && !this.shouldStop) {
            const line = lines[i];

            try {
                if (Date.now() - this.startTime > this.maxExecutionTime) {
                    throw new Error('"Interval khatam!" - Execution timeout');
                }

                const result = await this.executeLine(line, lines, i);
                if (result && result.__return) {
                    return result;
                }
                if (result && result.__break) {
                    return result;
                }
                if (result && result.__continue) {
                    return result;
                }
                if (typeof result === 'number') {
                    i = result;
                } else {
                    i++;
                }

            } catch (error) {
                // Pass through clean-termination and already-tagged errors untouched
                if (error && (error.__quit || error.__lineTagged)) {
                    throw error;
                }
                const wrapped = new Error(`Line ${line.number}: ${this.sanitizeErrorMessage(error.message)}`);
                wrapped.__lineTagged = true;
                throw wrapped;
            }
        }
    }

    async executeLine(line, lines, currentIndex) {
        if (this.shouldStop) return null;
        
        const content = line.content;

        // Keywords are matched as whole words so identifiers that merely start
        // with a keyword (e.g. AGARBATTI, DONATION) are not misrouted.
        if (/^BOLO(\s|$)/.test(content)) {
            return await this.executeBolo(content);
        }
        else if (/^SUNO(\s|$)/.test(content)) {
            return await this.executeSuno(content);
        }
        else if (/^VIJAY(\s|$)/.test(content)) {
            return await this.executeVijay(content);
        }
        else if (/^DON(\s|$)/.test(content)) {
            return await this.executeDon(content);
        }
        else if (/^AGAR(\s|$)/.test(content)) {
            return await this.executeAgar(lines, currentIndex);
        }
        else if (/^BAAR BAAR(\s|$)/.test(content)) {
            return await this.executeBaarBaar(lines, currentIndex);
        }
        else if (/^JAB TAK(\s|$)/.test(content)) {
            return await this.executeJabTak(lines, currentIndex);
        }
        else if (/^HAR EK(\s|$)/.test(content)) {
            return await this.executeHarEk(lines, currentIndex);
        }
        // Try-catch-finally (AGNEEPATH/MRITYU/PRATIGYA)
        else if (content === 'AGNEEPATH') {
            return await this.executeAgneepath(lines, currentIndex);
        }
        // Switch-case (KBC_SAWAAL)
        else if (/^KBC_SAWAAL(\s|$)/.test(content)) {
            return await this.executeKbcSawaal(lines, currentIndex);
        }
        // Do-while loop (ZANJEER_LOOP)
        else if (content === 'ZANJEER_LOOP') {
            return await this.executeZanjeerLoop(lines, currentIndex);
        }
        // Increment (BADHAO x)
        else if (/^BADHAO(\s|$)/.test(content)) {
            const varName = content.slice(6).trim();
            if (!varName) throw new Error('BADHAO requires a variable name. Example: BADHAO count');
            const current = this.getVariable(varName);
            this.setVariable(varName, this.toNumber(current, 'BADHAO') + 1);
        }
        // Decrement (GHATAO x)
        else if (/^GHATAO(\s|$)/.test(content)) {
            const varName = content.slice(6).trim();
            if (!varName) throw new Error('GHATAO requires a variable name. Example: GHATAO count');
            const current = this.getVariable(varName);
            this.setVariable(varName, this.toNumber(current, 'GHATAO') - 1);
        }
        // Dictionary key assignment: DEEWAR_JODO dict "key" value
        else if (/^DEEWAR_JODO(\s|$)/.test(content)) {
            return await this.executeDeewarJodo(content);
        }
        else if (/^NAAM(\s|$)/.test(content)) {
            return this.defineFunction(lines, currentIndex);
        }
        else if (/^WAPAS(\s|$)/.test(content)) {
            return await this.executeWapas(content);
        }
        // Explicit function call: BULAAO functionName(args)
        else if (/^BULAAO(\s|$)/.test(content)) {
            const callExpr = content.slice(6).trim();
            const callMatch = callExpr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\((.*)\)$/);
            if (!callMatch) {
                throw new Error('BULAAO syntax: BULAAO functionName(arguments). Example: BULAAO greet("Vijay")');
            }
            await this.evaluateFunctionCall(callExpr);
        }
        // KBC Commands
        else if (/^COMPUTER_JI_LOCK_KIYA_JAYE(\s|$)/.test(content)) {
            this.output('💻 Computer ji, lock kiya jaaye! Answer locked! ✅');
        }
        else if (/^DEVIYON_AUR_SAJJANO(\s|$)/.test(content)) {
            this.output('🎯 Deviyon aur Sajjano, namaskar! Welcome to AmitabhC! 🎬');
        }
        else if (/^CONFIDENT_TO_LOCK_KIYA_JAYE(\s|$)/.test(content)) {
            this.output('🤔 Confidence check: Answer locked with confidence!');
        }
        else if (/^LIFELINE_FIFTY_FIFTY(\s|$)/.test(content)) {
            this.output('🎯 50-50 Lifeline activated! Two options eliminated! 💡');
        }
        else if (/^AUDIENCE_POLL(\s|$)/.test(content)) {
            const poll = Math.floor(Math.random() * 30) + 60;
            this.output(`📊 Audience Poll: ${poll}% majority opinion received! 👥`);
        }
        else if (/^PHONE_A_FRIEND(\s|$)/.test(content)) {
            const match = content.match(/PHONE_A_FRIEND\s+"([^"]+)"/);
            const friend = match ? match[1] : 'Expert Friend';
            this.output(`📞 Calling ${friend}... Getting expert advice! 📱`);
        }
        else if (/^EXPERT_ADVICE(\s|$)/.test(content)) {
            this.output('🎓 Expert Advice: Based on analysis, this approach looks correct! 📚');
        }
        else if (/^QUIT_GAME(\s|$)/.test(content)) {
            this.output('🏆 Game quit successfully! Taking winnings home! 💰');
            const quit = new Error('Program terminated by QUIT_GAME');
            quit.__quit = true; // clean termination — not catchable, reported as success
            throw quit;
        }
        else if (/^INTEZAAR(\s|$)/.test(content)) {
            const match = content.match(/INTEZAAR\s+(\d+)/);
            const ms = match ? Math.min(parseInt(match[1], 10), 5000) : 1000;
            await new Promise(resolve => setTimeout(resolve, ms));
            this.output(`⏳ Waited for ${ms}ms`);
        }
        // Break (DEEWAR = wall, stops the loop)
        else if (content === 'DEEWAR') {
            return { __break: true };
        }
        // Continue (SILSILA = sequence, skip to next iteration)
        else if (content === 'SILSILA') {
            return { __continue: true };
        }
        // Compound assignment: x += 5, x -= 3, etc.
        else if (/^[a-zA-Z_][a-zA-Z0-9_]*\s*(\+=|-=|\*=|\/=|%=)\s*.+/.test(content)) {
            return await this.executeCompoundAssignment(content);
        }
        // Array element assignment: arr[i] = value
        else if (/^[a-zA-Z_][a-zA-Z0-9_]*\[.+\]\s*=\s*.+/.test(content)) {
            return await this.executeArrayElementAssign(content);
        }
        // Bare variable reassignment: x = 5 (existing variables only)
        else if (/^[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*.+/.test(content)) {
            return await this.executeBareAssignment(content);
        }
        // Built-in namespace call as statement: KHAZANA.push(arr, 4)
        else if (/^(SHAHENSHAH|COOLIE|KHAZANA|NASEEB|ZANJEER|DEEWAR)\.\w+\s*\(/.test(content)) {
            await this.evaluateBuiltInFunction(content);
        }
        // Plain function call as statement: functionName(args)
        else if (/^[a-zA-Z_][a-zA-Z0-9_]*\s*\(.*\)$/.test(content)) {
            return await this.executeFunctionCall(content);
        }
        else {
            // Unknown lines must never be silent no-ops
            throw new Error(`"Angrezi hai ki maan hi nahi rahi!" - Unknown statement: ${content.slice(0, 60)}`);
        }

        return null;
    }

    async executeBolo(line) {
        const match = line.match(/^BOLO\s+(.+)/);
        if (!match) {
            throw new Error('BOLO requires something to say. Example: BOLO "Namaste!"');
        }

        const expression = match[1].trim();
        const value = await this.evaluateExpression(expression);
        this.output(this.stringifyValue(value));
    }

    async executeWapas(line) {
        if (this.executionStack.length === 0) {
            throw new Error('WAPAS can only be used inside a function');
        }

        const match = line.match(/^WAPAS(?:\s+(.+))?$/);
        if (!match) {
            throw new Error('Invalid WAPAS syntax');
        }

        const expression = match[1] ? match[1].trim() : '';
        const value = expression ? await this.evaluateExpression(expression) : '';
        return { __return: true, value };
    }

    async executeSuno(line) {
        // SUNO variable ["optional custom prompt"]
        const match = line.match(/^SUNO\s+([a-zA-Z_][a-zA-Z0-9_]*)(?:\s+"([^"]*)")?\s*$/);
        if (!match) {
            throw new Error('SUNO syntax: SUNO variableName or SUNO variableName "prompt". Example: SUNO naam "Aapka naam?"');
        }
        const varName = match[1];
        const customPrompt = match[2];

        if (this.reservedWords.has(varName.toLowerCase())) {
            throw new Error(`Reserved variable name: ${varName}`);
        }

        const input = await this.getUserInput(customPrompt || `Enter value for ${varName}:`);
        if (input !== null) {
            const numValue = Number(input);
            const value = !isNaN(numValue) && input.trim() !== '' ? numValue : input;
            this.setVariable(varName, value);
        }
    }

    async executeVijay(line) {
        // Handle arrays
        if (line.includes('[') && line.includes(']')) {
            const arrayMatch = line.match(/VIJAY\s+([a-zA-Z_][a-zA-Z0-9_]*)\[\]\s*=\s*{([^}]*)}/);
            if (arrayMatch) {
                const arrayName = arrayMatch[1];
                const elementsStr = arrayMatch[2];
                
                if (elementsStr.trim()) {
                    const elements = await Promise.all(
                        this.parseArrayItems(elementsStr).map(e => this.evaluateExpression(e))
                    );
                    
                    if (elements.length > this.maxArraySize) {
                        throw new Error('Array too large');
                    }
                    
                    this.currentContext.arrays[arrayName] = elements;
                    this.setVariable(arrayName, elements);
                } else {
                    this.currentContext.arrays[arrayName] = [];
                    this.setVariable(arrayName, []);
                }
                return;
            }
        }

        const match = line.match(/^VIJAY\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)/);
        if (!match) {
            throw new Error('VIJAY syntax: VIJAY name = value (or VIJAY name[] = {a, b, c} for arrays)');
        }
        const varName = match[1];
        const expression = match[2];
        const value = await this.evaluateExpression(expression);
        this.setVariable(varName, value);
    }

    async executeDon(line) {
        const match = line.match(/^DON\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)/);
        if (!match) {
            throw new Error('DON syntax: DON NAME = value. Example: DON PI = 3.14159');
        }
        const constName = match[1];
        const expression = match[2];
        const value = await this.evaluateExpression(expression);
        // Validate the name first (setVariable throws on invalid/reserved names)
        // so a failed declaration never leaves a phantom constant behind.
        this.setVariable(constName, value);
        this.currentContext.constants[constName] = value;
    }

    async executeBareAssignment(line) {
        const match = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)/);
        if (!match) throw new Error('Invalid assignment syntax');
        const varName = match[1];
        const expression = match[2];
        // Only allow reassignment of existing variables
        this.getVariable(varName); // throws if not defined
        if (Object.prototype.hasOwnProperty.call(this.currentContext.constants, varName)) {
            throw new Error(`"Main aaj bhi phenke hue paise nahin uthata!" - Cannot reassign constant '${varName}'`);
        }
        const value = await this.evaluateExpression(expression);
        this.setVariable(varName, value);
    }

    async executeCompoundAssignment(line) {
        const match = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*(\+=|-=|\*=|\/=|%=)\s*(.+)/);
        if (!match) throw new Error('Invalid compound assignment syntax');
        const varName = match[1];
        const operator = match[2];
        const expression = match[3];
        const currentValue = this.getVariable(varName);
        if (Object.prototype.hasOwnProperty.call(this.currentContext.constants, varName)) {
            throw new Error(`"Main aaj bhi phenke hue paise nahin uthata!" - Cannot reassign constant '${varName}'`);
        }
        const operand = await this.evaluateExpression(expression);
        let newValue;
        switch (operator) {
            case '+=':
                if (typeof currentValue === 'string' || typeof operand === 'string') {
                    newValue = this.stringifyValue(currentValue) + this.stringifyValue(operand);
                    if (newValue.length > this.maxStringLength) throw new Error('Result string too long');
                } else {
                    newValue = this.toNumber(currentValue, 'Compound +=') + this.toNumber(operand, 'Compound +=');
                }
                break;
            case '-=':
                newValue = this.toNumber(currentValue, 'Compound -=') - this.toNumber(operand, 'Compound -=');
                break;
            case '*=':
                newValue = this.toNumber(currentValue, 'Compound *=') * this.toNumber(operand, 'Compound *=');
                break;
            case '/=': {
                const divisor = this.toNumber(operand, 'Compound /=');
                if (divisor === 0) throw new Error('Division by zero - "Zero se divide kaise kar sakte hain?"');
                newValue = this.toNumber(currentValue, 'Compound /=') / divisor;
                break;
            }
            case '%=': {
                const mod = this.toNumber(operand, 'Compound %=');
                if (mod === 0) throw new Error('Modulo by zero');
                newValue = this.toNumber(currentValue, 'Compound %=') % mod;
                break;
            }
        }
        if (typeof newValue === 'number' && (!Number.isFinite(newValue) || Math.abs(newValue) > Number.MAX_SAFE_INTEGER)) {
            throw new Error('Arithmetic overflow in compound assignment');
        }
        this.setVariable(varName, newValue);
    }

    async executeArrayElementAssign(line) {
        const match = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\[(.+)\]\s*=\s*(.+)/);
        if (!match) throw new Error('"Dialogue galat bol rahe ho!" - Invalid assignment syntax');
        const varName = match[1];
        const indexExpr = match[2];
        const valueExpr = match[3];
        const container = this.getVariable(varName);
        const value = await this.evaluateExpression(valueExpr);

        // Dictionary key assignment: dict["key"] = value
        if (container !== null && typeof container === 'object' && !Array.isArray(container)) {
            const key = String(await this.evaluateExpression(indexExpr));
            container[key] = value;
            return;
        }

        // Array element assignment
        if (!Array.isArray(container)) throw new Error(`"Aaj mere paas type hai, tumhare paas kya hai?" - '${varName}' is not an array or dictionary`);
        const index = this.toNumber(await this.evaluateExpression(indexExpr), 'Array index');
        if (!Number.isInteger(index)) throw new Error('Array index must be an integer');
        if (index < 0 || index >= container.length) throw new Error(`"Hum jahan khade hote hain, line wahi se shuru hoti hai!" - Array index ${index} out of bounds (length: ${container.length})`);
        container[index] = value;
    }

    async executeAgar(lines, startIndex) {
        const condition = lines[startIndex].content.replace('AGAR', '').trim();
        let i = startIndex + 1;
        let basIndex = -1;
        let nahiTohIndices = [];
        let depth = 1;
        
        for (let j = i; j < lines.length; j++) {
            if (lines[j].content.startsWith('AGAR')) depth++;
            if (lines[j].content === 'BAS') {
                depth--;
                if (depth === 0) {
                    basIndex = j;
                    break;
                }
            }
            if ((lines[j].content === 'NAHI TOH' || lines[j].content.startsWith('NAHI TOH AGAR')) && depth === 1) {
                nahiTohIndices.push(j);
            }
        }

        if (basIndex === -1) {
            throw new Error("AGAR block must end with BAS!");
        }

        const conditionResult = await this.evaluateCondition(condition);
        
        if (conditionResult) {
            const endIndex = nahiTohIndices.length > 0 ? nahiTohIndices[0] : basIndex;
            const blockLines = lines.slice(i, endIndex);
            const blockResult = await this.executeBlock(blockLines);
            if (blockResult && (blockResult.__return || blockResult.__break || blockResult.__continue)) {
                return blockResult;
            }
        } else {
            for (let idx = 0; idx < nahiTohIndices.length; idx++) {
                if (this.shouldStop) break;

                const nahiTohLine = lines[nahiTohIndices[idx]];
                const nextNahiToh = nahiTohIndices[idx + 1] || basIndex;

                if (nahiTohLine.content.startsWith('NAHI TOH AGAR')) {
                    const elseIfCondition = nahiTohLine.content.replace('NAHI TOH AGAR', '').trim();
                    if (await this.evaluateCondition(elseIfCondition)) {
                        const blockLines = lines.slice(nahiTohIndices[idx] + 1, nextNahiToh);
                        const blockResult = await this.executeBlock(blockLines);
                        if (blockResult && (blockResult.__return || blockResult.__break || blockResult.__continue)) {
                            return blockResult;
                        }
                        break;
                    }
                } else {
                    const blockLines = lines.slice(nahiTohIndices[idx] + 1, basIndex);
                    const blockResult = await this.executeBlock(blockLines);
                    if (blockResult && (blockResult.__return || blockResult.__break || blockResult.__continue)) {
                        return blockResult;
                    }
                    break;
                }
            }
        }

        return basIndex + 1;
    }

    async executeBaarBaar(lines, startIndex) {
        // BAAR BAAR <count-expression> [MEIN counterVar] — count may be any expression
        const match = lines[startIndex].content.match(/^BAAR BAAR\s+(.+?)(?:\s+MEIN\s+([a-zA-Z_][a-zA-Z0-9_]*))?\s*$/);
        if (!match) {
            throw new Error("BAAR BAAR requires a count! Example: BAAR BAAR 10 or BAAR BAAR n MEIN i");
        }

        const countValue = await this.evaluateExpression(match[1].trim());
        const times = this.toNumber(countValue, 'BAAR BAAR count');
        if (!Number.isInteger(times) || times < 0) {
            throw new Error(`"Baar baar mat bol!" - BAAR BAAR count must be a non-negative whole number, got: ${this.stringifyValue(countValue)}`);
        }
        const counterVar = match[2] || null;
        if (times > this.maxLoopIterations) {
            throw new Error(`"Baar baar mat bol!" - Loop count ${times} exceeds maximum ${this.maxLoopIterations}`);
        }

        let i = startIndex + 1;
        let khatamIndex = -1;
        let depth = 1;

        for (let j = i; j < lines.length; j++) {
            if (this.isKhatamOpener(lines[j].content)) depth++;
            if (lines[j].content === 'KHATAM') {
                depth--;
                if (depth === 0) {
                    khatamIndex = j;
                    break;
                }
            }
        }

        if (khatamIndex === -1) {
            throw new Error("BAAR BAAR must end with KHATAM!");
        }

        const blockLines = lines.slice(i, khatamIndex);
        
        for (let count = 0; count < times && !this.shouldStop; count++) {
            this.setVariable('_GINTI', count);
            if (counterVar) this.setVariable(counterVar, count);
            const blockResult = await this.executeBlock(blockLines);
            if (blockResult && blockResult.__return) {
                return blockResult;
            }
            if (blockResult && blockResult.__break) {
                break;
            }
            // __continue: proceed to next iteration

            if (count % 100 === 0 && count > 0) {
                await new Promise(resolve => setTimeout(resolve, 0));
            }
        }

        return khatamIndex + 1;
    }

    async executeJabTak(lines, startIndex) {
        const condition = lines[startIndex].content.replace('JAB TAK', '').trim();
        let i = startIndex + 1;
        let rahegaIndex = -1;
        let depth = 1;

        for (let j = i; j < lines.length; j++) {
            if (lines[j].content.startsWith('JAB TAK')) depth++;
            if (lines[j].content === 'RAHEGA' || lines[j].content.startsWith('RAHEGA')) {
                depth--;
                if (depth === 0) {
                    rahegaIndex = j;
                    break;
                }
            }
        }

        if (rahegaIndex === -1) {
            throw new Error("JAB TAK must end with RAHEGA!");
        }

        const blockLines = lines.slice(i, rahegaIndex);
        let loopCount = 0;
        
        while (await this.evaluateCondition(condition) && !this.shouldStop) {
            loopCount++;

            if (loopCount > this.maxLoopIterations) {
                throw new Error(`"Tu na thakega kabhi, tu na rukega kabhi!" - While loop exceeded maximum iterations (${this.maxLoopIterations})`);
            }

            const blockResult = await this.executeBlock(blockLines);
            if (blockResult && blockResult.__return) {
                return blockResult;
            }
            if (blockResult && blockResult.__break) {
                break;
            }
            // __continue: proceed to next iteration

            if (loopCount % 100 === 0) {
                await new Promise(resolve => setTimeout(resolve, 0));
            }
        }

        return rahegaIndex + 1;
    }

    async executeHarEk(lines, startIndex) {
        // Syntax: HAR EK <item> MEIN <arrayExpr>
        const match = lines[startIndex].content.match(/HAR EK\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+MEIN\s+(.+)/);
        if (!match) {
            throw new Error('HAR EK syntax: HAR EK <variable> MEIN <array>');
        }

        const itemVar = match[1];
        const arrayExpr = match[2].trim();

        let i = startIndex + 1;
        let khatamIndex = -1;
        let depth = 1;

        for (let j = i; j < lines.length; j++) {
            if (this.isKhatamOpener(lines[j].content)) depth++;
            if (lines[j].content === 'KHATAM') {
                depth--;
                if (depth === 0) {
                    khatamIndex = j;
                    break;
                }
            }
        }

        if (khatamIndex === -1) {
            throw new Error('HAR EK must end with KHATAM!');
        }

        const arrayValue = await this.evaluateExpression(arrayExpr);
        if (!Array.isArray(arrayValue)) {
            throw new Error('HAR EK requires an array to iterate over');
        }

        const blockLines = lines.slice(i, khatamIndex);

        for (let idx = 0; idx < arrayValue.length && !this.shouldStop; idx++) {
            this.setVariable(itemVar, arrayValue[idx]);
            this.setVariable('_GINTI', idx);

            const blockResult = await this.executeBlock(blockLines);
            if (blockResult && blockResult.__return) {
                return blockResult;
            }
            if (blockResult && blockResult.__break) {
                break;
            }
            // __continue: proceed to next iteration

            if (idx % 100 === 0 && idx > 0) {
                await new Promise(resolve => setTimeout(resolve, 0));
            }
        }

        return khatamIndex + 1;
    }

    // DEEWAR_JODO dict "key" value — add key to dictionary
    async executeDeewarJodo(line) {
        const match = line.match(/^DEEWAR_JODO\s+([a-zA-Z_][a-zA-Z0-9_]*)\s+(.+?)\s+(.+)$/);
        if (!match) throw new Error('"Dialogue galat bol rahe ho!" - DEEWAR_JODO syntax: DEEWAR_JODO dict key value');
        const dictName = match[1];
        const dict = this.getVariable(dictName);
        if (dict === null || typeof dict !== 'object' || Array.isArray(dict)) {
            throw new Error(`"Aaj mere paas type hai, tumhare paas kya hai?" - '${dictName}' is not a dictionary`);
        }
        const key = String(await this.evaluateExpression(match[2]));
        const value = await this.evaluateExpression(match[3]);
        if (Object.keys(dict).length >= this.maxArraySize && !Object.prototype.hasOwnProperty.call(dict, key)) {
            throw new Error('Dictionary too large');
        }
        dict[key] = value;
    }

    // AGNEEPATH (try) / MRITYU (catch) / PRATIGYA (finally)
    async executeAgneepath(lines, startIndex) {
        let mrityuIndex = -1;
        let pratiyaIndex = -1;
        let khatamIndex = -1;
        let depth = 1;

        for (let j = startIndex + 1; j < lines.length; j++) {
            if (this.isKhatamOpener(lines[j].content)) depth++;
            if (lines[j].content === 'KHATAM') {
                depth--;
                if (depth === 0) {
                    khatamIndex = j;
                    break;
                }
            }
            if (depth === 1 && /^MRITYU(\s|$)/.test(lines[j].content)) mrityuIndex = j;
            if (depth === 1 && lines[j].content === 'PRATIGYA') pratiyaIndex = j;
        }

        if (khatamIndex === -1) {
            throw new Error('"Dialogue galat bol rahe ho!" - AGNEEPATH block must end with KHATAM');
        }

        const tryEnd = mrityuIndex !== -1 ? mrityuIndex : (pratiyaIndex !== -1 ? pratiyaIndex : khatamIndex);
        const tryBlock = lines.slice(startIndex + 1, tryEnd);

        let catchVarName = null;
        let catchBlock = [];
        if (mrityuIndex !== -1) {
            const mrityuMatch = lines[mrityuIndex].content.match(/^MRITYU\s+([a-zA-Z_][a-zA-Z0-9_]*)$/);
            catchVarName = mrityuMatch ? mrityuMatch[1] : null;
            const catchEnd = pratiyaIndex !== -1 ? pratiyaIndex : khatamIndex;
            catchBlock = lines.slice(mrityuIndex + 1, catchEnd);
        }

        let finallyBlock = [];
        if (pratiyaIndex !== -1) {
            finallyBlock = lines.slice(pratiyaIndex + 1, khatamIndex);
        }

        let blockResult = null;
        try {
            blockResult = await this.executeBlock(tryBlock);
        } catch (error) {
            // QUIT_GAME is a clean termination, never catchable by MRITYU
            if (error && error.__quit) {
                throw error;
            }
            if (mrityuIndex !== -1) {
                if (catchVarName) {
                    this.setVariable(catchVarName, this.cleanErrorMessage(error.message));
                }
                blockResult = await this.executeBlock(catchBlock);
            } else {
                // No catch block — re-throw after finally
                if (finallyBlock.length > 0) {
                    await this.executeBlock(finallyBlock);
                }
                throw error;
            }
        }

        // Execute finally block
        if (finallyBlock.length > 0) {
            await this.executeBlock(finallyBlock);
        }

        // Propagate return/break/continue
        if (blockResult && (blockResult.__return || blockResult.__break || blockResult.__continue)) {
            return blockResult;
        }

        return khatamIndex + 1;
    }

    // KBC_SAWAAL (switch) / OPTION (case) / SAHI_JAWAB (default) / AGLE_SAWAAL (end)
    async executeKbcSawaal(lines, startIndex) {
        const switchExpr = lines[startIndex].content.replace('KBC_SAWAAL', '').trim();
        const switchValue = await this.evaluateExpression(switchExpr);

        let agleSawaalIndex = -1;
        let depth = 1;

        for (let j = startIndex + 1; j < lines.length; j++) {
            if (/^KBC_SAWAAL(\s|$)/.test(lines[j].content)) depth++;
            if (lines[j].content === 'AGLE_SAWAAL') {
                depth--;
                if (depth === 0) {
                    agleSawaalIndex = j;
                    break;
                }
            }
        }

        if (agleSawaalIndex === -1) {
            throw new Error('"Dialogue galat bol rahe ho!" - KBC_SAWAAL must end with AGLE_SAWAAL');
        }

        // Collect OPTION / SAHI_JAWAB markers at this switch's own level,
        // skipping the bodies of nested KBC_SAWAAL blocks entirely.
        const markers = [];
        let markerDepth = 0;
        for (let j = startIndex + 1; j < agleSawaalIndex; j++) {
            const c = lines[j].content;
            if (/^KBC_SAWAAL(\s|$)/.test(c)) { markerDepth++; continue; }
            if (c === 'AGLE_SAWAAL') { markerDepth--; continue; }
            if (markerDepth > 0) continue;
            if (/^OPTION(\s|$)/.test(c)) {
                const optionExpr = c.slice(6).trim();
                if (!optionExpr) {
                    throw new Error(`Line ${lines[j].number}: OPTION requires a value. Example: OPTION 1`);
                }
                markers.push({ index: j, type: 'option', expr: optionExpr });
            } else if (c === 'SAHI_JAWAB') {
                markers.push({ index: j, type: 'default' });
            }
        }

        const options = [];
        let sahiJawabBlock = null;
        for (let m = 0; m < markers.length; m++) {
            const end = m + 1 < markers.length ? markers[m + 1].index : agleSawaalIndex;
            const block = lines.slice(markers[m].index + 1, end);
            if (markers[m].type === 'option') {
                options.push({ expr: markers[m].expr, block });
            } else {
                sahiJawabBlock = block;
            }
        }

        // Match and execute — OPTION expressions are evaluated lazily, in order,
        // only until one matches. Matching is intentionally loose (==) so that
        // numeric input matches numeric-looking string options.
        let matched = false;
        for (const option of options) {
            const optionValue = await this.evaluateExpression(option.expr);
            // eslint-disable-next-line eqeqeq
            if (optionValue == switchValue) {
                matched = true;
                const result = await this.executeBlock(option.block);
                if (result && (result.__return || result.__break || result.__continue)) {
                    return result;
                }
                break; // No fallthrough
            }
        }

        if (!matched && sahiJawabBlock) {
            const result = await this.executeBlock(sahiJawabBlock);
            if (result && (result.__return || result.__break || result.__continue)) {
                return result;
            }
        }

        return agleSawaalIndex + 1;
    }

    // ZANJEER_LOOP (do) ... TAB TAK condition (do-while)
    async executeZanjeerLoop(lines, startIndex) {
        let tabTakIndex = -1;
        let depth = 1;

        for (let j = startIndex + 1; j < lines.length; j++) {
            if (lines[j].content === 'ZANJEER_LOOP') depth++;
            if (lines[j].content.startsWith('TAB TAK')) {
                depth--;
                if (depth === 0) {
                    tabTakIndex = j;
                    break;
                }
            }
        }

        if (tabTakIndex === -1) {
            throw new Error('"Dialogue galat bol rahe ho!" - ZANJEER_LOOP must end with TAB TAK condition');
        }

        const condition = lines[tabTakIndex].content.replace('TAB TAK', '').trim();
        if (!condition) {
            throw new Error('"Dialogue galat bol rahe ho!" - TAB TAK requires a condition');
        }

        const blockLines = lines.slice(startIndex + 1, tabTakIndex);
        let loopCount = 0;

        do {
            loopCount++;
            if (loopCount > this.maxLoopIterations) {
                throw new Error(`"Tu na thakega kabhi, tu na rukega kabhi!" - Do-while loop exceeded maximum iterations (${this.maxLoopIterations})`);
            }

            const blockResult = await this.executeBlock(blockLines);
            if (blockResult && blockResult.__return) {
                return blockResult;
            }
            if (blockResult && blockResult.__break) {
                break;
            }
            // __continue: proceed to condition check

            if (loopCount % 100 === 0) {
                await new Promise(resolve => setTimeout(resolve, 0));
            }
        } while (await this.evaluateCondition(condition) && !this.shouldStop);

        return tabTakIndex + 1;
    }

    defineFunction(lines, startIndex) {
        const match = lines[startIndex].content.match(/NAAM\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)/);
        if (!match) {
            throw new Error("Invalid function definition!");
        }

        const funcName = match[1];
        const params = match[2] ? match[2].split(',').map(p => p.trim()).filter(p => p) : [];
        
        if (this.reservedWords.has(funcName.toLowerCase())) {
            throw new Error(`Reserved function name: ${funcName}`);
        }

        if (this.keywords.has(funcName)) {
            throw new Error(`"Yeh naam toh hamara hai!" - Cannot use AmitabhC keyword '${funcName}' as a function name`);
        }

        if (Object.keys(this.currentContext.functions).length >= this.maxFunctions) {
            throw new Error('Too many functions defined');
        }

        for (const param of params) {
            if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(param)) {
                throw new Error(`Invalid parameter name: ${param}`);
            }
            if (this.reservedWords.has(param.toLowerCase())) {
                throw new Error(`Reserved parameter name: ${param}`);
            }
            if (this.keywords.has(param)) {
                throw new Error(`"Yeh naam toh hamara hai!" - Cannot use AmitabhC keyword '${param}' as a parameter name`);
            }
        }
        
        let i = startIndex + 1;
        let puraIndex = -1;

        for (let j = i; j < lines.length; j++) {
            if (lines[j].content === 'PURA') {
                puraIndex = j;
                break;
            }
        }

        if (puraIndex === -1) {
            throw new Error("Function must end with PURA!");
        }

        this.currentContext.functions[funcName] = {
            params: params,
            body: lines.slice(i, puraIndex)
        };

        return puraIndex + 1;
    }

    async executeFunctionCall(line) {
        const match = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\((.*)\)$/);
        if (match) {
            const argsStr = match[2];
            await this.evaluateFunctionCall(`${match[1]}(${argsStr})`);
            return null;
        }
    }

    async evaluateCondition(condition) {
        const result = await this.evaluateExpression(condition);
        return this.coerceBoolean(result);
    }
}

// Export for both Node.js and browser environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SecureAmitabhCInterpreter;
} else {
    window.SecureAmitabhCInterpreter = SecureAmitabhCInterpreter;
}

// Only show banner in browser context, not when loaded as a module
if (typeof window !== 'undefined') {
    console.log('🎬 AmitabhC Interpreter v4.3.1 - "Aaj khush toh bahut hoge tum!"');
}
