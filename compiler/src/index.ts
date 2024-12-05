import { CharStreams, CommonTokenStream } from "antlr4";
import MyGrammarLexer from "./generated/MyGrammarLexer.js";
import MyGrammarParser from "./generated/MyGrammarParser.js";
import { VariableVisitor } from "./ts/visitors/variableVisitor.js";


const input = `
number x = 42;
string y = "hello";
boolean z = true;
number temp = "not a number"; // This should trigger a type mismatch error
`;

function parseAndValidate(input: string) {
    // Create a CharStream from the input
    const inputStream = CharStreams.fromString(input);

    // Create a lexer and a token stream
    const lexer = new MyGrammarLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);

    // Create a parser and parse the input
    const parser = new MyGrammarParser(tokenStream);
    const tree = parser.variableStructure(); // Adjust based on your entry rule

    // Create a visitor and visit the parse tree
    const visitor = new VariableVisitor();
    visitor.visit(tree);

    // Get and print diagnostics
    const diagnostics = visitor.getDiagnostics();
    diagnostics.forEach(diagnostic => {
        console.log(`${diagnostic.severity.toUpperCase()}: ${diagnostic.message} at line ${diagnostic.line}`);
    });
}

// Parse and validate the input
parseAndValidate(input);