// Given a binary array nums and an integer k, 
// return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// By flipping at most 2 zeros, we get the longest streak:


// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// By flipping at most 3 zeros, we get:

// Approach 1: Brute Force (O(N²))
// Steps
// Try every possible subarray.

// Count the number of 0s in each subarray.

// If the number of 0s is ≤ k, calculate its length and update maxLength.

function longestOnes(nums, k) {
    let n = nums.length;
    let maxLength = 0;

    for (let start = 0; start < n; start++) {
        let zeroCount = 0;

        for (let end = start; end < n; end++) {
            if (nums[end] === 0) zeroCount++;
            if (zeroCount > k) break;

            maxLength = Math.max(maxLength, end - start + 1);
        }
    }

    return maxLength;
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); // Output: 6
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)); // Output: 10


// Time Complexity
// Outer loop: O(N)

// Inner loop: O(N)

// Total Complexity: O(N²)

// Space Complexity
// O(1) (only variables used)

// Explaination:-
// Iteration 1 (start = 0):

// end	Subarray	   ZeroCount	Valid?	maxLength
// 0	[1]	            0	        ✅ Yes	1
// 1	[1,1]	        0         	✅ Yes	2
// 2	[1,1,1]    	    0       	✅ Yes	3
// 3	[1,1,1,0]	    1	        ✅ Yes	4
// 4	[1,1,1,0,0]	    2	        ✅ Yes	5
// 5	[1,1,1,0,0,0]	3	        ❌ No	(stop here)

// Iteration 2 (start = 1):
// Inner loop (end moves from 1 → 10)
// end	Subarray	     ZeroCount	Valid?	maxLength
// 1	[1]              	0	✅ Yes	5
// 2	[1,1]            	0	✅ Yes	5
// 3	[1,1,0]          	1	✅ Yes	5
// 4	[1,1,0,0]       	2	✅ Yes	5
// 5	[1,1,0,0,0]      	3	❌ No	(stop)

// Continue until start = 10
// Each time, we check all subarrays and update maxLength.
// The maximum consecutive 1s found with at most k=2 flips is 6.

 
// Approach 2: Sliding Window (O(N))
// Instead of checking all subarrays, we use a two-pointer (sliding window) approach.

// Steps
// Expand right until the number of 0s in the window exceeds k.

// If zeroCount > k, shrink left until zeroCount <= k.

// Keep track of max length.


function longestOnes(nums, k) {
    let left = 0, maxLength = 0, zeroCount = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCount++;

        while (zeroCount > k) {
            if (nums[left] === 0) zeroCount--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); // Output: 6
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)); // Output: 10


// Time Complexity
// O(N) → Each element is processed at most twice (left and right move forward)

// Space Complexity
// O(1) → Only a few variables used