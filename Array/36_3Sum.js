// 3 Sum : Find triplets that add up to a zero

// Problem Statement: Given an array of N integers, your task is to 
// find unique triplets that add up to give a sum of zero.
//  In short, you need to return an array of all the unique triplets
//   [arr[a], arr[b], arr[c]] such that i!=j, j!=k, k!=i, and their sum is equal to zero.

// Approach 1: Brute Force (O(N³))
// Idea
// Use three nested loops to generate all possible triplets.
// Check if the sum is zero.
// Use a set to avoid duplicate triplets.

function threeSumBruteForce(nums) {
    let result = new Set();
    let n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                    result.add(triplet.toString());
                }
            }
        }
    }
    
    return Array.from(result).map(t => t.split(',').map(Number));
}

// Test Case
console.log(threeSumBruteForce([-1, 0, 1, 2, -1, -4])); 

// Time Complexity
// O(N³) due to three nested loops.
// Space Complexity
// O(N) for storing unique triplets.


// Approach 2: Optimized Using Two-Pointer (O(N²))
// Idea
// Sort the array to easily avoid duplicates.
// Fix one element (nums[i]) and use a two-pointer approach to find the remaining two numbers.
// Avoid duplicates by skipping the same values.
// Algorithm
// Sort nums to handle duplicates efficiently.
// Loop i from 0 to n - 2:
// If nums[i] is the same as nums[i - 1], skip it to avoid duplicate triplets.
// Use two pointers (left and right):
// If sum < 0: Move left forward.
// If sum > 0: Move right backward.
// If sum == 0: Add to result and skip duplicates.
// Return the result.

function threeSum(nums) {
    let result = [];
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate numbers

        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Move left pointer to increase sum
            } else {
                right--; // Move right pointer to decrease sum
            }
        }
    }

    return result;
}

// Test Cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); 
console.log(threeSum([0, 0, 0, 0])); 
console.log(threeSum([-2, 0, 1, 1, 2])); 


// Step	            Time Complexity
// Sorting	        O(N log N)
// Outer Loop	    O(N)
// Two-pointer Search (for each i)	O(N)

// Total Complexity	O(N log N) + O(N²) ≈ O(N²)
// Space Complexity O(N) for Storage