// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
//Assignment 
// 1. Split the string into an array of words.
// 2. Find the last word in the array.
// 3. Calculate the length of this word.

function lengthOfLastWord(s) {
    const words = s.trim().split(" ");
    console.log(words)
    const lastWord = words[words.length - 1];
    console.log(lastWord)
    return lastWord.length;
}

const input = "Hello World";
const output = lengthOfLastWord(input);
console.log(output); 

// Example 2:
// Input: s = " fly me to the moon "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Assignment
// 1. Trim the String
// 2. Split the String into Words
// 3. Identify the Last Word
// 4. Calculate the Length of the Last Word
// 5. Return the length

const input2 = "fly me to the moon";
const output2 = lengthOfLastWord(input2);
console.log(output2); 

// Example 3:
// Write a function to check if two strings are anagrams.
// Input: isAnagram('listen', 'silent')
// Output: true
// Input: isAnagram('hello', 'world')
// Output: false
// Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
// Assignment
// 1. Remove spaces and convert all letters to the same case
// 2. Sort the Characters
// 3. Compare Sorted Strings
// 4. Return the Result

function isAnagram(str1, str2) {
    // Step 1: Remove spaces and convert to lowercase
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));   