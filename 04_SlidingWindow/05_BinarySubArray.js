// Binary Subarrays With Sum

// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15
 

// Brute Force Approach (O(N²))
// Idea:
// Iterate over all possible subarrays.

// Calculate the sum for each subarray.

// If the sum equals goal, increase the count.

function numSubarraysWithSumBruteForce(nums, goal) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j]; // Compute sum of subarray nums[i:j]
            if (sum === goal) {
                count++;
            }
        }
    }

    return count;
}

// Test cases
console.log(numSubarraysWithSumBruteForce([1, 0, 1, 0, 1], 2)); // Output: 4
console.log(numSubarraysWithSumBruteForce([0, 0, 0, 0, 0], 0)); // Output: 15


// Time Complexity:
// The outer loop runs O(N) times.

// The inner loop runs O(N) times in the worst case.

// Total Complexity: O(N²) (Quadratic).

// Space Complexity:
// O(1) (Only a few integer variables used).


// Optimized Approach using HashMap (O(N))
// Idea:
// Instead of recalculating the sum for every subarray, we use a prefix sum + hash map (frequency map) to count subarrays efficiently.

// Key Observations:
// We keep track of the prefixSum (sum of elements from index 0 to i).

// We check how many times prefixSum - goal has appeared before using a hash map (prefixSumMap).

// If prefixSum - goal exists in the map, it means there exists a subarray ending at i whose sum is goal.


function numSubarraysWithSumOptimized(nums, goal) {
    let count = 0;
    let prefixSum = 0;
    let prefixSumMap = new Map();
    prefixSumMap.set(0, 1); // To handle subarrays starting from index 0

    for (let num of nums) {
        prefixSum += num; // Compute prefix sum
        
        if (prefixSumMap.has(prefixSum - goal)) {
            count += prefixSumMap.get(prefixSum - goal);
        }
        
        // Update prefixSum frequency in the map
        prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum) || 0) + 1);
    }

    return count;
}

// Test cases
console.log(numSubarraysWithSumOptimized([1, 0, 1, 0, 1], 2)); // Output: 4
console.log(numSubarraysWithSumOptimized([0, 0, 0, 0, 0], 0)); // Output: 15

// Time Complexity:
// O(N): We traverse the array once.

// O(1): Hash map operations (insert, get) are constant time on average.

// Space Complexity:
// O(N): In the worst case, we store N prefix sums in the hash map.



// Sliding Window Approach (O(N))
// We can solve this problem using a variable-size sliding window.

// Key Idea:
// We count subarrays with sum at most goal.

// We count subarrays with sum at most goal - 1.

// Their difference gives us the number of subarrays exactly equal to goal.

// Formula:
// countSubarraysWithSum(goal)=countSubarraysWithSumAtMost(goal)−countSubarraysWithSumAtMost(goal - 1)

function countSubarraysWithSumAtMost(nums, goal) {
    if (goal < 0) return 0; // No valid subarray possible if goal is negative
    
    let left = 0, sum = 0, count = 0;
    
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        // If sum exceeds the goal, shrink the window
        while (sum > goal) {
            sum -= nums[left];
            left++;
        }

        // The number of valid subarrays ending at 'right' is (right - left + 1)
        count += right - left + 1;
    }

    return count;
}

function numSubarraysWithSum(nums, goal) {
    return countSubarraysWithSumAtMost(nums, goal) - countSubarraysWithSumAtMost(nums, goal - 1);
}

// Test cases
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2)); // Output: 4
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0)); // Output: 15


// Time Complexity:
// The right pointer moves O(N) times.

// The left pointer moves at most O(N) times in total.

// So, the total complexity is O(N) + O(N) = O(N).

// Space Complexity:
// O(1): We only use a few integer variables (left, right, sum, count).