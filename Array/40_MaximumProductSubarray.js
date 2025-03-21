// Maximum Product Subarray in an Array
// Problem Statement: Given an array that contains both negative and positive integers, find the maximum product subarray.

// Example 1:
// Input:

//  Nums = [1,2,3,4,5,0]
// Output:

//  120
// Explanation:

//  In the given array, we can see 1×2×3×4×5 gives maximum product value.

// Approach:
// The following approach is motivated by Kandane’s algorithm. To know Kadane’s Algorithm follow Kadane's Algorithm

// The pick point for this problem is that we can get the maximum product from the product of two negative numbers too.

// Following are the steps for the approach:

// Initially store 0th index value in prod1, prod2 and result.
// Traverse the array from 1st index. 
// For each element, update prod1 and prod2.
// Prod1 is maximum of current element, product of current element and prod1, product of current element and prod2
// Prod2 is minimum of current element, product of current element and prod1, product of current element and prod2
// Return maximum of result and prod1




function maxProductSubArray(nums) {
    let prod1 = nums[0], prod2 = nums[0], result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let temp = Math.max(nums[i], prod1 * nums[i], prod2 * nums[i]);
        prod2 = Math.min(nums[i], prod1 * nums[i], prod2 * nums[i]);
        prod1 = temp;

        result = Math.max(result, prod1);
    }

    return result;
}

let nums = [1, 2, -3, 0, -4, -5];
console.log("The maximum product subarray: " + maxProductSubArray(nums));


// Time Complexity: O(N)

// Reason: A single iteration is used.

// Space Complexity: O(1)