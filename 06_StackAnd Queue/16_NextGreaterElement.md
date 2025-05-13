## Next greater element 2.

### Given a circular integer array A, return the next greater element for every element in A. The next greater element for an element x is the first element greater than x that we come across while traversing the array in a clockwise manner. If it doesn't exist, return -1 for this element. start from brute force to optimal

```js
nput: N = 11, A[] = {3,10,4,2,1,2,6,1,7,2,9}

Output: 10,-1,6,6,2,6,7,7,9,9,10

Explanation: For the first element in A ,i.e, 3, the greater element which comes next to it while traversing and is closest to it is 10. Hence,10 is present on index 0 in the resultant array. Now for the second element,i.e, 10, there is no greater number and hence -1 is it’s next greater element (NGE). Similarly, we got the NGEs for all other elements present in A.  


Example 2:

Input:  N = 6, A[] = {5,7,1,7,6,0}

Output: 7,-1,7,-1,7,5
```

### Brute Force:
* #### For each element at index i, we check up to n elements starting from i+1 (circularly using (i+j)%n).
* #### If we find an element greater than nums[i], we store it in result[i] and break.
* #### If no greater element is found after n checks, result[i] remains -1.
* #### Time: O(n²) as we may check up to n elements for each of the n elements.
* #### Space: O(n) for the result array.

```js
/**
 * Brute Force: Finds the next greater element for each element in a circular array.
 * Time Complexity: O(n^2), where n is the length of the array.
 * Space Complexity: O(n) for the result array.
 * @param {number[]} nums - The input circular array
 * @return {number[]} - Array containing the next greater element for each element
 */
function nextGreaterElementsBruteForce(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    
    for (let i = 0; i < n; i++) {
        // Check the next n elements circularly
        for (let j = 1; j <= n; j++) {
            const nextIndex = (i + j) % n;
            if (nums[nextIndex] > nums[i]) {
                result[i] = nums[nextIndex];
                break;
            }
        }
    }
    
    return result;
}
```

### Optimized (Monotonic Stack):
* #### We use a stack to maintain indices of elements in a decreasing order.
* #### Iterate through the array twice (2n iterations) to handle the circular property.
* #### For each element at index i % n:
* #### Pop all stack indices where the corresponding element is less than the current element, and set the current element as their next greater element.
* #### Push the current index onto the stack (only for the first n iterations to avoid duplicates).
* #### Time: O(n) since we process 2n elements, and each element is pushed and popped at most once.
* #### Space: O(n) for the stack and result array.

```js

/**
 * Optimized: Uses a monotonic stack to find the next greater element.
 * Time Complexity: O(n), where n is the length of the array (we process 2n elements).
 * Space Complexity: O(n) for the stack and result array.
 * @param {number[]} nums - The input circular array
 * @return {number[]} - Array containing the next greater element for each element
 */
function nextGreaterElements(nums) {
    const n = nums.length;
    const result = new Array(n).fill(-1);
    const stack = []; // Stack to store indices of elements
    
    // Iterate twice to simulate circular array (0 to 2n-1)
    for (let i = 0; i < 2 * n; i++) {
        const curr = nums[i % n]; // Current element (modulo for circular access)
        
        // Pop elements from stack while current element is greater
        while (stack.length > 0 && nums[stack[stack.length - 1]] < curr) {
            const index = stack.pop();
            result[index] = curr;
        }
        
        // Push current index (only for first n iterations to avoid duplicates)
        if (i < n) {
            stack.push(i);
        }
    }
    
    return result;
}

// Example usage:
const nums1 = [1, 2, 1];
console.log("Brute Force:", nextGreaterElementsBruteForce(nums1)); // Output: [2, -1, 2]
console.log("Optimized:", nextGreaterElements(nums1)); // Output: [2, -1, 2]

const nums2 = [1, 2, 3, 4, 3];
console.log("Brute Force:", nextGreaterElementsBruteForce(nums2)); // Output: [2, 3, 4, -1, 4]
console.log("Optimized:", nextGreaterElements(nums2)); // Output: [2, 3, 4, -1, 4]

```

