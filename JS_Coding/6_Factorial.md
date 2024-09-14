

## Function to calculate factorial  in recursive way

```js

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Example usage
const number = 5; // Change this to the number you want
console.log(`The factorial of ${number} is ${factorial(number)}`);
```

// ====================================================================================


## Function to calculate factorial iteratively

```js

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Example usage
const number1 = 5; // Change this to the number you want
console.log(`The factorial of ${number1} is ${factorial(number1)}`);
```