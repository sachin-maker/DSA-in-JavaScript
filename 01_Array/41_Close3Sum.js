// find the triplet whose sum is closest to a given X.

// Brute Force Approach (O(N³))
// The brute force method tries all possible triplets in the array and finds the one with the sum closest to X.

// Approach
// Use three nested loops to generate all possible triplets.

// Calculate the sum of each triplet.

// Keep track of the closest sum and update it if a better match is found.

function closestTripletBruteForce(arr, X) {
    if (!arr || arr.length < 3) return null; // Edge case: Empty or less than 3 elements
    
    let closestSum = Infinity;
    let result = [];

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                let sum = arr[i] + arr[j] + arr[k];

                if (Math.abs(X - sum) < Math.abs(X - closestSum)) {
                    closestSum = sum;
                    result = [arr[i], arr[j], arr[k]];
                }
            }
        }
    }

    return result.length ? result : null; // Return null if no triplet is found
}

// Example usage:
console.log(closestTripletBruteForce([1, 2, 3, 4, -1, -2], 5)); // Example output: [1, 2, 3]
console.log(closestTripletBruteForce([10, 22, 28, 29, 30, 40], 54)); // Example output: [10, 22, 28]
console.log(closestTripletBruteForce([1, 1, 1], 3)); // Output: [1, 1, 1]


// Approach (Two Pointers) - O(N²)
// Sort the array → This helps efficiently find the closest sum.

// Iterate with a fixed element (i) and use two pointers (left, right) to find the closest sum.

// Update the closest sum whenever a better match is found.

function closestTriplet(arr, X) {
    if (!arr || arr.length < 3) return null; // Edge case: Empty or less than 3 elements
    
    arr.sort((a, b) => a - b); // Sort array
    let closestSum = Infinity;
    let result = [];

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1, right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];

            if (Math.abs(X - sum) < Math.abs(X - closestSum)) {
                closestSum = sum;
                result = [arr[i], arr[left], arr[right]];
            }

            if (sum < X) left++;  // Need a larger sum
            else right--;         // Need a smaller sum
        }
    }

    return result.length ? result : null; // Edge case: No triplet found
}

// Example usage:
console.log(closestTriplet([1, 2, 3, 4, -1, -2], 5)); // Example output: [1, 2, 3]
console.log(closestTriplet([10, 22, 28, 29, 30, 40], 54)); // Example output: [10, 22, 28]
console.log(closestTriplet([1, 1, 1], 3)); // Output: [1, 1, 1]

// Time Complexity:
// Sorting takes O(N log N)

// Two-pointer search takes O(N²)

// Overall Complexity: O(N²) (optimal for this problem) 🚀


