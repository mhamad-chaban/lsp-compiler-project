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
	public static readonly RULE_functionStructure = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_defaultType = 4;
	public static readonly RULE_functionParameters = 5;
	public static readonly RULE_ifStructure = 6;
	public static readonly RULE_whileStructure = 7;
	public static readonly RULE_booleanExpression = 8;
	public static readonly RULE_booleanTerm = 9;
	public static readonly RULE_booleanFactor = 10;
	public static readonly RULE_statement = 11;
	public static readonly RULE_value = 12;
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
		"program", "variableStructure", "functionStructure", "type", "defaultType", 
		"functionParameters", "ifStructure", "whileStructure", "booleanExpression", 
		"booleanTerm", "booleanFactor", "statement", "value",
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
			this.state = 32;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4238860) !== 0)) {
				{
				this.state = 30;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 9:
				case 10:
				case 11:
				case 22:
					{
					this.state = 26;
					this.variableStructure();
					}
					break;
				case 2:
				case 3:
					{
					this.state = 27;
					this.functionStructure();
					}
					break;
				case 13:
					{
					this.state = 28;
					this.ifStructure();
					}
					break;
				case 15:
					{
					this.state = 29;
					this.whileStructure();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 34;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 35;
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
			this.state = 37;
			this.type_();
			this.state = 38;
			this.match(MyGrammarParser.ID);
			this.state = 39;
			this.match(MyGrammarParser.ASSIGN);
			this.state = 40;
			this.value();
			this.state = 41;
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
	public functionStructure(): FunctionStructureContext {
		let localctx: FunctionStructureContext = new FunctionStructureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MyGrammarParser.RULE_functionStructure);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			_la = this._input.LA(1);
			if(!(_la===2 || _la===3)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 44;
			this.match(MyGrammarParser.T__3);
			this.state = 45;
			this.match(MyGrammarParser.ID);
			this.state = 46;
			this.match(MyGrammarParser.T__4);
			this.state = 48;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4197888) !== 0)) {
				{
				this.state = 47;
				this.functionParameters();
				}
			}

			this.state = 50;
			this.match(MyGrammarParser.T__5);
			this.state = 51;
			this.match(MyGrammarParser.T__6);
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 52;
				this.statement();
				}
				}
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 58;
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
			this.state = 62;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
			case 10:
			case 11:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 60;
				this.defaultType();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 61;
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
			this.state = 64;
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
			this.state = 66;
			this.type_();
			this.state = 67;
			this.match(MyGrammarParser.ID);
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 68;
				this.match(MyGrammarParser.T__11);
				this.state = 69;
				this.type_();
				this.state = 70;
				this.match(MyGrammarParser.ID);
				}
				}
				this.state = 76;
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
		this.enterRule(localctx, 12, MyGrammarParser.RULE_ifStructure);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.match(MyGrammarParser.T__12);
			this.state = 78;
			this.match(MyGrammarParser.T__4);
			this.state = 79;
			this.booleanExpression();
			this.state = 80;
			this.match(MyGrammarParser.T__5);
			this.state = 81;
			this.match(MyGrammarParser.T__6);
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 82;
				this.statement();
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 88;
			this.match(MyGrammarParser.T__7);
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 89;
				this.match(MyGrammarParser.T__13);
				this.state = 90;
				this.match(MyGrammarParser.T__6);
				this.state = 94;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===22) {
					{
					{
					this.state = 91;
					this.statement();
					}
					}
					this.state = 96;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 97;
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
		this.enterRule(localctx, 14, MyGrammarParser.RULE_whileStructure);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 100;
			this.match(MyGrammarParser.T__14);
			this.state = 101;
			this.match(MyGrammarParser.T__4);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 5242912) !== 0)) {
				{
				this.state = 102;
				this.booleanExpression();
				}
			}

			this.state = 105;
			this.match(MyGrammarParser.T__5);
			this.state = 106;
			this.match(MyGrammarParser.T__6);
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 107;
				this.statement();
				}
				}
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 113;
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
		this.enterRule(localctx, 16, MyGrammarParser.RULE_booleanExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 115;
			this.booleanTerm();
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===16 || _la===17) {
				{
				{
				this.state = 116;
				_la = this._input.LA(1);
				if(!(_la===16 || _la===17)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 117;
				this.booleanTerm();
				}
				}
				this.state = 122;
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
		this.enterRule(localctx, 18, MyGrammarParser.RULE_booleanTerm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 123;
			this.booleanFactor();
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 124;
				this.match(MyGrammarParser.T__17);
				this.state = 125;
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
		this.enterRule(localctx, 20, MyGrammarParser.RULE_booleanFactor);
		try {
			this.state = 134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 128;
				this.match(MyGrammarParser.BooleanValue);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 129;
				this.match(MyGrammarParser.ID);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 130;
				this.match(MyGrammarParser.T__4);
				this.state = 131;
				this.booleanExpression();
				this.state = 132;
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
		this.enterRule(localctx, 22, MyGrammarParser.RULE_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
			this.match(MyGrammarParser.ID);
			this.state = 137;
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
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, MyGrammarParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 139;
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

	public static readonly _serializedATN: number[] = [4,1,24,142,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,1,0,1,0,1,0,1,0,5,0,31,8,0,10,0,12,0,34,9,0,
	1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,3,2,49,8,2,1,2,1,2,
	1,2,5,2,54,8,2,10,2,12,2,57,9,2,1,2,1,2,1,3,1,3,3,3,63,8,3,1,4,1,4,1,5,
	1,5,1,5,1,5,1,5,1,5,5,5,73,8,5,10,5,12,5,76,9,5,1,6,1,6,1,6,1,6,1,6,1,6,
	5,6,84,8,6,10,6,12,6,87,9,6,1,6,1,6,1,6,1,6,5,6,93,8,6,10,6,12,6,96,9,6,
	1,6,3,6,99,8,6,1,7,1,7,1,7,3,7,104,8,7,1,7,1,7,1,7,5,7,109,8,7,10,7,12,
	7,112,9,7,1,7,1,7,1,8,1,8,1,8,5,8,119,8,8,10,8,12,8,122,9,8,1,9,1,9,1,9,
	3,9,127,8,9,1,10,1,10,1,10,1,10,1,10,1,10,3,10,135,8,10,1,11,1,11,1,11,
	1,12,1,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,20,22,24,0,4,1,0,2,3,1,0,
	9,11,1,0,16,17,1,0,19,21,145,0,32,1,0,0,0,2,37,1,0,0,0,4,43,1,0,0,0,6,62,
	1,0,0,0,8,64,1,0,0,0,10,66,1,0,0,0,12,77,1,0,0,0,14,100,1,0,0,0,16,115,
	1,0,0,0,18,123,1,0,0,0,20,134,1,0,0,0,22,136,1,0,0,0,24,139,1,0,0,0,26,
	31,3,2,1,0,27,31,3,4,2,0,28,31,3,12,6,0,29,31,3,14,7,0,30,26,1,0,0,0,30,
	27,1,0,0,0,30,28,1,0,0,0,30,29,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,
	1,0,0,0,33,35,1,0,0,0,34,32,1,0,0,0,35,36,5,0,0,1,36,1,1,0,0,0,37,38,3,
	6,3,0,38,39,5,22,0,0,39,40,5,23,0,0,40,41,3,24,12,0,41,42,5,1,0,0,42,3,
	1,0,0,0,43,44,7,0,0,0,44,45,5,4,0,0,45,46,5,22,0,0,46,48,5,5,0,0,47,49,
	3,10,5,0,48,47,1,0,0,0,48,49,1,0,0,0,49,50,1,0,0,0,50,51,5,6,0,0,51,55,
	5,7,0,0,52,54,3,22,11,0,53,52,1,0,0,0,54,57,1,0,0,0,55,53,1,0,0,0,55,56,
	1,0,0,0,56,58,1,0,0,0,57,55,1,0,0,0,58,59,5,8,0,0,59,5,1,0,0,0,60,63,3,
	8,4,0,61,63,5,22,0,0,62,60,1,0,0,0,62,61,1,0,0,0,63,7,1,0,0,0,64,65,7,1,
	0,0,65,9,1,0,0,0,66,67,3,6,3,0,67,74,5,22,0,0,68,69,5,12,0,0,69,70,3,6,
	3,0,70,71,5,22,0,0,71,73,1,0,0,0,72,68,1,0,0,0,73,76,1,0,0,0,74,72,1,0,
	0,0,74,75,1,0,0,0,75,11,1,0,0,0,76,74,1,0,0,0,77,78,5,13,0,0,78,79,5,5,
	0,0,79,80,3,16,8,0,80,81,5,6,0,0,81,85,5,7,0,0,82,84,3,22,11,0,83,82,1,
	0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,87,85,1,0,
	0,0,88,98,5,8,0,0,89,90,5,14,0,0,90,94,5,7,0,0,91,93,3,22,11,0,92,91,1,
	0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,97,1,0,0,0,96,94,1,0,
	0,0,97,99,5,8,0,0,98,89,1,0,0,0,98,99,1,0,0,0,99,13,1,0,0,0,100,101,5,15,
	0,0,101,103,5,5,0,0,102,104,3,16,8,0,103,102,1,0,0,0,103,104,1,0,0,0,104,
	105,1,0,0,0,105,106,5,6,0,0,106,110,5,7,0,0,107,109,3,22,11,0,108,107,1,
	0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,113,1,0,0,0,112,
	110,1,0,0,0,113,114,5,8,0,0,114,15,1,0,0,0,115,120,3,18,9,0,116,117,7,2,
	0,0,117,119,3,18,9,0,118,116,1,0,0,0,119,122,1,0,0,0,120,118,1,0,0,0,120,
	121,1,0,0,0,121,17,1,0,0,0,122,120,1,0,0,0,123,126,3,20,10,0,124,125,5,
	18,0,0,125,127,3,20,10,0,126,124,1,0,0,0,126,127,1,0,0,0,127,19,1,0,0,0,
	128,135,5,20,0,0,129,135,5,22,0,0,130,131,5,5,0,0,131,132,3,16,8,0,132,
	133,5,6,0,0,133,135,1,0,0,0,134,128,1,0,0,0,134,129,1,0,0,0,134,130,1,0,
	0,0,135,21,1,0,0,0,136,137,5,22,0,0,137,138,5,1,0,0,138,23,1,0,0,0,139,
	140,7,3,0,0,140,25,1,0,0,0,14,30,32,48,55,62,74,85,94,98,103,110,120,126,
	134];

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
	public functionStructure_list(): FunctionStructureContext[] {
		return this.getTypedRuleContexts(FunctionStructureContext) as FunctionStructureContext[];
	}
	public functionStructure(i: number): FunctionStructureContext {
		return this.getTypedRuleContext(FunctionStructureContext, i) as FunctionStructureContext;
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


export class FunctionStructureContext extends ParserRuleContext {
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
    	return MyGrammarParser.RULE_functionStructure;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterFunctionStructure) {
	 		listener.enterFunctionStructure(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitFunctionStructure) {
	 		listener.exitFunctionStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitFunctionStructure) {
			return visitor.visitFunctionStructure(this);
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
	public ID(): TerminalNode {
		return this.getToken(MyGrammarParser.ID, 0);
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
