require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/route')
const app = express()
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionsSuccessStatus: 200
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api/product', productRoute);

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/about', (req, res) => {
    res.send('Hello I am Anuraj Shukla')
})

app.use(errorMiddleware);

mongoose.connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})