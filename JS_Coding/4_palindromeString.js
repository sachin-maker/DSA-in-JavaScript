// check given string is palindome or not


function palindromString(str) {
    // Step 1: Normalize the string
    let cleanedStr = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // Step 2: Remove non-alphanumeric characters
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanedStr += char;
        }
    }

    // Step 3: Initialize pointers for palindrome check
    let left = 0;
    let right = cleanedStr.length - 1;
    
    // Step 4: Check for palindrome
    while (left < right) {
        // Compare characters from both ends
        if (cleanedStr[left] !== cleanedStr[right]) {
            // If characters don't match, it's not a palindrome
            return false;
        }
        // Move pointers towards the center
        left++;
        right--;
    }

    // If all characters match, it's a palindrome
    return true;
}

// Example usage
let testString1 = "radar";
let testString2 = "RaceCar";
let testString3 = "A man, a plan, a canal, Panama";
let testString4 = "No lemon, no melon";

console.log(palindromString(testString1));  // Output: true
console.log(palindromString(testString2));  // Output: true
console.log(palindromString(testString3));  // Output: true
console.log(palindromString(testString4));  // Output: true

