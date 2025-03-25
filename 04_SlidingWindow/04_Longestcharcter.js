// Longest Repeating Character Replacement
// You are given a string s and an integer k.
//  You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get
//  after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.


// Brute Force Approach (O(N³))
// Approach:
// Generate all substrings.

// For each substring, count the most frequent character.

// Check if we can replace the remaining characters within k operations.

// Keep track of the longest valid substring.

function characterReplacementBruteForce(s, k) {
    let maxLength = 0;

    // Generate all substrings.
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {


            // For each substring, we calculate frequency
            // Finds the most frequently occurring character (maxFreq).


            let freqMap = new Map();
            let maxFreq = 0;
            for (let x = i; x <= j; x++) {
                freqMap.set(s[x], (freqMap.get(s[x]) || 0) + 1);
                maxFreq = Math.max(maxFreq, freqMap.get(s[x]));
            }

            // check if a substring can be transformed into a single repeating character by replacing at most k characters.
            let remainingChars = (j - i + 1) - maxFreq;
            if (remainingChars <= k) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }

    return maxLength;
}

// Test cases
console.log(characterReplacementBruteForce("ABAB", 2)); // Output: 4
console.log(characterReplacementBruteForce("AABABBA", 1)); // Output: 4


// Time Complexity:
// O(N³) because:

// We check all possible substrings (O(N²)).

// For each substring, we calculate frequency (O(N)).

// Space Complexity (SC) Analysis
// freqMap stores at most 26 keys (A-Z) → O(1)

// Other variables (maxFreq, remainingChars, etc.) → O(1)

// No additional data structures depend on input size, so the space complexity is O(1).





// Optimized Approach (Sliding Window - O(N))
// Approach:
// Use a sliding window approach with two pointers: left and right.

// Maintain a frequency map of characters in the window.

// Track the max frequency of any character in the window.

// If the number of non-dominant characters exceeds k, shrink the window by moving left forward.

// Keep track of the maximum valid window length.



function characterReplacement(s, k) {
    let left = 0, maxLen = 0, maxFreq = 0;
    let freqMap = new Map();

    for (let right = 0; right < s.length; right++) {
        freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);
        maxFreq = Math.max(maxFreq, freqMap.get(s[right]));

        // Number of replacements needed: (window size - maxFreq)
        while ((right - left + 1) - maxFreq > k) {
            freqMap.set(s[left], freqMap.get(s[left]) - 1);
            left++; // Shrink window
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Test cases
console.log(characterReplacement("ABAB", 2)); // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4


// Time Complexity Analysis
// Sliding Window Approach - O(N)
// Right pointer moves from 0 to n - 1 → O(N)

// Left pointer moves forward at most n times → **O(N)`

// Thus, O(2N) ≈ O(N) in worst-case scenarios.

// Space Complexity (SC) Analysis
// Character Frequency Map (freqMap):

// We store frequency counts for at most 26 uppercase English letters.

// This results in O(26) = O(1) constant space.

// Other Variables (maxFreq, left, right, maxLength):

// These use O(1) space.

// Thus, the space complexity is O(1).