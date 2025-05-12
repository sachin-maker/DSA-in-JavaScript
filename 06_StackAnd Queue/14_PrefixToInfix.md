## Prefix to Infix


### Algorithm:
* #### Use a stack to store operands and intermediate infix expressions.
* #### Process the prefix expression from right to left (since the last characters are typically operands, and operators come earlier):
* #### If it's an operand (alphanumeric), push it to the stack.
* #### If it's an operator (+, -, *, /, ^), pop the top two operands:
* #### The first popped operand is the left operand (since it appears earlier in prefix).
* #### The second popped operand is the right operand.
* #### Form a new infix expression: (leftOperand operator rightOperand).
* #### Push this expression back to the stack.
* #### After processing, the stack should contain one string: the final infix expression.


## Time Complexity: O(n), where n is the length of the prefix expression (single pass, O(1) stack operations).
## Space Complexity: O(n) for the stack, which stores operands and intermediate expressions.

```js
function prefixToInfix(prefix) {
    // Handle empty string
    if (!prefix) return "";
    
    // Stack to store operands and intermediate infix expressions
    const stack = [];
    
    // Valid operators
    const operators = new Set(['+', '-', '*', '/', '^']);
    
    // Process from right to left
    for (let i = prefix.length - 1; i >= 0; i--) {
        const char = prefix[i];
        
        // If operand (alphanumeric), push to stack
        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        }
        // If operator, combine top two operands
        else if (operators.has(char)) {
            if (stack.length < 2) {
                throw new Error("Invalid prefix expression");
            }
            // Pop left operand first, then right operand
            const left = stack.pop();
            const right = stack.pop();
            // Form infix expression: (left op right)
            const newExpr = `(${left}${char}${right})`;
            stack.push(newExpr);
        }
    }
    
    // Final result should be one expression
    if (stack.length !== 1) {
        throw new Error("Invalid prefix expression");
    }
    
    return stack[0];
}

// Example usage:
console.log(prefixToInfix("+A*BC")); // Output: "(A+(B*C))"
console.log(prefixToInfix("+AB")); // Output: "(A+B)"
console.log(prefixToInfix("^A^BC")); // Output: "(A^(B^C))"
console.log(prefixToInfix("+*ABC")); // Output: "((A*B)+C)"
console.log(prefixToInfix("")); // Output: ""
console.log(prefixToInfix("A")); // Output: "A"
```
