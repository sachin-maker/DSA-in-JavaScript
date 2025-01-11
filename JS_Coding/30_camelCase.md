## Write a program Before Camel Case append (_)
```js
Input -> searchBoxKey_ 
output-> search_Box_Key
```


```js
function toUnderscoreCamelCase(input) {
    let result = '';
    
    for (let i = 0; i < input.length; i++) {
        let currentChar = input[i];
        
        // Check if the current character is an uppercase letter
        if (currentChar >= 'A' && currentChar <= 'Z') {
            // If it's an uppercase letter, prepend an underscore and convert it to lowercase
            result += '_' + String.fromCharCode(currentChar.charCodeAt(0) + 32);
        } else {
            // Otherwise, just add the character as it is
            result += currentChar;
        }
    }
    
    return result;
}

// Test cases
console.log(toUnderscoreCamelCase("searchBoxKey"));  // Output: search_box_key
console.log(toUnderscoreCamelCase("output"));        // Output: output
```
