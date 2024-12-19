import { VariableStructureContext, ValueContext, IfStructureContext } from "../../generated/MyGrammarParser.js";
import MyGrammarVisitor from "../../generated/MyGrammarVisitor.js";


export interface Diagnostic {
    message: string;
    line: number;
    severity: "error" | "warning";
}

export class CustomVisitor extends MyGrammarVisitor<void> {
    private diagnostics: Diagnostic[] = [];

    public getDiagnostics(): Diagnostic[] {
        return this.diagnostics;
    }

    // Define the visitVariableStructure method as a property function
    public visitVariableStructure = (ctx: VariableStructureContext): void => {
        const type = ctx.type_().getText();
        console.log(`Type: ${type}`);
        
        const valueCtx = ctx.value();
        console.log(`Value: ${valueCtx}`);        
        const valueText = valueCtx.getText();

        // Example error: type mismatch
        if (type === 'number' && !this.isNumberValue(valueCtx)) {
            this.diagnostics.push({
                message: `Error: Type mismatch. Expected a number but got '${valueText}'.`,
                line: ctx.start.line,
                severity: 'error'
            });
        } else if (type === 'string' && !this.isStringValue(valueCtx)) {
            this.diagnostics.push({
                message: `Error: Type mismatch. Expected a string but got '${valueText}'.`,
                line: ctx.start.line,
                severity: 'error'
            });
        } else if (type === 'boolean' && !this.isBooleanValue(valueCtx)) {
            this.diagnostics.push({
                message: `Error: Type mismatch. Expected a boolean but got '${valueText}'.`,
                line: ctx.start.line,
                severity: 'error'
            });
        }

        // Continue visiting other nodes
        console.log('Visiting children...');
        
        this.visitChildren(ctx);
    };

    private isNumberValue(valueCtx: ValueContext): boolean {
        console.log(`NumberValue: ${valueCtx.NumberValue()}`);

        const isNumber = valueCtx.NumberValue() !== null;
        console.log(`Checking if valueCtx is a number: ${isNumber}`);
        return isNumber;
    }

    private isStringValue(valueCtx: ValueContext): boolean {
        console.log('StringValue: ', valueCtx.StringValue());

        const isString = valueCtx.StringValue() !== null;
        console.log(`Checking if valueCtx is a string: ${isString}`);
        return isString;
    }

    private isBooleanValue(valueCtx: ValueContext): boolean {
        console.log('BooleanValue: ', valueCtx.BooleanValue());

        const isBoolean = valueCtx.BooleanValue() !== null;
        console.log(`Checking if valueCtx is a boolean: ${isBoolean}`);
        return isBoolean;
    }

    public visitIfStrucutre = (ctx: IfStructureContext): void => {
        
    }
}