// Interview Question 1

// So how do we write a wrapper function curry which accepts a function say func
//  and returns the curried version of func.

// Solution🚀

// Let's pass a function func as input.
// So to get the curried version of func, first thing we should do is return a function which takes arguments. In our case we are returning curried.
// Now in curried we need to check the length of arguments that are passed to it. If all the arguments are passed we call func else we need to again return a function to get the remaining arguments and so on until all the arguments are passed.
// So we can see a recursive behavior here. So how do we achieve this?
// We call curried recursively until all the arguments are received.

```js
function curry(func) {
    function curried(...args) {
        if(args.length >= func.length) {
            return func(...args);
        } else {
            return function(...more) {
                return curried(...args,...more);
            }
        }
    }
    return curried;
}

function multiply(a, b, c) {
    return a*b*c;
}

// To get the curried version of multiply we pass it to our above curry function.
let curried = curry(multiply);
console.log(curried(2)(3)(4)); // 24
console.log(curried(2,3)(4));  // 24
console.log(curried(2,3,4));  // 24
console.log(curried(5)(6,7)); // 210
```
