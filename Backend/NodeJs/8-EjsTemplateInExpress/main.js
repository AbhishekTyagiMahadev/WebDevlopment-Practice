const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log(__dirname)
    res.render("index", { title: "Google", siteName: "Abhishek Tyagi", arr: [1,2,3,4,5] })
})

app.listen(port, () => {
    console.log(`Example app listening on localhost:${port}`)
})