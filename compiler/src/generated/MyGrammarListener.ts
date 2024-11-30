// Generated from ./src/g4/MyGrammar.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ClassDeclarationContext } from "./MyGrammarParser.js";
import { MemberDeclarationContext } from "./MyGrammarParser.js";
import { AttributeDeclarationContext } from "./MyGrammarParser.js";
import { MethodDeclarationContext } from "./MyGrammarParser.js";
import { TypeContext } from "./MyGrammarParser.js";
import { BuiltInTypeContext } from "./MyGrammarParser.js";
import { ParameterListContext } from "./MyGrammarParser.js";
import { StatementContext } from "./MyGrammarParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyGrammarParser`.
 */
export default class MyGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MyGrammarParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	enterClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.classDeclaration`.
	 * @param ctx the parse tree
	 */
	exitClassDeclaration?: (ctx: ClassDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.memberDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMemberDeclaration?: (ctx: MemberDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.attributeDeclaration`.
	 * @param ctx the parse tree
	 */
	enterAttributeDeclaration?: (ctx: AttributeDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.attributeDeclaration`.
	 * @param ctx the parse tree
	 */
	exitAttributeDeclaration?: (ctx: AttributeDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	enterMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.methodDeclaration`.
	 * @param ctx the parse tree
	 */
	exitMethodDeclaration?: (ctx: MethodDeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.builtInType`.
	 * @param ctx the parse tree
	 */
	enterBuiltInType?: (ctx: BuiltInTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.builtInType`.
	 * @param ctx the parse tree
	 */
	exitBuiltInType?: (ctx: BuiltInTypeContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
}

