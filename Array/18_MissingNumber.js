// Find the missing number in an array

// (N) represents the total number of elements that should be in the sequence if no number were missing.

// We will run a loop(say i) from 1 to N.
// For each integer, i, we will try to find it in the given array using linear search.
// For that, we will run another loop to iterate over the array and consider a flag variable to indicate if the element exists in the array. Flag = 1 means the element is present and flag = 0 means the element is missing.
// Initially, the flag value will be set to 0. While iterating the array, if we find the element, we will set the flag to 1 and break out from the loop.
// Now, for any number i, if we cannot find it, the flag will remain 0 even after iterating the whole array and we will return the number.

function missingNumber(a, N) {
    // Outer loop that runs from 1 to N:
    for (let i = 1; i <= N; i++) {
      // flag variable to check if an element exists
      let flag = 0;
  
      // Search the element using linear search:
      for (let j = 0; j < N - 1; j++) {
        if (a[j] === i) {
          // i is present in the array:
          flag = 1;
          break;
        }
      }
  
      // check if the element is missing (i.e., flag === 0):
      if (flag === 0) {
        return i;
      }
    }
  
    // The following line will never execute.
    // It is just to avoid warnings.
    return -1;
  }
  
  function main() {
    const N = 5;
    const a = [1, 2, 4, 5];
    const ans = missingNumber(a, N);
    console.log("The missing number is:", ans);
  }
  
  main();
  
  
  

//   Optimal Approach 


function missingNumber(a, N) {
  // Summation of first N numbers:
  const summation = (N * (N + 1)) / 2;

  // Summation of all array elements:
  let s2 = 0;
  for (let i = 0; i < N - 1; i++) {
    s2 += a[i];
  }

  const missingNum = summation - s2;
  return missingNum;
}

function main() {
  const N = 5;
  const a = [1, 2, 4, 5];
  const ans = missingNumber(a, N);
  console.log("The missing number is:", ans);
}

main();


// We know that the summation of the first N numbers is (N*(N+1))/2. We can say this S1. Now, in the given array, every number between 1 to N except one number is present. So, if we add the numbers of the array (say S2), the difference between S1 and S2 will be the missing number. Because, while adding all the numbers of the array, we did not add that particular number that is missing.

// Sum of first N numbers(S1) = (N*(N+1))/2
// Sum of all array elements(S2) = i = 0n-2a[i]
// The missing number = S1-S2
// Approach:
// The steps are as follows:

// We will first calculate the summation of first N natural numbers(i.e. 1 to N) using the specified formula.
// Then we will add all the array elements using a loop.
// Finally, we will consider the difference between the summation of the first N natural numbers and the sum of the array elements

// Assume the given array is: {1, 2, 4, 5} and N = 5.
// Summation of 1 to 5 = (5*(5+1))/2 = 15
// Summation of array elements = 12
// So, the difference will be = 15 - 12 = 3. 
// And the missing number is also 3.