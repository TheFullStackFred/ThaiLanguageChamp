const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use('/api/questions', require('./routes/questionRoutes'))

app.listen(port, function () {
  console.log(`Server started on port ${port}`)
})
