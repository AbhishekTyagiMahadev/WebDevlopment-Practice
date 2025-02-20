
// Featch API
async function fetchapi() {
    let api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    let data = await api.json();
    console.log(data);
    return "APT Data Fetched";
}
console.log("Fetching Data");

async function main() {
    console.log(await fetchapi());
    console.log("Main Function Executed");
}
main();


async function getdata(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data = " + data);
            resolve();
        }, 3000);
    });
}

// IIFE(Immeditately Invoked Function Expressiion) Function
// (async function () {
//     await getdata(100);
//     await getdata(200);
//     await getdata(300);
//     await getdata(400);
//     await getdata(500);
//     console.log("IIFE Function Executed");
// })()




async function main2() {
    await getdata(10);
    await getdata(20);
    await getdata(30);
    await getdata(40);
    await getdata(50);
    console.log("Main2 Function Executed");
}
main2();