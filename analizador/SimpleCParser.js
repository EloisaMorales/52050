// Generated from SimpleC.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SimpleCListener from './SimpleCListener.js';
import SimpleCVisitor from './SimpleCVisitor.js';

const serializedATN = [4,1,13,59,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,1,4,1,21,8,1,11,1,12,1,22,1,2,1,2,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,39,8,3,1,4,1,4,1,4,1,
4,1,4,3,4,46,8,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,0,0,8,0,
2,4,6,8,10,12,14,0,1,1,0,10,11,54,0,16,1,0,0,0,2,20,1,0,0,0,4,24,1,0,0,0,
6,26,1,0,0,0,8,45,1,0,0,0,10,47,1,0,0,0,12,53,1,0,0,0,14,56,1,0,0,0,16,17,
3,2,1,0,17,18,5,0,0,1,18,1,1,0,0,0,19,21,3,4,2,0,20,19,1,0,0,0,21,22,1,0,
0,0,22,20,1,0,0,0,22,23,1,0,0,0,23,3,1,0,0,0,24,25,3,6,3,0,25,5,1,0,0,0,
26,27,5,1,0,0,27,28,5,5,0,0,28,29,3,14,7,0,29,30,5,6,0,0,30,31,5,7,0,0,31,
32,3,8,4,0,32,38,5,8,0,0,33,34,5,2,0,0,34,35,5,7,0,0,35,36,3,8,4,0,36,37,
5,8,0,0,37,39,1,0,0,0,38,33,1,0,0,0,38,39,1,0,0,0,39,7,1,0,0,0,40,46,3,10,
5,0,41,42,3,10,5,0,42,43,3,8,4,0,43,46,1,0,0,0,44,46,3,12,6,0,45,40,1,0,
0,0,45,41,1,0,0,0,45,44,1,0,0,0,46,9,1,0,0,0,47,48,5,3,0,0,48,49,5,5,0,0,
49,50,5,12,0,0,50,51,5,6,0,0,51,52,5,9,0,0,52,11,1,0,0,0,53,54,5,4,0,0,54,
55,5,9,0,0,55,13,1,0,0,0,56,57,7,0,0,0,57,15,1,0,0,0,3,22,38,45];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SimpleCParser extends antlr4.Parser {

    static grammarFileName = "SimpleC.g4";
    static literalNames = [ null, "'if'", "'else'", "'printf'", "'return'", 
                            "'('", "')'", "'{'", "'}'", "';'", "'0'", "'1'" ];
    static symbolicNames = [ null, "IF", "ELSE", "PRINTF", "RETURN", "LPAREN", 
                             "RPAREN", "LBRACE", "RBRACE", "SEMI", "ZERO", 
                             "ONE", "CADENA", "WS" ];
    static ruleNames = [ "programa", "instrucciones", "instruccion", "decision", 
                         "sentencia", "salida", "terminar", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SimpleCParser.ruleNames;
        this.literalNames = SimpleCParser.literalNames;
        this.symbolicNames = SimpleCParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SimpleCParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.instrucciones();
	        this.state = 17;
	        this.match(SimpleCParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SimpleCParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 20; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 19;
	            this.instruccion();
	            this.state = 22; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SimpleCParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.decision();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SimpleCParser.RULE_decision);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(SimpleCParser.IF);
	        this.state = 27;
	        this.match(SimpleCParser.LPAREN);
	        this.state = 28;
	        this.condicion();
	        this.state = 29;
	        this.match(SimpleCParser.RPAREN);
	        this.state = 30;
	        this.match(SimpleCParser.LBRACE);
	        this.state = 31;
	        this.sentencia();
	        this.state = 32;
	        this.match(SimpleCParser.RBRACE);
	        this.state = 38;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 33;
	            this.match(SimpleCParser.ELSE);
	            this.state = 34;
	            this.match(SimpleCParser.LBRACE);
	            this.state = 35;
	            this.sentencia();
	            this.state = 36;
	            this.match(SimpleCParser.RBRACE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SimpleCParser.RULE_sentencia);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.salida();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.salida();
	            this.state = 42;
	            this.sentencia();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.terminar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SimpleCParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(SimpleCParser.PRINTF);
	        this.state = 48;
	        this.match(SimpleCParser.LPAREN);
	        this.state = 49;
	        this.match(SimpleCParser.CADENA);
	        this.state = 50;
	        this.match(SimpleCParser.RPAREN);
	        this.state = 51;
	        this.match(SimpleCParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SimpleCParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(SimpleCParser.RETURN);
	        this.state = 54;
	        this.match(SimpleCParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SimpleCParser.RULE_condicion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===11)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SimpleCParser.EOF = antlr4.Token.EOF;
SimpleCParser.IF = 1;
SimpleCParser.ELSE = 2;
SimpleCParser.PRINTF = 3;
SimpleCParser.RETURN = 4;
SimpleCParser.LPAREN = 5;
SimpleCParser.RPAREN = 6;
SimpleCParser.LBRACE = 7;
SimpleCParser.RBRACE = 8;
SimpleCParser.SEMI = 9;
SimpleCParser.ZERO = 10;
SimpleCParser.ONE = 11;
SimpleCParser.CADENA = 12;
SimpleCParser.WS = 13;

SimpleCParser.RULE_programa = 0;
SimpleCParser.RULE_instrucciones = 1;
SimpleCParser.RULE_instruccion = 2;
SimpleCParser.RULE_decision = 3;
SimpleCParser.RULE_sentencia = 4;
SimpleCParser.RULE_salida = 5;
SimpleCParser.RULE_terminar = 6;
SimpleCParser.RULE_condicion = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleCParser.RULE_programa;
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	EOF() {
	    return this.getToken(SimpleCParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleCVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleCParser.RULE_instrucciones;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleCVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleCParser.RULE_instruccion;
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleCVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleCParser.RULE_decision;
    }

	IF() {
	    return this.getToken(SimpleCParser.IF, 0);
	};

	LPAREN() {
	    return this.getToken(SimpleCParser.LPAREN, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAREN() {
	    return this.getToken(SimpleCParser.RPAREN, 0);
	};

	LBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleCParser.LBRACE);
	    } else {
	        return this.getToken(SimpleCParser.LBRACE, i);
	    }
	};


	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	RBRACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SimpleCParser.RBRACE);
	    } else {
	        return this.getToken(SimpleCParser.RBRACE, i);
	    }
	};


	ELSE() {
	    return this.getToken(SimpleCParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.enterDecision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.exitDecision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleCVisitor ) {
	        return visitor.visitDecision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleCParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleCVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleCParser.RULE_salida;
    }

	PRINTF() {
	    return this.getToken(SimpleCParser.PRINTF, 0);
	};

	LPAREN() {
	    return this.getToken(SimpleCParser.LPAREN, 0);
	};

	CADENA() {
	    return this.getToken(SimpleCParser.CADENA, 0);
	};

	RPAREN() {
	    return this.getToken(SimpleCParser.RPAREN, 0);
	};

	SEMI() {
	    return this.getToken(SimpleCParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleCVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleCParser.RULE_terminar;
    }

	RETURN() {
	    return this.getToken(SimpleCParser.RETURN, 0);
	};

	SEMI() {
	    return this.getToken(SimpleCParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleCVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SimpleCParser.RULE_condicion;
    }

	ZERO() {
	    return this.getToken(SimpleCParser.ZERO, 0);
	};

	ONE() {
	    return this.getToken(SimpleCParser.ONE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SimpleCListener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SimpleCVisitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SimpleCParser.ProgramaContext = ProgramaContext; 
SimpleCParser.InstruccionesContext = InstruccionesContext; 
SimpleCParser.InstruccionContext = InstruccionContext; 
SimpleCParser.DecisionContext = DecisionContext; 
SimpleCParser.SentenciaContext = SentenciaContext; 
SimpleCParser.SalidaContext = SalidaContext; 
SimpleCParser.TerminarContext = TerminarContext; 
SimpleCParser.CondicionContext = CondicionContext; 
