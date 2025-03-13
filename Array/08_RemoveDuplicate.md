## Remove duplicate charcter in array

```javascript
function removeDuplicates(){
    var arr=[1,2,3,4,3,2,7,7,8,9,8];
    let result =arr.filter((value,index,arr)=>{
        return arr.indexOf(value)===index
    })
    return result;
}

console.log(removeDuplicates())
```
// ===========================================================================

## Without built in function

```javascript
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
```
// ===========================================================================


## find duplicate element in array 
```javascript

function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index && arr.indexOf(item) === index);
  }
  
  // Example usage:
  var array = [1, 2, 2, 3, 4, 4, 5, 1];
  console.log(findDuplicates(array)); // Output: [2, 4, 1]

```
  // ===========================================================================

  ## find duplicate element in array without built-in function

  ```javascript
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
  
```


// ===========================================================================


## find duplicates element in array and count duplicate element

```javascript
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

```

// ==========================================================================================


## Program to find the first occurrence of duplicate element
```js
function findFirstDuplicate(arr) {
  const freq = {}; // Object to track frequency

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      return arr[i]; // Found duplicate
    }
    freq[arr[i]] = 1; // Mark as seen
  }

  return null; // No duplicates
}

// Example
console.log(findFirstDuplicate([1, 2, 3, 4, 2, 5])); // Output: 2
```