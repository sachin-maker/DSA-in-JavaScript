let arr=[10,20,11,22,30,23,50];
let key=30;

function linearSearch(arr,key){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===key){
            return i;
        }
    }
    return -1;
}

let index=linearSearch(arr,key);

if(index=== -1){
  console.log("Key is not found")
}else{
    console.log(`Key is found at index ${index}`)

}