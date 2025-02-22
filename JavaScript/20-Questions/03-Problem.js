/* The Mirror Mirror:
   Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself. */

let originalString = "Abhishek";
console.log("Original string:", originalString);
let mirroredString = mirrorString(originalString);
console.log("Mirrored string:", mirroredString);

function mirrorString(str) {
    // Reverse the original string
    let reversedStr = str.split('').reverse().join('');
    // Append the reversed string to the original string
    let mirroredStr = str + reversedStr;
    return mirroredStr;
}
