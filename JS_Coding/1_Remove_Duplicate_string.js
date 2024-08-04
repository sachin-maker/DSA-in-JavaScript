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