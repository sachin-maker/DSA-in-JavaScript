// Maximum Nesting Depth of the Parentheses
// Given a valid parentheses string s, return the nesting depth of s.
//  The nesting depth is the maximum number of nested parentheses.


// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"

// Output: 3

// Explanation:

// Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:

// Input: s = "(1)+((2))+(((3)))"

// Output: 3

// Explanation:

// Digit 3 is inside of 3 nested parentheses in the string.

// Example 3:

// Input: s = "()(())((()()))"

// Output: 3

// Solution:-
// We maintain two variables:
// currentDepth: tracks the current nesting level
// maxDepth: stores the maximum depth seen so far
// For each '(' we increment currentDepth and update maxDepth if needed
// For each ')' we decrement currentDepth
// Other characters are ignored
// Time Complexity: O(n) where n is string length
// Space Complexity: O(1) as we only use two variables

function maxDepth(s) {
    let maxDepth = 0;
    let currentDepth = 0;
    
    // Iterate through each character
    for (let char of s) {
        if (char === '(') {
            currentDepth++;
            // Update maxDepth if currentDepth exceeds it
            if (currentDepth > maxDepth) {
                maxDepth = currentDepth;
            }
        } else if (char === ')') {
            currentDepth--;
        }
    }
    
    return maxDepth;
}


// Position: ( 1 + ( 2 * 3 ) + ( ( 8 ) / 4 ) ) + 1
// Depth:    1     2         1 2   3     2 1  0
// Max:      1     2         2 2   3     3 3  3