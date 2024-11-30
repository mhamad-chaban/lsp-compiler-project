// Generated from ./src/g4/MyGrammar.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ClassDeclarationContext } from "./MyGrammarParser.js";
import { MemberDeclarationContext } from "./MyGrammarParser.js";
import { AttributeDeclarationContext } from "./MyGrammarParser.js";
import { MethodDeclarationContext } from "./MyGrammarParser.js";
import { TypeContext } from "./MyGrammarParser.js";
import { BuiltInTypeContext } from "./MyGrammarParser.js";
import { ParameterListContext } from "./MyGrammarParser.js";
import { StatementContext } from "./MyGrammarParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MyGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MyGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MyGrammarParser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.memberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberDeclaration?: (ctx: MemberDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.attributeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeDeclaration?: (ctx: AttributeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.builtInType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBuiltInType?: (ctx: BuiltInTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
}

