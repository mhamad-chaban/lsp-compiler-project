import MyGrammarParser from "../../generated/MyGrammarParser";
import MyGrammarVisitor from "../../generated/MyGrammarVisitor";

interface Diagnostic {
    message: string;
    line: number;
    column: number;
    severity: "error" | "warning";
}

export class VariableVisitor extends MyGrammarVisitor<void> {
    private diagnostics: Diagnostic[] = [];

    public getDiagnostics() {
        return this.diagnostics;
    }

    public visitVariableStructure(ctx: any) {
        const type = ctx.type().text;
        const valueCtx = ctx.value();

        // Example error: type mismatch
        if (type === 'number' && !(valueCtx instanceof MyGrammarParser)) {
            this.diagnostics.push({
                message: `Error: Type mismatch. Expected a number but got '${valueCtx.text}'.`,
                line: ctx.start.line,
                column: ctx.start.charPositionInLine,
                severity: 'error'
            });
        }
    }
}