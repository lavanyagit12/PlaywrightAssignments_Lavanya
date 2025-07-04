let input1 = "tenet"
function reversestring(str){
    let chars=(str.split(""))
    console.log(chars)
    let charslength = chars.length
    console.log(charslength);
    let reversestr =""
    for(let i=charslength- 1;i>=0;i--){
        reversestr += chars[i]
        
    }
    console.log(" reverse string is " + reversestr)
    return reversestr
}
function ispalindrome(str){
    let reversed = reversestring(str)
    if(str === reversed){
        console.log(`"${str}" is a palindrome.`);
        return true
    }else{
        console.log(`"${str}" is not a palindrome.`);
        return false
    }
}
output = ispalindrome(input1)
console.log (output)

