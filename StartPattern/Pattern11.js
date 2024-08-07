//      *
//     * *
//    *   *
//   *     *
//  *       *

for(let i=1;i<=5;i++){
    let pattern =''
    for(let j=5;j>=i;j--){
        pattern +=' '
    }
    for(let k=1;k<i * 2;k++){
       if(k > 1 && k < (i*2)-1){
           pattern +=' '
       }else{
            pattern +='*'
       }
       
    }
   
    console.log(pattern)
}