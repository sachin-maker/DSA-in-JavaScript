// Write a function that takes an array of objects and a key, and returns a
//  new array sorted based on the values of that key in ascending order. 



function sortByKey(array, key) {
    // Create a shallow copy of the array to avoid mutating the original array
    return array.slice().sort((a, b) => {
      // Compare the values of the specified key in the two objects a and b
      if (a[key] < b[key]) {
        return -1; // If a[key] is less than b[key], a comes before b
      }
      if (a[key] > b[key]) {
        return 1; // If a[key] is greater than b[key], a comes after b
      }
      return 0; // If a[key] is equal to b[key], their order remains unchanged
    });
  }
  
  // Example usage:
  const data = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 28 }
  ];
  
  // Sort the data array by the 'age' key
  const sortedData = sortByKey(data, 'age');
  
  // Output the sorted array to the console
  console.log(sortedData);
  