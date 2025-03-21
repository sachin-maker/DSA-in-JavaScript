// Left rotate an array by D places
// Brute Force Approach: 


const leftRotate = (arr, d, n) => {
    d = d % n; // To handle cases where d > n
    let temp = new Array(d); // Declare temp array

    // Store first D elements in temp
    for (let i = 0; i < d; i++) {
        temp[i] = arr[i];
    }

    // Shift the remaining elements to the left
    for (let i = d; i < n; i++) {
        arr[i - d] = arr[i];
    }

    // Copy temp elements back to the end of arr
    for (let i = 0; i < d; i++) {
        arr[n - d + i] = temp[i];
    }

    return arr;
};

let arr = [1, 2, 3, 4, 5];
let d = 3;
let n = arr.length;
console.log(leftRotate(arr, d, n)); // Output: [4, 5, 1, 2, 3]

// Time Complexity: O(d)+O(n-d)+O(d) = O(n+d), where n = size of the array, d = the number of rotations. Each term represents each loop used in the code.
// Space Complexity: O(d) extra space as we are using a temporary array of size d.




// Optimized Approach(without using any extra space): Using “Reversal Algorithm” 
// This is a straightforward method. The steps are as follows:

// Step 1: Reverse the subarray with the first d elements (reverse(arr, arr+d)).
// Step 2: Reverse the subarray with the last (n-d) elements (reverse(arr+d, arr+n)).
// Step 3: Finally reverse the whole array (reverse(arr, arr+n)).

const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
        start++;
        end--;
    }
};

const leftRotate = (arr, d, n) => {
    d = d % n; // Handle cases where d > n

    // Step 1: Reverse the first d elements
    reverse(arr, 0, d - 1);

    // Step 2: Reverse the last (n-d) elements
    reverse(arr, d, n - 1);

    // Step 3: Reverse the whole array
    reverse(arr, 0, n - 1);

    return arr;
};

// Example Usage
let arr = [1, 2, 3, 4, 5];
let d = 3;
let n = arr.length;
console.log(leftRotate(arr, d, n)); // Output: [4, 5, 1, 2, 3]

// Time Complexity: O(d)+O(n-d)+O(n) = O(2*n), where n = size of the array, d = the number of rotations. Each term corresponds to each reversal step.
// Space Complexity: O(1) since no extra space is required.