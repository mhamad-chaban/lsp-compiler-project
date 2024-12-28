import { Token, ErrorListener, RecognitionException, Recognizer, IntervalSet } from "antlr4";
import { Diagnostic, Severity } from "./diagnostic/diagnostic";
import { log } from "console";
import MyGrammarParser from "../../generated/MyGrammarParser";
import MyGrammarLexer from "../../generated/MyGrammarLexer";

export class CustomErrorListener implements ErrorListener<Token> {
    private diagnostics: Diagnostic[] = [];

    public getDiagnostics(): Diagnostic[] {
        return this.diagnostics;
    }

    syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
        let customMsg = msg;

        if (e) {
            const parser = recognizer as any;
            const expectedTokens: IntervalSet = parser.getExpectedTokens();

            log("expected tokens: " + expectedTokens.toString(parser.literalNames, parser.symbolicNames));

            const ruleIndex = parser._ctx.ruleIndex;
            const ruleName = parser.ruleNames[ruleIndex];

            log("rule name: " + ruleName);

            if (ruleIndex === MyGrammarParser.RULE_variableStructure) {
                customMsg = this.variableStructureErrors(expectedTokens);
            } else if (ruleIndex === MyGrammarParser.RULE_value) {
                customMsg = this.valueErrors(expectedTokens);
            } else if (ruleIndex === MyGrammarParser.RULE_booleanFactor) {
                customMsg = this.booleanFactorErrors();
            } else if (ruleIndex === MyGrammarParser.RULE_functionParameters) {
                customMsg = this.parameterErrors();
            } else if (ruleIndex === MyGrammarParser.RULE_functionDeclarationStructure) {
                customMsg = this.functionStructureErrors(expectedTokens);
            }
        }

        this.diagnostics.push({
            message: customMsg,
            range: {
                start: {
                    line: line - 1,
                    character: column
                },
                end: {
                    line: line - 1,
                    character: column + offendingSymbol.stop - offendingSymbol.start
                }
            },
            severity: Severity.Error,
            source: 'MyGrammar'
        });
    }

    private variableStructureErrors(expectedTokens: IntervalSet): string {
        if (expectedTokens.contains(MyGrammarParser.ID)) {
            return "Incomplete statement. Expected an identifier.";
        } else if (expectedTokens.contains(MyGrammarParser.ASSIGN)) {
            return "Incomplete statement. Expected '='.";
        } else {
            return "invalid variable structure.";
        }
    }

    private valueErrors(expectedTokens: IntervalSet): string {
        if (expectedTokens.contains(MyGrammarParser.NumberValue)) {
            return "Invalid statement. Expected a number value.";
        } else if (expectedTokens.contains(MyGrammarParser.StringValue)) {
            return "Invalid statement. Expected a string value.";
        } else if (expectedTokens.contains(MyGrammarParser.BooleanValue)) {
            return "Invalid statement. Expected a boolean value.";
        } else {
            return "Invalid value structure.";
        }
    }

    private functionStructureErrors(expectedTokens: IntervalSet): string {
        log("expected tokens: " + expectedTokens.toString());
        if (expectedTokens.contains(MyGrammarParser.T__6)) { // T__6 is '{'
            return "Missing brackets in function body.";
        }
        return "Invalid function structure.";
    }

    private booleanFactorErrors(): string {
        return "Invalid condition. Expected a boolean value or expression.";
    }

    private parameterErrors(): string {
        return "Invalid parameter. Expected a type and an identifier.";
    }
}