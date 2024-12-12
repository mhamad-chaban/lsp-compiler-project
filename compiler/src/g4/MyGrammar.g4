grammar MyGrammar;

variableStructure
    :   type ID '=' value ';' ;

functionStructure
    :   ('public' | 'private') 'void' ID '(' functionParameters? ')'
        '{'
            statement*
        '}'
    ;

type:   defaultType
    |   ID
    ;

defaultType
    :   'number'
    |   'boolean'
    |   'string'
    ;

functionParameters
    :   type ID ( ',' type ID)*
    ;

ifStructure
    :   'if' '(' booleanExpression ')'
        '{'
            statement*
        '}'
    ;

booleanExpression   
    :   booleanTerm (('&&' | '||') booleanTerm)*
    ;

booleanTerm
    :   booleanFactor ('==' booleanFactor)?
    ;

booleanFactor
    :   BooleanValue
    |   ID
    |   '(' booleanExpression ')'
    ;

statement
    :   ID ';' ;

value
    :   NumberValue
    |   BooleanValue
    |   StringValue
    ;

NumberValue  :   [0-9]+ ('.' [0-9]+)?        ;
BooleanValue :   'true' | 'false'            ;
StringValue  :   '"' (~["\\] | '\\' .)* '"'  ;
ID           :   [a-zA-Z]+                   ;
WS           :   [ \t\r\n]+ -> skip          ;
