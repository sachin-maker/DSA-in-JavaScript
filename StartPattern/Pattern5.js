//type 6
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

for(let i=1;i<=5;i++){
    let pattern ='';
    for(let j=4;j>=i;j--){
        pattern +=' '
    }
    for(let k=1;k<=i;k++){
        pattern +='*'
    }
    console.log(pattern)
}
for(let i=1;i<=5;i++){
    let pattern =''
    for(let j=1;j<=i;j++){
        pattern +=' '
    }
    for(let k=4;k>=i;k--){
        pattern +="*"
    }
    console.log(pattern)
}














