// find kth Smallet Number in Array

// Brute Force Approches Using Built-in function of quick sort
// Sort the array in ascendind order.
// Return the Kth element.

function KthSmallest(arr, k) {
    if (arr.length < k) return -1; // Edge case: If K is larger than array size

    arr.sort((a, b) => a - b); // Sorting in ascending order
    return arr[k - 1]; // Returning the Kth smallest element (1-based index)
}

// Test cases
console.log(KthSmallest([12, 3, 5, 7, 19], 2)); // Output: 5
console.log(KthSmallest([10, 4, 3, 20, 15], 3)); // Output: 10
console.log(KthSmallest([1, 1, 1, 1, 1], 2)); // Output: -1 (since no 2nd smallest exists)
console.log(KthSmallest([], 1)); // Output: -1 (empty array case)

// 🔹 Time Complexity: O(N log N) (due to sorting)
// 🔹 Space Complexity: O(1) (modifies the array)

//2nd Approch


let arr = [22, 44, 11, 2, 3, 4, 5, 66, 77];

function kthSmallest(arr, k) {
    if (arr.length < k) return -1;

    let sortedArr = quicksort(arr);

    return sortedArr[k - 1];
}

function quicksort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [
        ...quicksort(left),
        pivot,
        ...quicksort(right)
    ];
}

console.log(kthSmallest(arr, 2)); // 3


* **Kth Largest → descending order → `arr[k - 1]`**

Average time complexity: **O(n log n)**
Worst case: **O(n²)**
