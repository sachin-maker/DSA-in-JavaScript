## Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original. 

```js 

function deepClone(obj) {
    // Check if the input is null or not an object (i.e., a primitive value or null)
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return the value directly
    }

    // Check if the input is an array
    if (Array.isArray(obj)) {
        let arrCopy = []; // Create a new empty array
        // Iterate over each element in the array
        for (let i = 0; i < obj.length; i++) {
            arrCopy[i] = deepClone(obj[i]); // Recursively deep clone each element
        }
        return arrCopy; // Return the new array
    }

    // If the input is an object (not an array and not a primitive value or null)
    let objCopy = {}; // Create a new empty object
    // Iterate over each property in the object
    for (let key in obj) {
        // Check if the property is an own property (not inherited)
        if (obj.hasOwnProperty(key)) {
            objCopy[key] = deepClone(obj[key]); // Recursively deep clone the property's value
        }
    }

    return objCopy; // Return the new object
}

// Example usage:
let originalArray = [1, 2, {a: 1, b: [2, 3]}, 4];
let clonedArray = deepClone(originalArray);

let originalObject = {a: 1, b: {c: 2, d: 3}};
let clonedObject = deepClone(originalObject);

console.log(clonedArray); // Output the cloned array
console.log(clonedObject); // Output the cloned object

```