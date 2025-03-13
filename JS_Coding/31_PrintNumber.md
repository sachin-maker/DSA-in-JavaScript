## Write a program to print (1 to 10). Print a one number every one second

#### You can achieve this by using JavaScript's setInterval or setTimeout methods. Here's an example using setInterval:
```js
function printNumbers() {
  let number = 1; // Start from 1
  const intervalId = setInterval(() => {
    console.log(number); // Print the current number
    if (number === 10) {
      clearInterval(intervalId); // Stop the interval when the number reaches 10
    }
    number++; // Increment the number
  }, 1000); // Run every 1 second
}

printNumbers();

```

```js
function printNumbers(current = 1) {
  if (current > 10) return; // Stop when the number exceeds 10

  console.log(current); // Print the current number
  setTimeout(() => printNumbers(current + 1), 1000); // Call the function recursively after 1 second
}

printNumbers();
```
