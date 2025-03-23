## Write a function which converts string input into an object

```js

function stringToObject(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error("Error parsing JSON:", e);
        return null;
    }
}

// Example usage
const inputString = '{"name": "John", "age": 30, "city": "New York"}';
const obj = stringToObject(inputString);
console.log(obj);  // Output: { name: 'John', age: 30, city: 'New York' }

```