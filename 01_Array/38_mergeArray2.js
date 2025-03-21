// Merge two Sorted Arrays Without Extra Space

// Problem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order.
//  Merge them in sorted order. Modify arr1 so that it contains the first N elements
//   and modify arr2 so that it contains the last M elements.

// Input:
 
// n = 4, arr1[] = [1 4 8 10] 
// m = 5, arr2[] = [2 3 9]

// Output:
 
// arr1[] = [1 2 3 4]
// arr2[] = [8 9 10]

// Explanation:

// After merging the two non-decreasing arrays, we get, 1,2,3,4,8,9,10.


// Naive Approach (Brute-force): 
// This approach is not the exact solution according to the question as in this approach we are going to use an extra space i.e. an array. But it is definitely one of the solutions if the question does not contain the constraint of not using any extra space. And also this approach will help to understand the optimal approaches.

// Approach:
// Assume the size of the given arrays are n and m.

// The steps are as follows:

// We will first declare a third array, arr3[] of size n+m, and two pointers i.e. left and right, one pointing to the first index of arr1[] and the other pointing to the first index of arr2[].
// The two pointers will move like the following:
// If arr1[left] < arr2[right]: We will insert the element arr1[left] into the array and increase the left pointer by 1.
// If arr2[right] < arr1[left]: We will insert the element arr2[right] into the array and increase the right pointer by 1.
// If arr1[left] == arr2[right]: Insert any of the elements and increase that particular pointer by 1.
// If one of the pointers reaches the end, then we will only move the other pointer and insert the rest of the elements of that particular array into the third array i.e. arr3[].
// If we move the pointer like the above, we will get the third array in the sorted order.
// Now, from sorted array arr3[], we will copy first n(size of arr1[]) elements to arr1[], and the next m(size of arr2[]) elements to arr2[].

// Intuition:
// Intuition is pretty straightforward. As the given arrays are sorted, we are using 2 pointer approach to get a third array, that contains all the elements from the given two arrays in the sorted order. Now, from the sorted third array, we are again filling back the given two arrays.




function merge(arr1, arr2, n, m) {

    //Declare a 3rd array and 2 pointers:
    let arr3 = new Array(n + m);
    let left = 0;
    let right = 0;

    let index = 0;

    //Insert the elements from the 2 arrays
    // into the 3rd array using left and right
    // pointers:

    while (left < n && right < m) {
        if (arr1[left] <= arr2[right]) {
            arr3[index] = arr1[left];
            left++, index++;
        }
        else {
            arr3[index] = arr2[right];
            right++, index++;
        }
    }

    // If right pointer reaches the end:
    while (left < n) {
        arr3[index++] = arr1[left++];
    }

    // If left pointer reaches the end:
    while (right < m) {
        arr3[index++] = arr2[right++];
    }

    // Fill back the elements from arr3[]
    // to arr1[] and arr2[]:
    for (let i = 0; i < n + m; i++) {
        if (i < n) arr1[i] = arr3[i];
        else arr2[i - n] = arr3[i];
    }
}

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];
let n = 4, m = 3;
merge(arr1, arr2, n, m);
console.log("The merged arrays are: ");
console.log("arr1[] = " + arr1.join(" "));
console.log("arr2[] = " + arr2.join(" "));

// Time Complexity: O(n+m) + O(n+m), where n and m are the sizes of the given arrays.
// Reason: O(n+m) is for copying the elements from arr1[] and arr2[] to arr3[]. And another O(n+m) is for filling back the two given arrays from arr3[].

// Space Complexity: O(n+m) as we use an extra array of size n+m.

// Optimal Approach 1 (without using any extra space): 
// In this optimal approach, we need to get rid of the extra space we were using.

// Approach:
// The sizes of the given arrays are n(size of arr1[]) and m(size of arr2[]).

// The steps are as follows:

// We will declare two pointers i.e. left and right. The left pointer will point to the last index of the arr1[](i.e. Basically the maximum element of the array). The right pointer will point to the first index of the arr2[](i.e. Basically the minimum element of the array).
// Now, the left pointer will move toward index 0 and the right pointer will move towards the index m-1. While moving the two pointers we will face 2 different cases like the following:
// If arr1[left] > arr2[right]: In this case, we will swap the elements and move the pointers to the next positions.
// If arr1[left] <= arr2[right]: In this case, we will stop moving the pointers as arr1[] and arr2[] are containing correct elements.
// Thus, after step 2, arr1[] will contain all smaller elements and arr2[] will contain all bigger elements. Finally, we will sort the two arrays.
// Intuition:
// If we merge the given array, one thing we can assure is that arr1[] will contain all the smaller elements and arr2[] will contain all the bigger elements. This is the logic we will use. Using the 2 pointers, we will swap the bigger elements of arr1[] with the smaller elements of arr2[] until the minimum of arr2[] becomes greater or equal to the maximum of arr1[].




function merge(arr1, arr2, n, m) {

    //Declare 2 pointers:
    let left = n - 1;
    let right = 0;

    //Swap the elements until arr1[left] is
    // smaller than arr2[right]:
    while (left >= 0 && right < m) {
        if (arr1[left] > arr2[right]) {
            [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
            left--, right++;
        }
        else {
            break;
        }
    }

    // Sort arr1[] and arr2[] individually:
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
}

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];
let n = 4, m = 3;
merge(arr1, arr2, n, m);
console.log("The merged arrays are: ");
console.log("arr1[] = " + arr1.join(' '));
console.log("arr2[] = " + arr2.join(' '));

// Time Complexity: O(min(n, m)) + O(n*logn) + O(m*logm), where n and m are the sizes of the given arrays.
// Reason: O(min(n, m)) is for swapping the array elements. And O(n*logn) and O(m*logm) are for sorting the two arrays.

// Space Complexity: O(1) as we are not using any extra space.