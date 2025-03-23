// Count Occurrences in Sorted Array

// Problem Statement: You are given a sorted array containing N integers and a number X, you have to find the occurrences of X in the given array.

// Input:
//  N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
// Output
// : 4
// Explanation:
//  3 is occurring 4 times in 
// the given array so it is our answer.



function count(arr, n, x) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        // counting the occurrences:
        if (arr[i] === x) cnt++;
    }
    return cnt;
}

let arr = [2, 4, 6, 8, 8, 8, 11, 13];
let n = 8, x = 8;
let ans = count(arr, n, x);
console.log("The number of occurrences is:", ans);

// Time Complexity: O(N), N = size of the given array
// Reason: We are traversing the whole array.

// Space Complexity: O(1) as we are not using any extra space.


// Optimal Approach:

// Find the first occurrence of X using binary search.

// Find the last occurrence of X using binary search.

// Count occurrences:

// If X is found, count = lastIndex - firstIndex + 1

// If X is not found, return 0.


function firstOccurrence(arr, x) {
    let low = 0, high = arr.length - 1, result = -1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === x) {
            result = mid;  // Store index
            high = mid - 1; // Search left for first occurrence
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return result;
}

function lastOccurrence(arr, x) {
    let low = 0, high = arr.length - 1, result = -1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === x) {
            result = mid;  // Store index
            low = mid + 1; // Search right for last occurrence
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return result;
}

function countOccurrences(arr, x) {
    let first = firstOccurrence(arr, x);
    let last = lastOccurrence(arr, x);
    
    return first === -1 ? 0 : last - first + 1;
}

// Example
console.log(countOccurrences([2, 2, 3, 3, 3, 3, 4], 3)); // Output: 4


// Input:
// arr = [2, 2, 3, 3, 3, 3, 4], x = 3

// Finding First Occurrence:
// low = 0, high = 6, mid = 3, arr[3] = 3 → Store result = 3, search left (high = 2)

// low = 0, high = 2, mid = 1, arr[1] = 2 → Move right (low = 2)

// low = 2, high = 2, mid = 2, arr[2] = 3 → Store result = 2, search left (high = 1)

// First occurrence = index 2

// Finding Last Occurrence:
// low = 0, high = 6, mid = 3, arr[3] = 3 → Store result = 3, search right (low = 4)

// low = 4, high = 6, mid = 5, arr[5] = 3 → Store result = 5, search right (low = 6)

// low = 6, high = 6, mid = 6, arr[6] = 4 → Move left (high = 5)

// Last occurrence = index 5

// Count Calculation:
// count = lastIndex - firstIndex + 1 = 5 - 2 + 1 = 4

// Time Complexity:
// Finding first occurrence: O(log N)

// Finding last occurrence: O(log N)

// Total: O(log N) + O(log N) = O(log N)