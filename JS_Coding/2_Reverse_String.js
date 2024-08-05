// reversed string
// string ="India is my country"
// output = "yrtnuoc ym si aidnI" ;


function reverseString(){
    var str="hello world";
    let result=str.split('').reverse().join('');
    return result
}

console.log(reverseString())

// Without in-built function

function reverseString(){
    var str="hello world";
    let result='';

    for(let i=str.length-1;i>=0;i--){
        result +=str[i]
    }
    return result;
}

console.log(reverseString())


// reverse array without built in function

function reverseArray(){
    var arr=[1,2,3,4,5,6,7,8];
    let result=[];
    
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    return result;
}
console.log(reverseArray())


