const asyncHandler = require('express-async-handler')

// @desc Get questions
// @route GET /api/questions
const getQuestions = asyncHandler(async function (req, res) {
  res.status(200).json({ message: 'Get questions' })
})

module.exports = {
  getQuestions
}
