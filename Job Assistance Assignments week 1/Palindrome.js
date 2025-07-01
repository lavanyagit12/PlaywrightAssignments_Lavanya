  let str= "madam"
 // let input2= "new"
function isPalindrome(input){
   output = input.split('').reverse().join('');
   console.log("The output is " + output)
   if (input === output){
    return true
   }else{
    return false
   }
}
console.log(isPalindrome(str));
//console.log(isPalindrome(input2));


