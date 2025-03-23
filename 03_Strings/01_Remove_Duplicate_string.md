 
## Remove Duplicate Charcter from string
```javascript 
    Str="priya riya supriya "
    output="priya su"
```

```javascript
function removeDuplicates(){
    var str="priya riya supriya";
    let result=str.split('').filter((item,index,arr)=>{
        return arr.indexOf(item)==index;
    }).join('');

    return result;
}

console.log(removeDuplicates())
```

// ===========================================================================

## Without Using In-built function

```javascript
function removeDuplicates() { 
  // Initialize a string containing the input text.
  var str = "priya supriya riya";

  // Create an empty object to track characters that have already been seen.
  let seen = {};

  // Initialize an empty string to store the result with duplicates removed.
  let result = '';

  // Iterate over each character in the string.
  for(let i = 0; i < str.length; i++) {
      var char = str[i]; // Get the current character.

      // If the character has not been seen yet, add it to the result.
      if (!seen[char]) {
          seen[char] = true; // Mark the character as seen.
          result += char; // Append the character to the result string.
      }
  }

  // Return the final string with duplicates removed.
  return result;
}

console.log(removeDuplicates()); // Output the result to the console.
```


// ===========================================================================


## To find duplicate characters in a string or sentence and 
## return a new string containing only those duplicate characters

```javascript
function findDuplicateCharacters(str) {
  // Create an object to track the occurrence of each character in the string.
  let seen = {};

  // Initialize an empty string to store the duplicate characters.
  let duplicates = '';

  // Iterate over each character in the string.
  for (let i = 0; i < str.length; i++) {
      let char = str[i]; // Get the current character.

  

      // If the character has already been seen.
      if (seen[char]) {
          // If the character has been seen exactly once before, add it to the duplicates string.
          if (seen[char] === 1) {
              duplicates += char;
          }
          // Increment the count of the current character in the seen object.
          seen[char]++;
      } else {
          // If the character is being seen for the first time, set its count to 1.
          seen[char] = 1;
      }
  }

  // Return the string containing duplicate characters.
  return duplicates;
}

// Example usage:
let sentence = "programming in javascript";
console.log(findDuplicateCharacters(sentence)); // Output: "rgmia"

```


