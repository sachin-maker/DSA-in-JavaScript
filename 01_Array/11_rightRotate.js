// To right rotate an array by one position without using built-in functions, follow this approach:

const rightRotate = (arr) => {
    let n = arr.length;
    let lastElement = arr[n - 1]; // Store the last element

    // Shift all elements to the right
    for (let i = n - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = lastElement; // Place the last element at the first position
    return arr;
};

// Example Usage
let arr = [1, 2, 3, 4, 5];
console.log(rightRotate(arr)); // Output: [5, 1, 2, 3, 4]

// Time Complexity:
// O(N) → Since we iterate through the array once.
// Space Complexity:
// O(1) → No extra space is used.



// Implementation Using Built-in Functions:
const rightRotate = (arr) => {
    arr.unshift(arr.pop()); // Remove last element and insert it at the beginning
    return arr;
};

// Example Usage
let arr = [1, 2, 3, 4, 5];
console.log(rightRotate(arr)); // Output: [5, 1, 2, 3, 4]

// Explanation:
// pop() removes the last element (5) from the array and returns it.
// unshift() inserts the removed element at the beginning.

// Time Complexity:
// pop() → O(1)
// unshift() → O(N) (since it shifts all elements to the right)
// Total Time Complexity: O(N)