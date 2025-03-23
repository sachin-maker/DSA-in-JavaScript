function removeNonAlphabetic(str) {
    let result = "";
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            result += char; // Append only alphabetic characters
        }
    }
    
    return result;
}

// Example usage:
console.log(removeNonAlphabetic("Hello123! World@2025")); // "HelloWorld"
console.log(removeNonAlphabetic("Te$st%ing* 123")); // "Testing"
console.log(removeNonAlphabetic("1234567890")); // "" (Empty string)
console.log(removeNonAlphabetic("aBcD#eFG@!")); // "aBcDeFG"

// Time & Space Complexity
// Time Complexity: O(N) → Iterates through the string once.

// Space Complexity: O(N) → Stores the modified string.

