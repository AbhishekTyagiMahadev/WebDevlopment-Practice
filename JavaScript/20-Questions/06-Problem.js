/* The Vowel Counter:
You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels. */

let inputString = "Abhishek Tyagi";
console.log("Input string:", inputString);
let vowelCount = countVowels(inputString);
console.log("Number of vowels:", vowelCount);

function countVowels(str) {
    // Define a string containing all vowels
    const vowels = "aeiouAEIOU";
    let count = 0;

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is a vowel
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
