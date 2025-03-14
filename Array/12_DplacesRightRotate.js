// Right Rotate an Array by D Places
// Brute Force Approach (Using Temporary Array)
// Steps:
// Store the last d elements in a temporary array.
// Shift the remaining (n-d) elements to the right.
// Copy back the stored d elements to the front.

const rightRotate = (arr, d, n) => {
    d = d % n; // Handle cases where d > n
    let temp = new Array(d);

    // Store last D elements in temp
    for (let i = 0; i < d; i++) {
        temp[i] = arr[n - d + i];
    }

    // Shift the remaining elements to the right
    for (let i = n - d - 1; i >= 0; i--) {
        arr[i + d] = arr[i];
    }

    // Copy back D elements from temp to the front
    for (let i = 0; i < d; i++) {
        arr[i] = temp[i];
    }

    return arr;
};

// Example Usage
let arr = [1, 2, 3, 4, 5];
let d = 2;
let n = arr.length;
console.log(rightRotate(arr, d, n)); // Output: [4, 5, 1, 2, 3]

// Time Complexity:
// O(D) + O(N-D) + O(D) = O(N)
// Space Complexity:
// O(D) → Uses extra space for the temporary array

// Optimal Approach (Using Reversal Algorithm)
// Steps:
// Reverse the whole array.
// Reverse the first d elements.
// Reverse the remaining n-d elements.

const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        start++;
        end--;
    }
};

const rightRotate = (arr, d, n) => {
    d = d % n; // Handle cases where d > n

    // Step 1: Reverse the entire array
    reverse(arr, 0, n - 1);

    // Step 2: Reverse the first d elements
    reverse(arr, 0, d - 1);

    // Step 3: Reverse the remaining (n-d) elements
    reverse(arr, d, n - 1);

    return arr;
};

// Example Usage
let arr = [1, 2, 3, 4, 5];
let d = 2;
let n = arr.length;
console.log(rightRotate(arr, d, n)); // Output: [4, 5, 1, 2, 3]

// Explanation (Step-by-Step):
// Reverse the whole array: [1, 2, 3, 4, 5] → [5, 4, 3, 2, 1]
// Reverse the first d elements: [5, 4] → [4, 5, 3, 2, 1]
// Reverse the last n-d elements: [3, 2, 1] → [4, 5, 1, 2, 3]

// Time Complexity:
// O(N) → Each reversal is O(N), and we do it three times.
// Space Complexity:
// O(1) → No extra space is used (modifies the array in place).