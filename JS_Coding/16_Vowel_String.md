## find vowel in string
```javascript

function findVowels(str) {
    const vowels = 'aeiouAEIOU';
    const foundVowels = [];
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            foundVowels.push(str[i]);
        }
    }
    
    return foundVowels;
}

// Example usage:
const myString = "Hello, World!";
const result = findVowels(myString);
console.log(result); // Output: [ 'e', 'o', 'o' ]
