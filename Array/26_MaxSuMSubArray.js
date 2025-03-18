// Maximum Subarray Sum in an Array
// Given an integer array arr, find the contiguous subarray (containing at least one number) which
// has the largest sum and returns its sum and prints the subarray.

// Brute Force Approach (O(N²))
// Approach
// Try all possible subarrays.
// Compute the sum of each subarray and keep track of the maximum sum found.
// Time Complexity: O(N²), because we generate all subarrays and calculate their sums.

function maxSubarraySumBrute(arr) {
    let maxSum = -1;
    let start = 0, end = 0;

    for (let i = 0; i < arr.length; i++) { // Start index
        let sum = 0;
        for (let j = i; j < arr.length; j++) { // End index
            sum += arr[j]; // Calculate subarray sum
            
            if (sum > maxSum) {
                maxSum = sum;
                start = i;
                end = j;
            }
        }
    }

    let maxSubarray = arr.slice(start, end + 1);
    console.log("Brute Force - Maximum Sum:", maxSum);
    console.log("Brute Force - Subarray:", maxSubarray);

    return maxSum;
}

// Example Test
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubarraySumBrute(arr);


// Kadane’s Algorithm (O(N)) - Optimal
// Algorithm
// Initialize variables:

// maxSum to store the maximum sum found so far.
// currentSum to store the sum of the current subarray.
// start, end, and tempStart to track the indices of the subarray.
// Iterate through the array:

// Add the current element to currentSum.
// If currentSum exceeds maxSum, update maxSum and track the indices.
// If currentSum drops below 0, reset it and update tempStart.
// Print the subarray and return the maximum sum.

function maxSubarraySum(arr) {
    let maxSum = Number.NEGATIVE_INFINITY; // Store the maximum sum
    let currentSum = 0;

    let start = 0, end = 0, tempStart = 0; // To track subarray indices

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        // Update maxSum and subarray indices
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        // Reset currentSum if it drops below 0
        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
        }
    }

    // Extract the subarray
    let maxSubarray = arr.slice(start, end + 1);

    console.log("Maximum Sum:", maxSum);
    console.log("Subarray:", maxSubarray);

    return maxSum;
}

// Example Test Case
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubarraySum(arr);


// Time Complexity Analysis
// Single loop iteration through the array → O(N).
// Extracting the subarray using .slice(start, end + 1) → O(N) in the worst case.
// Overall Complexity → O(N) + O(N) ≈ O(N).