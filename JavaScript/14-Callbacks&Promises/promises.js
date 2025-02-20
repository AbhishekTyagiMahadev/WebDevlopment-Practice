let x = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("data = 1");
    }, 0);
    console.log("First Hello");
    resolve("First Resolved");
    // reject("Rejected");
});
console.log(x);

function getdata(dataID) {
    return new Promise((resolve, reject) => {
        let ran = Math.random() * 10;
        console.log(ran);
        setTimeout(() => {
            if(ran > 5){
                reject("some Error uccuered in second  promise");    
            }else{
            console.log("data =", dataID);
            resolve("second resolved");
            }
        }, 0);
    });
}

// // let fn = getdata(10);
// // console.log(fn);

let y = getdata(145)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error); 
    });


// Chaining promises
function firstOperation() {
    return new Promise((resolve, reject) => {
        let ran = Math.random() * 10;
        console.log(ran);
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
        console.log(ran);
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