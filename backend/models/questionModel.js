const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
  question: String,
  optionOne: String,
  optionTwo: String,
  optionThree: String,
  optionFour: String,
  answer: String
})

module.exports = mongoose.model('Question', questionSchema)
