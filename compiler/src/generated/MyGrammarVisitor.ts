// Generated from ./src/g4/MyGrammar.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { VariableStructureContext } from "./MyGrammarParser.js";
import { FunctionStructureContext } from "./MyGrammarParser.js";
import { TypeContext } from "./MyGrammarParser.js";
import { DefaultTypeContext } from "./MyGrammarParser.js";
import { FunctionParametersContext } from "./MyGrammarParser.js";
import { IfStructureContext } from "./MyGrammarParser.js";
import { BooleanExpressionContext } from "./MyGrammarParser.js";
import { BooleanTermContext } from "./MyGrammarParser.js";
import { BooleanFactorContext } from "./MyGrammarParser.js";
import { StatementContext } from "./MyGrammarParser.js";
import { ValueContext } from "./MyGrammarParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MyGrammarParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class MyGrammarVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `MyGrammarParser.variableStructure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableStructure?: (ctx: VariableStructureContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.functionStructure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionStructure?: (ctx: FunctionStructureContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.defaultType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultType?: (ctx: DefaultTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.functionParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParameters?: (ctx: FunctionParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.ifStructure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStructure?: (ctx: IfStructureContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanExpression?: (ctx: BooleanExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.booleanTerm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanTerm?: (ctx: BooleanTermContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.booleanFactor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanFactor?: (ctx: BooleanFactorContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `MyGrammarParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
}

