export interface CompletionItem {
    label: string;
    kind: CompletionItemKind;
    data?: any;
}

// Weird numbers are to match the completion item kind value in the lsp
export enum CompletionItemKind {
    Identifier = 1,
    Keyword = 14,
    Variable = 6,
    Function = 3,
    Operator = 24,
}

export const defaultCompletionList: CompletionItem[] = [
    {
        label: "if",
        kind: CompletionItemKind.Keyword,
        data: "if"
    },
    {
        label: "&&",
        kind: CompletionItemKind.Operator,
        data: "&&"
    },
    {
        label: "||",
        kind: CompletionItemKind.Operator,
        data: "||"
    },
    {
        label: "true",
        kind: CompletionItemKind.Keyword,
        data: "true"
    },
    {
        label: "false",
        kind: CompletionItemKind.Keyword,
        data: "false"
    },
    {
        label: "function",
        kind: CompletionItemKind.Keyword,
        data: "function"
    }
]

export const variableCompletions: CompletionItem[] = [
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
