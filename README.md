# Mhamad Chaban
## Project - Compiler

### Antlr grammatica - ondersteunde broncode
Variabele initialisatie voor types: number, boolean en string
```
number age = 23;
number weight = 75.5;
boolean isOld = false;
string motd = "You're still young";
```
Functie declaratie: kan meerdere parameters hebben
```
public void greeting() {
    
}

private void greetingOldie(number age) {

}
```

Functie aanroep: ook met argumenten van values number, boolean en string
```
greetingOldie(20);
```

If else: operatoren || en && zijn ook toegelaten
```
if (isOld || isAncient) {
    greetingOldie(20);
} else {
    greeting();
}
```

While
```
while (isOld) {
    greetingOldie(23);
}
```

---
### Diagnostics
---
#### Syntax
Alle syntax errors worden onderlijnd, weergegeven en de message is afhankelijk van de soort error

Incomplete statement without var name:  
![Image of incomplete statement diagnostic error with missing var name](/extension/images/syntax/incompleteStatementMissingName.png)

Incomplete statement missing '=':  
![Image of incomplete statement diagnostic error with missing '='](/extension/images/syntax/incompleteStatementMissingAssign.png)


Invalid statement without a value:  
![Image of invalid statement without a value](/extension/images/syntax/invalidStatementValue.png)

Missing function body:
![Image of a function declaration without a body](/extension/images/syntax/missingBody.png)

If boolean condition is not a boolean:  
![Image of an invalid boolean condition](/extension/images/syntax/invalidBoolean.png)
---
#### Semantic
Ook semanstisch errors/warnings worden onderlijnd en met een message

Type mismatch error:  
![Image of a type mismatch error](/extension/images/semantic/typeMismatch.png)

Call of undefined function:  
![Image of an error calling an undefined function](/extension/images/semantic/undefinedFunction.png)

Function call without arguements of function with parameters:  
![Image of an error calling a function with without arguments but the function has required parameters](/extension/images/semantic/wrongNumArgs.png)

Function declaration with an empty body:  
![Image of a warning when declaring a function with an empty body](/extension/images/semantic/functionEmptyBody.png)

Always true if:  
![Image of a warning of if with only true](/extension/images/semantic/alwaysTrue.png)
---

### Code completion
Basis code completion is mogelijk voor types en functies

Types completion:  
![Image of a completion pop up when typing letter n](/extension/images/completion/numberComp.png)
![Image of a completion pop up when typing s](/extension/images/completion/stringComp.png)
![Image of a completion pop up when typing b](/extension/images/completion/booleanComp.png)

Live templates:  
![Image of a completion pop up when typing p](/extension/images/completion/funLiveTemp.png)

Will auto complete to:
- puv (public void):
```
public void functionName() {

}
```
- prv (private void):
```
private void functionName() {

}
```
---

### Commando's - in volgorde
#### Om dependencies te installeren
- npm install
#### Project builden
- npm run build
#### Om compiler als dependency te kunnen te voegen aan extension project (symbolic link)
- npm link
#### Tests runnen
- npm test

## Project - Extension
#### Om compiler dependency toe te voegen
- npm link my-antlr
#### Om dependencies te installeren
- npm install
#### Lsp client en server compilen en runnen
- npm run watch
#### Runnen en Debuggen
- wanneer in extension/server/src/server.ts: Ctrl + Alt + D (run end debug) en clicken op run and debug
