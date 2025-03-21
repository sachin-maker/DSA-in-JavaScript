// Find the number that appears once, and the other numbers twice
// Input Format:
//  arr[] = {4,1,2,1,2}
// Result:
//  4
// Explanation:
//  In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer.


// Naive Approach(Brute-force approach): 
// Approach:
// The steps are as follows:

// First, we will run a loop(say i) to select the elements of the array one by one.
// For every element arr[i], we will perform a linear search using another loop and count its occurrence.
// If for any element the occurrence is 1, we will return it.




function getSingleElement(arr) {
    // Size of the array:
    const n = arr.length;
  
    // Run a loop for selecting elements:
    for (let i = 0; i < n; i++) {
      const num = arr[i]; // selected element
      let cnt = 0;
  
      // Find the occurrence using linear search:
      for (let j = 0; j < n; j++) {
        if (arr[j] === num) {
          cnt++;
        }
      }
  
      // If the occurrence is 1, return the number:
      if (cnt === 1) {
        return num;
      }
    }
  
    // This line will never execute
    // if the array contains a single element.
    return -1;
  }
  
  function main() {
    const arr = [4, 1, 2, 1, 2];
    const ans = getSingleElement(arr);
    console.log("The single element is:", ans);
  }
  
  main();
  
  
//   Time Complexity: O(N2), where N = size of the given array.
//   Reason: For every element, we are performing a linear search to count its occurrence. 
// The linear search takes O(N) time complexity. And there are N elements in the array. So, the total time complexity will be O(N2).

//   Space Complexity: O(1) as we are not using any extra space.  


// optimal Approch

// Two important properties of XOR are the following:

// XOR of two same numbers is always 0 i.e. a ^ a = 0. ←Property 1.
// XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a.  ←Property 2

// Here all the numbers except the single number appear twice and so will form a pair. Now, if we perform XOR of all elements of the array, the XOR of each pair will result in 0 according to the XOR property 1. The result will be = 0 ^ (single number) = single number (according to property 2).

// So, if we perform the XOR of all the numbers of the array elements, we will be left with a single number.

// Approach:
// We will just perform the XOR of all elements of the array using a loop and the final XOR will be the answer.

// Assume the given array is: [4,1,2,1,2]
// XOR of all elements = 4^1^2^1^2
    //   = 4 ^ (1^1) ^ (2^2)
    //   = 4 ^ 0 ^ 0 = 4^0 = 4
// Hence, 4 is the single element in the array.




function getSingleElement(arr) {
    // XOR all the elements:
    let xorr = 0;
    for (let i = 0; i < arr.length; i++) {
        xorr = xorr ^ arr[i];
    }
    return xorr;
}

function main() {
    let arr = [4, 1, 2, 1, 2];
    let ans = getSingleElement(arr);
    console.log("The single element is:", ans);
}

main();



// Time Complexity: O(N), where N = size of the array.
// Reason: We are iterating the array only once.

// Space Complexity: O(1) as we are not using any extra space.