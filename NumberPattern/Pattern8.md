```js
1 2 3 
6 5 4 
7 8 9 
12 11 10 
13 14 15 
```

```js
let count=0;
for(let i =1;i<=5;i++){
    let pattern ='';
    
    if(i % 2 !==0){
        for(let j=1;j<=3;j++){
            count ++
            pattern +=count +" "
        }
    }
    else{
        let temp=count + 1
        for(let k=count+ 3 ;k>=temp;k--){
            count++;
            pattern +=k +" "
        }
        
    }
  
  
    console.log(pattern)
}
```