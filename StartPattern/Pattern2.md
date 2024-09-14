## type 3
```js
*
**
***
****
*****
****
***
**
*
```
```js
for(let i=1;i<=5;i++){
    let pattern='';
    for(let j=1;j<=i;j++){
      pattern +='*'
    }
    console.log(pattern)
}
for(let i=1;i<=5;i++){
    let pattern='';
    for(let j=4;j>=i;j--){
        pattern +='*'
    }
    console.log(pattern)
}
```