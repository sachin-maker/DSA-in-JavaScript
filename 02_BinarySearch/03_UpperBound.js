// Implement Upper Bound
// Given a sorted array of N integers and an integer x, write a program to find the upper bound of x.

// Input Format:
//  N = 6, arr[] = {3,5,8,9,15,19}, x = 9
// Result:
//  4
// Explanation:
//  Index 4 is the smallest index such that arr[4] > x.

// The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than the given key i.e. x.


function upperBound(arr, x, n) {
    let low = 0, high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        if (arr[mid] > x) {
            ans = mid;
            //look for smaller index on the left
            high = mid - 1;
        }
        else {
            low = mid + 1; // look on the right
        }
    }
    return ans;
}

let arr = [3, 5, 8, 9, 15, 19];
let n = 6, x = 9;
let ind = upperBound(arr, x, n);
console.log("The upper bound is the index:", ind);

