// Largest Odd Number in String
// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.

// A substring is a contiguous sequence of characters within a string.

// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.

// Brute Force Approach (O(n²))
// Idea:
// Generate all possible substrings.

// Convert each substring to an integer and check if it is odd.

// Keep track of the largest odd number found.

function largestOddNumber(num) {
    let maxOdd = ""; // Stores the largest odd number as a string

    for (let i = 0; i < num.length; i++) {
        for (let j = i; j < num.length; j++) {
            let sub = num.substring(i, j + 1); // Extract substring
            if (parseInt(sub) % 2 !== 0) { // Check if odd
                if (sub.length > maxOdd.length || (sub.length === maxOdd.length && sub > maxOdd)) {
                    maxOdd = sub; // Update max odd if larger
                }
            }
        }
    }
    
    return maxOdd;
}

console.log(largestOddNumber("52")); // Output: "5"
console.log(largestOddNumber("4206")); // Output: ""
console.log(largestOddNumber("35427")); // Output: "35427"


// Time Complexity: O(n²)
// Generating all substrings is O(n²).

// Checking for oddness is O(1).

// Total Complexity: O(n²).

// Space Complexity: O(1)
// We only store the result in maxOdd, which is a string.




// Optimized Approach (O(n))
// Observation
// The largest odd number must be a suffix of num, because removing leading even digits never increases value.

// Instead of checking all substrings, find the rightmost odd digit.

// Return num.substring(0, lastOddIndex + 1).


function largestOddNumber(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) { // Check if it's an odd digit
            return num.substring(0, i + 1); // Return from 0 to last odd digit
        }
    }
    return ""; // No odd number found
}

console.log(largestOddNumber("52")); // Output: "5"
console.log(largestOddNumber("4206")); // Output: ""
console.log(largestOddNumber("35427")); // Output: "35427"
console.log(largestOddNumber("1001")); // Output: "1001"


// Time Complexity: O(n)
// We scan the string once from right to left.

// O(n) worst case.

// Space Complexity: O(1)
// Only a few extra variables (i and the return substring).

// iteration	1
// i (Index)   4
// num[i]     '7'
// num[i] % 2 !== 0 (Odd?)	 yes
// Action                  return '35427'

// Input: "12345678"
	// Iteration	i (Index)	num[i]	num[i] % 2 !== 0 (Odd?)	  Action
    // 1	        7	        '8'           ❌ No	             Continue searching
    // 2	        6	        '7'	          ✅ Yes (odd)	     Return "1234567"