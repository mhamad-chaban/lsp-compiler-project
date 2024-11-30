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
	public static readonly ID = 14;
	public static readonly WS = 15;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_classDeclaration = 0;
	public static readonly RULE_memberDeclaration = 1;
	public static readonly RULE_attributeDeclaration = 2;
	public static readonly RULE_methodDeclaration = 3;
	public static readonly RULE_type = 4;
	public static readonly RULE_builtInType = 5;
	public static readonly RULE_parameterList = 6;
	public static readonly RULE_statement = 7;
	public static readonly literalNames: (string | null)[] = [ null, "'public'", 
                                                            "'class'", "'{'", 
                                                            "'}'", "'private'", 
                                                            "'final'", "';'", 
                                                            "'('", "')'", 
                                                            "'int'", "'double'", 
                                                            "'void'", "','" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "ID", "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"classDeclaration", "memberDeclaration", "attributeDeclaration", "methodDeclaration", 
		"type", "builtInType", "parameterList", "statement",
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
	public classDeclaration(): ClassDeclarationContext {
		let localctx: ClassDeclarationContext = new ClassDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, MyGrammarParser.RULE_classDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 16;
			this.match(MyGrammarParser.T__0);
			this.state = 17;
			this.match(MyGrammarParser.T__1);
			this.state = 18;
			this.match(MyGrammarParser.ID);
			this.state = 19;
			this.match(MyGrammarParser.T__2);
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1 || _la===5) {
				{
				{
				this.state = 20;
				this.memberDeclaration();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 26;
			this.match(MyGrammarParser.T__3);
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
	public memberDeclaration(): MemberDeclarationContext {
		let localctx: MemberDeclarationContext = new MemberDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, MyGrammarParser.RULE_memberDeclaration);
		try {
			this.state = 30;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 28;
				this.attributeDeclaration();
				}
				break;
			case 1:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 29;
				this.methodDeclaration();
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
	public attributeDeclaration(): AttributeDeclarationContext {
		let localctx: AttributeDeclarationContext = new AttributeDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, MyGrammarParser.RULE_attributeDeclaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 32;
			this.match(MyGrammarParser.T__4);
			this.state = 33;
			this.match(MyGrammarParser.T__5);
			this.state = 34;
			this.type_();
			this.state = 35;
			this.match(MyGrammarParser.ID);
			this.state = 36;
			this.match(MyGrammarParser.T__6);
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
	public methodDeclaration(): MethodDeclarationContext {
		let localctx: MethodDeclarationContext = new MethodDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, MyGrammarParser.RULE_methodDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 38;
			this.match(MyGrammarParser.T__0);
			this.state = 39;
			this.type_();
			this.state = 40;
			this.match(MyGrammarParser.ID);
			this.state = 41;
			this.match(MyGrammarParser.T__7);
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 23552) !== 0)) {
				{
				this.state = 42;
				this.parameterList();
				}
			}

			this.state = 45;
			this.match(MyGrammarParser.T__8);
			this.state = 46;
			this.match(MyGrammarParser.T__2);
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===14) {
				{
				{
				this.state = 47;
				this.statement();
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 53;
			this.match(MyGrammarParser.T__3);
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
		this.enterRule(localctx, 8, MyGrammarParser.RULE_type);
		try {
			this.state = 57;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
			case 11:
			case 12:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 55;
				this.builtInType();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 56;
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
	public builtInType(): BuiltInTypeContext {
		let localctx: BuiltInTypeContext = new BuiltInTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, MyGrammarParser.RULE_builtInType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 59;
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
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, MyGrammarParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 61;
			this.type_();
			this.state = 62;
			this.match(MyGrammarParser.ID);
			this.state = 69;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===13) {
				{
				{
				this.state = 63;
				this.match(MyGrammarParser.T__12);
				this.state = 64;
				this.type_();
				this.state = 65;
				this.match(MyGrammarParser.ID);
				}
				}
				this.state = 71;
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
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, MyGrammarParser.RULE_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 72;
			this.match(MyGrammarParser.ID);
			this.state = 73;
			this.match(MyGrammarParser.T__6);
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

	public static readonly _serializedATN: number[] = [4,1,15,76,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,
	0,5,0,22,8,0,10,0,12,0,25,9,0,1,0,1,0,1,1,1,1,3,1,31,8,1,1,2,1,2,1,2,1,
	2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,44,8,3,1,3,1,3,1,3,5,3,49,8,3,10,3,12,
	3,52,9,3,1,3,1,3,1,4,1,4,3,4,58,8,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,
	68,8,6,10,6,12,6,71,9,6,1,7,1,7,1,7,1,7,0,0,8,0,2,4,6,8,10,12,14,0,1,1,
	0,10,12,73,0,16,1,0,0,0,2,30,1,0,0,0,4,32,1,0,0,0,6,38,1,0,0,0,8,57,1,0,
	0,0,10,59,1,0,0,0,12,61,1,0,0,0,14,72,1,0,0,0,16,17,5,1,0,0,17,18,5,2,0,
	0,18,19,5,14,0,0,19,23,5,3,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,25,1,0,0,
	0,23,21,1,0,0,0,23,24,1,0,0,0,24,26,1,0,0,0,25,23,1,0,0,0,26,27,5,4,0,0,
	27,1,1,0,0,0,28,31,3,4,2,0,29,31,3,6,3,0,30,28,1,0,0,0,30,29,1,0,0,0,31,
	3,1,0,0,0,32,33,5,5,0,0,33,34,5,6,0,0,34,35,3,8,4,0,35,36,5,14,0,0,36,37,
	5,7,0,0,37,5,1,0,0,0,38,39,5,1,0,0,39,40,3,8,4,0,40,41,5,14,0,0,41,43,5,
	8,0,0,42,44,3,12,6,0,43,42,1,0,0,0,43,44,1,0,0,0,44,45,1,0,0,0,45,46,5,
	9,0,0,46,50,5,3,0,0,47,49,3,14,7,0,48,47,1,0,0,0,49,52,1,0,0,0,50,48,1,
	0,0,0,50,51,1,0,0,0,51,53,1,0,0,0,52,50,1,0,0,0,53,54,5,4,0,0,54,7,1,0,
	0,0,55,58,3,10,5,0,56,58,5,14,0,0,57,55,1,0,0,0,57,56,1,0,0,0,58,9,1,0,
	0,0,59,60,7,0,0,0,60,11,1,0,0,0,61,62,3,8,4,0,62,69,5,14,0,0,63,64,5,13,
	0,0,64,65,3,8,4,0,65,66,5,14,0,0,66,68,1,0,0,0,67,63,1,0,0,0,68,71,1,0,
	0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,13,1,0,0,0,71,69,1,0,0,0,72,73,5,14,
	0,0,73,74,5,7,0,0,74,15,1,0,0,0,6,23,30,43,50,57,69];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyGrammarParser.__ATN) {
			MyGrammarParser.__ATN = new ATNDeserializer().deserialize(MyGrammarParser._serializedATN);
		}

		return MyGrammarParser.__ATN;
	}


	static DecisionsToDFA = MyGrammarParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ClassDeclarationContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(MyGrammarParser.ID, 0);
	}
	public memberDeclaration_list(): MemberDeclarationContext[] {
		return this.getTypedRuleContexts(MemberDeclarationContext) as MemberDeclarationContext[];
	}
	public memberDeclaration(i: number): MemberDeclarationContext {
		return this.getTypedRuleContext(MemberDeclarationContext, i) as MemberDeclarationContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_classDeclaration;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterClassDeclaration) {
	 		listener.enterClassDeclaration(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitClassDeclaration) {
	 		listener.exitClassDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitClassDeclaration) {
			return visitor.visitClassDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberDeclarationContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attributeDeclaration(): AttributeDeclarationContext {
		return this.getTypedRuleContext(AttributeDeclarationContext, 0) as AttributeDeclarationContext;
	}
	public methodDeclaration(): MethodDeclarationContext {
		return this.getTypedRuleContext(MethodDeclarationContext, 0) as MethodDeclarationContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_memberDeclaration;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterMemberDeclaration) {
	 		listener.enterMemberDeclaration(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitMemberDeclaration) {
	 		listener.exitMemberDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitMemberDeclaration) {
			return visitor.visitMemberDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeDeclarationContext extends ParserRuleContext {
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
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_attributeDeclaration;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterAttributeDeclaration) {
	 		listener.enterAttributeDeclaration(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitAttributeDeclaration) {
	 		listener.exitAttributeDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitAttributeDeclaration) {
			return visitor.visitAttributeDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MethodDeclarationContext extends ParserRuleContext {
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
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_methodDeclaration;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterMethodDeclaration) {
	 		listener.enterMethodDeclaration(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitMethodDeclaration) {
	 		listener.exitMethodDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitMethodDeclaration) {
			return visitor.visitMethodDeclaration(this);
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
	public builtInType(): BuiltInTypeContext {
		return this.getTypedRuleContext(BuiltInTypeContext, 0) as BuiltInTypeContext;
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


export class BuiltInTypeContext extends ParserRuleContext {
	constructor(parser?: MyGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return MyGrammarParser.RULE_builtInType;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterBuiltInType) {
	 		listener.enterBuiltInType(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitBuiltInType) {
	 		listener.exitBuiltInType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitBuiltInType) {
			return visitor.visitBuiltInType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
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
    	return MyGrammarParser.RULE_parameterList;
	}
	public enterRule(listener: MyGrammarListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: MyGrammarListener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyGrammarVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
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
