// Program to find longest word in a given sentence

function longestWord(str) {
    // Initialize an empty string to store the longest word found
    let longestWord = ''; 

    // Split the input string into an array of words
    let words = str.split(' '); 

    // Iterate through the array of words
    for (let i = 0; i < words.length; i++) {
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
