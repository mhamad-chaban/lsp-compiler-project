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
	public static readonly NumberValue = 18;
	public static readonly BooleanValue = 19;
	public static readonly StringValue = 20;
	public static readonly ID = 21;
	public static readonly WS = 22;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_variableStructure = 1;
	public static readonly RULE_functionStructure = 2;
	public static readonly RULE_type = 3;
	public static readonly RULE_defaultType = 4;
	public static readonly RULE_functionParameters = 5;
	public static readonly RULE_ifStructure = 6;
	public static readonly RULE_booleanExpression = 7;
	public static readonly RULE_booleanTerm = 8;
	public static readonly RULE_booleanFactor = 9;
	public static readonly RULE_statement = 10;
	public static readonly RULE_value = 11;
	public static readonly literalNames: (string | null)[] = [ null, "'='", 
                                                            "';'", "'public'", 
                                                            "'private'", 
                                                            "'void'", "'('", 
                                                            "')'", "'{'", 
                                                            "'}'", "'number'", 
                                                            "'boolean'", 
                                                            "'string'", 
                                                            "','", "'if'", 
                                                            "'&&'", "'||'", 
                                                            "'=='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "NumberValue", 
                                                             "BooleanValue", 
                                                             "StringValue", 
                                                             "ID", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "variableStructure", "functionStructure", "type", "defaultType", 
		"functionParameters", "ifStructure", "booleanExpression", "booleanTerm", 
		"booleanFactor", "statement", "value",
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
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2120728) !== 0)) {
				{
				this.state = 27;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 10:
				case 11:
				case 12:
				case 21:
					{
					this.state = 24;
					this.variableStructure();
					}
					break;
				case 3:
				case 4:
					{
					this.state = 25;
					this.functionStructure();
					}
					break;
				case 14:
					{
					this.state = 26;
					this.ifStructure();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
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
			this.state = 34;
			this.type_();
			this.state = 35;
			this.match(MyGrammarParser.ID);
			this.state = 36;
			this.match(MyGrammarParser.T__0);
			this.state = 37;
			this.value();
			this.state = 38;
			this.match(MyGrammarParser.T__1);
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
			this.state = 40;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===4)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 41;
			this.match(MyGrammarParser.T__4);
			this.state = 42;
			this.match(MyGrammarParser.ID);
			this.state = 43;
			this.match(MyGrammarParser.T__5);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2104320) !== 0)) {
				{
				this.state = 44;
				this.functionParameters();
				}
			}

			this.state = 47;
			this.match(MyGrammarParser.T__6);
			this.state = 48;
			this.match(MyGrammarParser.T__7);
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 49;
				this.statement();
				}
				}
				this.state = 54;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 55;
			this.match(MyGrammarParser.T__8);
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
			this.state = 59;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 11:
			case 12:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 57;
				this.defaultType();
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 58;
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
			this.state = 61;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7168) !== 0))) {
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
			this.state = 63;
			this.type_();
			this.state = 64;
			this.match(MyGrammarParser.ID);
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 65;
				this.match(MyGrammarParser.T__12);
				this.state = 66;
				this.type_();
				this.state = 67;
				this.match(MyGrammarParser.ID);
				}
				}
				this.state = 73;
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
			this.state = 74;
			this.match(MyGrammarParser.T__13);
			this.state = 75;
			this.match(MyGrammarParser.T__5);
			this.state = 76;
			this.booleanExpression();
			this.state = 77;
			this.match(MyGrammarParser.T__6);
			this.state = 78;
			this.match(MyGrammarParser.T__7);
			this.state = 82;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===21) {
				{
				{
				this.state = 79;
				this.statement();
				}
				}
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 85;
			this.match(MyGrammarParser.T__8);
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
		this.enterRule(localctx, 14, MyGrammarParser.RULE_booleanExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 87;
			this.booleanTerm();
			this.state = 92;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15 || _la===16) {
				{
				{
				this.state = 88;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 89;
				this.booleanTerm();
				}
				}
				this.state = 94;
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
		this.enterRule(localctx, 16, MyGrammarParser.RULE_booleanTerm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 95;
			this.booleanFactor();
			this.state = 98;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 96;
				this.match(MyGrammarParser.T__16);
				this.state = 97;
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
		this.enterRule(localctx, 18, MyGrammarParser.RULE_booleanFactor);
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 100;
				this.match(MyGrammarParser.BooleanValue);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 101;
				this.match(MyGrammarParser.ID);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 102;
				this.match(MyGrammarParser.T__5);
				this.state = 103;
				this.booleanExpression();
				this.state = 104;
				this.match(MyGrammarParser.T__6);
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
		this.enterRule(localctx, 20, MyGrammarParser.RULE_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
			this.match(MyGrammarParser.ID);
			this.state = 109;
			this.match(MyGrammarParser.T__1);
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
		this.enterRule(localctx, 22, MyGrammarParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 111;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1835008) !== 0))) {
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

	public static readonly _serializedATN: number[] = [4,1,22,114,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,1,0,1,0,1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,1,1,
	1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,3,2,46,8,2,1,2,1,2,1,2,5,2,51,8,2,
	10,2,12,2,54,9,2,1,2,1,2,1,3,1,3,3,3,60,8,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,
	1,5,5,5,70,8,5,10,5,12,5,73,9,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,81,8,6,10,6,
	12,6,84,9,6,1,6,1,6,1,7,1,7,1,7,5,7,91,8,7,10,7,12,7,94,9,7,1,8,1,8,1,8,
	3,8,99,8,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,107,8,9,1,10,1,10,1,10,1,11,1,11,
	1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,4,1,0,3,4,1,0,10,12,1,0,15,
	16,1,0,18,20,113,0,29,1,0,0,0,2,34,1,0,0,0,4,40,1,0,0,0,6,59,1,0,0,0,8,
	61,1,0,0,0,10,63,1,0,0,0,12,74,1,0,0,0,14,87,1,0,0,0,16,95,1,0,0,0,18,106,
	1,0,0,0,20,108,1,0,0,0,22,111,1,0,0,0,24,28,3,2,1,0,25,28,3,4,2,0,26,28,
	3,12,6,0,27,24,1,0,0,0,27,25,1,0,0,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,
	1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,0,0,1,33,1,1,
	0,0,0,34,35,3,6,3,0,35,36,5,21,0,0,36,37,5,1,0,0,37,38,3,22,11,0,38,39,
	5,2,0,0,39,3,1,0,0,0,40,41,7,0,0,0,41,42,5,5,0,0,42,43,5,21,0,0,43,45,5,
	6,0,0,44,46,3,10,5,0,45,44,1,0,0,0,45,46,1,0,0,0,46,47,1,0,0,0,47,48,5,
	7,0,0,48,52,5,8,0,0,49,51,3,20,10,0,50,49,1,0,0,0,51,54,1,0,0,0,52,50,1,
	0,0,0,52,53,1,0,0,0,53,55,1,0,0,0,54,52,1,0,0,0,55,56,5,9,0,0,56,5,1,0,
	0,0,57,60,3,8,4,0,58,60,5,21,0,0,59,57,1,0,0,0,59,58,1,0,0,0,60,7,1,0,0,
	0,61,62,7,1,0,0,62,9,1,0,0,0,63,64,3,6,3,0,64,71,5,21,0,0,65,66,5,13,0,
	0,66,67,3,6,3,0,67,68,5,21,0,0,68,70,1,0,0,0,69,65,1,0,0,0,70,73,1,0,0,
	0,71,69,1,0,0,0,71,72,1,0,0,0,72,11,1,0,0,0,73,71,1,0,0,0,74,75,5,14,0,
	0,75,76,5,6,0,0,76,77,3,14,7,0,77,78,5,7,0,0,78,82,5,8,0,0,79,81,3,20,10,
	0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,85,1,0,0,0,
	84,82,1,0,0,0,85,86,5,9,0,0,86,13,1,0,0,0,87,92,3,16,8,0,88,89,7,2,0,0,
	89,91,3,16,8,0,90,88,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,
	93,15,1,0,0,0,94,92,1,0,0,0,95,98,3,18,9,0,96,97,5,17,0,0,97,99,3,18,9,
	0,98,96,1,0,0,0,98,99,1,0,0,0,99,17,1,0,0,0,100,107,5,19,0,0,101,107,5,
	21,0,0,102,103,5,6,0,0,103,104,3,14,7,0,104,105,5,7,0,0,105,107,1,0,0,0,
	106,100,1,0,0,0,106,101,1,0,0,0,106,102,1,0,0,0,107,19,1,0,0,0,108,109,
	5,21,0,0,109,110,5,2,0,0,110,21,1,0,0,0,111,112,7,3,0,0,112,23,1,0,0,0,
	10,27,29,45,52,59,71,82,92,98,106];

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
