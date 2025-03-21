// Sort an array of 0s, 1s and 2s

// Better Approach - O(2N) Time, O(1) Space (Using Counting Sort)
// Approach:
// Count the number of 0s, 1s, and 2s.
// Overwrite the array based on these counts.

function sort(arr) {
    let count0 = 0, count1 = 0, count2 = 0;

    // Count occurrences of 0s, 1s, and 2s
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) count0++;
        else if (arr[i] === 1) count1++;
        else count2++;
    }

    // Overwrite array with sorted elements
    for (let i = 0; i < count0; i++) {
        arr[i] = 0;
    }
    for (let j = count0; j < count0 + count1; j++) {
        arr[j] = 1;
    }
    for (let k = count0 + count1; k < arr.length; k++) {
        arr[k] = 2;
    }

    return arr;
}

// Test case
let arr = [1, 2, 0, 1, 2, 0, 0, 2, 1];
console.log(sort(arr)); // Output: [0, 0, 0, 1, 1, 1, 2, 2, 2]


// Optimal Approch

// Approach:
// Use three pointers:
// low (for 0s)
// mid (for 1s)
// high (for 2s)
// Traverse the array:
// If arr[mid] === 0, swap arr[mid] and arr[low], then move both pointers.
// If arr[mid] === 1, move mid.
// If arr[mid] === 2, swap arr[mid] and arr[high], then move high backward.
// Repeat until mid crosses high.

function sortArrayDutchFlag(arr) {
    let low = 0, mid = 0, high = arr.length - 1;

    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
}

// Test case
let arr3 = [2, 0, 2, 1, 1, 0];
sortArrayDutchFlag(arr3);
console.log(arr3); // Output: [0, 0, 1, 1, 2, 2]


// Time Complexity: O(N) (single pass)
// Space Complexity: O(1) (sorting in-place)