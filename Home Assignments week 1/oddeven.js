// 1. Create a function named `isOddOrEven` that takes a number as a parameter
// 2. Declare and initialize the variable
// 3. Use a conditional statement to check if the number is divisible by 2
// 4. Call the function and print the result

let number = 24

function isOddOrEven(number){

        if(number%2===0){
            return number + " is Even" 
        }else{
            return number + " is odd"
    }
}

let output = isOddOrEven(number)
console.log(output)