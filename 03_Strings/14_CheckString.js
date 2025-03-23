// Check if a String Contains Only Digits

function isNumericLoop(str) {
    if (str.length === 0) return false; // Edge case: Empty string is not numeric

    for (let char of str) {
        if (isNaN(char) || char === " ") return false;
    }
    return true;
}

// Example usage:
console.log(isNumericLoop("12345"));  // true
console.log(isNumericLoop("123a5"));  // false
console.log(isNumericLoop(" "));      // false
console.log(isNumericLoop("007"));    // true
