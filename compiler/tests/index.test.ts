import { Severity } from "../src/ts/visitors/diagnostic/diagnostic";
import { processCompletions, processDiagnostics } from "../src/index";
import { CompletionItemKind } from "../src/ts/visitors/completion/completionItem";
import { CharStreams, CommonTokenStream } from "antlr4";
import MyGrammarLexer from "../src/generated/MyGrammarLexer";
import MyGrammarParser from "../src/generated/MyGrammarParser";

function parseInput(input: string) {
    const inputStream = CharStreams.fromString(input);
    const lexer = new MyGrammarLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new MyGrammarParser(tokenStream);
    return { tree: parser.program(), parser };
}

describe('Parser tests', () => {
    it('should parse variable declaration', () => {
        const { tree, parser } = parseInput('number age = 10;');
        expect(tree).toBeDefined();
        expect(tree.toStringTree(parser.ruleNames, parser)).toBe('(program (variableStructure (type (defaultType number)) age = (value 10) ;) <EOF>)');
    })

    it('should parse function declaration', () => {
        const { tree, parser } = parseInput('public void sayHello() {}');
        expect(tree).toBeDefined();
        expect(tree.toStringTree(parser.ruleNames, parser)).toBe('(program (functionDeclarationStructure public void sayHello ( ) { }) <EOF>)');
    })

    it('should parse function call', () => {
        const { tree, parser } = parseInput('sayHello();');
        expect(tree).toBeDefined();
        expect(tree.toStringTree(parser.ruleNames, parser)).toBe('(program (functionCall sayHello ( ) ;) <EOF>)');
    })

    it('should parse if statement', () => {
        const { tree, parser } = parseInput('if (true) {}');
        expect(tree).toBeDefined();
        expect(tree.toStringTree(parser.ruleNames, parser)).toBe('(program (ifStructure if ( (booleanExpression (booleanTerm (booleanFactor true))) ) { }) <EOF>)');
    })

    it('should parse if else statement', () => {
        const { tree, parser } = parseInput('if (true) {} else {}');
        expect(tree).toBeDefined();
        expect(tree.toStringTree(parser.ruleNames, parser)).toBe('(program (ifStructure if ( (booleanExpression (booleanTerm (booleanFactor true))) ) { } else { }) <EOF>)');
    })
});

describe('Syntax diagnostics', () => {
    it('should return incomplete statement error', () => {
        const diagnostics = processDiagnostics('number age');
        expect(diagnostics).toHaveLength(1);
        expect(diagnostics[0].message).toBe("Incomplete statement. Expected '='.");
    })

    it('should return incomplete statement error for missing value', () => {
        const diagnostics = processDiagnostics('number age = ');
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

describe('Completion items', () => {
    it('should contain live templates for function declaration', () => {
        const completionItems = processCompletions('p');
        
        // puv
        const puvItem = completionItems.find(item => item.label === 'puv');
        expect(puvItem).toBeDefined();
        expect(puvItem?.insertText).toBe('public void functionName() {\n\n}');
        
        // prv
        const prvItem = completionItems.find(item => item.label === 'prv');
        expect(prvItem?.insertText).toBe('private void functionName() {\n\n}');
    })

    it('should contain variable types', () => {
        const completionItems = processCompletions('n');

        const numberItem = completionItems.find(item => item.label === 'number');
        expect(numberItem).toBeDefined();
        expect(numberItem!.kind).toBe(CompletionItemKind.Keyword);

        const booleanItem = completionItems.find(item => item.label === 'boolean');
        expect(booleanItem).toBeDefined();
        expect(booleanItem!.kind).toBe(CompletionItemKind.Keyword);

        const stringItem = completionItems.find(item => item.label === 'string');
        expect(stringItem).toBeDefined();
        expect(stringItem!.kind).toBe(CompletionItemKind.Keyword);
    })

    it('should contain if completion item (adds parentheses and braces)', () => {
        const completionItems = processCompletions('if');
        const ifItem = completionItems.find(item => item.label === 'if() {\n\n}');
        expect(ifItem).toBeDefined();
        expect(ifItem!.kind).toBe(CompletionItemKind.Keyword);
    })
});