grammar MyGrammar;

classStructure
    :   ('public' | 'private') 'class' ID
        '{'
            elementsStructure*
        '}'
    ;

elementsStructure
    :   propertyStructure | functionStructure ;

propertyStructure
    :   ('public' | 'private')

attributeDeclaration
    :   'private' 'final' type ID ';' ;

methodDeclaration
    :   'public' type ID '(' parameterList? ')' '{'
            statement*
        '}' ;

type:   builtInType
    |   ID
    ;

builtInType
    :   'int'
    |   'double'
    |   'void'
    ;

parameterList
    :   type ID ( ',' type ID )* ;

statement
    :   ID ';' ;

ID  :   [a-zA-Z]+ ;
WS  :   [ \t\r\n]+ -> skip ;
