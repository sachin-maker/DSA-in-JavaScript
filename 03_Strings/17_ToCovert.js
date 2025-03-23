// Convert lowercase to uppercase without toUpperCase()

// 💡 Approach:

// Iterate through the string character by character.

// If a character is in the lowercase range ('a' - 'z'), convert it to uppercase using ASCII manipulation:

// 'A' is 65, 'a' is 97 → Difference = 32

// Convert lowercase letter to uppercase using charCodeAt() and String.fromCharCode().

// Append characters to the result string.

function toUpperCaseManual(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let ascii = char.charCodeAt(0);

        if (ascii >= 97 && ascii <= 122) { // 'a' to 'z'
            result += String.fromCharCode(ascii - 32); // Convert to uppercase
        } else {
            result += char; // Keep other characters unchanged
        }
    }

    return result;
}

// Example usage:
console.log(toUpperCaseManual("hello")); // "HELLO"
console.log(toUpperCaseManual("JavaScript")); // "JAVASCRIPT"
console.log(toUpperCaseManual("Convert This!")); // "CONVERT THIS!"
console.log(toUpperCaseManual("123abcDEF!@#")); // "123ABCDEF!@#"


// 🔹 Time & Space Complexity
// Time Complexity: O(N) → Iterates through the string once.

// Space Complexity: O(N) → Stores the new string.