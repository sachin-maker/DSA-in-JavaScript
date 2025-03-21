// Left Rotate the Array by One without built in function

const leftRotate = (arr) => {
    let temp = arr[0]; // Store the first element
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]; // Shift elements to the left
    }
    arr[arr.length - 1] = temp; // Move first element to last position
    return arr;
};

let arr = [1, 2, 3, 4, 5];
console.log(leftRotate(arr)); // Output: [2, 3, 4, 5, 1]

// Time Complexity:
// O(N) (since we iterate through the array once)
// Space Complexity:
// O(1) (since we use only a single extra variable)

// Left Rotate the Array by built in function

const leftRotate = (arr) => {
    arr.push(arr.shift());
    return arr;
};

let arr = [1, 2, 3, 4, 5];
console.log(leftRotate(arr));

// Explanation:
// arr.shift() removes the first element (1 in this case) and returns it.
// arr.push() adds this removed element to the end of the array.
// The modified array is returned.