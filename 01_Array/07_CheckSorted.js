// Check if an Array is Sorted
// Approach: Brute Force
// The idea is pretty simple here, We will start with the element at the 0th index, and will compare it with all of its future elements that are present in the array.
// If the picked element is smaller than or equal to all of its future values then we will move to the next Index/element until the whole array is traversed.
// If any of the picked elements is greater than its future elements, Then simply we will return False.
// If the size of the array is Zero or One i.e ( N = 0 or N = 1 ) or the entire array is traversed successfully then we will simply return True.


function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i])
          return false;
      }
    }
  
    return true;
  }
  
  const arr = [1, 2, 3, 4, 5];
  const ans = isSorted(arr);
  if (ans) console.log("True");
  else console.log("False");
  
// Time Complexity: O(N^2)
// Space Complexity: O(1)

// Approach: Efficient (Single traversal)
// As we know that for a sorted array the previous of every element is smaller than or equal to its current element.
// So, Through this, we can conclude that if the previous element is smaller than or equal to the current element then. Then we can say that the two elements are sorted. If the condition is true for the entire array then the array is sorted.
// We will check every element with its previous element if the previous element is smaller than or equal to the current element then we will move to the next index.
// If the whole array is traversed successfully or the size of the given array is zero or one (i.e N = 0 or N = 1). Then we will return True else return False.

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1])
        return false;
    }
  
    return true;
  }
  
  const arr = [1, 2, 3, 4, 5];
  
  console.log(isSorted(arr) ? "True" : "False");
  
  