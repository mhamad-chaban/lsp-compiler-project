import { FunctionDeclarationStructureContext, IfStructureContext, ProgramContext, VariableStructureContext } from "../../../generated/MyGrammarParser";
import MyGrammarVisitor from "../../../generated/MyGrammarVisitor";
import { CompletionItem, CompletionItemKind, defaultCompletions, ifCompletions, variableTypeCompletions } from "./completionItem";

export class CompletionVisitor extends MyGrammarVisitor<void> {
    private completions: CompletionItem[] = [];

    public getCompletions(): CompletionItem[] {
        return this.completions;
    }
    // Visit root rule program
    public visitProgram = (ctx: ProgramContext): void => {
        this.completions.push(...defaultCompletions);
        this.completions.push(...variableTypeCompletions);
        this.visitChildren(ctx);
    }

    public visitVariableStructure = (ctx: VariableStructureContext): void => {
        // completion item for the identifier
        const identifier = ctx.ID();
        // if (identifier) {
        //     this.completions.push({
        //         label: identifier.getText(),
        //         kind: CompletionItemKind.Variable,
        //         data: identifier.getText()
        //     });
        // }
    }

    public visitIfStructure = (ctx: IfStructureContext): void => {
        this.completions = [];
        this.completions.push(...ifCompletions);
    }

    public visitFunctionStructure = (ctx: FunctionDeclarationStructureContext): void => {
        console.log("Visiting Function Structure");
        this.completions = [];
    }
}
