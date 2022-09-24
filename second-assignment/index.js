const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get("/", (req,res) => {
    console.log('here')
    res.render('index')
})
app.get("/about", (req,res) => {
    res.render('about')
})
app.get("/contact", (req,res) => {
    res.render('contact')
})
app.get("/services", (req,res) => {
    res.render('services')
})

app.listen(3000, () => {
    console.log('Server is loaded.')
})