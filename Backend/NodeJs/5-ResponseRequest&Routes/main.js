const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', require('./routes/blog'))
app.use('/shop', require('./routes/shop'))

app.get('/', (req, res) => {
    console.log("This is a get request")
    res.send('Hello World ')
})

app.post('/', (req, res) => {
    console.log("This is a post request")
    res.send('Hello World Post')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})
app.get("/news", (req, res) => {
    console.log("Hey its My News App")
    res.sendFile('C:/Programing/News App-backup/NewsApp.html')
})
app.post("/news", (req, res) => {
    console.log("Hey its My News App")
    res.send('Post request on News App is sucessfull')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})