 ## type 8
 ```js
    *
   ***
  *****
 *******
*********
```
```js
for(let i=1;i<=5;i++){
    let  pattern =''
    for(let j=4;j>=i;j--){
        pattern +=' '
    }
    for(let k=1;k<=i;k++){
        pattern +='*'
    }
    for(let l=2;l<=i;l++){
        pattern +='*'
    }
    console.log(pattern)
}
```