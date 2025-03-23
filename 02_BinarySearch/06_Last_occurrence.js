// Last occurrence in a sorted array

// Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.

// Input: N = 7, target=13, array[] = {3,4,13,13,13,20,40}
// Output: 4
// Explanation: As the target value is 13 , it appears for the first time at index number 2.

// Initially consider the start=0 and the end=n-1 pointers and the result as -1.

// Till start does not crossover end pointer compare the mid element 

// If the mid element is equal to the key value, store the mid-value in the result and move the start pointer to mid+1(move leftward)
// Else if the key value is less than the mid element then end= mid-1(move leftward)
// Else do start = mid+1 (move rightwards)

function lastOccurrence(arr, target) {
    let low = 0, high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            result = mid;  // Update last found index
            low = mid + 1; // Move right to find the last occurrence
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}

// Example
console.log(lastOccurrence([3, 4, 13, 13, 13, 20, 40], 13)); // Output: 4


// arr = [3, 4, 13, 13, 13, 20, 40], target = 13

// Steps:
// Start with low = 0, high = 6, result = -1

// Compute mid = Math.floor((0+6)/2) = 3 → arr[3] = 13

// Found 13, update result = 3, move low = 4

// Compute mid = Math.floor((4+6)/2) = 5 → arr[5] = 20

// 20 > 13, move high = 4

// Compute mid = Math.floor((4+4)/2) = 4 → arr[4] = 13

// Found 13, update result = 4, move low = 5

// Loop exits, return result = 4


