## Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2.

### The frequency of values must be same.(Effecient)
```js
 Inputs and outputs:

 [1,2,3],[4,1,9] ==> true
 [1,2,3],[1,9] ====> false
 [1,2,1],[4,4,1] ===> false (must be same frequency)
```

```js
function isSameFrequency(arr1, arr2) {
    // Step 1: Check if the lengths of the two arrays are the same
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Step 2: Initialize frequency maps for both arrays
    let arrFreq1 = {};
    let arrFreq2 = {};

    // Step 3: Build frequency map for arr1
    for (let val of arr1) {
        // Count occurrences of each number in arr1
        arrFreq1[val] = (arrFreq1[val] || 0) + 1;
    }

    // Step 4: Build frequency map for arr2
    for (let val of arr2) {
        // Count occurrences of each number in arr2
        arrFreq2[val] = (arrFreq2[val] || 0) + 1;
    }

    // Step 5: Compare frequency maps
    for (let key in arrFreq1) {
        // Convert the key to a number and calculate its square
        let squaredKey = Number(key) ** 2;

        // Check if the squared value exists in arrFreq2
        if (!(squaredKey in arrFreq2)) {
            return false;
        }

        // Check if the frequency of the key in arrFreq1 matches the frequency of the squared key in arrFreq2
        if (arrFreq1[key] !== arrFreq2[squaredKey]) {
            return false;
        }
    }

    // Step 6: If all checks pass, return true
    return true;
}

// Test cases
console.log(isSameFrequency([1, 2, 5], [25, 4, 1])); // true
console.log(isSameFrequency([1, 2, 3], [4, 1, 9])); // true
console.log(isSameFrequency([1, 2, 3], [1, 9]));    // false
console.log(isSameFrequency([1, 2, 1], [4, 4, 1])); // false

```