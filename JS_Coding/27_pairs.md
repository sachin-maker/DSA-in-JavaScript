## Program challenge: Find the pairs from given input ?

```js
 input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 input2 = 10;
 output = [[4, 6], [3, 7], [2, 8], [1, 9]] 
```
```js

function findPairs(input1, input2) {
    const pairs = [];
    
    // Iterate over each element in the input1 array
    for (let i = 0; i < input1.length; i++) {
        // For each element, check the rest of the array for a complement
        for (let j = i + 1; j < input1.length; j++) {
            if (input1[i] + input1[j] === input2) {
                pairs.push([input1[i], input1[j]]);
            }
        }
    }
    
    return pairs;
}

// Example usage:
const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const input2 = 10;
const output = findPairs(input1, input2);
console.log(output);

```