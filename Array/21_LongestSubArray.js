// Longest Subarray with given Sum K(Positives)


// BruteForce Approches:-
// Approach:
// The steps are as follows:

// First, we will run a loop(say i) that will select every possible starting index of the subarray. The possible starting indices can vary from index 0 to index n-1(n = size of the array).
// Inside the loop, we will run another loop(say j) that will signify the ending index of the subarray. For every subarray starting from the index i, the possible ending index can vary from index i to n-1(n = size of the array).
// After that for each subarray starting from index i and ending at index j (i.e. arr[i….j]), we will run another loop to calculate the sum of all the elements(of that particular subarray).
// If the sum is equal to k, we will consider its length i.e. (j-i+1). Among all such subarrays, we will consider the maximum length by comparing all the lengths.

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let len = 0;
    for (let i = 0; i < n; i++) { // starting index
        for (let j = i; j < n; j++) { // ending index
            // add all the elements of subarray = a[i...j]
            let s = 0;
            for (let K = i; K <= j; K++) {
                s += a[K];
            }

            if (s === k)
                len = Math.max(len, j - i + 1);
        }
    }
    return len;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);

// Time Complexity: O(N^3) approx., where N = size of the array.
// Reason: We are using three nested loops, each running approximately N times.

// Space Complexity: O(1) as we are not using any extra space.


// Solution 2

// Approach:
// The steps are as follows:

// First, we will run a loop(say i) that will select every possible starting index of the subarray. The possible starting indices can vary from index 0 to index n-1(n = array size).
// Inside the loop, we will run another loop(say j) that will signify the ending index as well as the current element of the subarray. For every subarray starting from the index i, the possible ending index can vary from index i to n-1(n = size of the array).
// Inside loop j, we will add the current element to the sum of the previous subarray i.e. sum = sum + arr[j]. 
// If the sum is equal to k, we will consider its length i.e. (j-i+1). Among all such subarrays with sum k, we will consider the one with the maximum length by comparing all the lengths.


function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let len = 0;
    for (let i = 0; i < n; i++) { // starting index
        let s = 0; // Sum variable
        for (let j = i; j < n; j++) { // ending index
            // add the current element to
            // the subarray a[i...j-1]
            s += a[j];

            if (s === k)
                len = Math.max(len, j - i + 1);
        }
    }
    return len;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);

// Time Complexity: O(N^2) approx., where N = size of the array.
// Reason: We are using two nested loops, each running approximately N times.

// Space Complexity: O(1) as we are not using any extra space.


// Optimal Approches (2 Pointers):- 
// Approach:
// The steps are as follows:

// First, we will take two pointers: left and right, initially pointing to the index 0.
// The sum is set to a[0] i.e. the first element initially.
// Now we will run a while loop until the right pointer crosses the last index i.e. n-1.
// Inside the loop, we will do the following:
// We will use another while loop and it will run until the sum is lesser or equal to k.
// Inside this second loop, from the sum, we will subtract the element that is pointed by the left pointer and increase the left pointer by 1.
// After this loop gets completed, we will check if the sum is equal to k. If it is, we will compare the length of the current subarray i.e. (right-left+1) with the existing one and consider the maximum one.
// Then we will move forward the right pointer by 1. If the right pointer is pointing to a valid index(< n) after the increment, we will add the element i.e. a[right] to the sum.
// Finally, we will return the maximum length.

function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let left = 0, right = 0; // 2 pointers
    let sum = a[0];
    let maxLen = 0;
    while (right < n) {
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while (left <= right && sum > k) {
            sum -= a[left];
            left++;
        }

        // if sum = k, update the maxLen i.e. answer
        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        // Move forward the right pointer
        right++;
        if (right < n) sum += a[right];
    }

    return maxLen;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);

// Time Complexity: O(2*N), where N = size of the given array.
// Reason: The outer while loop i.e. the right pointer can move up to index n-1(the last index). Now, the inner while loop i.e. the left pointer can move up to the right pointer at most. So, every time the inner loop does not run for n times rather it can run for n times in total. So, the time complexity will be O(2*N) instead of O(N2).

// Space Complexity: O(1) as we are not using any extra space.

// Further Optimizations:-
// For arrays containing both positive and negative numbers, 
// this sliding window approach won’t work since reducing the window might 
// eliminate negative numbers that help in achieving the sum. 
// In such cases, we can use HashMap (Prefix Sum + HashMap) – O(N).

// Approach
// Use a prefix sum to track cumulative sums while iterating through the array.
// Use a HashMap (Map in JavaScript) to store the first occurrence of each prefix sum.
// If prefixSum - k exists in the map, it means there exists a subarray with sum k, and we update the max length.
// If prefixSum is not in the map, store it with its index (we only store the first occurrence to get the longest subarray).

function getLongestSubarray(a, k) {
    let prefixSum = 0;
    let maxLen = 0;
    let map = new Map(); // Stores prefixSum -> first index

    for (let i = 0; i < a.length; i++) {
        prefixSum += a[i]; // Update prefix sum

        // If subarray from start index 0 to i has sum k
        if (prefixSum === k) {
            maxLen = i + 1;
        }

        // If (prefixSum - k) exists in map, update maxLen
        if (map.has(prefixSum - k)) {
            maxLen = Math.max(maxLen, i - map.get(prefixSum - k));
        }

        // Store the prefix sum's first occurrence
        if (!map.has(prefixSum)) {
            map.set(prefixSum, i);
        }
    }

    return maxLen;
}

// Test cases
let a = [2, 3, -1, 1, 5, 1, 9]; // Works for positive & negative numbers
let k = 10;
console.log("The length of the longest subarray is:", getLongestSubarray(a, k));

// Time & Space Complexity
// Time Complexity: O(N) → Single pass over the array.
// Space Complexity: O(N) → Storing prefix sums in a map.




