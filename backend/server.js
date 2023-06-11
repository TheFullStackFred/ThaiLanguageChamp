const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use('/api/questions', require('./routes/questionRoutes.js'))

app.listen(port, function () {
  console.log(`Server started on port ${port}`)
})
