// Rotate Image by 90 degree
// Input:
//  [1,2,3]     [7,4,1]
//  [4,5,6] ==> [8,5,2]
//  [7,8,9]     [9,6,3]

// [0][0]=>[0][2]
// [0][1]=>[1][2]
// [0][2]=>[2][2]

// look at the pattern here i index is constant but in answer i index is look like j index
// and j index in answer is n-1-i

function rotateBruteForce(matrix) {
    let n = matrix.length;
    let rotated = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            rotated[j][n - 1 - i] = matrix[i][j];
        }
    }

    // Copy rotated matrix back to original matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = rotated[i][j];
        }
    }
}

// Test Case
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotateBruteForce(matrix);
console.log(matrix);


// TC=O(N^2)
// SC=O(N^2)


// Optimal Approche:
// 1) First transpose the matrix
// 2)Reverse the matrix

// Initial Matrix:
1  2  3
4  5  6  
7  8  9

// Step 1:Transpose (Swap matrix[i][j] with matrix[j][i])
// means we are swapping the row with column and column with row called as transpose the matrix

1  4  7
2  5  8
3  6  9

// Step 2: Reverse Each Row
7  4  1
8  5  2
9  6  3


function rotateOptimal(matrix) {
    let n = matrix.length;

    // Step 1: Transpose the matrix
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

// Test Case
let matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotateOptimal(matrix2);
console.log(matrix2);

// Time Complexity: O(N*N) + O(N*N).One O(N*N) is for transposing the matrix and the other is for reversing the matrix.

// Space Complexity: O(1).

