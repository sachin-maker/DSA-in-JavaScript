// Intersection of Two Sorted Arrays
// The intersection of two arrays consists of the common elements appearing in both arrays.

// Brute Force Approach (Using Hash Map)
// Steps:
// Store frequency of elements from the smaller array in a hash map.
// Check elements of the larger array against this hash map.
// Add matching elements to the result.

const intersectionBruteForce = (arr1, arr2) => {
    let freqMap = new Map();
    let result = [];

    // Store occurrences of arr1 elements in a hash map
    for (let num of arr1) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Check arr2 elements against hash map
    for (let num of arr2) {
        if (freqMap.has(num) && freqMap.get(num) > 0) {
            result.push(num);
            freqMap.set(num, freqMap.get(num) - 1); // Decrement count
        }
    }

    return result;
};

// Example Usage
let arr1 = [1, 2, 2, 3, 4, 5];
let arr2 = [2, 2, 3, 6];

console.log(intersectionBruteForce(arr1, arr2)); // Output: [2, 2, 3]

// Time & Space Complexity:
// Time Complexity: O(N + M) (Traversing both arrays once)
// Space Complexity: O(min(N, M)) (Using a hash map for the smaller array)



// Optimal Approach (Two-Pointer Method)
// This approach works only for sorted arrays and eliminates the need for extra space.

// Steps:
// Initialize two pointers i and j at the start of both arrays.
// Compare elements at both pointers:
// If both elements are equal, add to the result and move both pointers.
// If arr1[i] < arr2[j], move i forward.
// If arr1[i] > arr2[j], move j forward.
// Continue until one array is fully traversed.

const intersectionOptimal = (arr1, arr2) => {
    let i = 0, j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            // Avoid duplicates in result
            if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
                result.push(arr1[i]);
            }
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};

// Example Usage
let arr1 = [1, 2, 2, 3, 4, 5];
let arr2 = [2, 2, 3, 6];

console.log(intersectionOptimal(arr1, arr2)); // Output: [2, 3]

// Time & Space Complexity:
// Time Complexity: O(N + M) (Single pass through both arrays)
// Space Complexity: O(1) (No extra space used)