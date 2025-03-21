// You are given a sorted array of integers and a target, your task is to search 
// for the target in the given array. Assume the given array does not contain any duplicate numbers.



function binarySearch(arr, target) {
    let low = 0, high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) return mid; // Target found
        else if (arr[mid] < target) low = mid + 1; // Search right half
        else high = mid - 1; // Search left half
    }

    return -1; // Target not found
}

// Test Cases
console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(binarySearch([2, 4, 6, 8, 10], 7)); // Output: -1
console.log(binarySearch([-5, -2, 0, 3, 6, 9], 3)); // Output: 3


// ✅ Time Complexity:

// Best case: O(1) (target found at mid in first step)
// Worst/Average case: O(log N) (dividing the array in half each step)
// ✅ Space Complexity: O(1) (constant extra space)


// Binary Search Code (Recursive)
function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) return -1; // Base case: Not found

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid; // Found target
    else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, high); // Search right half
    else return binarySearchRecursive(arr, target, low, mid - 1); // Search left half
}

// Test Cases
console.log(binarySearchRecursive([1, 3, 5, 7, 9], 5)); // Output: 2
console.log(binarySearchRecursive([2, 4, 6, 8, 10], 7)); // Output: -1
console.log(binarySearchRecursive([-5, -2, 0, 3, 6, 9], 3)); // Output: 3


// ✅ Time Complexity: O(log N)
// ✅ Space Complexity: O(log N) (due to recursive calls)

// 💡 Key Takeaways:
// Linear Search works for unsorted arrays but is slower: O(N).
// Binary Search is fast (O(log N)) but requires a sorted array.
// If the array is already sorted, always prefer Binary Search.
// If the array is small or unsorted, Linear Search is simpler.