import { FunctionStructureContext, IfStructureContext, ProgramContext, VariableStructureContext } from "../../../generated/MyGrammarParser";
import MyGrammarVisitor from "../../../generated/MyGrammarVisitor";
import { CompletionItem, CompletionItemKind, functionCompletions, ifCompletions, variableTypeCompletions } from "./completionItem";
import { log } from "console";
import { Position } from "./position";
import { CommonTokenStream, TerminalNode } from "antlr4";

export class CompletionVisitor extends MyGrammarVisitor<void> {
    private completions: CompletionItem[] = [];
    private cursorPosition: Position = { line: 0, character: 0 };

    public getCompletions(): CompletionItem[] {
        return this.completions;
    }

    public setCursorPosition(position: Position): void {
        this.cursorPosition = position;
    }

    // Visit root rule program
    public visitProgram = (ctx: ProgramContext): void => {
        this.deleteNoneIdentifierCompletions();
        this.visitChildren(ctx);
    }

    // Visit variable structure rule and provide completion items based on the context
    public visitVariableStructure = (ctx: VariableStructureContext): void => {
        this.completions.push(...variableTypeCompletions);
        
        // completion item for the identifier
        const identifier = ctx.ID();
        if (identifier && this.isIdentifierFinalized(ctx)) {
            this.completions.push({
                label: identifier.getText(),
                kind: CompletionItemKind.Variable,
                data: identifier.getText()
            });
        }
    }

    public visitIfStructure = (ctx: IfStructureContext): void => {
        this.completions.push(...ifCompletions);
    }

    public visitFunctionStructure = (ctx: FunctionStructureContext): void => {
        this.completions.push(...functionCompletions);
    }

    deleteNoneIdentifierCompletions = (): void => {
        this.completions = this.completions.filter((completion) => completion.kind !== CompletionItemKind.Variable);
    }

    private isIdentifierFinalized(ctx: VariableStructureContext): boolean {
        const identifier = ctx.ID();
    
        if (!identifier) return false;
    
        const tokenStream = ctx.parser?.getTokenStream();
        const currentIndex = identifier.symbol.tokenIndex;
    
        // Check next token for finalization
        const nextToken = tokenStream?.get(currentIndex + 1);
    
        if (nextToken) {
            // Finalized if the next token is a valid delimiter (e.g., '=')
            const finalizedSymbols = ['=', ';', ',', ')', '{', '}'];
            return finalizedSymbols.includes(nextToken.text || '');
        }
    
        // Not finalized if there's no next token
        return false;
    }
    
    
}
