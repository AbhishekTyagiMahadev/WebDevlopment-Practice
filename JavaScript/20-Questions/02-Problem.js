/*The Double Trouble:
   You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them. */


let arr = [10, 20, 20, 4, 6, 8, 56, 10, 10];
console.log("Original array:", arr);
let modifiedArray = doubleTrouble(arr);
console.log("Modified array:", modifiedArray);

function doubleTrouble(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        // Check for consecutive duplicates
        if (i > 0 && arr[i] === arr[i - 1]) {
            result.push(arr[i]); // Push the element without doubling
        } else {
            result.push(arr[i] * 2); // Double the element
        }
    }
    return result;
}