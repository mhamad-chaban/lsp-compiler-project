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
	public static readonly Value = 18;
	public static readonly NumberValue = 19;
	public static readonly BooleanValue = 20;
	public static readonly StringValue = 21;
	public static readonly ID = 22;
	public static readonly WS = 23;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_variableStructure = 0;
	public static readonly RULE_functionStructure = 1;
	public static readonly RULE_type = 2;
	public static readonly RULE_defaultType = 3;
	public static readonly RULE_functionParameters = 4;
	public static readonly RULE_ifStructure = 5;
	public static readonly RULE_booleanExpression = 6;
	public static readonly RULE_booleanTerm = 7;
	public static readonly RULE_booleanFactor = 8;
	public static readonly RULE_statement = 9;
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
                                                             "Value", "NumberValue", 
                                                             "BooleanValue", 
                                                             "StringValue", 
                                                             "ID", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"variableStructure", "functionStructure", "type", "defaultType", "functionParameters", 
		"ifStructure", "booleanExpression", "booleanTerm", "booleanFactor", "statement",
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
	public variableStructure(): VariableStructureContext {
		let localctx: VariableStructureContext = new VariableStructureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MyGrammarParser.RULE_variableStructure);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 20;
			this.type_();
			this.state = 21;
			this.match(MyGrammarParser.ID);
			this.state = 22;
			this.match(MyGrammarParser.T__0);
			this.state = 23;
			this.match(MyGrammarParser.Value);
			this.state = 24;
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
		this.enterRule(localctx, 2, MyGrammarParser.RULE_functionStructure);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 26;
			_la = this._input.LA(1);
			if(!(_la===3 || _la===4)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 27;
			this.match(MyGrammarParser.T__4);
			this.state = 28;
			this.match(MyGrammarParser.ID);
			this.state = 29;
			this.match(MyGrammarParser.T__5);
			this.state = 31;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4201472) !== 0)) {
				{
				this.state = 30;
				this.functionParameters();
				}
			}

			this.state = 33;
			this.match(MyGrammarParser.T__6);
			this.state = 34;
			this.match(MyGrammarParser.T__7);
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 35;
				this.statement();
				}
				}
				this.state = 40;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 41;
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
		this.enterRule(localctx, 4, MyGrammarParser.RULE_type);
		try {
			this.state = 45;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 11:
			case 12:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 43;
				this.defaultType();
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 44;
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
		this.enterRule(localctx, 6, MyGrammarParser.RULE_defaultType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 47;
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
		this.enterRule(localctx, 8, MyGrammarParser.RULE_functionParameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this.type_();
			this.state = 50;
			this.match(MyGrammarParser.ID);
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 51;
				this.match(MyGrammarParser.T__12);
				this.state = 52;
				this.type_();
				this.state = 53;
				this.match(MyGrammarParser.ID);
				}
				}
				this.state = 59;
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
		this.enterRule(localctx, 10, MyGrammarParser.RULE_ifStructure);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 60;
			this.match(MyGrammarParser.T__13);
			this.state = 61;
			this.match(MyGrammarParser.T__5);
			this.state = 62;
			this.booleanExpression();
			this.state = 63;
			this.match(MyGrammarParser.T__6);
			this.state = 64;
			this.match(MyGrammarParser.T__7);
			this.state = 68;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===22) {
				{
				{
				this.state = 65;
				this.statement();
				}
				}
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 71;
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
		this.enterRule(localctx, 12, MyGrammarParser.RULE_booleanExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			this.booleanTerm();
			this.state = 78;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===15 || _la===16) {
				{
				{
				this.state = 74;
				_la = this._input.LA(1);
				if(!(_la===15 || _la===16)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 75;
				this.booleanTerm();
				}
				}
				this.state = 80;
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
		this.enterRule(localctx, 14, MyGrammarParser.RULE_booleanTerm);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 81;
			this.booleanFactor();
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 82;
				this.match(MyGrammarParser.T__16);
				this.state = 83;
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
		this.enterRule(localctx, 16, MyGrammarParser.RULE_booleanFactor);
		try {
			this.state = 92;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 86;
				this.match(MyGrammarParser.BooleanValue);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 87;
				this.match(MyGrammarParser.ID);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 88;
				this.match(MyGrammarParser.T__5);
				this.state = 89;
				this.booleanExpression();
				this.state = 90;
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
		this.enterRule(localctx, 18, MyGrammarParser.RULE_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 94;
			this.match(MyGrammarParser.ID);
			this.state = 95;
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

	public static readonly _serializedATN: number[] = [4,1,23,98,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,
	0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,32,8,1,1,1,1,1,1,1,5,1,37,
	8,1,10,1,12,1,40,9,1,1,1,1,1,1,2,1,2,3,2,46,8,2,1,3,1,3,1,4,1,4,1,4,1,4,
	1,4,1,4,5,4,56,8,4,10,4,12,4,59,9,4,1,5,1,5,1,5,1,5,1,5,1,5,5,5,67,8,5,
	10,5,12,5,70,9,5,1,5,1,5,1,6,1,6,1,6,5,6,77,8,6,10,6,12,6,80,9,6,1,7,1,
	7,1,7,3,7,85,8,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,93,8,8,1,9,1,9,1,9,1,9,0,0,
	10,0,2,4,6,8,10,12,14,16,18,0,3,1,0,3,4,1,0,10,12,1,0,15,16,96,0,20,1,0,
	0,0,2,26,1,0,0,0,4,45,1,0,0,0,6,47,1,0,0,0,8,49,1,0,0,0,10,60,1,0,0,0,12,
	73,1,0,0,0,14,81,1,0,0,0,16,92,1,0,0,0,18,94,1,0,0,0,20,21,3,4,2,0,21,22,
	5,22,0,0,22,23,5,1,0,0,23,24,5,18,0,0,24,25,5,2,0,0,25,1,1,0,0,0,26,27,
	7,0,0,0,27,28,5,5,0,0,28,29,5,22,0,0,29,31,5,6,0,0,30,32,3,8,4,0,31,30,
	1,0,0,0,31,32,1,0,0,0,32,33,1,0,0,0,33,34,5,7,0,0,34,38,5,8,0,0,35,37,3,
	18,9,0,36,35,1,0,0,0,37,40,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,39,41,1,
	0,0,0,40,38,1,0,0,0,41,42,5,9,0,0,42,3,1,0,0,0,43,46,3,6,3,0,44,46,5,22,
	0,0,45,43,1,0,0,0,45,44,1,0,0,0,46,5,1,0,0,0,47,48,7,1,0,0,48,7,1,0,0,0,
	49,50,3,4,2,0,50,57,5,22,0,0,51,52,5,13,0,0,52,53,3,4,2,0,53,54,5,22,0,
	0,54,56,1,0,0,0,55,51,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,
	58,9,1,0,0,0,59,57,1,0,0,0,60,61,5,14,0,0,61,62,5,6,0,0,62,63,3,12,6,0,
	63,64,5,7,0,0,64,68,5,8,0,0,65,67,3,18,9,0,66,65,1,0,0,0,67,70,1,0,0,0,
	68,66,1,0,0,0,68,69,1,0,0,0,69,71,1,0,0,0,70,68,1,0,0,0,71,72,5,9,0,0,72,
	11,1,0,0,0,73,78,3,14,7,0,74,75,7,2,0,0,75,77,3,14,7,0,76,74,1,0,0,0,77,
	80,1,0,0,0,78,76,1,0,0,0,78,79,1,0,0,0,79,13,1,0,0,0,80,78,1,0,0,0,81,84,
	3,16,8,0,82,83,5,17,0,0,83,85,3,16,8,0,84,82,1,0,0,0,84,85,1,0,0,0,85,15,
	1,0,0,0,86,93,5,20,0,0,87,93,5,22,0,0,88,89,5,6,0,0,89,90,3,12,6,0,90,91,
	5,7,0,0,91,93,1,0,0,0,92,86,1,0,0,0,92,87,1,0,0,0,92,88,1,0,0,0,93,17,1,
	0,0,0,94,95,5,22,0,0,95,96,5,2,0,0,96,19,1,0,0,0,8,31,38,45,57,68,78,84,
	92];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarParser.__ATN) {
			MyGrammarParser.__ATN = new ATNDeserializer().deserialize(MyGrammarParser._serializedATN);
		}

		return MyGrammarParser.__ATN;
	}


	static DecisionsToDFA = MyGrammarParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

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
	public Value(): TerminalNode {
		return this.getToken(MyGrammarParser.Value, 0);
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
