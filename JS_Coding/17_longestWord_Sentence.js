
// Program to find the longest word in a given sentence
function longestWord(str) {

    // Split the input string into an array of words
    let words = str.split(' ');

    // Initialize the longest word with the first word from the array
    let longestWord = words[0];

    // Iterate through the array of words starting from the second word
    for (let i = 1; i < words.length; i++) {
        // Get the current word from the array
        let individualWords = words[i];
        
        // Check if the current word is longer than the current longest word
        if (individualWords.length > longestWord.length) {
            // If so, update the longestWord variable with the current word
            longestWord = individualWords;
        }
    }
    
    // Return the longest word found in the input string
    return longestWord;
}

// Example usage of the function
let str = "Hello My Name Is Sachin Deshpande";

// Print the result of the longestWord function, which should be 'Deshpande'
console.log(longestWord(str));
