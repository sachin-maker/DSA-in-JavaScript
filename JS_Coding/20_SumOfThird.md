## Sum every third number

### Write a function sumOfThirds(arr), which takes an array arr as an argument. This function should return a sum of every third number in the array, starting from the first one.

* If the input array is empty or contains less than 3 numbers then return 0.
* The input array will contain only numbers.

```js
 sumOfThirds([1, 1, 1, 2, 2, 2, 3, 3, 3]);  // Output: 6
 sumOfThirds([]);  // Output: 0
 sumOfThirds([-5, 0, 5, -4, 1, 6, -3, 2, 7]); // Output: -12

```

## explaination:

### Example 1: sumOfThirds([1, 1, 1, 2, 2, 2, 3, 3, 3]) The function starts from the first element and sums every third element in the array.
### The array is: [1, 1, 1, 2, 2, 2, 3, 3, 3].
#### The indices that the function will consider are: 0, 3, and 6.
#### So, the function sums:

```js
arr[0] = 1
arr[3] = 2
arr[6] = 3
Therefore, the sum is: 1 + 2 + 3 = 6.
```

```js

function sumOfThirds(arr) {
    // If the array is empty or contains less than 3 numbers, return 0
    if (arr.length < 3) {
        return 0;
    }

    // Initialize the sum variable
    let sum = 0;

    // Iterate through the array, stepping by 3
    for (let i = 0; i < arr.length; i += 3) {
        sum += arr[i];
    }

    return sum;
}

// Example usage:
console.log(sumOfThirds([1, 1, 1, 2, 2, 2, 3, 3, 3])); // Output: 6
console.log(sumOfThirds([])); // Output: 0
console.log(sumOfThirds([-5, 0, 5, -4, 1, 6, -3, 2, 7])); // Output: -12

```
















