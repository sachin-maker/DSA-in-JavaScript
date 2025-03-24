// Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


// Example 1:

// Input: s = "egg", t = "add"

// Output: true

// Explanation:

// The strings s and t can be made identical by:

// Mapping 'e' to 'a'.
// Mapping 'g' to 'd'.
// Example 2:

// Input: s = "foo", t = "bar"

// Output: false

// Explanation:

// The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

// Example 3:

// Input: s = "paper", t = "title"

// Output: true


// Solution:
// Use two hash maps (objects)

// One for s -> t mapping.

// One for t -> s mapping (to ensure no two characters map to the same one).


function isIsomorphic(s, t) {
    if (s.length !== t.length) return false; // Lengths must be equal

    let mapS = {}; // Stores mapping from s -> t
    let mapT = {}; // Stores mapping from t -> s

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // If there's a mismatch in mapping, return false
        if ((mapS[charS] && mapS[charS] !== charT) || (mapT[charT] && mapT[charT] !== charS)) {
            return false;
        }

        // Establish mapping
        mapS[charS] = charT;
        mapT[charT] = charS;
    }

    return true;
}

// Test Cases
console.log(isIsomorphic("egg", "add")); // Output: true
console.log(isIsomorphic("foo", "bar")); // Output: false
console.log(isIsomorphic("paper", "title")); // Output: true
console.log(isIsomorphic("badc", "baba")); // Output: false

// Time Complexity: O(n)
// We iterate through the strings once → O(n)

// Checking and updating the maps are O(1) on average.

// Total complexity: O(n).


// Space Complexity: O(1)
// We use two hash maps with at most 26 entries each (since only lowercase letters exist).

// Total space: O(1) (constant-sized map).