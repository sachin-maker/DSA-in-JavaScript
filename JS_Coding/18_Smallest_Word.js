// Find the smallest word in a given sentence ?


function smallestWord(str) {
    // Split the input string into an array of words
    let words = str.split(' ');

    // Initialize the smallest word with the first word from the array
    let smallestWord = words[0]; 

    // Iterate through the array of words
    for (let i = 1; i < words.length; i++) {  // Start from index 1, since we've already set smallestWord to words[0]
        // Get the current word from the array
        let individualWords = words[i];

        // Check if the current word is shorter than the current smallest word
        if (individualWords.length < smallestWord.length) {
            // If so, update the smallestWord variable with the current word
            smallestWord = individualWords;
        }
    }

    // Return the smallest word found in the input string
    return smallestWord;
}

// Example usage of the function
let str = "Hello My Name Is Sachin Deshpande";

// Print the result of the smallestWord function, which should be 'My'
console.log(smallestWord(str));
