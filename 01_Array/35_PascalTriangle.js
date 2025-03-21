// Program to generate Pascal's Triangle

// Problem Statement: This problem has 3 variations. They are stated below:

// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

// Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.

// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.

// Input Format:
//  N = 5, r = 5, c = 3
// Result:
//  6 (for variation 1)
// 1 4 6 4 1 (for variation 2)

// 1 
// 1 1 
// 1 2 1 
// 1 3 3 1 
// 1 4 6 4 1    (for variation 3)

// Explanation:
//  There are 5 rows in the output matrix. Each row is formed using the logic of Pascal’s triangle.

// Variation 1
// In this case, we are given the row number r and the column number c, and we need to find out the element at position (r,c). 

// Naive Approach
// In this case, we are given the row number r and the column number c, and we need to find out the element at position (r,c). 

// One of the Naive approaches is to generate the entire Pascal triangle and then find the element at position (r,c). We will discuss in variation 3 how to generate Pascal’s triangle.

// We have an easier formula to find out the element 
// i.e. r-1Cc-1. Let’s try to analyze the formula to find the value of the combination assuming r-1 as n and c-1 as r:

// nCr = n! / (r! * (n-r)!)
// Calculating the value of nCr:

// Naive Approach: 

// We can separately calculate n!, r!, (n-r)! and using their values we can calculate nCr. This is an extremely naive way to calculate. The time complexity will be O(n)+O(r)+O(n-r).

// We can optimize this calculation by the following observation. 
// Assume, given r = 7, c = 4. 
// Now, n = r-1 = 7-1 = 6 and r = c-1 = 4-1 = 3
// Let’s calculate 6C3 = 6! / (3! *(6-3)!) = (6*5*4*3*2*1) / ((3*2*1)*(3*2*1))
// This will boil down to (6*5*4) / (3*2*1)
// So, nCr = (n*(n-1)*(n-2)*.....*(n-r+1)) / (r*(r-1)*(r-2)*....1)

// Now, we will use this optimized formula to calculate the value of nCr. But while implementing this into code we will take the denominator in the forward direction like: 
// (n / 1)*((n-1) / 2)*.....*((n-r+1) / r).

// The steps are as follows:

// First, we will consider r-1 as n and c-1 as r.
// After that, we will simply calculate the value of the combination using a loop. 
// The loop will run from 0 to r. And in each iteration, we will multiply (n-i) with the result and divide the result by (i+1).
// Finally, the calculated value of the combination will be our answer.


function nCr(n, r) {
    let res = 1;

    // calculating nCr:
    for (let i = 0; i < r; i++) {
        res = res * (n - i);
        res = res / (i + 1);
    }
    return res;
    }

    function pascalTriangle(r, c) {
    const element = nCr(r - 1, c - 1);
    return element;
}

const r = 5; // row number
const c = 3; // col number
const element = pascalTriangle(r, c);
console.log(`The element at position (${r},${c}) is: ${element}`);
  
// Time Complexity: O(c), where c = given column number.
// Reason: We are running a loop for r times, where r is c-1.

// Space Complexity: O(1) as we are not using any extra space.


// Variation 2
// Given the row number n. Print the n-th row of Pascal’s triangle.

// Our first observation regarding Pascal’s triangle should be that the n-th row of the triangle has exactly n elements. With this observation, we will proceed to solve this problem.

// Naive Approach
// In this approach, for every column from 1 to n, we will calculate the element (n, c)(where n is the given row number and c is the column number that will vary from 1 to n) using the previous method. Thus, we will print the row.  

// Algorithm / Intuition
// In this approach, for every column from 1 to n, we will calculate the element (n, c)(where n is the given row number and c is the column number that will vary from 1 to n) using the previous method. Thus, we will print the row.  

// Approach:
// The steps are as follows:

// We will use a loop(say c) to iterate over each column i.e. from 1 to n. And for each column, we will do the following steps:
// First, we will consider n-1 as n and c-1 as r.
// After that, we will simply calculate the value of the combination using a loop. 
// The loop will run from 0 to r. And in each iteration, we will multiply (n-i) with the result and divide the result by (i+1).
// Finally, we will print the element.
// Finally, the entire row will be printed.


function nCr(n, r) {
    let res = 1;
  
    // calculating nCr:
    for (let i = 0; i < r; i++) {
      res = res * (n - i);
      res = res / (i + 1);
    }
    return res;
}
  
  function pascalTriangle(n) {
    // printing the entire row n:
    for (let c = 1; c <= n; c++) {
      console.log(nCr(n - 1, c - 1) + " ");
    }
    console.log("n");
}
  
const n = 5;
pascalTriangle(n);

// Time Complexity: O(n*r), where n is the given row number, and r is the column index which can vary from 0 to n-1.
// Reason: We are calculating the element for each column. Now, there are total n columns, and for each column, the calculation of the element takes O(r) time where r is the column index.

// Space Complexity: O(1) as we are not using any extra space.

// Optimal Approach for variation 2

// Approach:
// The steps are as follows:

// First, we will print the 1st element i.e. 1 manually.
// After that, we will use a loop(say i) that runs from 1 to n-1. It will print the rest of the elements.
// Inside the loop, we will use the above-said formula to print the element. We will multiply the previous answer by (n-i) and then divide it by i itself.
// Thus, the entire row will be printed.


function pascalTriangle(n) {
    let ans = 1;
    console.log(ans + " "); // printing 1st element
  
    //Printing the rest of the part:
    for (let i = 1; i < n; i++) {
      ans = ans * (n - i);
      ans = ans / i;
      console.log(ans + " ");
    }
    console.log("n");
}
  
const n = 5;
pascalTriangle(n);
        
// Time Complexity: O(N) where N = given row number. Here we are using only a single loop.

// Space Complexity: O(1) as we not using any extra space.

// Variation 3
// Naive Approach
// Algorithm / Intuition
// The naive approach is basically a combination of variation 1 and variation 2. Here, for every row from 1 to n, we will try to generate all the row elements by simply using the naive approach of variation 2. So, we will use the same code as variation 2(naive approach), inside a loop (i.e. row runs from 1 to n).

// Approach:
// The steps are as follows:

// First, we will run a loop(say row) from 1 to n.
// We will use a loop(say col) to iterate over each column i.e. from 1 to n. And inside the nested loops, we will do the following steps:
// First, we will consider row-1 as n and col-1 as r.
// After that, we will simply calculate the value of the combination using a loop. 
// The loop will run from 0 to r. And in each iteration, we will multiply (n-i) with the result and divide the result by (i+1).
// Finally, we will add the element to a temporary list.
// After calculating all the elements for all columns of a row, we will add the temporary list to our final answer list.
// Finally, we will return the answer list.


function nCr(n, r) {
    let res = 1;
  
    // calculating nCr:
    for (let i = 0; i < r; i++) {
      res = res * (n - i);
      res = res / (i + 1);
    }
    return parseInt(res);
}
  
function pascalTriangle(n) {
    const ans = [];
  
    //Store the entire pascal's triangle:
    for (let row = 1; row <= n; row++) {
      const tempLst = []; // temporary list
      for (let col = 1; col <= row; col++) {
        tempLst.push(nCr(row - 1, col - 1));
      }
      ans.push(tempLst);
    }
    return ans;
}
  
const n = 5;
const ans = pascalTriangle(n);
for (let i = 0; i < ans.length; i++) {
    console.log(ans[i].join(" ") + "n");
}

// Time Complexity: O(n*n*r) ~ O(n3), where n = number of rows, and r = column index.
// Reason: The row loop will run for approximately n times. And generating a row using the naive approach of variation 2 takes O(n*r) time complexity.

// Space Complexity: In this case, we are only using space to store the answer. That is why space complexity can be still considered as O(1).


// Optimal Approach for variation 3
// Algorithm / Intuition
// Now, in the optimal approach of variation 2, we have learned how to generate a row in O(n) time complexity. So, in order to optimize the overall time complexity, we will be using that approach for every row. Thus the total time complexity will reduce.

// Approach:
// The steps are as follows:

// First, we will run a loop(say row) from 1 to n.
// Inside the loop, we will call a generateRow() function and add the returned list to our final answer. Inside the function we will do the following:
// First, we will store the 1st element i.e. 1 manually.
// After that, we will use a loop(say col) that runs from 1 to n-1. It will store the rest of the elements.
// Inside the loop, we will use the specified formula to print the element. We will multiply the previous answer by (row-col) and then divide it by col itself.
// Thus, the entire row will be stored and returned.
// Finally, we will return the answer list


function generateRow(row) {
    let ans = 1;
    let ansRow = [1]; // inserting the 1st element
  
    // calculate the rest of the elements:
    for (let col = 1; col < row; col++) {
      ans = ans * (row - col);
      ans = ans / col;
      ansRow.push(ans);
    }
    return ansRow;
}
  
function pascalTriangle(n) {
    let ans = [];

    // store the entire pascal's triangle:
    for (let row = 1; row <= n; row++) {
        ans.push(generateRow(row));
    }
    return ans;
}
  
let n = 5;
let ans = pascalTriangle(n);
for (let i = 0; i < ans.length; i++) {
    console.log(ans[i].join(" "));
}
// Time Complexity: O(N^2), where n = number of rows(given).
// Reason: We are generating a row for each single row. The number of rows is n. And generating an entire row takes O(n) time complexity.

// Space Complexity: In this case, we are only using space to store the answer. That is why space complexity can still be considered as O(1).