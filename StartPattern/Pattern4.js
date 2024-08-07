// type 5
//   *****
//    ****
//     ***
//      ** 
//       *

for(let i=1;i<=5;i++){
    let pattern=''
    for(let j=1;j<=i;j++){
        pattern +=' '
    }
    for(let k=5;k>=i;k--){
        pattern +='*'
    }
    console.log(pattern)
}