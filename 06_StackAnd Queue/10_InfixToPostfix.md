## Given an infix expression, Your task is to convert the given infix expression to a postfix expression.

### Examples:
```js
Example 1:
Input: a+b*(c^d-e)^(f+g*h)-i
Output: abcd^e-fgh*+^*+i-
Explanation: Infix to postfix

Example 2:
Input: (p+q)*(m-n)
Output: pq+mn-*
Explanation: Infix to postfix
```

### To convert Infix expression to Postfix
* #### 1. Scan the infix expression from left to right. 

* #### 2. If the scanned character is an operand, Print it. 

* #### 3. Else, 

 * #### If the precedence of the scanned operator is greater than the precedence of the operator in the stack or the stack is empty or the stack contains a ‘(‘, push the character into the stack. 
 * #### Else, Pop all the operators from the stack which are greater than or equal to in precedence than that of the scanned operator. After doing that Push the scanned operator to the stack. 

* #### 4. If the scanned character is an ‘(‘, push it into the stack. 

* #### 5. If the scanned character is an ‘)’, pop the stack and output it until a ‘(‘ is encountered, and discard both the parenthesis. 

* #### 6. Repeat steps 2-5 until the entire infix expression is scanned. 

* #### 7. Print the output.

* #### 8. Pop and print the output from the stack until it is not empty.

```js
function infixToPostfix(infix) {
    // Stack for operators
    const stack = [];
    // Result string for postfix expression
    let result = "";
    
    // Operator precedence
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };
    
    // Right-associative operators
    const rightAssociative = new Set(['^']);
    
    // Iterate through each character
    for (let char of infix) {
        // If operand (alphanumeric), append to result
        if (/[a-zA-Z0-9]/.test(char)) {
            result += char;
        }
        // If opening parenthesis, push to stack
        else if (char === '(') {
            stack.push(char);
        }
        // If closing parenthesis, pop until '('
        else if (char === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                result += stack.pop();
            }
            // Pop '('
            if (stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop();
            }
        }
        // If operator
        else if (char in precedence) {
            // Pop operators based on precedence and associativity
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                const topOp = stack[stack.length - 1];
                // For right-associative operators, pop only if higher precedence
                // For left-associative, pop if equal or higher precedence
                if (rightAssociative.has(char)) {
                    if (precedence[topOp] > precedence[char]) {
                        result += stack.pop();
                    } else {
                        break;
                    }
                } else {
                    if (precedence[topOp] >= precedence[char]) {
                        result += stack.pop();
                    } else {
                        break;
                    }
                }
            }
            stack.push(char);
        }
    }
    
    // Pop remaining operators from stack
    while (stack.length > 0) {
        const top = stack.pop();
        if (top !== '(') {
            result += top;
        }
    }
    
    return result;
}

// Example usage:
console.log(infixToPostfix("A+B*C")); // Output: "ABC*+"
console.log(infixToPostfix("(A+B)*C")); // Output: "AB+C*"
console.log(infixToPostfix("A^B^C")); // Output: "ABC^^" (correct: A^(B^C))
console.log(infixToPostfix("A+B*(C^D-E)")); // Output: "ABCD^E-*+"
console.log(infixToPostfix("A+B+C")); // Output: "AB+C+"
console.log(infixToPostfix("")); // Output: ""
console.log(infixToPostfix("A")); // Output: "A"
```