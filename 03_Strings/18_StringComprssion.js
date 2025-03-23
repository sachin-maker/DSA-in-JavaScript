// 💡 Problem Statement:
// Given a string, compress it by replacing consecutive repeating characters 
// with the character followed by its frequency.
// Example:

// "aaabb" → "a3b2"

// "a" → "a1"

// "aabbcc" → "a2b2c2"

// Approach 1: Brute Force (O(N²))
// Logic:
// Traverse the string character by character.

// For each character, count consecutive occurrences and store the result.

// Append the character along with its count to the result string.

function compressStringBrute(str) {
    if (str.length === 0) return "";

    let result = ""; // Using string concatenation (inefficient)
    let i = 0;

    while (i < str.length) {
        let count = 1;

        // Count consecutive occurrences of the same character
        while (i + 1 < str.length && str[i] === str[i + 1]) {
            count++;
            i++;
        }

        result += str[i] + count; // Concatenation (creates new string each time)
        i++;
    }

    return result;
}

// Example Usage
console.log(compressStringBrute("aaabb")); // "a3b2"
console.log(compressStringBrute("aabbcc")); // "a2b2c2"
console.log(compressStringBrute("abcd")); // "a1b1c1d1"
console.log(compressStringBrute("")); // ""

// Complexity Analysis:
// Time Complexity: O(N²) (String concatenation creates new copies each time).

// Space Complexity: O(N) (Storing result).



// Approach 2: Optimized (O(N)) - Using Array
// Logic:
// Instead of concatenating strings (which is slow), use an array to store characters.

// Append characters and their count to the array.

// Convert the array to a string at the end using .join("").


function compressStringOptimized(str) {
    if (str.length === 0) return "";

    let result = [];
    let i = 0;

    while (i < str.length) {
        let count = 1;

        // Count consecutive occurrences of the same character
        while (i + 1 < str.length && str[i] === str[i + 1]) {
            count++;
            i++;
        }

        result.push(str[i], count); // Store character and count in array
        i++;
    }

    return result.join(""); // Join array to form final string
}

// Example Usage
console.log(compressStringOptimized("aaabb")); // "a3b2"
console.log(compressStringOptimized("aabbcc")); // "a2b2c2"
console.log(compressStringOptimized("abcd")); // "a1b1c1d1"
console.log(compressStringOptimized("")); // ""

// Complexity Analysis:
// Time Complexity: O(N) → Efficient single pass.

// Space Complexity: O(N) → Uses an array instead of slow string concatenation.