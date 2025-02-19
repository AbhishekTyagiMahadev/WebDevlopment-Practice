// Function that returns a promise
function asyncOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false; // Simulate success or failure

            if (success) {
                resolve("Async operation was successful!");
            } else {
                reject("Async operation failed.");
            }
        }, 2000);
    });
}

// Using the promise
asyncOperation()
    .then((message) => {
        console.log(message); // Output: Async operation was successful!
    })
    .catch((error) => {
        console.log(error); // Output: Async operation failed.
    });

// Chaining promises
function firstOperation() {
    return new Promise((resolve, reject) => {
        let ran = Math.random() * 10;
        if (ran > 5) {
            reject("First operation failed.");
        }
        setTimeout(() => {
            resolve("First operation completed.");
        }, 1000);
    });
}

function secondOperation() {
    return new Promise((resolve, reject) => {
        let ran = Math.random() * 10;
        if (ran > 5) {
            reject("Second operation failed.");
        }
        setTimeout(() => {
            resolve("Second operation completed.");
        }, 1000);
    });
}

firstOperation()
    .then((message) => {
        console.log(message); // Output: First operation completed.
        return secondOperation();
    })
    .then((message) => {
        console.log(message); // Output: Second operation completed.
    });