import { Token, ErrorListener, RecognitionException, Recognizer } from "antlr4";
import { Diagnostic, Severity } from "./Diagnostic";

export class CustomErrorListener implements ErrorListener<Token> {
    private diagnostics: Diagnostic[] = [];

    public getDiagnostics(): Diagnostic[] {
        return this.diagnostics;
    }

    syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
        this.diagnostics.push({
            message: msg,
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
    