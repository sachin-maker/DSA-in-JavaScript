
//Type 13
// *   *
//  * * 
//   *  
//  * * 
// *   *



for(let i=1;i<=5;i++){
    let pattern =''
    for(let j=1;j<=5;j++){
        if(i==j || i+j ==4){
            pattern +='*'
        }
        else{
            pattern +=' '
        }
        
    }
    console.log(pattern)
}