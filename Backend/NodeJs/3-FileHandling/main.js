const fs = require('fs')

// console.log(fs)

// sync
fs.writeFileSync("./test1.txt", "Abhishek Tyagi in txt1")
console.log("File created txt1")

// async
fs.writeFile("./test2.txt", "Abhishek Tyagi in txt2", (err) => {
    if (err) {
        console.log(err)
    }
    console.log("File created txt2")
})

// read sync
let data = fs.readFileSync("./test1.txt")
console.log(data.toString())

// read async
fs.readFile("./test2.txt", (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
})

// append sync
fs.appendFileSync("./test1.txt", " Appended data in txt1")
console.log("Data appended txt1")

data = fs.readFileSync("./test1.txt")
console.log(data.toString())

// append async
fs.appendFile("./test2.txt", " Appended data in txt2", (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Data appended txt2")
})

fs.readFile("./test2.txt", (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString())
});

// copy file
fs.copyFileSync("./test1.txt", "./copy.txt")
console.log("File copied txt1 to copy.txt")

// delete file
fs.unlinkSync("./copy.txt")
console.log("File deleted copy.txt")

// Make directory
// fs.mkdirSync("./testDir")
// console.log("Directory created testDir")


// Firstly syncronous code will run then asyncronous code will runparallelly