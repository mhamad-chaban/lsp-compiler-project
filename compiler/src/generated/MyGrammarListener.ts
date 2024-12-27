// Generated from ./src/g4/MyGrammar.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./MyGrammarParser.js";
import { VariableStructureContext } from "./MyGrammarParser.js";
import { FunctionStructureContext } from "./MyGrammarParser.js";
import { TypeContext } from "./MyGrammarParser.js";
import { DefaultTypeContext } from "./MyGrammarParser.js";
import { FunctionParametersContext } from "./MyGrammarParser.js";
import { IfStructureContext } from "./MyGrammarParser.js";
import { WhileStructureContext } from "./MyGrammarParser.js";
import { BooleanExpressionContext } from "./MyGrammarParser.js";
import { BooleanTermContext } from "./MyGrammarParser.js";
import { BooleanFactorContext } from "./MyGrammarParser.js";
import { StatementContext } from "./MyGrammarParser.js";
import { ValueContext } from "./MyGrammarParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyGrammarParser`.
 */
export default class MyGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `MyGrammarParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.variableStructure`.
	 * @param ctx the parse tree
	 */
	enterVariableStructure?: (ctx: VariableStructureContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.variableStructure`.
	 * @param ctx the parse tree
	 */
	exitVariableStructure?: (ctx: VariableStructureContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.functionStructure`.
	 * @param ctx the parse tree
	 */
	enterFunctionStructure?: (ctx: FunctionStructureContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.functionStructure`.
	 * @param ctx the parse tree
	 */
	exitFunctionStructure?: (ctx: FunctionStructureContext) => void;
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
	 * Enter a parse tree produced by `MyGrammarParser.defaultType`.
	 * @param ctx the parse tree
	 */
	enterDefaultType?: (ctx: DefaultTypeContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.defaultType`.
	 * @param ctx the parse tree
	 */
	exitDefaultType?: (ctx: DefaultTypeContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameters?: (ctx: FunctionParametersContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.functionParameters`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameters?: (ctx: FunctionParametersContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.ifStructure`.
	 * @param ctx the parse tree
	 */
	enterIfStructure?: (ctx: IfStructureContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.ifStructure`.
	 * @param ctx the parse tree
	 */
	exitIfStructure?: (ctx: IfStructureContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.whileStructure`.
	 * @param ctx the parse tree
	 */
	enterWhileStructure?: (ctx: WhileStructureContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.whileStructure`.
	 * @param ctx the parse tree
	 */
	exitWhileStructure?: (ctx: WhileStructureContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	enterBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.booleanExpression`.
	 * @param ctx the parse tree
	 */
	exitBooleanExpression?: (ctx: BooleanExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.booleanTerm`.
	 * @param ctx the parse tree
	 */
	enterBooleanTerm?: (ctx: BooleanTermContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.booleanTerm`.
	 * @param ctx the parse tree
	 */
	exitBooleanTerm?: (ctx: BooleanTermContext) => void;
	/**
	 * Enter a parse tree produced by `MyGrammarParser.booleanFactor`.
	 * @param ctx the parse tree
	 */
	enterBooleanFactor?: (ctx: BooleanFactorContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.booleanFactor`.
	 * @param ctx the parse tree
	 */
	exitBooleanFactor?: (ctx: BooleanFactorContext) => void;
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
	/**
	 * Enter a parse tree produced by `MyGrammarParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `MyGrammarParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
}

