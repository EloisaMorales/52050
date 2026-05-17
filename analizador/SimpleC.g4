grammar SimpleC;

// --- REGLAS SINTÁCTICAS ---
programa: instrucciones EOF;

instrucciones: instruccion+;

instruccion: decision;

decision: IF LPAREN condicion RPAREN LBRACE sentencia RBRACE (ELSE LBRACE sentencia RBRACE)?;

sentencia: 
    salida 
    | salida sentencia 
    | terminar
    ;

salida: PRINTF LPAREN CADENA RPAREN SEMI;

terminar: RETURN SEMI;

condicion: ZERO | ONE;

// --- REGLAS LÉXICAS ---
IF: 'if';
ELSE: 'else';
PRINTF: 'printf';
RETURN: 'return';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
SEMI: ';';
ZERO: '0';
ONE: '1';

// Definición de la cadena y sus caracteres
CADENA: '"' CARACTER* '"';

fragment CARACTER: LETRA | DIGITO | SIMBOLO;
fragment LETRA: [a-zA-Z];
fragment DIGITO: [0-9];
// El espacio en blanco lo incluimos en símbolo para que permita textos normales
fragment SIMBOLO: [.,!?:; ]; 

// Ignoramos los espacios, tabs y saltos de línea fuera de las cadenas
WS: [ \t\r\n]+ -> skip;