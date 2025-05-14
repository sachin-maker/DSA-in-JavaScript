##  Trapping Rain Water

### Given an array of non-negative integers representation elevation of ground. Your task is to find the water that can be trapped after rain.
```js
Input: height= [0,1,0,2,1,0,1,3,2,1,2,1]

Output: 6

```

### Problem Explanation
* #### Input: An array height of non-negative integers, where height[i] represents the height of a bar at index i.
* #### Output: The total units of water that can be trapped between bars after raining.
* #### Concept: Water can be trapped at an index i if there are bars on both the left and right that are taller than height[i]. The amount of water trapped at index i is determined by:
* #### The minimum of the maximum height of bars to the left (leftMax) and the maximum height of bars to the right (rightMax).
* #### Water trapped at index i = min(leftMax, rightMax) - height[i], provided this value is positive.
* #### If min(leftMax, rightMax) <= height[i], no water is trapped at that index.
* #### Total Water: Sum of water trapped at each index.


## Brute Force Approach

* #### For each index i, calculate:
* #### leftMax: Maximum height of all bars from index 0 to i.
* #### rightMax: Maximum height of all bars from index i to the end.
* #### Water trapped at index i = min(leftMax, rightMax) - height[i] (if positive).
* #### Sum the water trapped at each index to get the total.
* #### Skip the first and last indices (i=0 and i=n-1) since water cannot be trapped at the boundaries (no bar to contain water on one side).

### Steps:

* #### Iterate through each index i from 1 to n-2 (where n is the array length).
* #### For each i:
* #### Scan from 0 to i to find leftMax.
* #### Scan from i to n-1 to find rightMax.
* #### Compute water trapped as min(leftMax, rightMax) - height[i].
* #### Add the water (if positive) to the total.

### Complexity:

* #### Time Complexity: O(n²). For each of the n indices, we scan up to n elements to find leftMax and rightMax.
* #### Space Complexity: O(1), excluding the output variable, as we only use a few variables.

### Issues:

* #### Highly inefficient for large arrays due to repeated scanning for leftMax and rightMax.

```js
/**
 * Brute Force: Compute leftMax and rightMax for each index by scanning.
 * Time: O(n²), Space: O(1).
 * @param {number[]} height - Array of bar heights
 * @return {number} - Total water trapped
 */
function trapBruteForce(height) {
    const n = height.length;
    let water = 0;
    
    // Check indices 1 to n-2 (boundaries can't trap water)
    for (let i = 1; i < n - 1; i++) {
        // Find left max
        let leftMax = 0;
        for (let j = 0; j <= i; j++) {
            leftMax = Math.max(leftMax, height[j]);
        }
        
        // Find right max
        let rightMax = 0;
        for (let j = i; j < n; j++) {
            rightMax = Math.max(rightMax, height[j]);
        }
        
        // Water at index i
        water += Math.min(leftMax, rightMax) - height[i];
    }
    
    return water;
}

```




## 2. Better Approach (Precomputed Max Arrays)

* #### Instead of computing leftMax and rightMax for each index repeatedly, precompute them for all indices in two arrays:
* #### leftMax[i]: Maximum height from index 0 to i.
* #### rightMax[i]: Maximum height from index i to n-1.
* #### Then, iterate through the array once to calculate water trapped at each index using the precomputed values.

### Steps:

* #### Create two arrays, leftMax and rightMax, of size n.
* #### Compute leftMax:
* #### leftMax[0] = height[0].
* #### For i from 1 to n-1, leftMax[i] = max(leftMax[i-1], height[i]).
* #### Compute rightMax:
* #### rightMax[n-1] = height[n-1].
* #### For i from n-2 to 0, rightMax[i] = max(rightMax[i+1], height[i]).
* #### Iterate from i=1 to n-2:
* #### Water at index i = min(leftMax[i], rightMax[i]) - height[i] (if positive).
* #### Sum the water to get the total.


### Complexity:

* #### Time Complexity: O(n). Three passes through the array: one for leftMax, one for rightMax, and one to compute water.
* #### Space Complexity: O(n) for the leftMax and rightMax arrays.

```js

/**
 * Better: Precompute leftMax and rightMax arrays.
 * Time: O(n), Space: O(n).
 * @param {number[]} height - Array of bar heights
 * @return {number} - Total water trapped
 */
function trapBetter(height) {
    const n = height.length;
    if (n < 3) return 0;
    
    // Compute leftMax array
    const leftMax = new Array(n);
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    
    // Compute rightMax array
    const rightMax = new Array(n);
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    
    // Calculate water
    let water = 0;
    for (let i = 1; i < n - 1; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    
    return water;
}
```

## 3. Optimal Approach (Two Pointers)

* #### Use two pointers (left and right) starting from the ends of the array and moving toward the center.
* #### Maintain two variables:
* #### leftMax: Maximum height seen from the left side.
* #### rightMax: Maximum height seen from the right side.
* #### Process the smaller side (left or right) to ensure water calculation is valid:
* #### If height[left] <= height[right], process the left side:
* #### Update leftMax.
* #### If leftMax > height[left], water trapped = leftMax - height[left].
* #### Move left right.
* #### Otherwise, process the right side:
* #### Update rightMax.
* #### If rightMax > height[right], water trapped = rightMax - height[right].
* #### Move right left.

## Steps:

* #### Initialize left = 0, right = n-1, leftMax = 0, rightMax = 0, and water = 0.
* #### While left < right:
* #### If height[left] <= height[right]:
* #### Update leftMax = max(leftMax, height[left]).
* #### Add leftMax - height[left] to water (if positive).
* #### Increment left.
* #### Else:
* #### Update rightMax = max(rightMax, height[right]).
* #### Add rightMax - height[right] to water (if positive).
* #### Decrement right.
* #### Return water.

## Complexity:

* #### Time Complexity: O(n). Single pass through the array as left and right converge.
* #### Space Complexity: O(1), as we only use a few variables.

```js
/**
 * Optimal: Use two pointers to process array in one pass.
 * Time: O(n), Space: O(1).
 * @param {number[]} height - Array of bar heights
 * @return {number} - Total water trapped
 */
function trap(height) {
    const n = height.length;
    if (n < 3) return 0;
    
    let left = 0, right = n - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;
    
    while (left < right) {
        if (height[left] <= height[right]) {
            // Process left side
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            // Process right side
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }
    
    return water;
}

// Example usage
const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log("Brute Force:", trapBruteForce(height)); // Output: 6
console.log("Better:", trapBetter(height)); // Output: 6
console.log("Optimal:", trap(height)); // Output: 6

```