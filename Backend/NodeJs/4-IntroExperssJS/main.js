const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Home page')
})

app.get('/about', (req, res) => {
    res.send('About us')
})
app.get('/contact', (req, res) => {
    res.send('Contacts')
})

app.get('/blog', (req, res) => {
    res.send('Blog page')
})

app.get('/:slug', (req, res) => {
    res.send(`Hello ${req.params.slug}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})