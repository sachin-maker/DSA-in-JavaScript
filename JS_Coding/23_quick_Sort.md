## Quick Sort function to sort the array between indices low and high
```js
function quickSort(arr, low, high) {
    if (low < high) {
        // Partition the array and get the pivot index
        let piIdx = partition(arr, low, high);
        
        // Recursively sort the sub-arrays
        quickSort(arr, low, piIdx - 1);  // Sort the left sub-array
        quickSort(arr, piIdx + 1, high); // Sort the right sub-array
    }
    return arr;
}

// Partition function to place pivot in the correct position
function partition(arr, low, high) {
    // Choose the last element as the pivot
    let pivot = arr[high];
    let i = low - 1; // Index of the smaller element

    // Traverse through all elements, comparing them with the pivot
    for (let j = low; j < high; j++) {
        // If the current element is smaller than or equal to the pivot
        if (arr[j] < pivot) {
            i++; // Increment index of the smaller element

            // Swap the current element with the element at index i
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    // Place the pivot in its correct position in the sorted array
    i++;
    let temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;

    // Return the index of the pivot after placement
    return i;
}

// Example usage
let arr = [11, 9, 3, 12, 45, 4];
let n = arr.length;
let low = 0;
let high = n - 1;
console.log(quickSort(arr, low, high)); // Output: [3, 4, 9, 11, 12, 45]

```


// ============================================================
### To modify the Quick Sort algorithm to sort in descending order, you need to adjust the comparison logic in the partition function. Instead of placing elements less than the pivot to the left, you'll place elements greater than the pivot to the left.

```js

function partition(arr,low,high){
    let pivot=arr[high];
    let i=low-1;
    
    for(let j=low;j<high;j++){
        if(arr[j] > pivot ){
            i++;
            

            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
    
    i++;


    let temp=arr[i];
    arr[i]=pivot;
    arr[high]=temp;
    
    return i;
    
    
}
```
