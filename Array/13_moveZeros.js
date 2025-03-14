// Move All Zeros to the End
// Brute Force Approach

const moveZeros = (arr, n) => {
    let temp = []; // Temporary array

    // Step 1: Store non-zero elements in temp
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            temp.push(arr[i]);
        }
    }

    // Step 2: Copy non-zero elements back to original array
    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }

    // Step 3: Fill remaining positions with zeros
    for (let i = temp.length; i < n; i++) {
        arr[i] = 0;
    }

    return arr;
};

// Example Usage
let arr = [1, 2, 3, 0, 2, 0, 3, 0, 4, 5];
let n = arr.length;
console.log(moveZeros(arr, n)); // Output: [1, 2, 3, 2, 3, 4, 5, 0, 0, 0]

// Time Complexity Analysis:
// Step 1: Traverse the array to store non-zero elements → O(N)
// Step 2: Copy non-zero elements back → O(N)
// Step 3: Fill the remaining positions with zeros → O(N)

// Optimized Approach (O(1) Space)
// Move Zeros to end of the array we can do that using two pointer algorithm



function moveZerosToEnd(arr) {
    // Initialize the left pointer to mark the position for the next non-zero element
    let left = 0;
    
    // Traverse the array with the right pointer
    for (let right = 0; right < arr.length; right++) {
        // Check if the current element is non-zero
        if (arr[right] !== 0) {
            // If non-zero, swap the element at the right pointer with the element at the left pointer
            [arr[left], arr[right]] = [arr[right], arr[left]];
            
            // Increment the left pointer to point to the next position for a non-zero element
            left++;
        }
    }
    
    // The function returns the modified array with all zeros moved to the end
    return arr;
}

// Example usage:
let arr = [0, 1, 0, 3, 12];
console.log(moveZerosToEnd(arr)); // Output: [1, 3, 12, 0, 0]

