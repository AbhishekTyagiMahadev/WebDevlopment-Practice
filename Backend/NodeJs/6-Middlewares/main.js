const express = require('express')
const app = express()
const port = 3000

// Middleware 1: Logging request method and timestamp
app.use((req, res, next) => {
  console.log(`This is a ${req.method} request`)
  next()
})

// Middleware 2: Logging timestamp
app.use((req, res, next) => {
  console.log(`Time of hitting server ${Date.now()}`)
  next()
})

app.get('/', (req, res) => {
  res.send('Hello Abhisek Tyagi')
})

app.get('/about', (req, res) => {
  res.send('This is about page')
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})