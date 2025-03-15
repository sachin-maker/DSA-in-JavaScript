// Finding Union of Two sorted Arrays Using Set in JavaScript

// The union of two arrays contains all distinct elements from both arrays.
//  We can use a Set in JavaScript to achieve this efficiently.

const findUnion = (arr1, arr2) => {
    let unionSet = new Set([...arr1, ...arr2]); // Using Set to store unique elements
    return [...unionSet]; // Convert Set back to an array
};

// Example Usage
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

console.log(findUnion(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7]

// Explanation:
// Combine both arrays using the spread operator ([...]).
// Convert to a Set, which automatically removes duplicates.
// Convert the Set back to an array and return it.

// Time Complexity:
// Creating a Set takes O(N + M), where N and M are the lengths of arr1 and arr2.
// Converting the Set back to an array takes O(N + M).
// Overall: O(N + M).

// Space Complexity:
// We use a Set to store distinct elements, which can take O(N + M) space.
// Overall: O(N + M).

