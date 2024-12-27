import { Token } from "antlr4";
import { VariableStructureContext, ValueContext, IfStructureContext } from "../../../generated/MyGrammarParser.js";
import MyGrammarVisitor from "../../../generated/MyGrammarVisitor.js";
import { Diagnostic, diagnosticMessages, Severity } from "./diagnostic.js";

export class DiagnosticsVisitor extends MyGrammarVisitor<void> {
    private diagnostics: Diagnostic[] = [];

    public getDiagnostics(): Diagnostic[] {
        return this.diagnostics;
    }

    // Define the visitVariableStructure method as a property function
    public visitVariableStructure = (ctx: VariableStructureContext): void => {
        const type = ctx.type_().getText();
        
        const valueCtx = ctx.value();
        if (valueCtx) {
            const valueText = valueCtx.getText();

            // Example error: type mismatch
            if (type === 'number' && !this.isNumberValue(valueCtx)) {
                this.diagnostics.push(this.createDiagnostic(
                    diagnosticMessages.numberError.replace('${valueText}', valueText),
                    valueCtx.start,
                    valueText.length
                ));
            } else if (type === 'string' && !this.isStringValue(valueCtx)) {
                this.diagnostics.push(
                    this.createDiagnostic(
                        diagnosticMessages.stringError.replace('${valueText}', valueText),
                        valueCtx.start,
                        valueText.length
                    )
                );
            } else if (type === 'boolean' && !this.isBooleanValue(valueCtx)) {
                this.diagnostics.push(
                    this.createDiagnostic(
                        diagnosticMessages.booleanError.replace('${valueText}', valueText),
                        valueCtx.start,
                        valueText.length
                    )
                );
            }
    
            // Continue visiting other nodes            
            this.visitChildren(ctx);
        }  
    };

    private createDiagnostic(message: string, token: Token, length: number): Diagnostic {
        return {
            message,
            range: {
                start: { line: token.line - 1, character: token.column },
                end: { line: token.line - 1, character: token.column + length }
            },
            severity: Severity.Error,
            source: 'MyGrammar'
        };
    }

    private isNumberValue(valueCtx: ValueContext): boolean {
        const isNumber = valueCtx.NumberValue() !== null;
        return isNumber;
    }

    private isStringValue(valueCtx: ValueContext): boolean {
        const isString = valueCtx.StringValue() !== null;
        return isString;
    }

    private isBooleanValue(valueCtx: ValueContext): boolean {
        const isBoolean = valueCtx.BooleanValue() !== null;
        return isBoolean;
    }

    public visitIfStrucutre = (ctx: IfStructureContext): void => {
        
    }
}