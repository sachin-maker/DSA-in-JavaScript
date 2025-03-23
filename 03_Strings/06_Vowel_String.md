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
```

## Find Vowels and Consonants in a String

```js

function findVowelsAndConsonants(str) {
    let vowels = [];
    let consonants = [];
    let vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let char of str.toLowerCase()) {
        if (/[a-z]/.test(char)) { // Check if it's a letter
            if (vowelSet.has(char)) {
                vowels.push(char);
            } else {
                consonants.push(char);
            }
        }
    }

    return { vowels, consonants };
}

// Example usage:
console.log(findVowelsAndConsonants("Hello World!123")); 
// Output: { vowels: [ 'e', 'o', 'o' ], consonants: [ 'h', 'l', 'l', 'w', 'r', 'l', 'd' ] }

console.log(findVowelsAndConsonants("JavaScript")); 
// Output: { vowels: [ 'a', 'a', 'i' ], consonants: [ 'j', 'v', 's', 'c', 'r', 'p', 't' ] }

```