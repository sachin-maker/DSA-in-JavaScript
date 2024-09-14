## write program that given number prime or not any number divided by itself and by one called prime number

```js

function isPrime(n){
    if(n < 2) return `${n} is not prime number`
    
    for(let i=2;i<n;i++){
        if(n % i ===0) return `${n} is not prime Number`
    }
    
    return `${n} is prime number`
}

console.log(isPrime(9))

```