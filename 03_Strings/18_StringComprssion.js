// 💡 Problem Statement:
// Given a string, compress it by replacing consecutive repeating characters 
// with the character followed by its frequency.along with that return compress string length
// Example:

// "aaabb" → "a3b2" and length of compress string is 4

// "a" → "a"

// "aabbcc" → "a2b2c2" -> length is 6

// Brute Force Approach (O(n²) Time, O(n) Space)
// Idea
// Use a new string compressedString to store the compressed result.

// Iterate through chars and count consecutive occurrences of characters.

// Append the character and its count (if greater than 1) to compressedString.

// Convert compressedString back to chars.

function compress(chars) {
    let compressedString = "";
    let i = 0;

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;

        // Count occurrences
        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }

        // Append to the new string
        compressedString += char;
        if (count > 1) {
            compressedString += count;
        }
    }

    // Modify chars in-place
    for (let j = 0; j < compressedString.length; j++) {
        chars[j] = compressedString[j];
    }

    return [compressedString,compressedString.length];
}




// Optimized Approach (O(n) Time, O(1) Space)
// Key Optimizations
// Instead of using an extra string, modify chars in-place using a write pointer.

// Store character counts as separate digits when count >= 10.

// Use two pointers:

// i → Traverses chars.

// write → Modifies chars in-place

function compress(chars) {
    let write = 0; // Position to write compressed characters
    let i = 0; // Position to traverse original chars array

    while (i < chars.length) {
        let char = chars[i];
        let count = 0;

        // Count occurrences of chars[i]
        while (i < chars.length && chars[i] === char) {
            i++;
            count++;
        }

        // Write the character
        chars[write] = char;
        write++;

        // Write the count if greater than 1
        if (count > 1) {
            let countStr = count.toString(); // Convert count to string
            for (let digit of countStr) {
                chars[write] = digit; // Store each digit separately
                write++;
            }
        }
    }

    return write; // New length of compressed array
}


