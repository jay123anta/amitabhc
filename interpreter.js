/**
 * Secure AmitabhC Interpreter - Production Ready
 * Version: 2.0.1 - Fixed string parsing in BOLO statements
 */

class SecureAmitabhCInterpreter {
    constructor() {
        this.variables = {};
        this.constants = {};
        this.functions = {};
        this.arrays = {};
        this.callStack = [];
        this.maxCallDepth = 100;
        this.maxExecutionTime = 30000; // 30 seconds
        this.maxLoopIterations = 10000;
        this.maxStringLength = 10000;
        this.maxVariables = 1000;
        this.startTime = 0;
        this.lastInputTime = 0;
        this.outputCallback = null;
        this.inputCallback = null;
        
        // Security: Whitelist of allowed operations
        this.allowedOperators = ['+', '-', '*', '/', '%', '==', '!=', '<', '>', '<=', '>=', '&&', '||'];
        this.reservedWords = ['__proto__', 'constructor', 'prototype', 'eval', 'function'];
    }

    // Set output callback for BOLO statements
    setOutputCallback(callback) {
        this.outputCallback = callback;
    }

    // Set input callback for SUNO statements  
    setInputCallback(callback) {
        this.inputCallback = callback;
    }

    // Safe expression evaluator - NO eval() or Function()
    evaluateExpression(expr) {
        if (!expr || typeof expr !== 'string') {
            return '';
        }

        try {
            return this.parseExpression(expr.trim());
        } catch (error) {
            throw new Error(`Expression error: ${error.message}`);
        }
    }

    parseExpression(expr) {
        // Check execution time
        if (Date.now() - this.startTime > this.maxExecutionTime) {
            throw new Error('Execution timeout - program took too long');
        }

        // Empty expression
        if (!expr) {
            return '';
        }

        // String literal with quotes
        if (expr.startsWith('"') && expr.endsWith('"')) {
            const str = expr.slice(1, -1);
            if (str.length > this.maxStringLength) {
                throw new Error('String too long');
            }
            return this.sanitizeString(str);
        }

        // Number literal
        if (/^-?\d+(\.\d+)?$/.test(expr)) {
            const num = Number(expr);
            if (!Number.isFinite(num)) {
                throw new Error('Invalid number: ' + expr);
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
            return items.map(item => this.parseExpression(item));
        }

        // Variable lookup
        if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(expr)) {
            if (this.variables.hasOwnProperty(expr)) {
                const value = this.variables[expr];
                return Array.isArray(value) ? value.join(', ') : value;
            }
            if (this.constants.hasOwnProperty(expr)) {
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

        // Arithmetic and logical operations
        return this.parseOperation(expr);
    }

    parseArrayItems(content) {
        const items = [];
        let current = '';
        let depth = 0;
        let inString = false;

        for (let i = 0; i < content.length; i++) {
            const char = content[i];
            
            if (char === '"' && (i === 0 || content[i-1] !== '\\')) {
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

    splitByOperator(expr, operator) {
        const parts = [];
        let current = '';
        let i = 0;
        let parenDepth = 0;
        let inString = false;

        while (i < expr.length) {
            const char = expr[i];
            
            if (char === '"' && (i === 0 || expr[i-1] !== '\\')) {
                inString = !inString;
            }
            
            if (!inString) {
                if (char === '(') parenDepth++;
                if (char === ')') parenDepth--;
                
                if (parenDepth === 0 && expr.substr(i, operator.length) === operator) {
                    // Check it's not part of a larger operator
                    const before = i > 0 ? expr[i-1] : '';
                    const after = i + operator.length < expr.length ? expr[i + operator.length] : '';
                    
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
            const operand = this.parseExpression(parts[i]);
            result = this.applyOperation(result, operand, operator);
        }

        return result;
    }

    applyOperation(left, right, operator) {
        // Validate and sanitize operands
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
                if (!Number.isFinite(sum)) {
                    throw new Error('Addition overflow');
                }
                return sum;
            
            case '-':
                const diff = Number(left) - Number(right);
                if (!Number.isFinite(diff)) {
                    throw new Error('Subtraction overflow');
                }
                return diff;
            
            case '*':
                const product = Number(left) * Number(right);
                if (!Number.isFinite(product)) {
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
        }
        
        return operand;
    }

    sanitizeString(str) {
        if (typeof str !== 'string') {
            return String(str);
        }
        
        // Remove potential XSS vectors
        return str
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+\s*=/gi, '')
            .replace(/data:text\/html/gi, '')
            .slice(0, this.maxStringLength);
    }

    // Secure variable assignment
    setVariable(name, value) {
        // Validate variable name
        if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name)) {
            throw new Error(`Invalid variable name: ${name}`);
        }
        
        // Prevent prototype pollution
        if (this.reservedWords.includes(name.toLowerCase())) {
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
        
        this.variables[name] = value;
    }

    // Enhanced input with rate limiting
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
        
        try {
            // Input validation
            if (!code || typeof code !== 'string') {
                throw new Error('Invalid code provided');
            }
            
            if (code.length > 100000) { // 100KB limit
                throw new Error('Code too large (max 100KB)');
            }
            
            // Reset state
            this.variables = {};
            this.constants = {};
            this.functions = {};
            this.arrays = {};
            this.callStack = [];
            
            // Parse code
            const lines = code
                .split('\n')
                .map((line, index) => ({ content: line.trim(), number: index + 1 }))
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
            this.output(`Error: ${error.message}`);
            return {
                success: false,
                error: error.message,
                executionTime: Date.now() - this.startTime
            };
        }
    }

    async executeBlock(lines) {
        let i = 0;
        
        while (i < lines.length) {
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
                throw new Error(`Line ${line.number}: ${error.message}`);
            }
        }
    }

    async executeLine(line, lines, currentIndex) {
        const content = line.content;
        
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
            // In production, this could be handled differently
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
        else if (content.includes('(') && content.includes(')')) {
            return this.executeFunctionCall(content);
        }
        
        return null; // Continue to next line
    }

    executeBolo(line) {
        const match = line.match(/BOLO\s+"([^"]*)"|BOLO\s+(.+)/);
        if (match) {
            let expression;
            if (match[1] !== undefined) {
                // If it was a quoted string, keep it as a string literal
                expression = `"${match[1]}"`;
            } else {
                // Otherwise, it's an expression
                expression = match[2];
            }
            const value = this.evaluateExpression(expression);
            this.output(value);
        }
    }

    async executeSuno(line) {
        const match = line.match(/SUNO\s+(\w+)/);
        if (match) {
            const varName = match[1];
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
            const arrayMatch = line.match(/VIJAY\s+(\w+)\[\]\s*=\s*{([^}]*)}/);
            if (arrayMatch) {
                const arrayName = arrayMatch[1];
                const elementsStr = arrayMatch[2];
                
                if (elementsStr.trim()) {
                    const elements = this.parseArrayItems(elementsStr)
                        .map(e => this.evaluateExpression(e));
                    this.arrays[arrayName] = elements;
                    this.setVariable(arrayName, elements);
                } else {
                    this.arrays[arrayName] = [];
                    this.setVariable(arrayName, []);
                }
                return;
            }
        }
        
        const match = line.match(/VIJAY\s+(\w+)\s*=\s*(.+)/);
        if (match) {
            const varName = match[1];
            const expression = match[2];
            const value = this.evaluateExpression(expression);
            this.setVariable(varName, value);
        }
    }

    executeDon(line) {
        const match = line.match(/DON\s+(\w+)\s*=\s*(.+)/);
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
        
        for (let count = 0; count < times; count++) {
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
            if (lines[j].content === 'RAHEGA') {
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
        
        while (this.evaluateCondition(condition)) {
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
        const match = lines[startIndex].content.match(/NAAM\s+(\w+)\s*\(([^)]*)\)/);
        if (!match) {
            throw new Error("Invalid function definition!");
        }

        const funcName = match[1];
        const params = match[2] ? match[2].split(',').map(p => p.trim()).filter(p => p) : [];
        
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
        // First check if it's a simple function call
        const match = line.match(/^(\w+)\s*\(([^)]*)\)$/);
        if (match) {
            const funcName = match[1];
            const argsStr = match[2];
            const args = argsStr ? this.parseArrayItems(argsStr).map(a => this.evaluateExpression(a)) : [];
            
            if (this.functions[funcName]) {
                if (this.callStack.length >= this.maxCallDepth) {
                    throw new Error("Maximum function call depth exceeded!");
                }

                const func = this.functions[funcName];
                const oldVars = {...this.variables};
                this.callStack.push(funcName);
                
                // Set parameters
                func.params.forEach((param, index) => {
                    this.setVariable(param, args[index] !== undefined ? args[index] : '');
                });
                
                let returnValue = undefined;
                
                try {
                    for (const bodyLine of func.body) {
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
        
        // Check for assignment with function call
        const assignMatch = line.match(/VIJAY\s+(\w+)\s*=\s*(\w+)\s*\(([^)]*)\)/);
        if (assignMatch) {
            const varName = assignMatch[1];
            const funcName = assignMatch[2];
            const argsStr = assignMatch[3];
            const args = argsStr ? this.parseArrayItems(argsStr).map(a => this.evaluateExpression(a)) : [];
            
            if (this.functions[funcName]) {
                // Execute function and get return value
                const returnValue = await this.executeFunctionCall(`${funcName}(${argsStr})`);
                this.setVariable(varName, returnValue !== undefined ? returnValue : '');
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