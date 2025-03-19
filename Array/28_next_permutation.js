// next_permutation : find next lexicographically greater permutation

// Given an array Arr[] of integers, rearrange the numbers of the given array
//  into the lexicographically next greater permutation of numbers.

// If such an arrangement is not possible, it must rearrange to the lowest 
// possible order (i.e., sorted in ascending order).

// Input format:
//  Arr[] = {1,3,2}
// Output
// : Arr[] = {2,1,3}
// Explanation: 
// All permutations of {1,2,3} are {{1,2,3} , {1,3,2}, {2,1,3} , {2,3,1} , 
// {3,1,2} , {3,2,1}}. So, the next permutation just after {1,3,2} is {2,1,3}.


// Brute Force: Finding all possible permutations. 

// Step 1: Find all possible permutations of elements present and store them.

// Step 2: Search input from all possible permutations.

// Step 3: Print the next permutation present right after it.

function getAllPermutations(arr) {
    if (arr.length === 1) return [arr];

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let rest = getAllPermutations(arr.slice(0, i).concat(arr.slice(i + 1)));
        for (let perm of rest) {
            result.push([arr[i], ...perm]);
        }
    }
    return result;
}

function nextPermutationBruteForce(arr) {
    let permutations = getAllPermutations(arr).map(p => p.join("")).sort();
    let index = permutations.indexOf(arr.join(""));
    
    return index === permutations.length - 1 
        ? permutations[0].split("").map(Number) 
        : permutations[index + 1].split("").map(Number);
}

console.log(nextPermutationBruteForce([1, 3, 2])); // Output: [2, 1, 3]


// Time Complexity: O(N! * N) (since we generate all permutations and sort them)


// Optimal Approach:

// Key Idea
// Find the first decreasing element from the right
// Find the next larger element to swap with it
// Reverse the right half to get the next smallest permutation

// Step-by-Step Breakdown
// Example:
// 📌 Input: [1, 3, 2]
// 📌 Output: [2, 1, 3]

// Step 1: Find the First Decreasing Element
// Traverse from the rightmost side and find the first element that is smaller than its next element.
// This marks the pivot point.
// For [1, 3, 2]
// Start checking from the rightmost element:
// 3 > 2 (not decreasing)
// 1 < 3 ✅ (First decreasing element found at index 0)
// 🔹 Pivot Index = 0, Value = 1


// Step 2: Find the Next Larger Element
// Find the smallest element on the right that is greater than the pivot.
// Swap these two elements.
// For [1, 3, 2]
// The elements to the right of 1 are [3, 2].
// The smallest number greater than 1 is 2 (at index 2).
// Swap 1 and 2.
// 🔹 Array After Swap: [2, 3, 1]


// Step 3: Reverse the Right Half
// Reverse the portion after the pivot's original position to get the next lexicographical order.
// For [2, 3, 1]
// The part after index 0 is [3, 1].
// Reverse it to get [1, 3].
// 🔹 Final Array: [2, 1, 3] ✅ (Next Permutation)

// Time Complexity
// Finding pivot: O(N)
// Finding next larger element: O(N)
// Swapping + reversing: O(N)
// Overall Complexity: O(N)

function nextPermutation(arr) {
    let i = arr.length - 2;

    // Step 1: Find the first decreasing element
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = arr.length - 1;
        // Step 2: Find the next larger element and swap
        while (arr[j] <= arr[i]) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Step 3: Reverse the right half
    let left = i + 1, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}

console.log(nextPermutation([1, 3, 2])); // Output: [2, 1, 3]






