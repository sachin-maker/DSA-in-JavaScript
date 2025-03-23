// Peak element in Array

// Problem Statement: Given an array of length N. Peak element is defined as the element greater than both of its neighbors. Formally, if 'arr[i]' is the peak element, 'arr[i - 1]' < 'arr[i]' and 'arr[i + 1]' < 'arr[i]'. Find the index(0-based) of a peak element in the array. If there are multiple peak numbers, return the index of any peak number.

// Input Format: arr[] = {1,2,3,4,5,6,7,8,5,1}
// Result: 7
// Explanation: In this example, there is only 1 peak that is at index 7.




function findPeakElement(arr) {
    let n = arr.length; // Size of array

    for (let i = 0; i < n; i++) {
        // Checking for the peak:
        if ((i === 0 || arr[i - 1] < arr[i])
                && (i === n - 1 || arr[i] > arr[i + 1])) {
            return i;
        }
    }
    // Dummy return statement
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
let ans = findPeakElement(arr);
console.log("The peak is at index:", ans);


// Time Complexity: O(N), N = size of the given array.
// Reason: We are traversing the entire array.

// Space Complexity: O(1) as we are not using any extra space.