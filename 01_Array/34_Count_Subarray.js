// Count Subarray sum Equals K

// Problem Statement: Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.

// Brute Force (Nested Loops)
// Idea
// Generate all possible subarrays and check if their sum is equal to k.
// Use two loops:
// The outer loop selects the starting index.
// The inner loop iterates over the subarrays and calculates the sum.

function subarraySumBruteForce(nums, k) {
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            sum += nums[j];
            if (sum === k) {
                count++;
            }
        }
    }

    return count;
}

// Test Case
console.log(subarraySumBruteForce([1, 1, 1], 2)); // Output: 2
console.log(subarraySumBruteForce([1, 2, 3], 3)); // Output: 2

// Time Complexity: O(N^2), where N = size of the array.
// Reason: We are using two nested loops here. As each of them is running for exactly N times, the time complexity will be approximately O(N2).

// Approach 2: Optimized Using HashMap (Prefix Sum)
// Idea
// Use a prefix sum and a hashmap to store the number of times a sum has occurred.
// Instead of checking all subarrays, store the cumulative sum and check if (currentSum - k) exists in the hashmap.
// If prefixSum - k is found in the map, it means there exists a subarray that sums to k.
// Algorithm
// Initialize prefixSum = 0 and a hashmap prefixCount with {0: 1} (handling cases where prefixSum = k).
// Iterate over nums:
// Update prefixSum by adding the current element.
// Check if prefixSum - k exists in prefixCount:
// If it does, add its frequency to count (indicating how many subarrays sum to k).
// Update prefixCount with prefixSum.

function subarraySum(nums, k) {
    let count = 0, prefixSum = 0;
    let prefixCount = new Map();
    prefixCount.set(0, 1);

    for (let num of nums) {
        prefixSum += num;
        
        if (prefixCount.has(prefixSum - k)) {
            count += prefixCount.get(prefixSum - k);
        }
        
        prefixCount.set(prefixSum, (prefixCount.get(prefixSum) || 0) + 1);
    }

    return count;
}

// Test Cases
console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2
console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2, 1], 7)); // Output: 4


// TC=O(N)
// SC=O(N)