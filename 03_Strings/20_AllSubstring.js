// Print All Substrings of a String
// A substring is a contiguous sequence of characters within a string.

function getAllSubstrings(str) {
    let n = str.length;
    const result = [];
    
    for (let start = 0; start < n; start++) {
        let substr = "";
        for (let end = start; end < n; end++) {
            substr += str[end];
            result.push(substr);
        }
    }
    
    return result;
}

let str = "aabbc";
const substrings = getAllSubstrings(str);
console.log(substrings);


// Output :-[
//     'a', 'aa', 'aab', 'aabb', 'aabbc',
//     'b', 'bb', 'bbc',
//     'b', 'bc',
//     'c'
//   ]


// Time Complexity (TC)
// Outer loop (start) → Runs O(N)

// Inner loop (end) → Runs O(N)

// String concatenation (substr += str[end]) → Takes O(N) in worst case because JavaScript strings are immutable, meaning each concatenation creates a new string, leading to O(N) per iteration.
// So  ✅ Total TC is O(N^3)

// Space Complexity (SC)
// Result array (result) stores O(N²) substrings

// A string of length N has O(N²) substrings.

// Each substring takes space

// The total storage required for substrings is O(N²) (since storing all substrings requires quadratic space).

// Temporary substr variable

// At worst, it holds a string of length O(N) at a time, but this doesn't change the overall asymptotic space complexity.

// ✅ Final SC: O(N²) (dominant factor is the stored substrings)