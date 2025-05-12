## Check Balanced Parentheses. 
### Given string str containing just the characters '(', ')', '{', '}', '[' and ']', check if the input string is valid and return true if the string is balanced otherwise return false.

### Note: string str is valid if:

* #### Open brackets must be closed by the same type of brackets.
* #### Open brackets must be closed in the correct order.


## Explanation
### Problem: Determine if a string str containing only '(', ')', '{', '}', '[', ']' is valid (balanced). A string is valid if:
### Each opening bracket ('(', '{', '[') is closed by the corresponding closing bracket (')', '}', ']').
### Brackets are closed in the correct order (e.g., nested brackets must close before outer ones).

## Approach:
* #### Use a stack to keep track of opening brackets.
* #### Iterate through each character in the string:
* #### If it's an opening bracket ('(', '{', '['), push it onto the stack.
* #### If it's a closing bracket (')', '}', ']'), check:
* #### If the stack is empty (no opening bracket to match), return false.
* #### If the top of the stack doesn't match the corresponding opening bracket, return false.
* #### Otherwise, pop the top opening bracket from the stack.
* #### After processing all characters, the stack should be empty for a valid string (all brackets matched).

## Data Structure:
* #### Use an array as a stack for simplicity (JavaScript arrays support push and pop).
* #### Use a hash map to map closing brackets to their corresponding opening brackets for quick validation.

### Time Complexity: O(n), where n is the length of the string (single pass through the string).
### Space Complexity: O(n) in the worst case (if all characters are opening brackets).

```js
function isValid(str) {
    // Stack to store opening brackets
    const stack = [];
    
    // Map of closing brackets to opening brackets
    const bracketsMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate through each character in the string
    for (let char of str) {
        // If it's an opening bracket, push to stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        // If it's a closing bracket
        else if (char === ')' || char === '}' || char === ']') {
            // If stack is empty or top doesn't match, return false
            if (stack.length === 0 || stack.pop() !== bracketsMap[char]) {
                return false;
            }
        }
    }
    
    // String is valid only if stack is empty (all brackets matched)
    return stack.length === 0;
}

// Example usage:
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true
console.log(isValid("")); // Output: true
console.log(isValid("(")); // Output: false
console.log(isValid("}}")); // Output: false
```