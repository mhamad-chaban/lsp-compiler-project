interface Range {
    start: {
        line: number;
        character: number;
    }
    end: {
        line?: number;
        character?: number;
    }
}

export enum Severity {
    Error = 1,
    Warning = 2
}

export interface Diagnostic {
    message: string;
    range: Range;
    severity: Severity;
    source: string;
}

export const diagnosticMessages =
    {
        numberError: 'Type mismatch. Expected a number but got \'${valueText}\'.',
        stringError: 'Type mismatch. Expected a string but got \'${valueText}\'.',
        booleanError: 'Type mismatch. Expected a boolean but got \'${valueText}\'.',
        alwaysTrue: 'Warning: The condition is always true.',
        emptyStatement: 'Warning: Empty statement.'
    }