// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// 🔹 Approach 1: Brute Force (O(N*M))
// Logic:

// Take the first string as a reference.

// Compare each character of the reference string with the other strings.

// Stop when a mismatch occurs and return the prefix found so far.

function longestCommonPrefixBrute(strs) {
    if (!strs.length) return ""; // Edge case: Empty array

    let prefix = strs[0]; // Take the first string as a reference

    for (let i = 1; i < strs.length; i++) {
        let j = 0;
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++;
        }
        prefix = prefix.substring(0, j); // Update prefix
        if (prefix === "") return ""; // No common prefix
    }

    return prefix;
}

// Example Usage
console.log(longestCommonPrefixBrute(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefixBrute(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefixBrute(["apple", "app", "april"])); // "ap"
console.log(longestCommonPrefixBrute([])); // ""

// 🔹 Complexity Analysis
// Time Complexity: O(N*M) (N = number of strings, M = length of the shortest string).

// Space Complexity: O(1) (Only prefix is used).




// 🔹 Approach 2: Optimized Using Sorting (O(N log N + M))
// Logic:

// Sort the array of strings.

// The common prefix of the first and last strings in the sorted list is the longest common prefix.

function longestCommonPrefixOptimized(strs) {
    if (!strs.length) return "";

    strs.sort(); // Sorting takes O(N log N)
    
    let first = strs[0]; // First string
    let last = strs[strs.length - 1]; // Last string
    let i = 0;

    // Compare first and last string, as they are most different after sorting
    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.substring(0, i);
}

// Example Usage
console.log(longestCommonPrefixOptimized(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefixOptimized(["dog", "racecar", "car"])); // ""
console.log(longestCommonPrefixOptimized(["apple", "app", "april"])); // "ap"
console.log(longestCommonPrefixOptimized([])); // ""

// 🔹 Complexity Analysis
// Sorting: O(N log N)

// Finding common prefix: O(M)

// Overall Complexity: O(N log N + M)

// Space Complexity: O(1) (Only a few variables used)