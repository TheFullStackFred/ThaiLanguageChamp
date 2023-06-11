const asyncHandler = require('express-async-handler')

const Question = require('../models/questionModel')

// @desc Get questions
// @route GET /api/questions
const getQuestions = asyncHandler(async function (req, res) {
  const questions = await Question.find()

  res.status(200).json({ questions })
})

module.exports = {
  getQuestions
}
