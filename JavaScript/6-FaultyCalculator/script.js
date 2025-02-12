let random = Math.random()*10
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}


if (random > 1) {
    // Perform correct calculation
    console.log(`The calculation is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    console.log(`The calculation is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}