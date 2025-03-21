// Leaders in an Array

// Problem Statement: Given an array, print all the elements which are leaders. 
// A Leader is an element that is greater than all of the elements on its right side in the array.

// In this brute force approach, we start checking all the elements from the start of the array
//  to the end to see if an element is greater than all the elements on its right (i.e, the leader).
// For this, we will use nested loops where the outer loop will check for each element in the array whether it is a leader or not.
// The inner loop checks if there is any element to the right that is greater than 
// the element currently traversed by the outer loop.
// We start by initializing the outer loop pointer to the start element 
// and setting it as the current leader.
// If any element traversed is found greater than the element currently set as a leader,
//  it will not go to the ans array and we increment the outer loop pointer by 1 and 
// set the next element as the current leader.
// If we don’t find any other element to the right greater than the current element,
//  then we push the current element to the ans array stating that is it the leader element.




function printLeadersBruteForce(arr, n) {

    let ans = [];
  
    for (let i = 0; i < n; i++) {
      let leader = true;
  
      //Checking whether arr[i] is greater than all 
      //the elements in its right side
      for (let j = i + 1; j < n; j++)
        if (arr[j] > arr[i]) {
  
          // If any element found is greater than current leader
          // curr element is not the leader.
          leader = false;
          break;
        }
  
      // Push all the leaders in ans array.
      if (leader)
        ans.push(arr[i]);
  
    }
  
    return ans;
  }
  
  // Array Initialization.
  let n = 6;
  let arr = [10, 22, 12, 3, 0, 6];
  
  let ans = printLeadersBruteForce(arr, n);
  
  for (let i = 0; i < ans.length; i++) {
    console.log(ans[i]);
  }
  
//   Time Complexity: O(N^2) 
//   { Since there are nested loops being used, at the worst case n^2 time would be consumed }.

//   Space Complexity: O(N)
//    { There is no extra space being used in this approach. 
// But, a O(N) of space for ans array will be used in the worst case }.  


// Optimal Approch

// Approach
// Start from the rightmost element (last index).
// Initialize maxRight with the last element (since the rightmost element is always a leader).
// Traverse the array in reverse:
// If the current element is greater than maxRight, it is a leader.
// Update maxRight with the current element.
// Store leaders in an array (in reverse order) and return them in correct order.

function findLeaders(arr) {
    let n = arr.length;
    let leaders = [];
    let maxRight = arr[n - 1];

    // The last element is always a leader
    leaders.push(maxRight);

    // Traverse from second last element to the left
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > maxRight) {
            maxRight = arr[i];
            leaders.push(maxRight);
        }
    }

    // Reverse the result since we collected leaders in reverse order
    return leaders.reverse();
}

// Example Test Case
console.log(findLeaders([16, 17, 4, 3, 5, 2])); // Output: [17, 5, 2]
console.log(findLeaders([10, 22, 12, 3, 0, 6])); // Output: [22, 12, 6]

// Dry Run
// Input: [16, 17, 4, 3, 5, 2]
// Start from 2, maxRight = 2, leaders = [2]
// 5 > 2 → maxRight = 5, leaders = [2, 5]
// 3 < 5 → No change
// 4 < 5 → No change
// 17 > 5 → maxRight = 17, leaders = [2, 5, 17]
// 16 < 17 → No change
// Final leaders (after reverse): [17, 5, 2]

// Time Complexity:
// O(N) (Single pass from right to left)