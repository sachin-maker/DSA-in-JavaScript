// Write a function that determines if two strings are anagrams of each other 


function anagram(str1, str2) {
    // Check if lengths of both strings are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Convert strings to arrays, sort them, and join them back to strings
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

var str1 = "listen";
var str2 = "silent";

console.log(anagram(str1, str2)); // Output: true


// ====================================================================

// without built in function



function anagram(str1, str2) {
    // Check if lengths of both strings are equal
    if (str1.length !== str2.length) {
        return false;
    }

    // Create an array to count characters, assuming ASCII (128 characters)
    let charCount = new Array(128).fill(0);

    // Increment count for each character in str1
    for (let i = 0; i < str1.length; i++) {
        charCount[str1.charCodeAt(i)]++;
    }

    // Decrement count for each character in str2
    for (let i = 0; i < str2.length; i++) {
        charCount[str2.charCodeAt(i)]--;
    }

    // Check if all counts are zero
    for (let i = 0; i < charCount.length; i++) {
        if (charCount[i] !== 0) {
            return false;
        }
    }

    return true;
}

var str1 = "listen";
var str2 = "silent";

console.log(anagram(str1, str2)); // Output: true
