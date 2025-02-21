try {
    // Code that may throw an error
    let a = prompt("Enter value of a");
    let b = prompt("Enter value of b");
    let s = parseInt(a) + parseInt(b)
    if (isNaN(s)) {
        throw new Error("Invalid input: Please enter valid numbers.");
    }
    console.log("Sum:", s,"\nTry Executed");
} catch (error) {
    // Code to handle the error
    console.error("Error:", error.message+ "\nCatch Executed");
} finally {
    // Code that will always run, regardless of whether an error occurred
    console.log("Finally Executed");
}