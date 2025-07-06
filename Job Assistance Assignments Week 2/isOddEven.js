//1. Write a function in JavaScript to check if a number is even or odd using function expression and arrow function.

//Function expression
let checkEvenOdd = function(num){
    if (num%2===0){
        return `${num} is even`
    }else{
        return `${num} is odd`
    }
}
console.log(checkEvenOdd(10))
console.log(checkEvenOdd(13))

//arrowfunction
let verifyEvenOdd=(number)=>(number%2===0 ? `${number} is even` : `${number} is odd`)
        
console.log(verifyEvenOdd(7))
console.log(verifyEvenOdd(10))
