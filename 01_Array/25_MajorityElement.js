// Find the Majority Element that occurs more than N/2 times

// Given an array of N integers, write a program to return an element that occurs more than N/2 times 
// in the given array. 
// You may consider that such an element always exists in the array.

// Example 2:
// Input Format:
//   N = 7, nums[] = {2,2,1,1,1,2,2}

// Result
// : 2

// Explanation
// : After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

// Naive Approach: 
// The steps are as follows:

// We will run a loop that will select the elements of the array one by one.
// Now, for each element, we will run another loop and count its occurrence in the given array.
// If any element occurs more than the floor of (N/2), we will simply return it.




function majorityElement(arr) {
    // Size of the given array
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        // Selected element is arr[i]
        let cnt = 0;
        for (let j = 0; j < n; j++) {
            // Counting the frequency of arr[i]
            if (arr[j] === arr[i]) {
                cnt++;
            }
        }

        // Check if frequency is greater than n/2
        if (cnt > Math.floor(n / 2)) {
            return arr[i];
        }
    }

    return -1;
}

let arr = [2, 2, 1, 1, 1, 2, 2];
let ans = majorityElement(arr);
console.log("The majority element is:", ans);

// Time Complexity: O(N^2), where N = size of the given array.
//  Reason: For every element of the array the inner loop runs for N times. 
//  And there are N elements in the array. 
// So, the total time complexity is O(N2). Space Complexity: O(1) as we use no extra space.

// Optimal Approach: Moore’s Voting Algorithm:
// Intuition:
// If the array contains a majority element, its occurrence must be greater than the floor(N/2).
//  Now, we can say that the count of minority elements and 
//  majority elements is equal up to a certain point in the array. 
//  So when we traverse through the array we try to keep track of the count of elements 
//  and the element itself for which we are tracking the count. 

// After traversing the whole array, we will check the element stored in the variable. 
// If the question states that the array must contain a majority element, 
// the stored element will be that one but if the question does not state so, 
// then we need to check if the stored element is the majority element or not. 
// If not, then the array does not contain any majority element.

// Approach: 
// Initialize 2 variables:
// Count –  for tracking the count of element
// Element – for which element we are counting
// Traverse through the given array.
// If Count is 0 then store the current element of the array as Element.
// If the current element and Element are the same increase the Count by 1.
// If they are different decrease the Count by 1.
// The integer present in Element should be the result we are expecting 




function majorityElement(arr) {
    // Size of the given array
    let n = arr.length;
    let cnt = 0; // Count
    let el; // Element

    // Applying the algorithm
    for (let i = 0; i < n; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = arr[i];
        } else if (el === arr[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

    // Checking if the stored element is the majority element
    let cnt1 = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === el) {
            cnt1++;
        }
    }

    if (cnt1 > Math.floor(n / 2)) {
        return el;
    }
    return -1;
}

let arr = [2, 2, 1, 1, 1, 2, 2];
let ans = majorityElement(arr);
console.log("The majority element is:", ans);

// Time Complexity: O(N) + O(N), where N = size of the given array.
// Reason: The first O(N) is to calculate the count and find the expected majority element. 
// The second one is to check if the expected element is the majority one or not.

// Space Complexity: O(1) as we are not using any extra space.
