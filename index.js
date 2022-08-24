require('dotenv').config()
const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    console.log('Homepage')
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>Hello world!</h1>')
})

app.listen(process.env.PORT)
