async function fn(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data)
            resolve(200)
        }, 1000)
    })
}
// IIFE
(async function () {
    let x = await fn("Abhishek")
    let y = await fn("Tyagi")

})()

// Destructering
{
    let [x, y, ...all] = [10, 20, 30, 40, 50]
    console.log(x, y, all)
    // Spreed Syntax
    function sum(a,b,c){
        return a+b+c
    }
    let arr = [10, 20, 30]
    console.log("sum=",sum(...arr))
    console.log("sum=",sum(arr[0], arr[1],arr[2]))
}

{
    let obj = {
        a: 10, 
        b: 20, 
        c: 30
    }
    
    let {a, b} = obj
    console.log(a, b)
}


