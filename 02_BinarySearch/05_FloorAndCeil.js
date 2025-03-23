// Floor and Ceil in Sorted Array

// Problem Statement: You're given an sorted array arr of n integers and an integer x. Find the floor and ceiling of x in arr[0..n-1].
// The floor of x is the  element in the array which is smaller than or equal to x.
// The ceiling of x is the  element in the array greater than or equal to x.

// Input Format: n = 6, arr[] ={3, 4, 4, 7, 8, 10}, x= 5
// Result: 4 7
// Explanation: The floor of 5 in the array is 4, and the ceiling of 5 in the array is 7.

function findFloorCeil(arr, x) {
    let low = 0, high = arr.length - 1;
    let floor = -1, ceil = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            return [arr[mid], arr[mid]]; // If x is found, both floor and ceil are x
        } else if (arr[mid] < x) {
            floor = arr[mid]; // Potential floor candidate
            low = mid + 1;
        } else {
            ceil = arr[mid]; // Potential ceil candidate
            high = mid - 1;
        }
    }

    return [floor, ceil];
}

// Example
console.log(findFloorCeil([3, 4, 4, 7, 8, 10], 5)); // Output: [4, 7]

// Input:
// arr = [3, 4, 4, 7, 8, 10], x = 5

// Steps:
// Start low = 0, high = 5

// Compute mid = Math.floor((0+5)/2) = 2 → arr[2] = 4

// Since 4 < 5, update floor = 4 and move low = 3

// Compute mid = Math.floor((3+5)/2) = 4 → arr[4] = 8

// Since 8 > 5, update ceil = 8 and move high = 3

// Compute mid = Math.floor((3+3)/2) = 3 → arr[3] = 7

// Since 7 > 5, update ceil = 7 and move high = 2

// Loop exits, return [4, 7]

// O(log N) due to binary search.