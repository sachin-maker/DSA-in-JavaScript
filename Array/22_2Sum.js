// Given an array of integers arr[] and an integer target.
// Return indices of the two numbers such that their sum is equal to the target. 
// 
//Otherwise, we will return {-1, -1}.first brute force and then optimal

// Brute Force Approach (O(N²))
// Approach:
// Use two nested loops to check every pair of elements.
// If their sum equals target, return the indices.
// If no pair is found, return [-1, -1].
// Time Complexity: O(N²) (since we check all pairs).
// Space Complexity: O(1) (no extra space used).

function twoSumBruteForce(arr, target) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]; // Return the indices of the pair
            }
        }
    }
    return [-1, -1]; // If no pair is found
}

// Test case
console.log(twoSumBruteForce([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSumBruteForce([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSumBruteForce([1, 2, 3], 7)); // Output: [-1, -1]


// Optimal Approach (HashMap) – O(N)
// Approach:
// Use a HashMap (Map in JavaScript) to store numbers and their indices.
// For each number arr[i], check if target - arr[i] exists in the map.
// If yes, return the indices. Otherwise, store arr[i] in the map.
// Time Complexity: O(N) (single pass lookup).
// Space Complexity: O(N) (storing values in a map).

function twoSumOptimal(arr, target) {
    let map = new Map(); // To store numbers and their indices

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]; // Find required pair value

        if (map.has(complement)) {
            return [map.get(complement), i]; // Return indices
        }

        map.set(arr[i], i); // Store the value and index
    }

    return [-1, -1]; // If no pair found
}

// Test cases
console.log(twoSumOptimal([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSumOptimal([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSumOptimal([1, 2, 3], 7)); // Output: [-1, -1]

// Optimized Approach (Sorting + Two Pointers) – O(N log N) Time, O(1) Space
// Steps:
// Sort the array (O(N log N)).
// Use two pointers:
// Left pointer at 0
// Right pointer at n - 1
// Move pointers based on sum:
// If arr[left] + arr[right] == target, return their original indices.
// If sum is too small, move left forward.
// If sum is too large, move right backward.
// If no pair is found, return [-1, -1].

function twoSumSorted(arr, target) {
    // Store original indices before sorting
    let indexedArr = arr.map((num, index) => ({ num, index }));

    // Sort array based on values
    indexedArr.sort((a, b) => a.num - b.num);

    let left = 0, right = indexedArr.length - 1;

    while (left < right) {
        let sum = indexedArr[left].num + indexedArr[right].num;

        if (sum === target) {
            return [indexedArr[left].index, indexedArr[right].index]; // Return original indices
        } else if (sum < target) {
            left++; // Increase left pointer
        } else {
            right--; // Decrease right pointer
        }
    }

    return [-1, -1]; // If no pair is found
}

// Test cases (works for unsorted arrays)
console.log(twoSumSorted([3, 2, 4], 6)); // Output: [1, 2] (Original indices)
console.log(twoSumSorted([7, 11, 2, 15, 4], 9)); // Output: [2, 4]
console.log(twoSumSorted([1, 2, 3, 4, 5], 10)); // Output: [-1, -1]

// The total time complexity of this approach is O(N log N) + O(N) ≈ O(N log N) because:

// Sorting the array takes O(N log N).
// Using the two-pointer technique takes O(N) (since we traverse the array once).
// Thus, the overall complexity remains O(N log N).