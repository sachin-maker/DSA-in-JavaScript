// Given a String, find the length of longest substring without any repeating character.start from brute force to optimal
// Example 1
// Input: "abcabcbb"
// Output: 3
// Explanation: The longest substring without repeating characters is "abc", with a length of 3.

// Example 2
// Input: "bbbbb"
// Output: 1
// Explanation: The longest substring without repeating characters is "b", with a length of 1.

// Approach 1: Brute Force (O(N³))
// Steps
// Generate all substrings → O(N²).

// Check if each substring has unique characters → O(N).

// Keep track of the longest valid substring.

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let n = s.length;

    for (let start = 0; start < n; start++) {
        for (let end = start; end < n; end++) {
            let substring = s.slice(start, end + 1);
            let uniqueChars = new Set(substring);
            if (uniqueChars.size === substring.length) {
                maxLength = Math.max(maxLength, substring.length);
            }
        }
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3

// Time Complexity
// Generating substrings: O(N²)

// Checking uniqueness: O(N)

// Overall: O(N³)

// Space Complexity
// Uses a Set, O(N) for storing substring characters.


// Approach 2: Brute Force with Hash Set (O(N²))
// Instead of storing substrings, we use a Set to track characters dynamically.

// Steps
// Expand a window with end pointer.

// Use a Set to check unique characters (O(1) lookup).

// If a duplicate is found, stop checking and update max length.


function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let n = s.length;

    for (let start = 0; start < n; start++) {
        let seen = new Set();

        for (let end = start; end < n; end++) {
            if (seen.has(s[end])) break;
            seen.add(s[end]);
            maxLength = Math.max(maxLength, end - start + 1);
        }
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3


// Time Complexity
// Outer loop: O(N)

// Inner loop: O(N) (but breaks early)

// Overall: O(N²)

// Space Complexity
// O(N) for the Set.

// ✅ Improvement, but still not optimal.



// Approach 3: Sliding Window (O(N))
// Instead of checking substrings repeatedly, we use a sliding window technique.

// Steps
// Use two pointers left and right to expand/shrink a window.

// Use a Set to track seen characters.

// Expand right while characters are unique.

// If a duplicate appears, move left until the duplicate is removed.


function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3



// Time Complexity
// Each character is added and removed at most once → O(N)

// Space Complexity
// O(N) for the Set.