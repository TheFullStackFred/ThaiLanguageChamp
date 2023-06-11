require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const uri = process.env.MONGODB_URI

async function connect() {
  try {
    await mongoose.connect(uri)
    console.log('Connected to MongoDB')
  } catch (error) {
    {
      console.error(error)
    }
  }
}

connect()

app.listen(8000, function () {
  console.log('Server started on port 8000')
})
