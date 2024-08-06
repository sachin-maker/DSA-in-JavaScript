// To find the second largest element in an array in JavaScript,
//  you can use the following approach:

// Remove duplicates from the array.
// Sort the array in descending order.
// Return the second element from the sorted array.

function secondLargest(arr) {
    // Remove duplicates
    let uniqueArr = [...new Set(arr)];
    
    // Sort the array in descending order
    uniqueArr.sort((a, b) => b - a);
    
    // Check if there are at least two elements
    if (uniqueArr.length < 2) {
        return null; // or any appropriate value/error handling
    }
    
    // Return the second largest element
    return uniqueArr[1];
}

// Example usage:
let array = [3, 5, 7, 5, 7, 8, 9];
console.log(secondLargest(array)); // Output: 8

//without built in function


function secondLargest(arr) {
    // Check if the array has fewer than 2 elements
    if (arr.length < 2) {
        return null; // Not enough elements to find the second largest
    }

    // Initialize first and second to the smallest possible values
    let first = -Infinity;
    let second = -Infinity;

    // Find the largest element in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > first) {
            first = arr[i]; // Update first if current element is larger
        }
    }

    // Find the second largest element in the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > second && arr[i] < first) {
            second = arr[i]; // Update second if current element is between first and second
        }
    }

    // Check if a valid second largest element was found
    if (second === -Infinity) {
        return null; // No valid second largest element found
    }

    return second; // Return the second largest element
}

// Example usage:
let array1 = [3, 5, 7, 5, 7, 8, 9];
console.log(secondLargest(array1)); // Output: 8
