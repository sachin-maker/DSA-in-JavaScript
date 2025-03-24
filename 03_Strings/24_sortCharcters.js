// sort characters by frequency

// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.




// Problem Breakdown
// We need to:

// Count the frequency of each character in the string.
// Sort the characters by their frequency in decreasing order.
// Construct a string where characters appear together, ordered by frequency.

function frequencySort(s) {
    let freqMap = new Map();

    // Count frequency of each character
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Convert map to array and sort by frequency
    let sortedChars = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

    // Build result string
    let result = "";
    for (let [char, freq] of sortedChars) {
        result += char.repeat(freq);
    }

    return result;
}

console.log(frequencySort("tree"));    // Output: "eert" or "eetr"
console.log(frequencySort("cccaaa"));  // Output: "cccaaa" or "aaaccc"
console.log(frequencySort("Aabb"));    // Output: "bbAa" or "bbaA"


// Time Complexity:
// Counting frequencies → O(N)
// Sorting → O(N log N)
// Building the result string → O(N)

// Total Complexity: O(N)+O(NlogN)+O(N)
// Space Cpmplexity :(N)
