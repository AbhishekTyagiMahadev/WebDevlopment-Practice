const express = require('express')
const mongoose = require('mongoose')
const Employee = require('./models/data')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
mongoose.connect('mongodb://localhost:27017/webDevlopment-Practice');

const getRandom = (arr)=>{
  let rno = Math.floor(Math.random() * (arr.length - 1))
  return arr[rno]
}

app.get('/', async (req, res) => {
  // Uncomment this if you want to clear your collection
  // await Employee.deleteMany({}) 

  // Generate random data
  let randomNames = ['Abhishek', "Vivek", "Tanu", "Himanshi", "Aditya", "Atul", "Aryen", "Khushi"]
  let randomLang = ["Python", "C", "C++", "Java", "JavaScript", "PHP", "Kotlin"]
  let randomCities = ["Meerut", "Delhi", "Mumbai", "Kolkata", "Gurugram"]
    let e = await Employee.create({
      name: getRandom(randomNames),
      salary: Math.floor(Math.random() * 22000),
      language: getRandom(randomLang),
      city: getRandom(randomCities),
      isManager: (Math.random() > 0.5) ? true : false
    })
    console.log(e)
  res.render('index')
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})
