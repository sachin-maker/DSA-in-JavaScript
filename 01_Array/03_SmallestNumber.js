// JavaScript program to find 
// smallest in arr[] of size n 

function smallest(arr) { 
    if (arr.length === 0) return null; // Edge case: Empty array

    let smallest = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) 
            smallest = arr[i]; 
    } 
    
    return smallest;  // Fix: Return the correct variable
} 

// Driver code 
let arr = [10, 324, 45, 90, 9808];
console.log(`Smallest in given array is ${smallest(arr)}`);

// Time Complexity: O(n)
// Space Complexity: O(1)
