// Find First Non-Repeated Character in string

// Traverse the string and store character counts in a hash map.

// Traverse the string again and return the first character with a frequency of 1.

// If no such character exists, return null.

function firstNonRepeatedChar(str) {
    if (!str) return null; // Edge case: Empty or null string

    let charCount = {}; // Hash map to store character frequencies

    // First pass: Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) return char;
    }

    return null; // If no non-repeating character found
}

// Example usage:
console.log(firstNonRepeatedChar("swiss")); // Output: "w"
console.log(firstNonRepeatedChar("aabbcdd")); // Output: "c"
console.log(firstNonRepeatedChar("aabb")); // Output: null (no unique character)
console.log(firstNonRepeatedChar("")); // Output: null

// Time & Space Complexity
// Time Complexity: O(N) → We iterate through the string twice.

// Space Complexity: O(1) → Since we store only 26 lowercase letters (or 128 ASCII characters max).

