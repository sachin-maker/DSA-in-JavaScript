// Longest Consecutive Sequence in an Array

// Problem Statement: You are given an array of ‘N’ integers. 
// You need to find the length of the longest sequence which 
// contains the consecutive elements.

// Example 1:
// Input:
//  [100, 200, 1, 3, 2, 4]

// Output:
//  4

// Explanation:
//  The longest consecutive subsequence is 1, 2, 3, and 4.

// Algorithm:
// To begin, we will utilize a loop to iterate through each element one by one.
// Next, for every element x, we will try to find the consecutive elements 
// like x+1, x+2, x+3, and so on using the linear search algorithm in the given array.
// Within a loop, our objective is to locate the next consecutive element x+1. 
// If this element is found, we increment x by 1 and continue the search for x+2. 
// Furthermore, we increment the length of the current sequence (cnt) by 1. 

// This process repeats until step 2.2 occurs.

// If a specific consecutive element, for example, x+i, is not found, 
// we will halt the search for subsequent consecutive elements such as x+i+1, x+i+2,
//  and so on. Instead, we will take into account the length of the current sequence (cnt).
// Among all the lengths we get for all the given array elements, the maximum one will be the answer.




function linearSearch(arr, num) {
    let n = arr.length; // size of array
    for (let i = 0; i < n; i++) {
        if (arr[i] === num)
            return true;
    }
    return false;
}

function longestSuccessiveElements(arr) {
    let n = arr.length; // size of array
    let longest = 1;
    // pick an element and search for its
    // consecutive numbers:
    for (let i = 0; i < n; i++) {
        let x = arr[i];
        let cnt = 1;
        // search for consecutive numbers
        // using linear search:
        while (linearSearch(arr, x + 1) === true) {
            x += 1;
            cnt += 1;
        }

        longest = Math.max(longest, cnt);
    }
    return longest;
}

let arr = [100, 200, 1, 2, 3, 4];
let ans = longestSuccessiveElements(arr);
console.log("The longest consecutive sequence is", ans);

// Time Complexity: O(N2), N = size of the given array.
// Reason: We are using nested loops each running for approximately N times.

// Space Complexity: O(1), as we are not using any extra space to solve this problem.

// Better Approche
// First, we will sort the entire array.
// To begin, we will utilize a loop(say i) to iterate through each element one by one.
// For every element, we will check if this can be a part of the current sequence like the following:
// If arr[i]-1 == lastSmaller: The last element in our sequence is labeled 
// as 'lastSmaller' and the current element 'arr[i]' is exactly 'lastSmaller'+1. 
// It indicates that 'arr[i]' is the next consecutive element. To incorporate it into the sequence,
//  we update 'lastSmaller' with the value of 'arr[i]' and increment the length of the current sequence, denoted as 'cnt', by 1.
// If arr[i] == lastSmaller: If the current element, arr[i], 
// matches the last element of the sequence (represented by 'lastSmaller'), 
// we can skip it since we have already included it before.
// Otherwise, if lastSmaller != arr[i]: On satisfying this condition, 
// we can conclude that the current element, arr[i] > lastSmaller+1. 
// It indicates that arr[i] cannot be a part of the current sequence.
//  So, we will start a new sequence from arr[i] by updating ‘lastSmaller’ 
// with the value of arr[i]. And we will set the length of the current sequence(cnt) to 1.
// Every time, inside the loop, we will compare ‘cnt’ and ‘longest’
//  and update ‘longest’ with the maximum value. longest = max(longest, cnt)
// Finally, once the iteration is complete,
//  we will have the answer stored in the variable ‘longest’.




function longestSuccessiveElements(arr) {
    let n = arr.length;
    if (n === 0) return 0;

    // sort the array:
    arr.sort((a, b) => a - b);
    let lastSmaller = -Infinity;
    let cnt = 0;
    let longest = 1;

    // find longest sequence:
    for (let i = 0; i < n; i++) {
        if (arr[i] - 1 === lastSmaller) {
            // arr[i] is the next element of the
            // current sequence.
            cnt += 1;
            lastSmaller = arr[i];
        } else if (arr[i] !== lastSmaller) {
            cnt = 1;
            lastSmaller = arr[i];
        }
        longest = Math.max(longest, cnt);
    }
    return longest;
}

let arr = [100, 200, 1, 2, 3, 4];
let ans = longestSuccessiveElements(arr);
console.log("The longest consecutive sequence is", ans);

// Time Complexity: O(NlogN) + O(N), N = size of the given array.
// Reason: O(NlogN) for sorting the array. To find the longest sequence, we are using a loop that results in O(N).

// Space Complexity: O(1), as we are not using any extra space to solve this problem.


// Optimal Approch
