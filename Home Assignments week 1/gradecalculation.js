// 1. Create a function that takes a student's score as a parameter.
// 2. Declare and initialize the variable.
// 3. Use `switch` statement inside the function.
// 4. Return the corresponding grade.
// 5. Call the function and print the result.

let studentscore = 70

function evaluatestudentscore(studentscore){

    switch(true){
        case (studentscore>=90 && studentscore<=100):
            var grade = "A"
            break

        case (studentscore>=80 && studentscore<90):
            var grade = "B"
            break

        case (studentscore>=70 && studentscore<80):
            var grade = "C"
            break

        case (studentscore>=50 && studentscore<70):
            var grade= "D"
            break

        case (studentscore>=35 && studentscore<50):
            var grade = "E"
            break

        default:   
             var grade = "FAIL"

        }
        return grade
    }

let output = evaluatestudentscore(studentscore)
console.log("student grade is " + output)