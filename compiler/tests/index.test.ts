import { CharStreams, CommonTokenStream, } from "antlr4";
import  MyGrammarParser from "../src/generated/MyGrammarParser";
import { CustomErrorListener } from "../src/ts/visitors/diagnostic/customErrorlistener";
import { DiagnosticsVisitor } from "../src/ts/visitors/diagnostic/diagnosticsVisitor";
import MyGrammarLexer from "../src/generated/MyGrammarLexer";

describe('Syntax diagnostics', () => {
    it('should return incomplete statement error', () => {
        const input = 'number nummy';
        const inputStream = CharStreams.fromString(input);
        const lexer = new MyGrammarLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new MyGrammarParser(tokenStream);

        const errorListener = new CustomErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        const tree = parser.program();
        const diagnosticsVisitor = new DiagnosticsVisitor();
        diagnosticsVisitor.visit(tree);

        const syntaxDiagnostics = errorListener.getDiagnostics();

        expect(syntaxDiagnostics).toHaveLength(1);
        expect(syntaxDiagnostics[0].message).toBe("Incomplete statement. Expected '='.");
    })
});