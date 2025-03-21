// Find second largest element in array

//Brute force approch
//first find largest then compare largest element wih array of element 
const secondlargest=(arr)=>{
    let max=arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i]; 
    }
    
    let secondMax=-1;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i] > secondMax && arr[i] !=max){
            secondMax=arr[i]
        }
    }
    return secondMax;
}

let arr=[10,2,4,6,11,,9,53];
console.log(secondlargest(arr))

// This approach ensures O(2N) time complexity and O(1) space complexity. 🚀


// Optimal Approches
const secondLargest = (arr) => {
    if (arr.length < 2) return -1; // Edge case: If array has less than 2 elements

    let max = arr[0], secondMax = -1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    return secondMax ;
};

let arr1 = [10, 2, 4, 6, 11, 9, 53];
console.log(secondLargest(arr1)); // Output: 11

// This approach ensures O(N) time complexity and O(1) space complexity. 🚀





