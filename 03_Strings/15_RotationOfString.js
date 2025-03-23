// Check if a String is a Rotation of Another String

// Check if a String is a Rotation of Another String
// We can check if one string is a rotation of another using a simple trick:

// 💡 Key Insight:
// If s2 is a rotation of s1, then s2 must be a substring of s1 + s1.

// Check Length: If s1.length !== s2.length, return false.

// Concatenate s1 with itself (s1 + s1).

// Check if s2 is a substring of s1 + s1.

function isRotation(s1, s2) {
    if (s1.length !== s2.length) return false;
    
    let combined = s1 + s1;
    return combined.includes(s2);
}

// Example usage:
console.log(isRotation("waterbottle", "erbottlewat")); // true
console.log(isRotation("abcd", "cdab")); // true
console.log(isRotation("hello", "lohel")); // true
console.log(isRotation("hello", "world")); // false
console.log(isRotation("abc", "acb")); // false

// Time & Space Complexity
// Time Complexity: O(N) → includes() runs in O(N).

// Space Complexity: O(N) → Due to s1 + s1 storing a duplicate of s1.