import MyGrammarParser, { VariableStructureContext } from "../../generated/MyGrammarParser.js";
import NumberValueContext from "../../generated/MyGrammarParser.js";
import MyGrammarVisitor from "../../generated/MyGrammarVisitor.js";

export interface Diagnostic {
    message: string;
    line: number;
    severity: "error" | "warning";
}

export class VariableVisitor extends MyGrammarVisitor<void> {
    private diagnostics: Diagnostic[] = [];

    public getDiagnostics(): Diagnostic[] {
        return this.diagnostics;
    }

    // Define the visitVariableStructure method as a property function
    public visitVariableStructure = (ctx: VariableStructureContext): void => {
        const type = ctx.type_().getText();
        const valueCtx = ctx.Value();

        // Example error: type mismatch
        if (type === 'number' && !(valueCtx instanceof NumberValueContext)) {
            this.diagnostics.push({
                message: `Error: Type mismatch. Expected a number but got '${valueCtx.getText()}'.`,
                line: ctx.start.line,
                severity: 'error'
            });
        }

        // Continue visiting other nodes
        this.visitChildren(ctx);
    };
}