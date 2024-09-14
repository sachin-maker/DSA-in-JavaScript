
## Given a string, write a function to count the occurrences of each character in the string or sentence. 


```js

function countCharacterOccurrences(str) {
    const characterCounts = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (characterCounts[char]) {
            characterCounts[char]++;
        } else {
            characterCounts[char] = 1;
        }
    }

    return characterCounts;
}

// Example usage
const exampleString = "hello world sachiin hello world";
const result = countCharacterOccurrences(exampleString);
console.log(result);

```