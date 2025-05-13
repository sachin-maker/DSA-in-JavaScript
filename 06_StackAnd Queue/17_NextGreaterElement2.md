## Next Greater Element 1
### The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.   Example 1:

```js
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
Example 2:

Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.    
```

### Brute force

```js
/**
 * Brute Force: Finds the next greater element for each element in nums1 within nums2.
 * Time Complexity: O(n * m), where n is length of nums1, m is length of nums2.
 * Space Complexity: O(n) for the result array.
 * @param {number[]} nums1 - Subset array
 * @param {number[]} nums2 - Main array
 * @return {number[]} - Next greater element for each element in nums1
 */
function nextGreaterElementBruteForce(nums1, nums2) {
    const n = nums1.length;
    const result = new Array(n).fill(-1);
    
    for (let i = 0; i < n; i++) {
        const x = nums1[i];
        // Find index of x in nums2
        let j = 0;
        while (j < nums2.length && nums2[j] !== x) {
            j++;
        }
        // Look for next greater element to the right
        for (let k = j + 1; k < nums2.length; k++) {
            if (nums2[k] > x) {
                result[i] = nums2[k];
                break;
            }
        }
    }
    
    return result;
}
```

### optimal Approch

#### The optimized solution uses a monotonic stack to efficiently compute the next greater elements for all elements in nums2, storing the results in a map. Then, we use this map to construct the answer for nums1. The stack maintains elements in a decreasing order, allowing us to find the next greater element in a single pass through nums2.

#### Steps:
* #### Use a stack to track elements (or their indices) from nums2.
* #### Iterate through nums2. For each element:
* #### Pop elements from the stack whose values are less than the current element, and map those popped elements to the current element (their next greater element).
* #### Push the current element onto the stack.
* #### After the loop, any elements remaining in the stack have no next greater element, so map them to -1.
* #### For each element in nums1, retrieve its next greater element from the map.


```js

/**
 * Optimized: Uses a monotonic stack to find the next greater element.
 * Time Complexity: O(m), where m is length of nums2 (single pass).
 * Space Complexity: O(m) for the stack and map.
 * @param {number[]} nums1 - Subset array
 * @param {number[]} nums2 - Main array
 * @return {number[]} - Next greater element for each element in nums1
 */
function nextGreaterElement(nums1, nums2) {
    const map = new Map(); // Maps element to its next greater element
    const stack = []; // Monotonic stack for indices or elements
    
    // Process nums2 to find next greater elements
    for (let i = 0; i < nums2.length; i++) {
        const curr = nums2[i];
        // Pop elements smaller than current (curr is their next greater)
        while (stack.length > 0 && stack[stack.length - 1] < curr) {
            map.set(stack.pop(), curr);
        }
        stack.push(curr);
    }
    
    // Remaining elements in stack have no next greater element
    while (stack.length > 0) {
        map.set(stack.pop(), -1);
    }
    
    // Build result for nums1 using the map
    const result = new Array(nums1.length);
    for (let i = 0; i < nums1.length; i++) {
        result[i] = map.get(nums1[i]);
    }
    
    return result;
}

// Example usage:
const nums1_1 = [4, 1, 2], nums2_1 = [1, 3, 4, 2];
console.log("Brute Force:", nextGreaterElementBruteForce(nums1_1, nums2_1)); // Output: [-1, 3, -1]
console.log("Optimized:", nextGreaterElement(nums1_1, nums2_1)); // Output: [-1, 3, -1]

const nums1_2 = [2, 4], nums2_2 = [1, 2, 3, 4];
console.log("Brute Force:", nextGreaterElementBruteForce(nums1_2, nums2_2)); // Output: [3, -1]
console.log("Optimized:", nextGreaterElement(nums2_2, nums2_2)); // Output: [3, -1]

```