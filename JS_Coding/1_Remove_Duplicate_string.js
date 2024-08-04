//Questions 
//Remove Duplicate Charcter from string
//example.  Str="priya riya supriya "
//          output="priya su"


function removeDuplicates(){
    var str="priya riya supriya";
    let result=str.split('').filter((item,index,arr)=>{
        return arr.indexOf(item)==index;
    }).join('');

    return result;
}

console.log(removeDuplicates())



// Without Using In-built function

function removeDuplicates(){
    var str="priya supriya riya";
    let seen={};
    let result='';
   

    for(let i=0;i<str.length;i++){
        var char =str[i];

        if(!seen[char]){
            seen[char]=true;
            result +=char
        }
    }
    return result;

}

console.log(removeDuplicates())


//Remove duplicate charcter in array

function removeDuplicates(){
    var arr=[1,2,3,4,3,2,7,7,8,9,8];
    let result =arr.filter((value,index,arr)=>{
        return arr.indexOf(value)===index
    })
    return result;
}

console.log(removeDuplicates())

// Without built in function

function removeDuplicates(){
    var arr=[1,2,3,4,5,5,4,3,7,8,9,9,6,44,55,66];
    var seen={};
    let result=[];

    for(let i=0;i<arr.length;i++){
         
        var element=arr[i]
        if(!seen[element]){
            seen[element]=true;
           result.push(element)
        }
    }
    return result ;
}
console.log(removeDuplicates())

