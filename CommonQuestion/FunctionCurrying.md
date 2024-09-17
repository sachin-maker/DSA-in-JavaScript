## Function currying
### It is a technique in functional programming that transforms the function of multiple arguments into several functions of a single argument in sequence. 

```js
function simpleFunction(param1, param2, param3) =>

function curriedFunction(param1)(param2)(param3)
```

#### We simply wrap a function inside a function, which means we are going to return a function from another function to obtain this kind of translation. The parent function takes the first provided argument and returns the function that takes the next argument and this keeps on repeating till the number of arguments ends. Hopefully, the function that receives the last argument returns the expected result.  


### Why is currying useful in javaScript ?

* It helps us to create a higher-order function
* It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
* It is very useful in building modular and reusable code
* It helps us to avoid passing the same variable multiple times
* It makes the code more readable

```js
function calculateVolume(length) {
	return function (breadth) {
		return function (height) {
			return length * breadth * height;
		}
	}
}
console.log(calculateVolume(4)(5)(6));
```




## Write a currying function that takes infinite arguments.
```js
const sum = function(a) {
    // Define an inner function that will take the next argument
    const innerSum = function(b) {
      // If there is a second argument (b), continue the recursion by calling sum with the accumulated value
      if (b) {
        return sum(a + b);
      }
      // If no second argument (b) is provided, return the accumulated sum (a)
      return a;
    };
 
    // Return the inner function so that more arguments can be provided
    return innerSum;
  };
 
  // Usage Examples
  console.log(sum(1)(2)(3)());       // 6
  console.log(sum(5)(10)(-3)(2)());  // 14
```




## Interview Question 1

### So how do we write a wrapper function curry which accepts a function say func and returns the curried version of func.

### Solution🚀

* Let's pass a function func as input.
* So to get the curried version of func, first thing we should do is return a function which takes arguments. In our case we are returning curried.
* Now in curried we need to check the length of arguments that are passed to it. If all the arguments are passed we call func else we need to again return a function to get the remaining arguments and so on until all the arguments are passed.
* So we can see a recursive behavior here. So how do we achieve this?
* We call curried recursively until all the arguments are received.

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