let str = "javascript"
function findMaxFrequencyChar(input) {
    let maxFreq = 0
    let maxFreqChar = ''
    for (let i = 0; i < input.length; i++) {
        let currChar = input[i]
        let currFreq = 0
        for (let j = 0; j < input.length; j++) {
            if (input[j] === currChar) {
                currFreq++
            }
        }
        if (currFreq > maxFreq) {
            maxFreq = currFreq
            maxFreqChar = currChar
        }
    }
    return maxFreqChar
}

const maxFreChar1 = findMaxFrequencyChar(str)
console.log(`The maximum frequency character in string ${str} is ${maxFreChar1}`)
