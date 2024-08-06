//find Missing number in array
// To find the missing numbers in an array without being given the value of n, you can 
// determine the range of expected numbers based on the minimum and maximum values in the array. Here's how you can do it:


// Determine the Minimum and Maximum Values in the Array: This gives you the range of expected numbers.
// Use a Set for Constant-Time Lookups: This helps in checking if a number is in the array.
// Iterate Over the Range: Check for missing numbers within the determined range.


function findMissingNumbers(arr) {
    // Create a set of all elements in the array
    const set = new Set(arr);
    
    // Determine the minimum and maximum values in the array
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    
    // Create an array to hold missing numbers
    const missingNumbers = [];
    
    // Iterate over the range of expected numbers
    for (let i = min; i <= max; i++) {
      // If the number is not in the set, add it to the missing numbers array
      if (!set.has(i)) {
        missingNumbers.push(i);
      }
    }
    
    return missingNumbers;
  }
  
  // Example usage
  const arr = [1, 2, 4, 6, 7, 9]; // The array with missing elements
  const missingNumbers = findMissingNumbers(arr);
  console.log(`The missing numbers are ${missingNumbers}`); // Output: The missing numbers are [3, 5, 8]
  