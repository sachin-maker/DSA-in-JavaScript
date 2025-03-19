// Set Matrix Zero

// Problem Statement: Given a matrix if an element in the matrix is 0 then you
//  will have to set its entire column and row to 0 and then return the matrix.

1 1 1 1          0  0  0  1
1 0 1 1    ===>  0  0  0  0
1 1 0 1          0  0  0  0
0 1 1 1          0  0  0  0

// Approach:
// The steps are the following:

// First, we will use two loops(nested loops) to traverse all the cells of the matrix.
// If any cell (i,j) contains the value 0, we will mark all cells in row i and 
// column j with -1 except those which contain 0.
// We will perform step 2 for every cell containing 0.
// Finally, we will mark all the cells containing -1 with 0.
// Thus the given matrix will be modified according to the question.


function markRow(matrix, n, m, i) {
    // set all non-zero elements as -1 in the row i:
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  }
  
  function markCol(matrix, n, m, j) {
    // set all non-zero elements as -1 in the col j:
    for (let i = 0; i < n; i++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = -1;
      }
    }
  }
  
  function zeroMatrix(matrix, n, m) {
    // Set -1 for rows and cols that contains 0. Don't mark any 0 as -1:
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === 0) {
          markRow(matrix, n, m, i);
          markCol(matrix, n, m, j);
        }
      }
    }
    // Finally, mark all -1 as 0:
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (matrix[i][j] === -1) {
          matrix[i][j] = 0;
        }
      }
    }
    return matrix;
  }
  
  const matrix = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  
  const n = matrix.length;
  const m = matrix[0].length;
  
  const ans = zeroMatrix(matrix, n, m);
  
  console.log("The Final matrix is: ");
  for (let i = 0; i < n; i++) {
    console.log(ans[i].join(" "));
  }

//   Time Complexity: O((N*M)*(N + M)) + O(N*M), 
// where N = no. of rows in the matrix and M = no. of columns in the matrix.
//   Reason: Firstly, we are traversing the matrix to find the cells with the value 0. 
// It takes O(N*M). Now, whenever we find any such cell we mark that row and column with -1.
//  This process takes O(N+M). So, combining this the whole process, finding and marking, 
// takes O((N*M)*(N + M)).
//   Another O(N*M) is taken to mark all the cells with -1 as 0 finally.
  
//   Space Complexity: O(1) as we are not using any extra space.