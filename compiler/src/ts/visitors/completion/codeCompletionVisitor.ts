import { CharStream } from "antlr4";
import MyGrammarLexer from "../../../generated/MyGrammarLexer";
import { ProgramContext, VariableStructureContext } from "../../../generated/MyGrammarParser";
import MyGrammarVisitor from "../../../generated/MyGrammarVisitor";
import { CompletionItem, CompletionItemKind, defaultCompletionList } from "./completionItem";

export class CompletionVisitor extends MyGrammarVisitor<void> {
    private completions: CompletionItem[] = defaultCompletionList; 

    public getCompletions(): CompletionItem[] {
        return this.completions;
    }

    // Visit root rule program
    public visitProgram = (ctx: ProgramContext): void => {
        this.visitChildren(ctx);
    }

    // Visit variable structure rule and provide completion items based on the context
    public visitVariableStructure = (ctx: VariableStructureContext): void => {
        this.completions = [];
        const variableCompletions: CompletionItem[] = [];
        let addedCompletions = false;
        if(!addedCompletions) {
            addedCompletions = true;
            
        }

        variableCompletions.push(
            {
                label: "number",
                kind: CompletionItemKind.Keyword,
                data: "number"
            },
            {
                label: "boolean",
                kind: CompletionItemKind.Keyword,
                data: "boolean"
            },
            {
                label: "string",
                kind: CompletionItemKind.Keyword,
                data: "string"
            }
        )
        
        // completion item for the identifier
        const identifier = ctx.ID();

        if (identifier) {
            this.completions.push({
                label: identifier.getText(),
                kind: CompletionItemKind.Identifier,
                data: identifier.getText()
            });
        }
    }
}
