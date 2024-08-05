function maximumNumber() {
    // Step 1: Define the array of numbers
    var arr = [122, 11, 22, 33, 44, 222, 7, 9, 5, 555];

    // Step 2: Initialize the result variable with the first element of the array
    let result = arr[0];

    // Step 3: Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Step 4: Compare each element with the current result
        if (arr[i] > result) {
            // Step 5: Update the result if the current element is greater
            result = arr[i];
        }
    }

    // Step 6: Return the maximum value found
    return result;
}

// Step 7: Print the result of the function to the console
console.log(maximumNumber());  // Should print 555
