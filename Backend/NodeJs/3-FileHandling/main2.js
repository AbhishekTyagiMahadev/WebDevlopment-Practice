import fs from "fs/promises"

// Read file
let a = await fs.readFile("test1.txt")
console.log(a.toString())

// Write file
// await fs.writeFile("test3.txt", "Abhishek Tyagi in txt3")

// Append file
await fs.appendFile("test3.txt", "\nAppended data in txt3")
