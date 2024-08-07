// Type 10
// *
//  *
//   *
//    *
//     *

for(let i=1;i<=5;i++){
    let pattern ='';
    for(let j=1;j<=i;j++){
        if(i>=2 && j<=i-1){
            pattern +=' '
        }
        else{
            pattern +='*'
        }
    }
    console.log(pattern)
}