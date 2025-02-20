// function getdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Data Fetched");
//         },3000)
//     })
// }
console.log("Fetching Data");

async function main() {

    // console.log("Fetching Data");
    let data = await fetchapi();
    console.log(data);

    console.log("Hello World");
}
main();

// Featch API
async function fetchapi() {
    let api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    let data = await api.json();
    console.log(data);
    return "APT Data Fetched";
}