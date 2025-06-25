// Create two functions : launchBrowser, runTests where,
//  a) launchBrowser need to take input as browserName (string) and do not return any
//  - use if-else (chrome or otherwise)
//  - Print the value
//  b) runTests need to take input as testType (string) and do not return any
//  - use switch case (smoke, sanity, regression, default (smoke))
//  - Print the values
// Call that function from the javascript

let browserName ="Chrome"

function launchBrowser(){
    if(browserName === "edge"){
        console.log("Launched browser is " + browserName)
    }else{
        console.log("Launched browser is not " + browserName)
    }
}

let testType = "smoke"

function runTests(){
    switch(testType){
        case "smoke" :
            console.log("The runtest is " + testType)
            break
        case "sanity" :
            console.log("he runtest is " + testType)
            break
        case "Regression":
            console.log("The runtest is " + testType)
            break
        default:
            console.log("The default run test is " + testType)
            break
    }
}

launchBrowser()
runTests()


