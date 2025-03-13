// find kth largest Number in Array

// Brute Force Approches Using Built-in function of quick sort
// Sort the array in descending order.
// Return the Kth element.

const kthLargest = (arr, k) => {
    if (arr.length < k) return -1; // Edge case: K is greater than array size

    arr.sort((a, b) => b - a); // Sort in descending order
    return `Sorted Array: ${arr}, Kth largest Element: ${arr[k - 1]}`; 
};

let arr = [10, 2, 4, 6, 11, 9, 53];
console.log(kthLargest(arr, 3)); // Output: Sorted Array: [53, 11, 10, 9, 6, 4, 2], Kth largest Element: 10

// 🔹 Time Complexity: O(N log N) (due to sorting)
// 🔹 Space Complexity: O(1) (modifies the array)


// Brute Force Approches Without Using Built-in function of quick sort


const quickSort = (arr) => {
    if (arr.length <= 1) return arr; // Base case
    
    let pivot = arr[arr.length - 1]; // Choosing last element as pivot
    let left = [], right = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) right.push(arr[i]); // Larger elements go to right
        else left.push(arr[i]); // Smaller elements go to left
    }
    
    return [...quickSort(right), pivot, ...quickSort(left)]; // Sort in descending order
};

const kthLargest = (arr, k) => {
    if (arr.length < k) return -1; // Edge case
    
    let sortedArr = quickSort(arr); // Sort using QuickSort
    return `Sorted Array: ${sortedArr}, Kth largest Element: ${sortedArr[k - 1]}`;
};

let arr = [10, 2, 4, 6, 11, 9, 53];
console.log(kthLargest(arr, 3)); // Output: Sorted Array: [53, 11, 10, 9, 6, 4, 2], Kth largest Element: 10


// Better Approches:-
// Use a Min Heap (Priority Queue) of size K.
// Maintain the K largest elements in the heap.
// The root of the heap will be the Kth largest element.

const kthLargestHeap = (arr, k) => {
    if (arr.length < k) return -1;

    let minHeap = [];

    for (let num of arr) {
        minHeap.push(num);
        minHeap.sort((a, b) => a - b); // Keep the smallest element at the front

        if (minHeap.length > k) {
            minHeap.shift(); // Remove smallest element
        }
    }

    return minHeap[0]; // Root of the heap is the Kth largest element
};

let arr1 = [10, 2, 4, 6, 11, 9, 53];
console.log(kthLargestHeap(arr1, 2)); // Output: 11

// 🔹 Time Complexity: O(N log K)
// 🔹 Space Complexity: O(K)


// Optimal Approches