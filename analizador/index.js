const fs = require('fs');
const antlr4 = require('antlr4');

// --- IMPORTACIÓN SEGURA ---
// Atrapamos la clase sin importar cómo la haya empaquetado ANTLR en esta versión
const lexerMod = require('./SimpleCLexer');
const parserMod = require('./SimpleCParser');
const visitorMod = require('./SimpleCVisitor');

const SimpleCLexer = lexerMod.SimpleCLexer || lexerMod.default || lexerMod;
const SimpleCParser = parserMod.SimpleCParser || parserMod.default || parserMod;
const SimpleCVisitor = visitorMod.SimpleCVisitor || visitorMod.default || visitorMod;

// --- TAREA 1: MANEJADOR DE ERRORES SINTÁCTICOS ---
class CustomErrorListener extends antlr4.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push(`[Línea ${line}:${column}] Error Sintáctico: ${msg}`);
    }
}

// --- TAREA 4: INTÉRPRETE (Traductor a JS) ---
class Interpreter extends SimpleCVisitor {
    visitPrograma(ctx) {
        let jsCode = "// --- Código JavaScript Traducido ---\n";
        jsCode += "function main() {\n";
        jsCode += this.visit(ctx.instrucciones());
        jsCode += "}\nmain();\n";
        
        console.log("\n--- 4. Interpretación y Traducción ---");
        console.log(jsCode);
        
        console.log("--- Salida de la Ejecución ---");
        eval(jsCode); // Ejecución real del código traducido
    }

    visitInstrucciones(ctx) {
        return ctx.instruccion().map(i => this.visit(i)).join('');
    }

    visitInstruccion(ctx) {
        return this.visit(ctx.decision());
    }

    visitDecision(ctx) {
        let cond = ctx.condicion().getText();
        let ifBody = this.visit(ctx.sentencia(0));
        let code = `    if (${cond} === 1) {\n${ifBody}    }\n`;
        
        if (ctx.sentencia(1)) { // Si existe el ELSE
            let elseBody = this.visit(ctx.sentencia(1));
            code += `    else {\n${elseBody}    }\n`;
        }
        return code;
    }

    visitSentencia(ctx) {
        let code = "";
        if (ctx.salida()) code += this.visit(ctx.salida());
        if (ctx.sentencia()) code += this.visit(ctx.sentencia());
        if (ctx.terminar()) code += this.visit(ctx.terminar());
        return code;
    }

    visitSalida(ctx) {
        let str = ctx.CADENA().getText();
        return `        console.log(${str});\n`;
    }

    visitTerminar(ctx) {
        return `        return;\n`;
    }
}

// --- FLUJO PRINCIPAL ---
function main() {
    const fileName = process.argv[2] || 'prueba_correcta_1.txt';
    console.log(`\nProcesando archivo: ${fileName}\n`);
    
    let input;
    try {
        input = fs.readFileSync(fileName, 'utf8');
    } catch (err) {
        console.error(`Error: No se pudo leer el archivo ${fileName}`);
        return;
    }

    const chars = antlr4.CharStreams.fromString(input);

    // Análisis Léxico
    const lexer = new SimpleCLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);

    // TAREA 2: TABLA DE LEXEMAS-TOKENS
    console.log("--- 2. Tabla de Lexemas - Tokens ---");
    console.log("Lexema\t\t\tToken");
    console.log("-----------------------------------------");
    tokens.fill();
    tokens.tokens.forEach(t => {
        if (t.type !== antlr4.Token.EOF) {
            const tokenName = SimpleCLexer.symbolicNames[t.type];
            console.log(`${t.text.padEnd(20)}\t${tokenName}`);
        }
    });

    // Análisis Sintáctico
    const parser = new SimpleCParser(tokens);
    parser.buildParseTrees = true;
    
    const errorListener = new CustomErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    const tree = parser.programa();

    // TAREA 1: VALIDACIÓN DE ERRORES
    console.log("\n--- 1. Análisis Léxico y Sintáctico ---");
    if (errorListener.errors.length > 0) {
        console.error("El código contiene errores:");
        errorListener.errors.forEach(err => console.error(err));
        return; // Detener la ejecución si hay errores
    } else {
        console.log("Entrada correcta. No se detectaron errores sintácticos.");
    }

    // TAREA 3: ÁRBOL DE ANÁLISIS SINTÁCTICO (CST)
    console.log("\n--- 3. Árbol de Análisis Sintáctico (CST) ---");
    console.log(tree.toStringTree(parser.ruleNames, parser));

    // TAREA 4: INTERPRETACIÓN
    const interpreter = new Interpreter();
    interpreter.visit(tree);
}

main();