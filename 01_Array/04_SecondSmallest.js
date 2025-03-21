// find second smallest in array

// Brute force approch
const secondSmallest = (arr) => {
    if (arr.length < 2) return -1; // Edge case: If array has less than 2 elements

    let min = arr[0];

    // Find the smallest element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) 
            min = arr[i]; 
    }
    
    let secondMin = Infinity;

    // Find the second smallest element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < secondMin && arr[i] !== min) {
            secondMin = arr[i];
        }
    }

    return secondMin // If no second smallest exists, return -1
};

let arr = [10, 2, 4, 6, 11, 9, 53];
console.log(secondSmallest(arr)); // Output: 4

// Brute Force Approach (O(2N) Time, O(1) Space)



// Optimal Approches
const secondSmallestOptimized = (arr) => {
    if (arr.length < 2) return -1; // Edge case: If array has less than 2 elements

    let min = Infinity, secondMin = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        } else if (arr[i] < secondMin && arr[i] !== min) {
            secondMin = arr[i];
        }
    }

    return secondMin === Infinity ? -1 : secondMin; // If no second smallest exists, return -1
};

let arr1 = [10, 2, 4, 6, 11, 9, 53];
console.log(secondSmallestOptimized(arr1)); // Output: 4


// Optimal Approach (O(N) Time, O(1) Space)