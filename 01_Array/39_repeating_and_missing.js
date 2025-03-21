// Find the repeating and missing numbers

// Problem Statement: You are given a read-only array of N integers with values also in the range [1, N] both inclusive. Each integer appears exactly once except A which appears twice and B which is missing. The task is to find the repeating and missing numbers A and B where A repeats twice and B is missing.
// Input Format
// :  array[] = {3,1,2,5,3}
// Result
// : {3,4)
// Explanation
// : A = 3 , B = 4 
// Since 3 is appearing twice and 4 is missing


// Naive Approach (Brute force): 
// Intuition: For each number between 1 to N, we will try to count the occurrence in the given array using linear search. And the element with occurrence as 2 will be the repeating number and the number with 0 occurrences will be the missing number.

// Approach:
// The steps are as follows:

// We will run a loop(say i) from 1 to N.
// For each integer, i, we will count its occurrence in the given array using linear search.
// We will store those two elements that have the occurrence of 2 and 0.
// Finally, we will return the elements.
// Note: For a better understanding of intuition, please watch the video at the bottom of the page.




function findMissingRepeatingNumbers(a) {
    const n = a.length;
    let repeating = -1, missing = -1;

    for (let i = 1; i <= n; i++) {
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            if (a[j] == i) cnt++;
        }

        if (cnt == 2) repeating = i;
        else if (cnt == 0) missing = i;

        if (repeating != -1 && missing != -1) break;
    }

    return [repeating, missing];
}

const a = [3, 1, 2, 5, 4, 6, 7, 5];
const ans = findMissingRepeatingNumbers(a);
console.log(`The repeating and missing numbers are: [${ans[0]}, ${ans[1]}]`);


// Time Complexity: O(N2), where N = size of the given array.
// Reason: Here, we are using nested loops to count occurrences of every element between 1 to N.

// Space Complexity: O(1) as we are not using any extra space.

// Optimal Approach 2 (Using XOR): 
// Using XOR, we are going to solve this problem using the following 3 steps.

// Assume the repeating number to be X and the missing number to be Y.

// Step 1: Find the XOR of the repeating number(X) and the missing number(Y)
// i.e. (X^Y) = (a[0]^a[1]^.....^a[n-1]) ^ (1^2^........^N)

// In order to find the XOR of the repeating number and the missing number, we will first XOR all the array elements and with that value, we will again XOR all the numbers from 1 to N.
// (X^Y) = (a[0]^a[1]^.....^a[n-1]) ^ (1^2^3^........^N)
// Step 2: Find the first different bit from right between the repeating and the missing number i.e. the first set bit from right in (X^Y)

// By convention, the repeating and the missing number must be different and since they are different they must contain different bits. Now, our task is to find the first different bit from the right i.e. the end. We know, the XOR of two different bits always results in 1. The position of the first different bit from the end will be the first set bit(from the right) in (X^Y) that we have found in step 1.
// Step 3: Based on the position of the different bits we will group all the elements ( i.e. all array elements + all elements between 1 to N) into 2 different groups

// Assume an imaginary array containing all the array elements and all the elements between 1 to N. Now, we will check that particular position for each element of that imaginary array and then if the bit is 0, we will insert the element into the 1st group otherwise, we will insert it into the 2nd group. 
// After performing this step, we will get two groups. Now, if we XOR all the elements of those 2 groups, we will get 2 numbers. One of them will be the repeating number and the other will be the missing number. But until now, we do not know which one is repeating and which one is missing.
// Last step: Figure out which one of the numbers is repeating and which one is missing

// We will traverse the entire given array and check which one of them appears twice. And the number that appears twice is the repeating number and the other one is the missing number.
// Approach:
// The steps are as follows:

// For the first step, we will run a loop and calculate the XOR of all the array elements and the numbers between 1 to N. Let’s call this value xr.
// In order to find the position of the first set bit from the right, we can either use a loop or we can perform AND of the xr and negation of (xr-1) i.e. (xr & ~(xr-1)).
// Now, we will take two variables i.e. zero and one. Now, we will check the bit of that position for every element (array elements as well as numbers between 1 to N).
// If the bit is 1: We will XOR that element with variable one.
// If the bit is 0: We will XOR that element with variable zero.
// Finally, we have two variables i.e. two numbers zero and one. Among them, one is repeating and the other is missing. It’s time to identify them. 
// We will traverse the entire array and check how many times variable zero appears. 
// If it appears twice, it will be the repeating number, otherwise, it will be the missing. Now, based on variable zero’s identity, we can easily identify in which category, variable one belongs.




function findMissingRepeatingNumbers(a) {
    const n = a.length; // size of the array
  
    let xr = 0;
  
    //Step 1: Find XOR of all elements:
    for (let i = 0; i < n; i++) {
      xr = xr ^ a[i];
      xr = xr ^ (i + 1);
    }
  
    //Step 2: Find the differentiating bit number:
    const number = (xr & ~(xr - 1));
  
    //Step 3: Group the numbers:
    let zero = 0;
    let one = 0;
    for (let i = 0; i < n; i++) {
      //part of 1 group:
      if ((a[i] & number) != 0) {
        one = one ^ a[i];
      }
      //part of 0 group:
      else {
        zero = zero ^ a[i];
      }
    }
  
    for (let i = 1; i <= n; i++) {
      //part of 1 group:
      if ((i & number) != 0) {
        one = one ^ i;
      }
      //part of 0 group:
      else {
        zero = zero ^ i;
      }
    }
  
    // Last step: Identify the numbers:
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (a[i] == zero) cnt++;
    }
  
    if (cnt == 2) return [zero, one];
    return [one, zero];
  }
  
  const a = [3, 1, 2, 5, 4, 6, 7, 5];
  const ans = findMissingRepeatingNumbers(a);
  console.log(`The repeating and missing numbers are: [${ans[0]}, ${ans[1]}]`);
  
  
//   Time Complexity: O(N), where N = the size of the given array.
//   Reason: We are just using some loops running for N times. So, the time complexity will be approximately O(N).
  
//   Space Complexity: O(1) as we are not using any extra space to solve this problem.  