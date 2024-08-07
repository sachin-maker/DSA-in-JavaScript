//type 3
// 1
// 23
// 456
// 78910
// 1112131415

let count =0;
for(let i =1;i<=5;i++){
    let pattern ='';
    for(let j=1;j<=i;j++){
        count++;
        pattern +=count+" "
    }
    console.log(pattern)
}