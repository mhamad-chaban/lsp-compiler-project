import { Token, ErrorListener, RecognitionException, Recognizer } from "antlr4";
import { Diagnostic, Severity } from "./Diagnostic";

export class CustomErrorListener implements ErrorListener<Token> {
    private diagnostics: Diagnostic[] = [];

    public getDiagnostics(): Diagnostic[] {
        return this.diagnostics;
    }

    syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
        let customMsg = msg;

        if (e) {
            const parser = recognizer as any;
            const expectedTokens = parser.getExpectedTokens();
            const expectedTokensString = expectedTokens.toString(parser.literalNames, parser.symbolicNames);

            if (expectedTokensString.includes("ID")) {
                customMsg = "Error: Incomplete statement. Expected an identifier.";
            } else if (expectedTokensString.includes("=")) {
                customMsg = "Error: Incomplete statement. Expected '='.";
            } else if (expectedTokensString.includes("NumberValue") || expectedTokensString.includes("BooleanValue") || expectedTokensString.includes("StringValue")) {
                customMsg = "Error: Incomplete statement. Expected a value.";
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
}
    