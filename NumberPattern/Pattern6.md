```js
1 
2 6 
3 7 10 
4 8 11 13 
5 9 12 14 15 
```

```js
for(let i =1;i<=5;i++){
    let pattern ='';
    let number=i;
  
  for(let j=1;j<=i;j++){
      pattern +=number+" "
      number=(number + 5) -j
  }
  
  
    console.log(pattern)
}
```