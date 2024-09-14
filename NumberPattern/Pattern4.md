```js
1 
1 2 1 
1 2 3 2 1 
1 2 3 4 3 2 1 
1 2 3 4 5 4 3 2 1 
```

```js

for(let i =1;i<=5;i++){
    let pattern ='';
  
  for(let j=1;j<=i;j++){
      pattern +=j+" "
  }
  for(let k=i-1;k>=1;k--){
      pattern +=k+" "
  }
  
    console.log(pattern)
}
```