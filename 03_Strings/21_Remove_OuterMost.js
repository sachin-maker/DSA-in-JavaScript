// Remove Outermost Parentheses

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation: 
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

function removeOutermostParenthesis(s) {
    
        let ans = []; // Use an array instead of string concatenation
        let count = 0;
    
        for (let i = 0; i < s.length; i++) {
            if (s[i] === ')') count--;  // Closing parenthesis, decrease depth
            if (count !== 0) ans.push(s[i]); // Only add when it's not outermost
            if (s[i] === '(') count++;  // Opening parenthesis, increase depth
        }
    
        return ans.join(''); // Convert array to string efficiently
    
    
}

let str = "(()())(())";
console.log(removeOutermostParenthesis(str));  // Expected output: "()()()"



O(n) time complexity ✅
O(n) space complexity (since ans stores a substring of s). ✅