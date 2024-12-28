// Generated from ./src/g4/MyGrammar.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import MyGrammarListener from "./MyGrammarListener.js";
import MyGrammarVisitor from "./MyGrammarVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class MyGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly NumberValue = 19;
	public static readonly BooleanValue = 20;
	public static readonly StringValue = 21;
	public static readonly ID = 22;
	public static readonly ASSIGN = 23;
	public static readonly WS = 24;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_variableStructure = 1;
	public static readonly RULE_functionDeclarationStructure = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_defaultType = 4;
	public static readonly RULE_functionParameters = 5;
	public static readonly RULE_functionCall = 6;
	public static readonly RULE_functionArguments = 7;
	public static readonly RULE_ifStructure = 8;
	public static readonly RULE_whileStructure = 9;
	public static readonly RULE_booleanExpression = 10;
	public static readonly RULE_booleanTerm = 11;
	public static readonly RULE_booleanFactor = 12;
	public static readonly RULE_statement = 13;
	public static readonly RULE_value = 14;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'public'", 
                                                            "'private'", 
                                                            "'void'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'number'", 
                                                            "'boolean'", 
                                                            "'string'", 
                                                            "','", "'if'", 
                                                            "'else'", "'while'", 
                                                            "'&&'", "'||'", 
                                                            "'=='", null, 
                                                            null, null, 
                                                            null, "'='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "NumberValue", 
                                                             "BooleanValue", 
                                                             "StringValue", 
                                                             "ID", "ASSIGN", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "variableStructure", "functionDeclarationStructure", "type", 
		"defaultType", "functionParameters", "functionCall", "functionArguments", 
		"ifStructure", "whileStructure", "booleanExpression", "booleanTerm", "booleanFactor", 
		"statement", "value",
	];
	public get grammarFileName(): string { return "MyGrammar.g4"; }
	public get literalNames(): (string | null)[] { return MyGrammarParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return MyGrammarParser.symbolicNames; }
	public get ruleNames(): string[] { return MyGrammarParser.ruleNames; }
	public get serializedATN(): number[] { return MyGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, MyGrammarParser._ATN, MyGrammarParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MyGrammarParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4238860) !== 0)) {
				{
				this.state = 35;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
				case 1:
					{
					this.state = 30;
					this.variableStructure();
					}
					break;
				case 2:
					{
					this.state = 31;
					this.functionDeclarationStructure();
					}
					break;
				case 3:
					{
					this.state = 32;
					this.functionCall();
					}
					break;
				case 4:
					{
					this.state = 33;
					this.ifStructure();
					}
					break;
				case 5:
					{
					this.state = 34;
					this.whileStructure();
					}
					break;
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 40;
			this.match(MyGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableStructure(): VariableStructureContext {
		let localctx: VariableStructureContext = new VariableStructureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MyGrammarParser.RULE_variableStructure);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 42;
			this.type_();
			this.state = 43;
			this.match(MyGrammarParser.ID);
			this.state = 44;
			this.match(MyGrammarParser.ASSIGN);
			this.state = 45;
			this.value();
			this.state = 46;
			this.match(MyGrammarParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclarationStructure(): FunctionDeclarationStructureContext {
		let localctx: FunctionDeclarationStructureContext = new FunctionDeclarationStructureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MyGrammarParser.RULE_functionDeclarationStructure);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			_la = this._input.LA(1);
			if(!(_la===2 || _la===3)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 49;
			this.match(MyGrammarParser.T__3);
			this.state = 50;
			this.match(MyGrammarParser.ID);
			this.state = 51;
			this.match(MyGrammarParser.T__4);
			this.state = 53;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4197888) !== 0)) {
				{
				this.state = 52;
				this.functionParameters();
				}
			}

			this.state = 55;
			this.match(MyGrammarParser.T__5);
			this.state = 56;
			this.match(MyGrammarParser.T__6);
			this.state = 60;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4238848) !== 0)) {
				{
				{
				this.state = 57;
				this.statement();
				}
				}
				this.state = 62;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 63;
			this.match(MyGrammarParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MyGrammarParser.RULE_type);
		try {
			this.state = 67;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
			case 10:
			case 11:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 65;
				this.defaultType();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 66;
				this.match(MyGrammarParser.ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public defaultType(): DefaultTypeContext {
		let localctx: DefaultTypeContext = new DefaultTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, MyGrammarParser.RULE_defaultType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3584) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionParameters(): FunctionParametersContext {
		let localctx: FunctionParametersContext = new FunctionParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MyGrammarParser.RULE_functionParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this.type_();
			this.state = 72;
			this.match(MyGrammarParser.ID);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 73;
				this.match(MyGrammarParser.T__11);
				this.state = 74;
				this.type_();
				this.state = 75;
				this.match(MyGrammarParser.ID);
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MyGrammarParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 82;
			this.match(MyGrammarParser.ID);
			this.state = 83;
			this.match(MyGrammarParser.T__4);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3670016) !== 0)) {
				{
				this.state = 84;
				this.functionArguments();
				}
			}

			this.state = 87;
			this.match(MyGrammarParser.T__5);
			this.state = 88;
			this.match(MyGrammarParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionArguments(): FunctionArgumentsContext {
		let localctx: FunctionArgumentsContext = new FunctionArgumentsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MyGrammarParser.RULE_functionArguments);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 90;
			this.value();
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 91;
				this.match(MyGrammarParser.T__11);
				this.state = 92;
				this.value();
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStructure(): IfStructureContext {
		let localctx: IfStructureContext = new IfStructureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, MyGrammarParser.RULE_ifStructure);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 98;
			this.match(MyGrammarParser.T__12);
			this.state = 99;
			this.match(MyGrammarParser.T__4);
			this.state = 100;
			this.booleanExpression();
			this.state = 101;
			this.match(MyGrammarParser.T__5);
			this.state = 102;
			this.match(MyGrammarParser.T__6);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4238848) !== 0)) {
				{
				{
				this.state = 103;
				this.statement();
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 109;
			this.match(MyGrammarParser.T__7);
			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 110;
				this.match(MyGrammarParser.T__13);
				this.state = 111;
				this.match(MyGrammarParser.T__6);
				this.state = 115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4238848) !== 0)) {
					{
					{
					this.state = 112;
					this.statement();
					}
					}
					this.state = 117;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 118;
				this.match(MyGrammarParser.T__7);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileStructure(): WhileStructureContext {
		let localctx: WhileStructureContext = new WhileStructureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, MyGrammarParser.RULE_whileStructure);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 121;
			this.match(MyGrammarParser.T__14);
			this.state = 122;
			this.match(MyGrammarParser.T__4);
			this.state = 123;
			this.booleanExpression();
			this.state = 124;
			this.match(MyGrammarParser.T__5);
			this.state = 125;
			this.match(MyGrammarParser.T__6);
			this.state = 129;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4238848) !== 0)) {
				{
				{
				this.state = 126;
				this.statement();
				}
				}
				this.state = 131;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 132;
			this.match(MyGrammarParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanExpression(): BooleanExpressionContext {
		let localctx: BooleanExpressionContext = new BooleanExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, MyGrammarParser.RULE_booleanExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 134;
			this.booleanTerm();
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16 || _la===17) {
				{
				{
				this.state = 135;
				_la = this._input.LA(1);
				if(!(_la===16 || _la===17)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 136;
				this.booleanTerm();
				}
				}
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanTerm(): BooleanTermContext {
		let localctx: BooleanTermContext = new BooleanTermContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, MyGrammarParser.RULE_booleanTerm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 142;
			this.booleanFactor();
			this.state = 145;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 143;
				this.match(MyGrammarParser.T__17);
				this.state = 144;
				this.booleanFactor();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public booleanFactor(): BooleanFactorContext {
		let localctx: BooleanFactorContext = new BooleanFactorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MyGrammarParser.RULE_booleanFactor);
		try {
			this.state = 153;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 147;
				this.match(MyGrammarParser.BooleanValue);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 148;
				this.match(MyGrammarParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 149;
				this.match(MyGrammarParser.T__4);
				this.state = 150;
				this.booleanExpression();
				this.state = 151;
				this.match(MyGrammarParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, MyGrammarParser.RULE_statement);
		try {
			this.state = 159;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 155;
				this.variableStructure();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 156;
				this.functionCall();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 157;
				this.ifStructure();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 158;
				this.whileStructure();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, MyGrammarParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 161;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 3670016) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,24,164,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,1,0,1,0,1,0,1,0,1,0,5,0,
	36,8,0,10,0,12,0,39,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,
	1,2,3,2,54,8,2,1,2,1,2,1,2,5,2,59,8,2,10,2,12,2,62,9,2,1,2,1,2,1,3,1,3,
	3,3,68,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,78,8,5,10,5,12,5,81,9,5,
	1,6,1,6,1,6,3,6,86,8,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,94,8,7,10,7,12,7,97,
	9,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,105,8,8,10,8,12,8,108,9,8,1,8,1,8,1,8,1,
	8,5,8,114,8,8,10,8,12,8,117,9,8,1,8,3,8,120,8,8,1,9,1,9,1,9,1,9,1,9,1,9,
	5,9,128,8,9,10,9,12,9,131,9,9,1,9,1,9,1,10,1,10,1,10,5,10,138,8,10,10,10,
	12,10,141,9,10,1,11,1,11,1,11,3,11,146,8,11,1,12,1,12,1,12,1,12,1,12,1,
	12,3,12,154,8,12,1,13,1,13,1,13,1,13,3,13,160,8,13,1,14,1,14,1,14,0,0,15,
	0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,0,4,1,0,2,3,1,0,9,11,1,0,16,17,
	1,0,19,21,170,0,37,1,0,0,0,2,42,1,0,0,0,4,48,1,0,0,0,6,67,1,0,0,0,8,69,
	1,0,0,0,10,71,1,0,0,0,12,82,1,0,0,0,14,90,1,0,0,0,16,98,1,0,0,0,18,121,
	1,0,0,0,20,134,1,0,0,0,22,142,1,0,0,0,24,153,1,0,0,0,26,159,1,0,0,0,28,
	161,1,0,0,0,30,36,3,2,1,0,31,36,3,4,2,0,32,36,3,12,6,0,33,36,3,16,8,0,34,
	36,3,18,9,0,35,30,1,0,0,0,35,31,1,0,0,0,35,32,1,0,0,0,35,33,1,0,0,0,35,
	34,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,40,1,0,0,0,39,37,
	1,0,0,0,40,41,5,0,0,1,41,1,1,0,0,0,42,43,3,6,3,0,43,44,5,22,0,0,44,45,5,
	23,0,0,45,46,3,28,14,0,46,47,5,1,0,0,47,3,1,0,0,0,48,49,7,0,0,0,49,50,5,
	4,0,0,50,51,5,22,0,0,51,53,5,5,0,0,52,54,3,10,5,0,53,52,1,0,0,0,53,54,1,
	0,0,0,54,55,1,0,0,0,55,56,5,6,0,0,56,60,5,7,0,0,57,59,3,26,13,0,58,57,1,
	0,0,0,59,62,1,0,0,0,60,58,1,0,0,0,60,61,1,0,0,0,61,63,1,0,0,0,62,60,1,0,
	0,0,63,64,5,8,0,0,64,5,1,0,0,0,65,68,3,8,4,0,66,68,5,22,0,0,67,65,1,0,0,
	0,67,66,1,0,0,0,68,7,1,0,0,0,69,70,7,1,0,0,70,9,1,0,0,0,71,72,3,6,3,0,72,
	79,5,22,0,0,73,74,5,12,0,0,74,75,3,6,3,0,75,76,5,22,0,0,76,78,1,0,0,0,77,
	73,1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,11,1,0,0,0,81,79,
	1,0,0,0,82,83,5,22,0,0,83,85,5,5,0,0,84,86,3,14,7,0,85,84,1,0,0,0,85,86,
	1,0,0,0,86,87,1,0,0,0,87,88,5,6,0,0,88,89,5,1,0,0,89,13,1,0,0,0,90,95,3,
	28,14,0,91,92,5,12,0,0,92,94,3,28,14,0,93,91,1,0,0,0,94,97,1,0,0,0,95,93,
	1,0,0,0,95,96,1,0,0,0,96,15,1,0,0,0,97,95,1,0,0,0,98,99,5,13,0,0,99,100,
	5,5,0,0,100,101,3,20,10,0,101,102,5,6,0,0,102,106,5,7,0,0,103,105,3,26,
	13,0,104,103,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,106,107,1,0,0,0,107,
	109,1,0,0,0,108,106,1,0,0,0,109,119,5,8,0,0,110,111,5,14,0,0,111,115,5,
	7,0,0,112,114,3,26,13,0,113,112,1,0,0,0,114,117,1,0,0,0,115,113,1,0,0,0,
	115,116,1,0,0,0,116,118,1,0,0,0,117,115,1,0,0,0,118,120,5,8,0,0,119,110,
	1,0,0,0,119,120,1,0,0,0,120,17,1,0,0,0,121,122,5,15,0,0,122,123,5,5,0,0,
	123,124,3,20,10,0,124,125,5,6,0,0,125,129,5,7,0,0,126,128,3,26,13,0,127,
	126,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,130,1,0,0,0,130,132,1,0,
	0,0,131,129,1,0,0,0,132,133,5,8,0,0,133,19,1,0,0,0,134,139,3,22,11,0,135,
	136,7,2,0,0,136,138,3,22,11,0,137,135,1,0,0,0,138,141,1,0,0,0,139,137,1,
	0,0,0,139,140,1,0,0,0,140,21,1,0,0,0,141,139,1,0,0,0,142,145,3,24,12,0,
	143,144,5,18,0,0,144,146,3,24,12,0,145,143,1,0,0,0,145,146,1,0,0,0,146,
	23,1,0,0,0,147,154,5,20,0,0,148,154,5,22,0,0,149,150,5,5,0,0,150,151,3,
	20,10,0,151,152,5,6,0,0,152,154,1,0,0,0,153,147,1,0,0,0,153,148,1,0,0,0,
	153,149,1,0,0,0,154,25,1,0,0,0,155,160,3,2,1,0,156,160,3,12,6,0,157,160,
	3,16,8,0,158,160,3,18,9,0,159,155,1,0,0,0,159,156,1,0,0,0,159,157,1,0,0,
	0,159,158,1,0,0,0,160,27,1,0,0,0,161,162,7,3,0,0,162,29,1,0,0,0,16,35,37,
	53,60,67,79,85,95,106,115,119,129,139,145,153,159];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarParser.__ATN) {
			MyGrammarParser.__ATN = new ATNDeserializer().deserialize(MyGrammarParser._serializedATN);
		}

		return MyGrammarParser.__ATN;
	}


	static DecisionsToDFA = MyGrammarParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(MyGrammarParser.EOF, 0);
	}
	public variableStructure_list(): VariableStructureContext[] {
		return this.getTypedRuleContexts(VariableStructureContext) as VariableStructureContext[];
	}
	public variableStructure(i: number): VariableStructureContext {
		return this.getTypedRuleContext(VariableStructureContext, i) as VariableStructureContext;
	}
	public functionDeclarationStructure_list(): FunctionDeclarationStructureContext[] {
		return this.getTypedRuleContexts(FunctionDeclarationStructureContext) as FunctionDeclarationStructureContext[];
	}
	public functionDeclarationStructure(i: number): FunctionDeclarationStructureContext {
		return this.getTypedRuleContext(FunctionDeclarationStructureContext, i) as FunctionDeclarationStructureContext;
	}
	public functionCall_list(): FunctionCallContext[] {
		return this.getTypedRuleContexts(FunctionCallContext) as FunctionCallContext[];
	}
	public functionCall(i: number): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, i) as FunctionCallContext;
	}
	public ifStructure_list(): IfStructureContext[] {
		return this.getTypedRuleContexts(IfStructureContext) as IfStructureContext[];
	}
	public ifStructure(i: number): IfStructureContext {
		return this.getTypedRuleContext(IfStructureContext, i) as IfStructureContext;
	}
	public whileStructure_list(): WhileStructureContext[] {
		return this.getTypedRuleContexts(WhileStructureContext) as WhileStructureContext[];
	}
	public whileStructure(i: number): WhileStructureContext {
		return this.getTypedRuleContext(WhileStructureContext, i) as WhileStructureContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_program;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStructureContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public ID(): TerminalNode {
		return this.getToken(MyGrammarParser.ID, 0);
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(MyGrammarParser.ASSIGN, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_variableStructure;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterVariableStructure) {
	 		listener.enterVariableStructure(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitVariableStructure) {
	 		listener.exitVariableStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitVariableStructure) {
			return visitor.visitVariableStructure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationStructureContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MyGrammarParser.ID, 0);
	}
	public functionParameters(): FunctionParametersContext {
		return this.getTypedRuleContext(FunctionParametersContext, 0) as FunctionParametersContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_functionDeclarationStructure;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterFunctionDeclarationStructure) {
	 		listener.enterFunctionDeclarationStructure(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitFunctionDeclarationStructure) {
	 		listener.exitFunctionDeclarationStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionDeclarationStructure) {
			return visitor.visitFunctionDeclarationStructure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public defaultType(): DefaultTypeContext {
		return this.getTypedRuleContext(DefaultTypeContext, 0) as DefaultTypeContext;
	}
	public ID(): TerminalNode {
		return this.getToken(MyGrammarParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_type;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DefaultTypeContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_defaultType;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterDefaultType) {
	 		listener.enterDefaultType(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitDefaultType) {
	 		listener.exitDefaultType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitDefaultType) {
			return visitor.visitDefaultType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionParametersContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public ID_list(): TerminalNode[] {
	    	return this.getTokens(MyGrammarParser.ID);
	}
	public ID(i: number): TerminalNode {
		return this.getToken(MyGrammarParser.ID, i);
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_functionParameters;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterFunctionParameters) {
	 		listener.enterFunctionParameters(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitFunctionParameters) {
	 		listener.exitFunctionParameters(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionParameters) {
			return visitor.visitFunctionParameters(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MyGrammarParser.ID, 0);
	}
	public functionArguments(): FunctionArgumentsContext {
		return this.getTypedRuleContext(FunctionArgumentsContext, 0) as FunctionArgumentsContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_functionCall;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionArgumentsContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value_list(): ValueContext[] {
		return this.getTypedRuleContexts(ValueContext) as ValueContext[];
	}
	public value(i: number): ValueContext {
		return this.getTypedRuleContext(ValueContext, i) as ValueContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_functionArguments;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterFunctionArguments) {
	 		listener.enterFunctionArguments(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitFunctionArguments) {
	 		listener.exitFunctionArguments(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionArguments) {
			return visitor.visitFunctionArguments(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStructureContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_ifStructure;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterIfStructure) {
	 		listener.enterIfStructure(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitIfStructure) {
	 		listener.exitIfStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitIfStructure) {
			return visitor.visitIfStructure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStructureContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_whileStructure;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterWhileStructure) {
	 		listener.enterWhileStructure(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitWhileStructure) {
	 		listener.exitWhileStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitWhileStructure) {
			return visitor.visitWhileStructure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanExpressionContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanTerm_list(): BooleanTermContext[] {
		return this.getTypedRuleContexts(BooleanTermContext) as BooleanTermContext[];
	}
	public booleanTerm(i: number): BooleanTermContext {
		return this.getTypedRuleContext(BooleanTermContext, i) as BooleanTermContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_booleanExpression;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterBooleanExpression) {
	 		listener.enterBooleanExpression(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitBooleanExpression) {
	 		listener.exitBooleanExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitBooleanExpression) {
			return visitor.visitBooleanExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanTermContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public booleanFactor_list(): BooleanFactorContext[] {
		return this.getTypedRuleContexts(BooleanFactorContext) as BooleanFactorContext[];
	}
	public booleanFactor(i: number): BooleanFactorContext {
		return this.getTypedRuleContext(BooleanFactorContext, i) as BooleanFactorContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_booleanTerm;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterBooleanTerm) {
	 		listener.enterBooleanTerm(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitBooleanTerm) {
	 		listener.exitBooleanTerm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitBooleanTerm) {
			return visitor.visitBooleanTerm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BooleanFactorContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BooleanValue(): TerminalNode {
		return this.getToken(MyGrammarParser.BooleanValue, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(MyGrammarParser.ID, 0);
	}
	public booleanExpression(): BooleanExpressionContext {
		return this.getTypedRuleContext(BooleanExpressionContext, 0) as BooleanExpressionContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_booleanFactor;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterBooleanFactor) {
	 		listener.enterBooleanFactor(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitBooleanFactor) {
	 		listener.exitBooleanFactor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitBooleanFactor) {
			return visitor.visitBooleanFactor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableStructure(): VariableStructureContext {
		return this.getTypedRuleContext(VariableStructureContext, 0) as VariableStructureContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public ifStructure(): IfStructureContext {
		return this.getTypedRuleContext(IfStructureContext, 0) as IfStructureContext;
	}
	public whileStructure(): WhileStructureContext {
		return this.getTypedRuleContext(WhileStructureContext, 0) as WhileStructureContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_statement;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NumberValue(): TerminalNode {
		return this.getToken(MyGrammarParser.NumberValue, 0);
	}
	public BooleanValue(): TerminalNode {
		return this.getToken(MyGrammarParser.BooleanValue, 0);
	}
	public StringValue(): TerminalNode {
		return this.getToken(MyGrammarParser.StringValue, 0);
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_value;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
