## Sum of Subarray Minimum

### Given an array of integers arr, find the sum of min(b), where b ranges over every (contiguous) subarray of arr. Since the answer may be large, return the answer modulo 109 + 7.

 
```js
Example 1:

Input: arr = [3,1,2,4]
Output: 17
Explanation: 
Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
Sum is 17.
Example 2:

Input: arr = [11,81,94,43,3]
Output: 444    

```

## Step 1: Brute Force Approach

* #### Generating all possible contiguous subarrays.
* #### Finding the minimum of each subarray.
* #### Summing these minimums.
* #### Applying modulo 10^9 + 7 to the final sum.

#### For an array of length n, there are n*(n+1)/2 subarrays (since each subarray is defined by a start index i and end index j where i ≤ j). For each subarray, finding the minimum takes O(n) time in the worst case.

### Time Complexity: O(n^3) — O(n^2) for generating subarrays and O(n) for finding each minimum.
### Space Complexity: O(1) excluding the output.

```js
const MOD = 1000000007;

function sumSubarrayMins(arr) {
    let sum = 0;
    const n = arr.length;
    
    // Generate all subarrays
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // Find minimum in subarray arr[i...j]
            let minVal = arr[i];
            for (let k = i; k <= j; k++) {
                minVal = Math.min(minVal, arr[k]);
            }
            sum = (sum + minVal) % MOD;
        }
    }
    
    return sum;
}
```

## Optimal (Monotonic Stack, Time: O(n), Space: O(n))
Key Idea:
* #### For each element arr[i], calculate how many subarrays arr[i] is the minimum in.

* #### Use monotonic stack to find:

* #### Previous Less Element (PLE)

* #### Next Less Element (NLE)

* #### left[i]: number of elements to the left where arr[i] is the min

* #### right[i]: number of elements to the right where arr[i] is the min

* #### Then arr[i] contributes:
* #### ➡️ arr[i] * left[i] * right[i] to the final sum.


```js
function sumSubarrayMins(arr) {
  const MOD = 1e9 + 7;
  const n = arr.length;
  const stack1 = [];
  const stack2 = [];
  const left = Array(n).fill(0);
  const right = Array(n).fill(0);

  // Previous Less Element (strictly greater)
  for (let i = 0; i < n; i++) {
    while (stack1.length && arr[stack1[stack1.length - 1]] > arr[i]) {
      stack1.pop();
    }
    let prev = stack1.length ? stack1[stack1.length - 1] : -1;
    left[i] = i - prev;
    stack1.push(i);
  }

  // Next Less Element (greater or equal)
  for (let i = n - 1; i >= 0; i--) {
    while (stack2.length && arr[stack2[stack2.length - 1]] >= arr[i]) {
      stack2.pop();
    }
    let next = stack2.length ? stack2[stack2.length - 1] : n;
    right[i] = next - i;
    stack2.push(i);
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result = (result + arr[i] * left[i] * right[i]) % MOD;
  }

  return result;
}

```