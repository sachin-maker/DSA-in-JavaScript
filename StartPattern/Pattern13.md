## type 14
```js
*****
*   *
*   *
*   *
*****
```

```js
for(let i=1;i<=5;i++){
    let pattern =''
    for(let j=1;j<=5;j++){
        if(i>=2 && j>=2 && i<=4 && j<=4){
            pattern +=' '
        }
        else{
            pattern +='*'
        }
        
    }
    console.log(pattern)
}
```