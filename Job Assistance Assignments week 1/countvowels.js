let str = "function"
    const cVowels = (str) => {
    const vowels = "aeiouAEIOU"
    let count = 0

    for (const char of str) {
        if (vowels.includes(char)) {
            count++
        }
    }

    return count
}

console.log(`The count of vowels in string ${str} is ` , +((cVowels(str))))

  