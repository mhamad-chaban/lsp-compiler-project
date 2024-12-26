import { CharStream } from "antlr4";
import MyGrammarLexer from "../../../generated/MyGrammarLexer";
import { ProgramContext, VariableStructureContext } from "../../../generated/MyGrammarParser";
import MyGrammarVisitor from "../../../generated/MyGrammarVisitor";
import { CompletionItem, CompletionItemKind, defaultCompletionList, variableCompletions } from "./completionItem";
import { log } from "console";

export class CompletionVisitor extends MyGrammarVisitor<void> {
    private completions: CompletionItem[] = []; 

    public getCompletions(): CompletionItem[] {
        return this.completions;
    }

    // Visit root rule program
    public visitProgram = (ctx: ProgramContext): void => {
        this.deleteNoneIdentifierCompletions();
        this.visitChildren(ctx);
    }

    // Visit variable structure rule and provide completion items based on the context
    public visitVariableStructure = (ctx: VariableStructureContext): void => {
        this.completions.push(...variableCompletions);
        // completion item for the identifier
        const identifier = ctx.ID();
        log('in variable structure');

        if (identifier) {
            this.completions.push({
                label: identifier.getText(),
                kind: CompletionItemKind.Identifier,
                data: identifier.getText()
            });
        }
    }

    deleteNoneIdentifierCompletions = (): void => {
        this.completions = this.completions.filter((completion) => completion.kind !== CompletionItemKind.Identifier);
    }
}
