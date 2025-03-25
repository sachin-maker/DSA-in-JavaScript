// Find length of the longest subarray containing atmost two distinct integers

// Given an array arr[] containing positive elements, the task is to find the length of the longest subarray of an input array containing at most two distinct integers.

// Input: arr[]= [2, 1, 2]
// Output: 3
// Explanation: The entire array [2, 1, 2] contains at most two distinct integers (2 and 1). Hence, the length of the longest subarray is 3.
// Input: arr[] = [3, 1, 2, 2, 2, 2]
// Output: 5
// Explanation: The longest subarray containing at most two distinct integers is [1, 2, 2, 2, 2], which has a length of 5. The subarray starts at the second element 1 and ends at the last element. It contains at most two distinct integers (1 and 2).


// Brute Force Approach (O(n²))
// We check all subarrays and find the longest one containing at most two distinct integers.

// Approach:
// Iterate through all possible subarrays.

// Check if a subarray contains at most two distinct integers.

// Update the maximum length if the condition is satisfied.

function longestSubarrayBruteForce(arr) {
    let maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let uniqueSet = new Set();

        for (let j = i; j < arr.length; j++) {
            uniqueSet.add(arr[j]);

            if (uniqueSet.size > 2) break; // Stop if more than 2 distinct elements

            maxLength = Math.max(maxLength, j - i + 1);
        }
    }

    return maxLength;
}

// Test cases
console.log(longestSubarrayBruteForce([2, 1, 2]));         // Output: 3
console.log(longestSubarrayBruteForce([3, 1, 2, 2, 2, 2])); // Output: 5


// Time Complexity:
// O(n²) because we check all possible subarrays.

// Space Complexity:
// O(3) because we are storing only 3 element.


// Optimized Approach (Sliding Window - O(n))
// Instead of checking all subarrays, we use a sliding window to dynamically adjust the valid range.

// Approach:
// Use two pointers (left and right) to maintain a window with at most two distinct integers.

// Use a hashmap to track the count of elements in the window.

// Expand right pointer to add elements.

// If the window contains more than two distinct elements, move left pointer to shrink the window.

// Keep track of the maximum valid subarray length.


function longestSubarrayWithTwoDistinct(arr) {
    let left = 0, maxLength = 0;
    let freqMap = new Map();

    for (let right = 0; right < arr.length; right++) {
        freqMap.set(arr[right], (freqMap.get(arr[right]) || 0) + 1);

        while (freqMap.size > 2) {
            freqMap.set(arr[left], freqMap.get(arr[left]) - 1);
            if (freqMap.get(arr[left]) === 0) {
                freqMap.delete(arr[left]);
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test cases
console.log(longestSubarrayWithTwoDistinct([2, 1, 2]));         // Output: 3
console.log(longestSubarrayWithTwoDistinct([3, 1, 2, 2, 2, 2])); // Output: 5


// Time Complexity Breakdown for the Optimal Approach:
// The right pointer moves from 0 to n - 1, meaning it moves O(n) times.

// The left pointer only moves forward when there are more than 2 distinct elements. Since every element is processed at most twice (once when added, once when removed), the left pointer also moves O(n) times.

// Thus, in the worst case, both pointers together move O(2N), but since constants are ignored in Big-O notation, we simplify it to O(N).

//  Space Complexity:
// O(3) because we are storing only 3 element.