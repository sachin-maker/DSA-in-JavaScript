//Type 9
//  *********
//   *******
//    *****
//     ***
//      *



for(let i=1;i<=5;i++){
    let  pattern =''
    for(let j=1;j<=i;j++){
        pattern +=' '
    }
    for(let k=5;k>=i;k--){
        pattern +='*'
    }
    for(let l=4;l>=i;l--){
        pattern +='*'
    }
    console.log(pattern)
}