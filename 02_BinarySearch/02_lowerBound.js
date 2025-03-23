// Implement Lower Bound
// Given a sorted array of N integers and an integer x, write a program to find the lower bound of x.

// Input Format:
//  N = 5, arr[] = {3,5,8,15,19}, x = 9
// Result:
//  3
// Explanation:
//  Index 3 is the smallest index such that arr[3] >= x.

// The lower bound algorithm finds the first or the smallest index 
// in a sorted array where the value at that index is greater than or equal to a given key i.e. x.


function lowerBound(arr, n, x) {
    for (let i = 0; i < n; i++) {
        if (arr[i] >= x) {
            // lower bound found:
            return i;
        }
    }
    return n;
}

let arr = [3, 5, 8, 15, 19];
let n = 5, x = 9;
let ind = lowerBound(arr, n, x);
console.log("The lower bound is the index:", ind);

// Time Complexity: O(N), where N = size of the given array.
// Reason: In the worst case, we have to travel the whole array. This is basically the time complexity of the linear search algorithm.

// Space Complexity: O(1) as we are using no extra space.

// Optimal Approch:

// As the array is sorted, we will apply the Binary Search algorithm to find the index. The steps are as follows:
// We will declare the 2 pointers and an ‘ans’ variable initialized to n i.e. the size of the array(as If we don’t find any index, we will return n).

// Place the 2 pointers i.e. low and high: Initially, we will place the pointers like this: low will point to the first index, and high will point to the last index.
// Calculate the ‘mid’: Now, we will calculate the value of mid using the following formula:
// mid = (low+high) // 2 ( ‘//’ refers to integer division)
// Compare arr[mid] with x: With comparing arr[mid] to x, we can observe 2 different cases:
// Case 1 - If arr[mid] >= x: This condition means that the index mid may be an answer. So, we will update the ‘ans’ variable with mid and search in the left half if there is any smaller index that satisfies the same condition. Here, we are eliminating the right half.
// Case 2 - If arr[mid] < x: In this case, mid cannot be our answer and we need to find some bigger element. So, we will eliminate the left half and search in the right half for the answer.


function lowerBound(arr, n, x) {
    let low = 0, high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        if (arr[mid] >= x) {
            ans = mid;
            // look for smaller index on the left
            high = mid - 1;
        }
        else {
            low = mid + 1; // look on the right
        }
    }
    return ans;
}

let arr = [3, 5, 8, 15, 19];
let n = 5, x = 9;
let ind = lowerBound(arr, n, x);
console.log("The lower bound is the index:", ind);

// Time Complexity: O(logN), where N = size of the given array.
// Reason: We are basically using the Binary Search algorithm.

// Space Complexity: O(1) as we are using no extra space.