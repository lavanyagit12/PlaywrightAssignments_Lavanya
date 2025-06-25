// 1. Create a function named that takes a number as a parameter.
// 2. Declare and initialize the variable.
// 3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0,
// and to handle the case when the number is zero.
// 4. Return the corresponding string value for each case.
// 5. Call the function and print the result

let number = -1

function isPostiveOrNegative(number){

    if(number>0){

        return number + " is Positive"

    }else if(number===0){

        return number + " is Neutral"
    }
    else{
         
        return number + " is Negative"
    }
}

let output = isPostiveOrNegative(number)
console.log(output)
