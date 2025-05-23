// String to Integer (atoi)

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

// The algorithm for myAtoi(string s) is as follows:

// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.

// Return the integer as the final result.


// Example 1:

// Input: s = "42"

// Output: 42

// Explanation:

// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "42" ("42" is read in)
//            ^
// Example 2:

// Input: s = " -042"

// Output: -42

// Explanation:

// Step 1: "   -042" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -042" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
//                ^
// Example 3:

// Input: s = "1337c0d3"

// Output: 1337

// Explanation:

// Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
//              ^
// Example 4:

// Input: s = "0-1"

// Output: 0

// Explanation:

// Step 1: "0-1" (no characters read because there is no leading whitespace)
//          ^
// Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
//          ^
// Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
//           ^
// Example 5:

// Input: s = "words and 987"

// Output: 0

// Explanation:

// Reading stops at the first non-digit character 'w'.


function myAtoi(s) {
    // Define 32-bit signed integer limits
    const INT_MAX = 2 ** 31 - 1;  // 2147483647
    const INT_MIN = -(2 ** 31);   // -2147483648
    
    let i = 0;
    let sign = 1;
    let result = 0;
    
    // Step 1: Skip whitespace
    while (i < s.length && s[i] === ' ') {
        i++;
    }
    
    // Check if we've reached end of string
    if (i >= s.length) return 0;
    
    // Step 2: Handle sign
    if (s[i] === '-' || s[i] === '+') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    // Step 3: Convert digits
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        i++;
    }
    
    // Step 4: Apply sign and handle bounds
    result *= sign;
    
    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;
    
    return result;
}

// Time Complexity: O(n) where n is string length
// Space Complexity: O(1)


// Stage	i	s[i]	Action	         Sign	Result
// Init	    0			                  1	      0
// WS	    0	' '	    i++	              1	      0
// WS    	1	' '	    i++	              1	      0
// WS  	    2	' '	    i++    	          1	      0
// Sign	    3	'-'	   sign=-1,i++	     -1	      0
// Digit	4	'0'	   result=0	         -1	      0
// Digit	5	'4'	   result=4	         -1    	  4
// Digit	6	'2'	   result=42	     -1	     42
// Final			   result*=sign	     -1	    -42