// Print All Substrings of a String
// A substring is a contiguous sequence of characters within a string.

function printAllSubstringsOptimized(str) {
    let n = str.length;
    
    for (let start = 0; start < n; start++) {
        let substr = "";
        for (let end = start; end < n; end++) {
            substr += str[end]; // Dynamically build substring
            console.log(substr);
        }
    }
}

// Example Usage
printAllSubstringsOptimized("abc");
/*
Output:
a
ab
abc
b
bc
c
*/

// 🔹 Complexity Analysis
// Time Complexity: O(N²) (Still iterates over possible substrings)

// Space Complexity: O(1) (No extra storage apart from substr)