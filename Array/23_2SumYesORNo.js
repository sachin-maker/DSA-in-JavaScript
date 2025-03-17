// Given an array of integers arr[] and an integer target.
// Return YES if there exist two numbers such that their sum is equal to the target. 
// Otherwise, return NO.

// Brute Force Approach - O(N²) Time, O(1) Space

function hasPairWithSumBruteForce(arr, target) {
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] === target) {
                return "YES";
            }
        }
    }

    return "NO";
}

// Test cases
console.log(hasPairWithSumBruteForce([3, 2, 8, 15, 4], 6)); // Output: "YES" (2 + 4)
console.log(hasPairWithSumBruteForce([1, 2, 3, 9], 8)); // Output: "NO"


// Better Approach - O(N) Time, O(N) Space (Using HashSet)

function hasPairWithSumHashing(arr, target) {
    let seen = new Set();

    for (let num of arr) {
        if (seen.has(target - num)) {
            return "YES";
        }
        seen.add(num);
    }

    return "NO";
}

// Test cases
console.log(hasPairWithSumHashing([3, 2, 8, 15, 4], 6)); // Output: "YES" (2 + 4)
console.log(hasPairWithSumHashing([1, 2, 3, 9], 8)); // Output: "NO"



// Optimal Approach - O(N log N) Time, O(1) Space (Sorting + Two Pointers)

function hasPairWithSumTwoPointers(arr, target) {
    // Sort the array
    arr.sort((a, b) => a - b);

    let left = 0, right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            return "YES"; // Found the pair
        } else if (sum < target) {
            left++; // Increase sum
        } else {
            right--; // Decrease sum
        }
    }

    return "NO"; // No such pair exists
}

// Test cases
console.log(hasPairWithSumTwoPointers([3, 2, 8, 15, 4], 6)); // Output: "YES" (2 + 4)
console.log(hasPairWithSumTwoPointers([1, 2, 3, 9], 8)); // Output: "NO"
