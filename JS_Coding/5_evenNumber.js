//Write a JavaScript function that takes an array of numbers and returns a new
// array with only the even numbers. 



function evenArray(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Example usage
const inputArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(evenArray(inputArray1));



// with in-built function
function evenArray(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
console.log(evenArray(inputArray));

