/* The Sum Selector:
   You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation. */


let numbers = [1, 2, 3, 4, -1, 5, 6];
console.log("Array:", numbers);
let result = sumUntilNegative(numbers);
console.log("Sum until negative number:", result);


function sumUntilNegative(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            break; // Stop the summation if a negative number is encountered
        }
        sum += arr[i];
    }
    return sum;
}