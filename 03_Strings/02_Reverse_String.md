## reversed string

```JS
string ="India is my country"
output = "yrtnuoc ym si aidnI" ;

```
```js
function reverseString(){
    var str="hello world";
    let result=str.split('').reverse().join('');
    return result
}

console.log(reverseString())
```

## Without in-built function

```js
function reverseString(){
    var str="hello world";
    let result='';

    for(let i=str.length-1;i>=0;i--){
        result +=str[i]
    }
    return result;
}

console.log(reverseString())
```