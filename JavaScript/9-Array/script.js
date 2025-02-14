let arr = [2, 4, 5, 7]
// console.log(arr)
// console.log(arr.length)
// console.log(typeof (arr))
// console.log(arr.toString())
// console.log(arr.join(" and "))

// console.log(arr.pop())
// console.log(arr)

// arr.push("true")
// console.log(arr)

// for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log("End of for loop");

// for each loop
arr.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})
console.log("End of for each loop");

// for of loop
for (element of arr) {
    console.log(element);
}
console.log("End of foe for of loop");

// for in loop
for (const key in arr) {
    if(arr.hasOwnProperty.call(arr, key)){
        const element = arr[key];
        console.log(element);
    }
}
console.log("End of for in loop");

// map
let newArr = arr.map((element)=>{
    return element*2
})
console.log(newArr)

// filter
let filterArr = newArr.filter((element)=>{
    return element>4
})
console.log(filterArr)

// reduce
let reduceArr = newArr.reduce((a, b)=>{
    return a+b
})
console.log(reduceArr)