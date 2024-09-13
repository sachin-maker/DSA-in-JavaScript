//Questions 
//Remove Duplicate Charcter from string
//example.  Str="priya riya supriya "
//          output="priya su"


function removeDuplicates(){
    var str="priya riya supriya";
    let result=str.split('').filter((item,index,arr)=>{
        return arr.indexOf(item)==index;
    }).join('');

    return result;
}

console.log(removeDuplicates())

// ===========================================================================

// Without Using In-built function

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



// ===========================================================================


//Remove duplicate charcter in array

function removeDuplicates(){
    var arr=[1,2,3,4,3,2,7,7,8,9,8];
    let result =arr.filter((value,index,arr)=>{
        return arr.indexOf(value)===index
    })
    return result;
}

console.log(removeDuplicates())

// ===========================================================================

// Without built in function

function removeDuplicates(){
    var arr=[1,2,3,4,5,5,4,3,7,8,9,9,6,44,55,66];
    var seen={};
    let result=[];

    for(let i=0;i<arr.length;i++){
         
        var element=arr[i]
        if(!seen[element]){
            seen[element]=true;
           result.push(element)
        }
    }
    return result ;
}
console.log(removeDuplicates())

// ===========================================================================


//find duplicate element in array 

function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index && arr.indexOf(item) === index);
  }
  
  // Example usage:
  var array = [1, 2, 2, 3, 4, 4, 5, 1];
  console.log(findDuplicates(array)); // Output: [2, 4, 1]

  // ===========================================================================

  //find duplicate element in array without built-in function
  function findDuplicates(arr) {
    // Create an object to track the occurrence of each element in the array.
    var seen = {};
  
    // Initialize an empty array to store the duplicates.
    var duplicates = [];
  
    // Iterate over each element in the array.
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i]; // Get the current element.
  
      // If the element has already been seen.
      if (seen[item]) {
        // If the element has been seen exactly once before, add it to the duplicates array.
        if (seen[item] === 1) {
          duplicates.push(item);
        }
        // Increment the count of the current element in the seen object.
        seen[item]++;
      } else {
        // If the element is being seen for the first time, set its count to 1.
        seen[item] = 1;
      }
    }
  
    // Return the array of duplicate elements.
    return duplicates;
  }
  
  // Example usage:
  var array = [1, 2, 2, 3, 4, 4, 5, 1];
  console.log(findDuplicates(array)); // Output: [2, 4, 1]
  



// ===========================================================================


// find duplicates element in array and count duplicate element

function findAndCountDuplicates(arr) {
  var counts = {};
  var duplicates = [];
  
  // Count occurrences of each element
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  }

  // Find elements that appear more than once
  for (var key in counts) {
    if (counts[key] > 1) {
      duplicates.push({ element: key, count: counts[key] });
    }
  }

  return duplicates;
}

// Example usage:
var array = [1, 2, 2, 3, 4, 4, 5, 1];
console.log(findAndCountDuplicates(array)); 
// Output: [ { element: '1', count: 2 }, { element: '2', count: 2 }, { element: '4', count: 2 } ]

// ==========================================================================================


// To find duplicate characters in a string or sentence and 
// return a new string containing only those duplicate characters


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
