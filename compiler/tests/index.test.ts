import { CharStreams, CommonTokenStream, } from "antlr4";
import  MyGrammarParser from "../src/generated/MyGrammarParser";
import { CustomErrorListener } from "../src/ts/visitors/diagnostic/customErrorlistener";
import { DiagnosticsVisitor } from "../src/ts/visitors/diagnostic/diagnosticsVisitor";
import MyGrammarLexer from "../src/generated/MyGrammarLexer";
import { Diagnostic, Severity } from "../src/ts/visitors/diagnostic/diagnostic";
import { processDiagnostics } from "../src/index";

describe('Syntax diagnostics', () => {
    function processSyntaxDiagnostic(input: string): Diagnostic[] {
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
        return syntaxDiagnostics;
    }

    it('should return incomplete statement error', () => {
        const diagnostics = processSyntaxDiagnostic('number age');
        expect(diagnostics).toHaveLength(1);
        expect(diagnostics[0].message).toBe("Incomplete statement. Expected '='.");
    })

    it('should return incomplete statement error for missing value', () => {
        const diagnostics = processSyntaxDiagnostic('number age = ');
        expect(diagnostics).toHaveLength(1);
        expect(diagnostics[0].message).toBe("Invalid statement. Expected a number value.");
    })
});

describe('Semantic diagnostics', () => {
    it('should return type mismatch error for number', () => {
        const diagnostics = processDiagnostics('number age = "hello";');
        expect(diagnostics).toHaveLength(1);
        expect(diagnostics[0].message).toBe("Type mismatch. Expected a number but got '\"hello\"'.");
    })

    it('should return an empty body warning', () => {
        const diagnostics = processDiagnostics('public void sayHello() {}');
        expect(diagnostics).toHaveLength(1);
        expect(diagnostics[0].message).toBe("Warning: Empty body.");
        expect(diagnostics[0].severity).toBe(Severity.Warning);
    })

    it('should return a function is not defined error', () => {
        const diagnostics = processDiagnostics('sayHello();');
        expect(diagnostics).toHaveLength(1);
        expect(diagnostics[0].message).toBe("Function 'sayHello' is not defined.");
    })

    it('should return a function expects 1 arguments but got 0 error', () => {
        const diagnostics = processDiagnostics(`
            public void sayHello(string name) {
                number message = "Hello";
            }
            sayHello();
            `);
        expect(diagnostics).toHaveLength(1);
        expect(diagnostics[0].message).toBe("Function 'sayHello' expects 1 arguments but got 0.");
    })
});