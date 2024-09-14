## type 1
```js
*
**
***
****
*****
```

```js
// Number of rows for the pattern
const rows = 5;

// Loop to iterate through each row
for (let i = 1; i <= rows; i++) {
  let pattern = '';
  
  // Loop to add '*' characters in each row
  for (let j = 1; j <= i; j++) {
    pattern += '*';
  }
  
  // Print the current row pattern
  console.log(pattern);
}

```


## type 2
```js
*****
****
***
**
*
```

```js
for(let i=1;i<=5;i++){
    let pattern=''
    for(let j=5;j>=i;j--){
        pattern +='*'
        
    }
    console.log(pattern)
    
}
```