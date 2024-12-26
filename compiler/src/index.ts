import { CharStreams, CommonTokenStream } from "antlr4";
import MyGrammarLexer from "./generated/MyGrammarLexer.js";
import MyGrammarParser from "./generated/MyGrammarParser.js";
import { DiagnosticsVisitor } from "./ts/visitors/diagnostic/diagnosticsVisitor.js";
import { Diagnostic } from "./ts/visitors/diagnostic/diagnostic.js";
import { CustomErrorListener } from "./ts/visitors/customErrorlistener.js";
import { CompletionItem } from "./ts/visitors/completion/completionItem.js";
import { CompletionVisitor } from "./ts/visitors/completion/codeCompletionVisitor.js";


const numberInput = `
number x = 10.5;
`
const stringInput = `
string x = "Hello, World!";
`
const booleanInput = `
boolean x = true;
`
const semanticallyBadInput = `
number x = "Hello, World!";
`
// This input should cause a syntax error: no semicolon at the end
const syntacticallyBadInput = `
number x = 10.5
`

function parseAndValidate(input: string) {
    // Create a CharStream from the input
    const inputStream = CharStreams.fromString(input);

    // Create a lexer and a token stream
    const lexer = new MyGrammarLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // Create a parser and parse the input
    const parser = new MyGrammarParser(tokenStream);
    const tree = parser.program(); // Adjust based on your entry rule

    // Create a visitor and visit the parse tree
    const visitor = new DiagnosticsVisitor();
    visitor.visit(tree);

    // Get and print diagnostics
    const diagnostics = visitor.getDiagnostics();
    diagnostics.forEach(diagnostic => {
        console.log(`${diagnostic.severity}: ${diagnostic.message} at line ${diagnostic.range.start.character}, column ${diagnostic.range.end.character}`);
    });
}

// Parse and validate the input
parseAndValidate(semanticallyBadInput);


function processDiagnostics(input: string): Diagnostic[] {
    if (!input) {
        return [];
    }

    // Create a CharStream from the input
    const inputStream = CharStreams.fromString(input);

    // Create a lexer and a token stream
    const lexer = new MyGrammarLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // Create a parser and parse the input
    const parser = new MyGrammarParser(tokenStream);

    // Attaching the error listener
    const errorListener = new CustomErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    const tree = parser.program();

    // Create a visitor and visit the parse tree
    const visitor = new DiagnosticsVisitor();
    visitor.visit(tree);

    // Get and return diagnostics
    const syntaxDiagnostics = errorListener.getDiagnostics();
    const semanticDiagnostics = visitor.getDiagnostics();
    
    return [...syntaxDiagnostics, ...semanticDiagnostics];
}

function processCompletions(input: string): CompletionItem[] {
    // Create a CharStream from the input
    const inputStream = CharStreams.fromString(input);

    // Create a lexer and a token stream
    const lexer = new MyGrammarLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // Create a parser and parse the input
    const parser = new MyGrammarParser(tokenStream);

    const tree = parser.program();

    // Create a visitor and visit the parse tree
    const visitor = new CompletionVisitor();
    visitor.visit(tree);
    
    return visitor.getCompletions();
}

export { processDiagnostics, processCompletions, Diagnostic as CustomDiagnostic };