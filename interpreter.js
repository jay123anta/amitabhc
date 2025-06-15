/**
 * Secure AmitabhC Interpreter - Production Ready
 * Version: 2.1.0 - Added SHABD String Functions
 * 
 * SECURITY FEATURES:
 * - No eval() or Function() usage
 * - Comprehensive input sanitization
 * - Execution timeouts and limits
 * - Memory usage controls
 * - XSS prevention
 * - Prototype pollution protection
 */

class SecureAmitabhCInterpreter {
    constructor() {
        this.variables = Object.create(null); // Prevent prototype pollution
        this.constants = Object.create(null);
        this.functions = Object.create(null);
        this.arrays = Object.create(null);
        this.callStack = [];
        
        // Security limits
        this.maxCallDepth = 100;
        this.maxExecutionTime = 30000; // 30 seconds
        this.maxLoopIterations = 10000;
        this.maxStringLength = 10000;
        this.maxVariables = 1000;
        this.maxArraySize = 1000;
        this.maxFunctions = 100;
        
        // Runtime state
        this.startTime = 0;
        this.lastInputTime = 0;
        this.outputCallback = null;
        this.inputCallback = null;
        this.isRunning = false;
        this.shouldStop = false;
        
        // Security: Whitelist of allowed operations
        this.allowedOperators = ['+', '-', '*', '/', '%', '==', '!=', '<', '>', '<=', '>=', '&&', '||', '!'];
        this.reservedWords = new Set([
            '__proto__', 'constructor', 'prototype', 'eval', 'function', 'window', 'document',
            'global', 'this', 'self', 'top', 'parent', 'frames', 'location', 'history'
        ]);
        
        // AmitabhC keywords
        this.keywords = new Set([
            'LIGHTS', 'CAMERA', 'ACTION', 'BOLO', 'SUNO', 'VIJAY', 'DON', 'AGAR', 'NAHI', 'TOH', 'BAS',
            'BAAR', 'KHATAM', 'JAB', 'TAK', 'RAHEGA', 'NAAM', 'PURA', 'WAPAS', 'SHAKTI', 'KAALIA',
            'LAAWARIS', 'SHOLAY', 'DEEWAR', 'ZANJEER', 'COOLIE', 'AGNEEPATH', 'SILSILA', 'NASEEB',
            'DEVIYON_AUR_SAJJANO', 'COMPUTER_JI_LOCK_KIYA_JAYE', 'CONFIDENT_TO_LOCK_KIYA_JAYE',
            'LIFELINE_FIFTY_FIFTY', 'AUDIENCE_POLL', 'PHONE_A_FRIEND', 'EXPERT_ADVICE', 'QUIT_GAME',
            'INTEZAAR', 'KHAZANA'
        ]);
    }

    // Set output callback for BOLO statements
    setOutputCallback(callback) {
        if (typeof callback === 'function') {
            this.outputCallback = callback;
        }
    }

    // Set input callback for SUNO statements  
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

    // Safe expression evaluator - NO eval() or Function()
    evaluateExpression(expr) {
        if (!expr || typeof expr !== 'string') {
            return '';
        }

        try {
            return this.parseExpression(expr.trim());
        } catch (error) {
            throw new Error(`Expression error: ${this.sanitizeErrorMessage(error.message)}`);
        }
    }

    parseExpression(expr) {
        // Check execution time and stop flag
        if (this.shouldStop || Date.now() - this.startTime > this.maxExecutionTime) {
            throw new Error('Execution timeout or stopped');
        }

        // Empty expression
        if (!expr) {
            return '';
        }

        // Remove dangerous patterns
        expr = this.sanitizeExpression(expr);

        // String literal with quotes - IMPROVED HANDLING
        if (expr.startsWith('"') && expr.endsWith('"')) {
            const str = expr.slice(1, -1);
            if (str.length > this.maxStringLength) {
                throw new Error('String too long');
            }
            return this.sanitizeString(str);
        }
        
        // Single quotes for strings
        if (expr.startsWith("'") && expr.endsWith("'")) {
            const str = expr.slice(1, -1);
            if (str.length > this.maxStringLength) {
                throw new Error('String too long');
            }
            return this.sanitizeString(str);
        }

        // Number literal
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

        // Array literal with curly braces
        if (expr.startsWith('{') && expr.endsWith('}')) {
            const content = expr.slice(1, -1).trim();
            if (!content) return [];
            
            const items = this.parseArrayItems(content);
            if (items.length > this.maxArraySize) {
                throw new Error('Array too large');
            }
            return items.map(item => this.parseExpression(item));
        }

        // Function call - must check before variable lookup
        const funcCallMatch = expr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)$/);
        if (funcCallMatch) {
            return this.evaluateFunctionCall(expr);
        }

        // Built-in function calls (SHABD, GANIT, etc.)
        if (expr.includes('.') && expr.includes('(')) {
            const builtInMatch = expr.match(/^(SHABD|GANIT|KHAZANA|SAMAY)\.(\w+)\s*\((.*)\)$/);
            if (builtInMatch) {
                return this.evaluateBuiltInFunction(expr);
            }
        }

        // Variable lookup
        if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(expr)) {
            if (this.reservedWords.has(expr.toLowerCase())) {
                throw new Error(`Reserved word cannot be used: ${expr}`);
            }
            
            if (Object.prototype.hasOwnProperty.call(this.variables, expr)) {
                const value = this.variables[expr];
                return Array.isArray(value) ? value.join(', ') : value;
            }
            if (Object.prototype.hasOwnProperty.call(this.constants, expr)) {
                return this.constants[expr];
            }
            // Return the variable name if not found (for compatibility)
            return expr;
        }

        // Array access
        const arrayMatch = expr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\[(\d+)\]$/);
        if (arrayMatch) {
            const [, arrayName, indexStr] = arrayMatch;
            const index = parseInt(indexStr, 10);
            
            if (this.reservedWords.has(arrayName.toLowerCase())) {
                throw new Error(`Reserved word cannot be used: ${arrayName}`);
            }
            
            if (!this.arrays[arrayName] && !this.variables[arrayName]) {
                throw new Error(`Array '${arrayName}' not found`);
            }
            
            const array = this.arrays[arrayName] || this.variables[arrayName];
            if (!Array.isArray(array)) {
                throw new Error(`'${arrayName}' is not an array`);
            }
            
            if (index < 0 || index >= array.length) {
                throw new Error(`Array index ${index} out of bounds for '${arrayName}' (length: ${array.length})`);
            }
            
            return array[index];
        }

        // Check if expression looks like it might be an operation
        if (this.containsOperator(expr)) {
            return this.parseOperation(expr);
        }

        // If we reach here, treat as a string literal (for backward compatibility)
        // This helps with cases where quotes might be missing
        return this.sanitizeString(expr);
    }

    // Built-in function evaluator
    evaluateBuiltInFunction(expr) {
        const match = expr.match(/^(SHABD|GANIT|KHAZANA|SAMAY)\.(\w+)\s*\((.*)\)$/);
        if (!match) {
            throw new Error(`Invalid built-in function call: ${expr}`);
        }
        
        const [, namespace, functionName, argsStr] = match;
        const args = argsStr ? this.parseArrayItems(argsStr).map(arg => this.evaluateExpression(arg)) : [];
        
        // Check execution time
        if (this.shouldStop || Date.now() - this.startTime > this.maxExecutionTime) {
            throw new Error('Execution timeout or stopped');
        }
        
        switch (namespace) {
            case 'SHABD':
                return this.evaluateStringFunction(functionName, args);
            case 'GANIT':
                return this.evaluateMathFunction(functionName, args);
            case 'KHAZANA':
                return this.evaluateArrayFunction(functionName, args);
            case 'SAMAY':
                return this.evaluateTimeFunction(functionName, args);
            default:
                throw new Error(`Unknown namespace: ${namespace}`);
        }
    }

    // String function implementations
    evaluateStringFunction(functionName, args) {
        if (args.length === 0) {
            throw new Error(`SHABD.${functionName} requires at least one argument`);
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
                    throw new Error('SHABD.contains requires two arguments');
                }
                return str.includes(String(args[1])) ? 'SHAKTI' : 'KAALIA';
                
            case 'replace':
                if (args.length < 3) {
                    throw new Error('SHABD.replace requires three arguments');
                }
                const searchStr = String(args[1]);
                const replaceStr = String(args[2]);
                return str.replace(new RegExp(searchStr, 'g'), replaceStr);
                
            default:
                throw new Error(`Unknown SHABD function: ${functionName}`);
        }
    }

    // Math function implementations (placeholder for now)
    evaluateMathFunction(functionName, args) {
        // Will implement in Phase 1, Part 2
        throw new Error(`GANIT functions coming soon! Requested: ${functionName}`);
    }

    // Array function implementations (placeholder for now)
    evaluateArrayFunction(functionName, args) {
        // Will implement in Phase 1, Part 3
        throw new Error(`KHAZANA functions coming soon! Requested: ${functionName}`);
    }

    // Time function implementations (placeholder for now)
    evaluateTimeFunction(functionName, args) {
        // Will implement in Phase 4
        throw new Error(`SAMAY functions coming soon! Requested: ${functionName}`);
    }

    // NEW HELPER METHOD: Check if expression contains valid operators
    containsOperator(expr) {
        // Skip if it's clearly not an operation (contains spaces but no operators)
        if (expr.includes(' ') && !this.allowedOperators.some(op => expr.includes(op))) {
            return false;
        }
        
        // Check for operators, but be careful with edge cases
        return this.allowedOperators.some(op => {
            if (op.length === 1) {
                return expr.includes(op);
            } else {
                // For multi-character operators like ==, !=, etc.
                return expr.includes(op);
            }
        });
    }

    sanitizeExpression(expr) {
        // Remove dangerous patterns
        return expr
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/data:/gi, '')
            .replace(/vbscript:/gi, '')
            .replace(/on\w+\s*=/gi, '')
            .replace(/eval\s*\(/gi, '')
            .replace(/Function\s*\(/gi, '')
            .replace(/setTimeout\s*\(/gi, '')
            .replace(/setInterval\s*\(/gi, '')
            .slice(0, 1000); // Limit expression length
    }

    parseArrayItems(content) {
        const items = [];
        let current = '';
        let depth = 0;
        let inString = false;
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
            
            if (char === '"' && !escapeNext) {
                inString = !inString;
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

    parseOperation(expr) {
        // Parse operations with proper precedence
        const operatorGroups = [
            ['||'],
            ['&&'], 
            ['==', '!='],
            ['<=', '>=', '<', '>'],
            ['+', '-'],
            ['*', '/', '%']
        ];
        
        for (const operators of operatorGroups) {
            for (const op of operators) {
                const parts = this.splitByOperator(expr, op);
                if (parts.length > 1) {
                    return this.evaluateOperation(parts, op);
                }
            }
        }

        // If no operations found, it might be a simple value
        throw new Error(`Invalid expression: ${expr}`);
    }

    evaluateFunctionCall(expr) {
        const match = expr.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)$/);
        if (!match) {
            throw new Error(`Invalid function call: ${expr}`);
        }

        const funcName = match[1];
        const argsStr = match[2];
        
        if (this.reservedWords.has(funcName.toLowerCase())) {
            throw new Error(`Reserved function name: ${funcName}`);
        }
        
        if (!this.functions[funcName]) {
            throw new Error(`Function '${funcName}' not found`);
        }

        const args = argsStr ? this.parseArrayItems(argsStr).map(a => this.evaluateExpression(a)) : [];
        
        // Check call stack depth
        if (this.callStack.length >= this.maxCallDepth) {
            throw new Error("Maximum function call depth exceeded!");
        }

        // Save the current execution context
        const savedVars = { ...this.variables };
        const func = this.functions[funcName];
        this.callStack.push(funcName);
        
        // Set up parameters
        func.params.forEach((param, index) => {
            this.setVariable(param, args[index] !== undefined ? args[index] : '');
        });
        
        let returnValue = undefined;
        
        try {
            // Execute function body
            for (const bodyLine of func.body) {
                if (this.shouldStop) break;
                
                if (bodyLine.content.startsWith('WAPAS')) {
                    returnValue = this.evaluateExpression(bodyLine.content.replace('WAPAS', '').trim());
                    break;
                } else {
                    // For non-return statements, we need to execute them
                    const result = this.executeLine(bodyLine, func.body, 0);
                    // If it's a promise (async operation), we can't handle it in sync context
                    if (result && typeof result.then === 'function') {
                        console.warn('Async operations not supported in function expressions');
                    }
                }
            }
        } finally {
            // Restore variables and call stack
            this.variables = savedVars;
            this.callStack.pop();
        }
        
        return returnValue !== undefined ? returnValue : '';
    }

    splitByOperator(expr, operator) {
        const parts = [];
        let current = '';
        let i = 0;
        let parenDepth = 0;
        let inString = false;
        let stringChar = '';
        let escapeNext = false;

        while (i < expr.length) {
            if (this.shouldStop) break;
            
            const char = expr[i];
            
            if (escapeNext) {
                current += char;
                escapeNext = false;
                i++;
                continue;
            }
            
            if (char === '\\') {
                escapeNext = true;
                current += char;
                i++;
                continue;
            }
            
            // Handle string boundaries
            if ((char === '"' || char === "'") && !escapeNext) {
                if (!inString) {
                    inString = true;
                    stringChar = char;
                } else if (char === stringChar) {
                    inString = false;
                    stringChar = '';
                }
            }
            
            if (!inString) {
                if (char === '(') parenDepth++;
                if (char === ')') parenDepth--;
                
                if (parenDepth === 0 && expr.substr(i, operator.length) === operator) {
                    // Check it's not part of a larger operator
                    const before = i > 0 ? expr[i-1] : '';
                    const after = i + operator.length < expr.length ? expr[i + operator.length] : '';
                    
                    // For === and !==, make sure we're not splitting in the middle
                    if ((operator === '==' && after === '=') || 
                        (operator === '!=' && after === '=')) {
                        current += char;
                        i++;
                        continue;
                    }
                    
                    if (!this.isOperatorChar(before) && !this.isOperatorChar(after)) {
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

    isOperatorChar(char) {
        return ['=', '!', '<', '>', '&', '|'].includes(char);
    }

    evaluateOperation(parts, operator) {
        if (parts.length < 2) {
            throw new Error(`Invalid operation: insufficient operands for ${operator}`);
        }

        let result = this.parseExpression(parts[0]);

        for (let i = 1; i < parts.length; i++) {
            if (this.shouldStop) break;
            const operand = this.parseExpression(parts[i]);
            result = this.applyOperation(result, operand, operator);
        }

        return result;
    }

    applyOperation(left, right, operator) {
        // Validate operator
        if (!this.allowedOperators.includes(operator)) {
            throw new Error(`Unsafe operator: ${operator}`);
        }
        
        // Sanitize and validate operands
        left = this.sanitizeOperand(left);
        right = this.sanitizeOperand(right);

        switch (operator) {
            case '+':
                if (typeof left === 'string' || typeof right === 'string') {
                    const result = String(left) + String(right);
                    if (result.length > this.maxStringLength) {
                        throw new Error('Result string too long');
                    }
                    return result;
                }
                const sum = Number(left) + Number(right);
                if (!Number.isFinite(sum) || Math.abs(sum) > Number.MAX_SAFE_INTEGER) {
                    throw new Error('Addition overflow');
                }
                return sum;
            
            case '-':
                const diff = Number(left) - Number(right);
                if (!Number.isFinite(diff) || Math.abs(diff) > Number.MAX_SAFE_INTEGER) {
                    throw new Error('Subtraction overflow');
                }
                return diff;
            
            case '*':
                const product = Number(left) * Number(right);
                if (!Number.isFinite(product) || Math.abs(product) > Number.MAX_SAFE_INTEGER) {
                    throw new Error('Multiplication overflow');
                }
                return product;
            
            case '/':
                const divisor = Number(right);
                if (divisor === 0) {
                    throw new Error('Division by zero - "Zero se divide kaise kar sakte hain?"');
                }
                const quotient = Number(left) / divisor;
                if (!Number.isFinite(quotient)) {
                    throw new Error('Division overflow');
                }
                return quotient;
            
            case '%':
                const modDivisor = Number(right);
                if (modDivisor === 0) {
                    throw new Error('Modulo by zero');
                }
                return Number(left) % modDivisor;
            
            case '==':
                return left == right;
            
            case '!=':
                return left != right;
            
            case '<':
                return Number(left) < Number(right);
            
            case '>':
                return Number(left) > Number(right);
            
            case '<=':
                return Number(left) <= Number(right);
            
            case '>=':
                return Number(left) >= Number(right);
            
            case '&&':
                return Boolean(left) && Boolean(right);
            
            case '||':
                return Boolean(left) || Boolean(right);
            
            case '!':
                return !Boolean(right);
            
            default:
                throw new Error(`Unknown operator: ${operator}`);
        }
    }

    sanitizeOperand(operand) {
        if (typeof operand === 'string') {
            return this.sanitizeString(operand);
        }
        
        if (typeof operand === 'number') {
            if (!Number.isFinite(operand)) {
                throw new Error('Invalid number detected');
            }
            if (Math.abs(operand) > Number.MAX_SAFE_INTEGER) {
                throw new Error('Number too large');
            }
        }
        
        return operand;
    }

    sanitizeString(str) {
        if (typeof str !== 'string') {
            str = String(str);
        }
        
        // Remove potential XSS vectors and dangerous patterns
        return str
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/data:/gi, '')
            .replace(/vbscript:/gi, '')
            .replace(/on\w+\s*=/gi, '')
            .replace(/eval\s*\(/gi, '')
            .replace(/Function\s*\(/gi, '')
            .replace(/%3c/gi, '') // URL encoded <
            .replace(/%3e/gi, '') // URL encoded >
            .replace(/&lt;/gi, '') // HTML entity <
            .replace(/&gt;/gi, '') // HTML entity >
            .slice(0, this.maxStringLength);
    }

    sanitizeErrorMessage(message) {
        return this.sanitizeString(String(message || 'Unknown error')).slice(0, 200);
    }

    // Secure variable assignment
    setVariable(name, value) {
        // Validate variable name
        if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name)) {
            throw new Error(`Invalid variable name: ${name}`);
        }
        
        // Prevent prototype pollution and reserved words
        if (this.reservedWords.has(name.toLowerCase())) {
            throw new Error(`Reserved variable name: ${name}`);
        }
        
        // Check variable limit
        if (Object.keys(this.variables).length >= this.maxVariables && !this.variables.hasOwnProperty(name)) {
            throw new Error('Too many variables created');
        }
        
        // Sanitize string values
        if (typeof value === 'string') {
            value = this.sanitizeString(value);
        }
        
        // Validate arrays
        if (Array.isArray(value) && value.length > this.maxArraySize) {
            throw new Error('Array too large');
        }
        
        this.variables[name] = value;
    }

    // Enhanced input with rate limiting and validation
    async getUserInput(prompt) {
        // Rate limiting
        const now = Date.now();
        if (now - this.lastInputTime < 1000) { // 1 second between inputs
            throw new Error('Please wait before requesting more input');
        }
        
        this.lastInputTime = now;
        
        const sanitizedPrompt = this.sanitizeString(String(prompt || 'Enter value:'));
        
        let input;
        if (this.inputCallback) {
            input = await this.inputCallback(sanitizedPrompt);
        } else {
            input = window.prompt(sanitizedPrompt);
        }
        
        if (input === null) {
            return null;
        }
        
        return this.sanitizeString(String(input));
    }

    // Safe output
    output(message) {
        const sanitizedMessage = this.sanitizeString(String(message || ''));
        
        if (this.outputCallback) {
            this.outputCallback(sanitizedMessage);
        } else {
            console.log(sanitizedMessage);
        }
    }

    // Main execution with comprehensive safety
    async run(code) {
        this.startTime = Date.now();
        this.isRunning = true;
        this.shouldStop = false;
        
        try {
            // Input validation
            if (!code || typeof code !== 'string') {
                throw new Error('Invalid code provided');
            }
            
            if (code.length > 100000) { // 100KB limit
                throw new Error('Code too large (max 100KB)');
            }
            
            // Sanitize code
            code = this.sanitizeString(code);
            
            // Reset state
            this.variables = Object.create(null);
            this.constants = Object.create(null);
            this.functions = Object.create(null);
            this.arrays = Object.create(null);
            this.callStack = [];
            
            // Parse code
            const lines = code
                .split('\n')
                .map((line, index) => ({ 
                    content: this.sanitizeString(line.trim()), 
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
            
            const cameraIndex = lines.findIndex(line => line.content === 'CAMERA');
            if (cameraIndex === -1) {
                throw new Error('Missing CAMERA section');
            }
            
            const actionIndex = lines.findIndex(line => line.content === 'ACTION');
            const programLines = lines.slice(cameraIndex + 1, actionIndex);
            
            // Execute program
            await this.executeBlock(programLines);
            
            return {
                success: true,
                executionTime: Date.now() - this.startTime,
                memoryUsage: {
                    variables: Object.keys(this.variables).length,
                    arrays: Object.keys(this.arrays).length,
                    functions: Object.keys(this.functions).length
                }
            };
            
        } catch (error) {
            const errorMessage = this.sanitizeErrorMessage(error.message);
            this.output(`Error: ${errorMessage}`);
            return {
                success: false,
                error: errorMessage,
                executionTime: Date.now() - this.startTime
            };
        } finally {
            this.isRunning = false;
        }
    }

    // Fixed executeBlock method
    async executeBlock(lines) {
        let i = 0;
        
        while (i < lines.length && !this.shouldStop) {
            const line = lines[i];
            
            try {
                // Check execution time
                if (Date.now() - this.startTime > this.maxExecutionTime) {
                    throw new Error('Execution timeout');
                }
                
                const result = await this.executeLine(line, lines, i);
                if (typeof result === 'number') {
                    i = result; // Jump to new position (for loops, conditionals)
                } else {
                    i++;
                }
                
            } catch (error) {
                throw new Error(`Line ${line.number}: ${this.sanitizeErrorMessage(error.message)}`);
            }
        }
    }

    async executeLine(line, lines, currentIndex) {
        if (this.shouldStop) return null;
        
        const content = this.sanitizeString(line.content);
        
        if (content.startsWith('BOLO')) {
            return this.executeBolo(content);
        }
        else if (content.startsWith('SUNO')) {
            return await this.executeSuno(content);
        }
        else if (content.startsWith('VIJAY')) {
            return this.executeVijay(content);
        }
        else if (content.startsWith('DON')) {
            return this.executeDon(content);
        }
        else if (content.startsWith('AGAR')) {
            return await this.executeAgar(lines, currentIndex);
        }
        else if (content.startsWith('BAAR BAAR')) {
            return await this.executeBaarBaar(lines, currentIndex);
        }
        else if (content.startsWith('JAB TAK')) {
            return await this.executeJabTak(lines, currentIndex);
        }
        else if (content.startsWith('NAAM')) {
            return this.defineFunction(lines, currentIndex);
        }
        // KBC Commands
        else if (content.startsWith('COMPUTER_JI_LOCK_KIYA_JAYE')) {
            this.output('💻 Computer ji, lock kiya jaaye! Answer locked! ✅');
        }
        else if (content.startsWith('DEVIYON_AUR_SAJJANO')) {
            this.output('🎯 Deviyon aur Sajjano, namaskar! Welcome to AmitabhC! 🎬');
        }
        else if (content.startsWith('CONFIDENT_TO_LOCK_KIYA_JAYE')) {
            this.output('🤔 Confidence check: Answer locked with confidence!');
        }
        else if (content.startsWith('LIFELINE_FIFTY_FIFTY')) {
            this.output('🎯 50-50 Lifeline activated! Two options eliminated! 💡');
        }
        else if (content.startsWith('AUDIENCE_POLL')) {
            const poll = Math.floor(Math.random() * 30) + 60;
            this.output(`📊 Audience Poll: ${poll}% majority opinion received! 👥`);
        }
        else if (content.startsWith('PHONE_A_FRIEND')) {
            const match = content.match(/PHONE_A_FRIEND\s+"([^"]+)"/);
            const friend = match ? this.sanitizeString(match[1]) : 'Expert Friend';
            this.output(`📞 Calling ${friend}... Getting expert advice! 📱`);
        }
        else if (content.startsWith('EXPERT_ADVICE')) {
            this.output('🎓 Expert Advice: Based on analysis, this approach looks correct! 📚');
        }
        else if (content.startsWith('QUIT_GAME')) {
            this.output('🏆 Game quit successfully! Taking winnings home! 💰');
            throw new Error('Program terminated by user choice');
        }
        else if (content.startsWith('INTEZAAR')) {
            const match = content.match(/INTEZAAR\s+(\d+)/);
            const ms = match ? Math.min(parseInt(match[1], 10), 5000) : 1000;
            await new Promise(resolve => setTimeout(resolve, ms));
            this.output(`⏳ Waited for ${ms}ms`);
        }
        // Check for function calls or variable assignments with function calls
        else if (content.includes('(') && content.includes(')')) {
            return await this.executeFunctionCall(content);
        }
        
        return null; // Continue to next line
    }

    // IMPROVED BOLO execution to handle expressions better
    executeBolo(line) {
        try {
            // Enhanced regex to match quoted strings more reliably
            const quotedMatch = line.match(/BOLO\s+"([^"]*)"/);
            if (quotedMatch) {
                const message = this.sanitizeString(quotedMatch[1]);
                this.output(message);
                return;
            }
            
            // Match single quoted strings
            const singleQuotedMatch = line.match(/BOLO\s+'([^']*)'/);
            if (singleQuotedMatch) {
                const message = this.sanitizeString(singleQuotedMatch[1]);
                this.output(message);
                return;
            }
            
            // Match BOLO followed by any content
            const expressionMatch = line.match(/BOLO\s+(.+)/);
            if (expressionMatch) {
                const expression = expressionMatch[1].trim();
                
                // Special handling for strings that look like expressions but aren't
                // Check if it starts with === or contains only === patterns
                if (expression.startsWith('===') || expression.match(/^[=\s\w\-]+$/)) {
                    // Treat as literal string
                    this.output(this.sanitizeString(expression));
                    return;
                }
                
                // Check if it's a simple concatenation with operators
                if (expression.includes('+') && !expression.includes('(') && !expression.includes('[')) {
                    try {
                        const value = this.evaluateExpression(expression);
                        this.output(String(value));
                        return;
                    } catch (error) {
                        // If evaluation fails, treat as literal
                        this.output(this.sanitizeString(expression));
                        return;
                    }
                }
                
                // Check if it looks like a variable name
                if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(expression)) {
                    try {
                        const value = this.evaluateExpression(expression);
                        this.output(String(value));
                        return;
                    } catch (error) {
                        // Variable doesn't exist, output the name
                        this.output(this.sanitizeString(expression));
                        return;
                    }
                }
                
                // For anything else that doesn't look like a clear expression,
                // treat as literal string
                if (!this.looksLikeExpression(expression)) {
                    this.output(this.sanitizeString(expression));
                    return;
                }
                
                // Try to evaluate as expression
                try {
                    const value = this.evaluateExpression(expression);
                    this.output(String(value));
                } catch (error) {
                    // If evaluation fails, output as literal string
                    this.output(this.sanitizeString(expression));
                }
            }
        } catch (error) {
            // Ultimate fallback - try to extract and output the content after BOLO
            const fallbackMatch = line.match(/BOLO\s+(.+)/);
            if (fallbackMatch) {
                this.output(this.sanitizeString(fallbackMatch[1]));
            } else {
                throw new Error(`BOLO command error: ${this.sanitizeErrorMessage(error.message)}`);
            }
        }
    }

    // Enhanced helper method to better detect expressions
    looksLikeExpression(expr) {
        // Variable name
        if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(expr)) {
            return true;
        }
        
        // Number
        if (/^-?\d+(\.\d+)?$/.test(expr)) {
            return true;
        }
        
        // Boolean constants
        if (expr === 'SHAKTI' || expr === 'KAALIA' || expr === 'LAAWARIS') {
            return true;
        }
        
        // Function call
        if (/^[a-zA-Z_][a-zA-Z0-9_]*\s*\([^)]*\)$/.test(expr)) {
            return true;
        }
        
        // Array access
        if (/^[a-zA-Z_][a-zA-Z0-9_]*\[\d+\]$/.test(expr)) {
            return true;
        }
        
        // If it contains quotes, it's a string literal
        if ((expr.startsWith('"') && expr.endsWith('"')) || 
            (expr.startsWith("'") && expr.endsWith("'"))) {
            return true;
        }
        
        // Contains arithmetic operators with variables/numbers
        if (expr.includes('+') || expr.includes('-') || expr.includes('*') || expr.includes('/')) {
            // Check if it contains variables or numbers around operators
            const parts = expr.split(/[\+\-\*\/]/).map(p => p.trim());
            const hasValidOperands = parts.some(part => 
                /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(part) || // variable
                /^-?\d+(\.\d+)?$/.test(part) || // number
                part === 'SHAKTI' || part === 'KAALIA' // boolean
            );
            return hasValidOperands;
        }
        
        // Contains comparison operators
        if (expr.includes('==') || expr.includes('!=') || expr.includes('<') || expr.includes('>')) {
            return true;
        }
        
        // Contains logical operators
        if (expr.includes('&&') || expr.includes('||')) {
            return true;
        }
        
        return false;
    }

    async executeSuno(line) {
        const match = line.match(/SUNO\s+([a-zA-Z_][a-zA-Z0-9_]*)/);
        if (match) {
            const varName = match[1];
            
            if (this.reservedWords.has(varName.toLowerCase())) {
                throw new Error(`Reserved variable name: ${varName}`);
            }
            
            const input = await this.getUserInput(`Enter value for ${varName}:`);
            if (input !== null) {
                // Check if input is a number
                const numValue = Number(input);
                const value = !isNaN(numValue) && input.trim() !== '' ? numValue : input;
                this.setVariable(varName, value);
            }
        }
    }

    executeVijay(line) {
        // Handle arrays
        if (line.includes('[') && line.includes(']')) {
            const arrayMatch = line.match(/VIJAY\s+([a-zA-Z_][a-zA-Z0-9_]*)\[\]\s*=\s*{([^}]*)}/);
            if (arrayMatch) {
                const arrayName = arrayMatch[1];
                const elementsStr = arrayMatch[2];
                
                if (elementsStr.trim()) {
                    const elements = this.parseArrayItems(elementsStr)
                        .map(e => this.evaluateExpression(e));
                    
                    if (elements.length > this.maxArraySize) {
                        throw new Error('Array too large');
                    }
                    
                    this.arrays[arrayName] = elements;
                    this.setVariable(arrayName, elements);
                } else {
                    this.arrays[arrayName] = [];
                    this.setVariable(arrayName, []);
                }
                return;
            }
        }
        
        const match = line.match(/VIJAY\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)/);
        if (match) {
            const varName = match[1];
            const expression = match[2];
            const value = this.evaluateExpression(expression);
            this.setVariable(varName, value);
        }
    }

    executeDon(line) {
        const match = line.match(/DON\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.+)/);
        if (match) {
            const constName = match[1];
            const expression = match[2];
            const value = this.evaluateExpression(expression);
            this.constants[constName] = value;
            this.setVariable(constName, value); // Also accessible as variable
        }
    }

    async executeAgar(lines, startIndex) {
        const condition = lines[startIndex].content.replace('AGAR', '').trim();
        let i = startIndex + 1;
        let basIndex = -1;
        let nahiTohIndices = [];
        let depth = 1;
        
        // Find matching BAS and NAHI TOH blocks
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

        const conditionResult = this.evaluateCondition(condition);
        
        if (conditionResult) {
            const endIndex = nahiTohIndices.length > 0 ? nahiTohIndices[0] : basIndex;
            const blockLines = lines.slice(i, endIndex);
            await this.executeBlock(blockLines);
        } else {
            // Handle NAHI TOH blocks
            for (let idx = 0; idx < nahiTohIndices.length; idx++) {
                if (this.shouldStop) break;
                
                const nahiTohLine = lines[nahiTohIndices[idx]];
                const nextNahiToh = nahiTohIndices[idx + 1] || basIndex;
                
                if (nahiTohLine.content.startsWith('NAHI TOH AGAR')) {
                    const elseIfCondition = nahiTohLine.content.replace('NAHI TOH AGAR', '').trim();
                    if (this.evaluateCondition(elseIfCondition)) {
                        const blockLines = lines.slice(nahiTohIndices[idx] + 1, nextNahiToh);
                        await this.executeBlock(blockLines);
                        break;
                    }
                } else {
                    const blockLines = lines.slice(nahiTohIndices[idx] + 1, basIndex);
                    await this.executeBlock(blockLines);
                    break;
                }
            }
        }

        return basIndex + 1;
    }

    async executeBaarBaar(lines, startIndex) {
        const match = lines[startIndex].content.match(/BAAR BAAR\s+(\d+)/);
        if (!match) {
            throw new Error("BAAR BAAR requires a number!");
        }

        const times = parseInt(match[1], 10);
        if (times > this.maxLoopIterations) {
            throw new Error(`Loop count ${times} exceeds maximum ${this.maxLoopIterations}`);
        }

        let i = startIndex + 1;
        let khatamIndex = -1;
        let depth = 1;

        // Find matching KHATAM
        for (let j = i; j < lines.length; j++) {
            if (lines[j].content.startsWith('BAAR BAAR')) depth++;
            if (lines[j].content === 'KHATAM' || lines[j].content.startsWith('KHATAM')) {
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
            await this.executeBlock(blockLines);
            
            // Yield control periodically
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

        // Find matching RAHEGA
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
        
        while (this.evaluateCondition(condition) && !this.shouldStop) {
            loopCount++;
            
            if (loopCount > this.maxLoopIterations) {
                throw new Error(`While loop exceeded maximum iterations (${this.maxLoopIterations})`);
            }
            
            await this.executeBlock(blockLines);
            
            // Yield control periodically
            if (loopCount % 100 === 0) {
                await new Promise(resolve => setTimeout(resolve, 0));
            }
        }

        return rahegaIndex + 1;
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
        
        if (Object.keys(this.functions).length >= this.maxFunctions) {
            throw new Error('Too many functions defined');
        }
        
        // Validate parameters
        for (const param of params) {
            if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(param)) {
                throw new Error(`Invalid parameter name: ${param}`);
            }
            if (this.reservedWords.has(param.toLowerCase())) {
                throw new Error(`Reserved parameter name: ${param}`);
            }
        }
        
        let i = startIndex + 1;
        let puraIndex = -1;

        // Find matching PURA
        for (let j = i; j < lines.length; j++) {
            if (lines[j].content === 'PURA') {
                puraIndex = j;
                break;
            }
        }

        if (puraIndex === -1) {
            throw new Error("Function must end with PURA!");
        }

        this.functions[funcName] = {
            params: params,
            body: lines.slice(i, puraIndex)
        };

        return puraIndex + 1;
    }

    async executeFunctionCall(line) {
        // Check for assignment with function call
        const assignMatch = line.match(/VIJAY\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)/);
        if (assignMatch) {
            const varName = assignMatch[1];
            const funcName = assignMatch[2];
            const argsStr = assignMatch[3];
            
            if (this.functions[funcName]) {
                // Execute function and get return value
                const returnValue = this.evaluateFunctionCall(`${funcName}(${argsStr})`);
                this.setVariable(varName, returnValue !== undefined ? returnValue : '');
            }
            return;
        }

        // Simple function call
        const match = line.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(([^)]*)\)$/);
        if (match) {
            const funcName = match[1];
            const argsStr = match[2];
            
            if (this.functions[funcName]) {
                if (this.callStack.length >= this.maxCallDepth) {
                    throw new Error("Maximum function call depth exceeded!");
                }

                const func = this.functions[funcName];
                const oldVars = { ...this.variables };
                this.callStack.push(funcName);
                
                // Parse arguments
                const args = argsStr ? this.parseArrayItems(argsStr).map(a => this.evaluateExpression(a)) : [];
                
                // Set parameters
                func.params.forEach((param, index) => {
                    this.setVariable(param, args[index] !== undefined ? args[index] : '');
                });
                
                let returnValue = undefined;
                
                try {
                    for (const bodyLine of func.body) {
                        if (this.shouldStop) break;
                        
                        if (bodyLine.content.startsWith('WAPAS')) {
                            returnValue = this.evaluateExpression(bodyLine.content.replace('WAPAS', '').trim());
                            break;
                        } else {
                            await this.executeLine(bodyLine, func.body, 0);
                        }
                    }
                } finally {
                    // Restore variables and call stack
                    this.variables = oldVars;
                    this.callStack.pop();
                }
                
                return returnValue;
            }
        }
    }

    evaluateCondition(condition) {
        const result = this.evaluateExpression(condition);
        
        // Convert to boolean
        if (typeof result === 'boolean') return result;
        if (typeof result === 'number') return result !== 0;
        if (typeof result === 'string') return result !== '';
        if (result === null || result === undefined) return false;
        
        return Boolean(result);
    }
}

// Export for both Node.js and browser environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SecureAmitabhCInterpreter;
} else {
    window.SecureAmitabhCInterpreter = SecureAmitabhCInterpreter;
}