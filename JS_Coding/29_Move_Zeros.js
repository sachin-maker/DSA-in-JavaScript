//Move Zeros to end of the array
//we can do that using two pointer algorithm


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
