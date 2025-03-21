// Given a Matrix, print the given matrix in spiral order.explaination with dry run

// 1   2   3   4
// 5   6   7   8
// 9  10  11  12          
// 13 14  15  16

⬇️⬇️

// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

// Algorithm:
// Initialize four boundary variables:
// top (initially 0) → First row index
// bottom (initially n-1) → Last row index
// left (initially 0) → First column index
// right (initially m-1) → Last column index
// Use a loop to traverse the matrix until all elements are printed:
// Move left to right (along the top row), then increment top.
// Move top to bottom (along the right column), then decrement right.
// Move right to left (along the bottom row, if it exists), then decrement bottom.
// Move bottom to top (along the left column, if it exists), then increment left.
// Repeat the process until all elements are covered.

function spiralOrder(matrix) {
    let result = [];
    if (matrix.length === 0) return result;

    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Move Left to Right
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Move Top to Bottom
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Move Right to Left (if any row remains)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Move Bottom to Top (if any column remains)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

// Test Case
let matrix = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9, 10, 11, 12],
    [13,14, 15, 16]
];

console.log(spiralOrder(matrix));

// TC=>O(N*M)
// SC=>O(1)