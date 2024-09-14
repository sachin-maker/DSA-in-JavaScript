## Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method. 

```js

function reverseWords(sentence) {
    // Split the sentence into an array of words
    let words = sentence.split(' ');

    // Initialize an empty string to hold the result
    let result = '';

    // Loop through the words array in reverse order
    for (let i = words.length - 1; i >= 0; i--) {
        // Append each word to the result string
        result += words[i];

        // Add a space after each word except the last one
        if (i > 0) {
            result += ' ';
        }
    }

    // Return the result
    return result;
}

// Example usage
console.log(reverseWords('hello world')); // Outputs: 'world hello'

```