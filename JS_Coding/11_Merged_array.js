//  Implement a function that takes two sorted arrays and merges 
// them into a single sorted array without using any built-in sorting functions.


function mergeSortedArrays(arr1, arr2) {
    let mergedArray = []; // Initialize an empty array to hold the merged result
    let i = 0, j = 0; // Initialize pointers for arr1 and arr2

    // Traverse both arrays until one of them is fully traversed
    while (i < arr1.length && j < arr2.length) {
        // Compare the current elements of both arrays
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]); // If arr1's element is smaller, add it to mergedArray
            i++; // Move the pointer of arr1 to the next element
        } else {
            mergedArray.push(arr2[j]); // If arr2's element is smaller or equal, add it to mergedArray
            j++; // Move the pointer of arr2 to the next element
        }
    }

    // If there are remaining elements in arr1, add them to mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them to mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray; // Return the merged sorted array
}

// Example usage
let array1 = [1, 3, 5, 7,2,22,22,33];
let array2 = [2, 4, 6, 8];
let result = mergeSortedArrays(array1, array2);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
