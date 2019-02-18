
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/movies')
mongoose.Promise = global.Promise

const bodyParser = require('body-parser')

const express = require('express')
const app = express()
// app.use('/',(req,res) => {
//   res.send('Yo!')
// })

const index = require('./router/index')
const movie = require('./router/movie')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/',index)
app.use('/api',movie)

app.listen(3000,() => {
    console.log('app listening on port 3000.')
})
