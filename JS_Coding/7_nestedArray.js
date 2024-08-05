// Write a JavaScript program to find the largest element in a nested array. 


function findLargest(arr) {
    // Initialize the largest variable to negative infinity to ensure any number will be larger
    let largest = -Infinity;
    
    // Initialize a stack with the outermost array
    let stack = [arr];
  
    // Loop until there are no more arrays to process
    while (stack.length > 0) {
      // Remove the first array from the stack
      let currentArray = stack.shift();
  
      // Iterate over each element in the current array
      for (let i = 0; i < currentArray.length; i++) {
        let element = currentArray[i];
  
        // Check if the element is an array
        if (Array.isArray(element)) {
          // Add nested arrays to the stack for later processing
          stack.push(element);
        } else if (typeof element === 'number') {
          // If the element is a number, compare it with the current largest
          if (element > largest) {
            largest = element; // Update largest if the current number is greater
          }
        }
      }
    }
  
    // Return the largest number found
    return largest;
  }
  
  // Example usage
  const nestedArray = [1, [2, [3, 4, [5, 6]]], 7, [8, 9]];
  console.log(findLargest(nestedArray)); // Output: 9
  