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