export interface CompletionItem {
    label: string;
    kind: CompletionItemKind;
    data?: any;
    insertText?: string;
}

// Weird numbers are to match the completion item kind value in the lsp
export enum CompletionItemKind {
    Identifier = 1,
    Function = 3,
    Variable = 6,
    Keyword = 14,
    Snippet = 15,
    Operator = 24
}

export const defaultCompletions: CompletionItem[] = [
    {
        label: "puv",
        kind: CompletionItemKind.Snippet,
        insertText: "public void functionName() {\n\n}",
        data: "function"
    },
    {
        label: "prv",
        kind: CompletionItemKind.Snippet,
        insertText: "private void functionName() {\n\n}",
        data: "function"
    },
    {
        label: "pub",
        kind: CompletionItemKind.Snippet,
        insertText: "public ",
        data: "function"
    }
]

export const variableTypeCompletions: CompletionItem[] = [
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
]

export const ifCompletions: CompletionItem[] = [
    {
        label: "if() {\n\n}",
        kind: CompletionItemKind.Keyword,
        data: "if"
    },
    // {
    //     label: "&&",
    //     kind: CompletionItemKind.Operator,
    //     data: "&&"
    // },
    // {
    //     label: "||",
    //     kind: CompletionItemKind.Operator,
    //     data: "||"
    // },
    {
        label: "true",
        kind: CompletionItemKind.Keyword,
        data: "true"
    },
    {
        label: "false",
        kind: CompletionItemKind.Keyword,
        data: "false"
    }
]