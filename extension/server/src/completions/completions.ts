import { CompletionItemKind } from "vscode-languageserver";

export const completionsList = [
    {
        label: 'number',
        kind: CompletionItemKind.Variable,
        data: 'number'
    },
    {
        label: 'boolean',
        kind: CompletionItemKind.Variable,
        data: 'boolean'
    },
    {
        label: 'string',
        kind: CompletionItemKind.Variable,
        data: 'string'
    },
    {
        label: 'if()',
        kind: CompletionItemKind.Keyword,
        data: 'if'
    },
    {
        label: '&&',
        kind: CompletionItemKind.Operator,
        data: '&&'
    },
    {
        label: '||',
        kind: CompletionItemKind.Operator,
        data: '||'
    },
    {
        label: '==',
        kind: CompletionItemKind.Operator,
        data: '=='
    },
    {
        label: 'public',
        kind: CompletionItemKind.Keyword,
        data: 'public'
    },
    {
        label: 'private',
        kind: CompletionItemKind.Keyword,
        data: 'private'
    },
    {
        label: 'void',
        kind: CompletionItemKind.Keyword,
        data: 'void'
    },
    {
        label: '(',
        kind: CompletionItemKind.Operator,
        data: '('
    },
    {
        label: ')',
        kind: CompletionItemKind.Operator,
        data: ')'
    },
    {
        label: '{',
        kind: CompletionItemKind.Operator,
        data: '{'
    },
    {
        label: '}',
        kind: CompletionItemKind.Operator,
        data: '}'
    },
    {
        label: ',',
        kind: CompletionItemKind.Operator,
        data: ','
    },
    {
        label: 'function',
        kind: CompletionItemKind.Function,
        data: 'function'
    }
];