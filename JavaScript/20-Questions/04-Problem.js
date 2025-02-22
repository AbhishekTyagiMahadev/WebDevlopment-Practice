/* The Password Validator:
   You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit. */


let password1 = "abhishek123";
let password2 = "Password456";
let password3 = "PASSWORD";
let password4 = "Pass123*&";


function validatePassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }

    // Check if the password contains both uppercase and lowercase letters
    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);

    if (!hasUppercase || !hasLowercase) {
        return false;
    }

    // Check if the password includes at least one digit
    let hasDigit = /[0-9]/.test(password);

    if (!hasDigit) {
        return false;
    }

    // If all criteria are met, return true
    return true;
}


console.log(password1 + " valid:", validatePassword(password1));
console.log(password2 + " valid:", validatePassword(password2));
console.log(password3 + " valid:", validatePassword(password3));
console.log(password1 + " valid:", validatePassword(password4));