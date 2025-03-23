// Search Insert Position

// Problem Statement: You are given a sorted array arr of distinct values and a target value x. You need to search for the index of the target value in the array.

// If the value is present in the array, then return its index. Otherwise, determine the index where it would be inserted in the array while maintaining the sorted order.

// Input Format: arr[] = {1,2,4,7}, x = 6
// Result: 3
// Explanation: 6 is not present in the array. So, if we will insert 6 in the 3rd index(0-based indexing), the array will still be sorted. {1,2,4,6,7}.

// Approach:
// Use binary search to find the exact position where x should be inserted.

// If x exists in arr, return its index.

// Otherwise, return the left boundary (low), which indicates the correct insertion index.

function searchInsert(arr, x) {
    let low = 0, high = arr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) return mid; // Found exact match
        else if (arr[mid] < x) low = mid + 1;
        else high = mid - 1;
    }

    return low; // Insert position
}

// Example
console.log(searchInsert([1, 2, 4, 7], 6)); // Output: 3

// Explanation:
// arr = [1, 2, 4, 7], x = 6

// Start with low = 0, high = 3

// Compute mid = Math.floor((0+3)/2) = 1 → arr[1] = 2

// Since 2 < 6, move low = 2

// Compute mid = Math.floor((2+3)/2) = 2 → arr[2] = 4

// Since 4 < 6, move low = 3

// Compute mid = Math.floor((3+3)/2) = 3 → arr[3] = 7

// Since 7 > 6, move high = 2

// Loop exits, return low = 3

// This solution runs in O(log N) time complexity, making it optimal for large inputs. 🚀







