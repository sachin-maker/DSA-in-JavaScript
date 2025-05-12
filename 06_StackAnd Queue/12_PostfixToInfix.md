## Conversion of Postfix to Infix

### Algorithm:
* #### Use a stack to store operands (and intermediate infix expressions).
* #### Iterate through each character in the postfix expression:
* #### If it's an operand (alphanumeric), push it to the stack.
* #### If it's an operator (+, -, *, /, ^), pop the top two operands from the stack:
* #### The second popped operand is the left operand.
* #### The first popped operand is the right operand.
* #### Form a new infix expression: (leftOperand operator rightOperand).
* #### Push this new expression back to the stack.
* #### After processing, the stack should contain one string: the final infix expression.

### Key Points:
* #### Operands are processed in the order they appear, but operators determine how they are combined.
* #### Fully parenthesized output ensures unambiguous precedence (e.g., ABC*+ becomes (A+(B*C)), not A+B*C).
* #### Right-associativity of ^ (exponentiation) is naturally handled by the postfix order (e.g., ABC^^ means A^(B^C)).

### Time Complexity: O(n), where n is the length of the postfix expression (single pass, O(1) stack operations).
### Space Complexity: O(n) for the stack, which stores operands and intermediate expressions.

```js
function postfixToInfix(postfix) {
    // Handle empty string
    if (!postfix) return "";
    
    // Stack to store operands and intermediate infix expressions
    const stack = [];
    
    // Valid operators
    const operators = new Set(['+', '-', '*', '/', '^']);
    
    // Iterate through each character
    for (let char of postfix) {
        // If operand (alphanumeric), push to stack
        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        }
        // If operator, combine top two operands
        else if (operators.has(char)) {
            if (stack.length < 2) {
                throw new Error("Invalid postfix expression");
            }
            // Pop right operand first, then left operand
            const right = stack.pop();
            const left = stack.pop();
            // Form infix expression: (left op right)
            const newExpr = `(${left}${char}${right})`;
            stack.push(newExpr);
        }
    }
    
    // Final result should be one expression
    if (stack.length !== 1) {
        throw new Error("Invalid postfix expression");
    }
    
    return stack[0];
}

// Example usage:
console.log(postfixToInfix("ABC*+")); // Output: "(A+(B*C))"
console.log(postfixToInfix("AB+")); // Output: "(A+B)"
console.log(postfixToInfix("ABC^^")); // Output: "(A^(B^C))"
console.log(postfixToInfix("AB*C+")); // Output: "((A*B)+C)"
console.log(postfixToInfix("")); // Output: ""
console.log(postfixToInfix("A")); // Output: "A"

```