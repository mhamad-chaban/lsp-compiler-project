import { CharStreams, CommonTokenStream } from "antlr4";
import MyGrammarLexer from "./generated/MyGrammarLexer.js";
import MyGrammarParser from "./generated/MyGrammarParser.js";
import { CustomVisitor } from "./ts/visitors/CustomVisitor.js";


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
const synacticallyBadInput = `
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
    const tree = parser.variableStructure(); // Adjust based on your entry rule

    // Create a visitor and visit the parse tree
    const visitor = new CustomVisitor();
    visitor.visit(tree);

    // Get and print diagnostics
    const diagnostics = visitor.getDiagnostics();
    diagnostics.forEach(diagnostic => {
        console.log(`${diagnostic.severity.toUpperCase()}: ${diagnostic.message} at line ${diagnostic.line}`);
    });
}

// Parse and validate the input
parseAndValidate(synacticallyBadInput);
export { default as MyGrammarLexer } from './generated/MyGrammarLexer.js';
export { default as MyGrammarParser } from './generated/MyGrammarParser.js';
export { CustomVisitor } from './ts/visitors/CustomVisitor.js';