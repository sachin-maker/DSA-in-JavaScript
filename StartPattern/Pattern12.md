
## Type 13
```js
*   *
 * * 
  *  
 * * 
*   *
```

```js
for(let i=0;i<5;i++){
    let pattern =''
    for(let j=0;j<5;j++){
        if(i==j || i+j ==4){
            pattern +='*'
        }
        else{
            pattern +=' '
        }
        
    }
    console.log(pattern)
}
```