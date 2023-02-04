const express = require('express')
const app = express()
app.use(express.json())


const cors = require('cors')
app.use(cors())

const PORT = 2023

app.get('/', (req, res) => {
    req.statusCode(201).send('<h1> tester </h1>')
})

const {emailRouter} = require('./routers')
app.use('/home', emailRouter)

app.listen(PORT, () => console.log(`API IS RUNNING ON PORT ${PORT}`))