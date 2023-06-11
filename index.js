import { data } from './data.js'

function renderQuestion() {
  const options = document.getElementsByClassName('options')

  const randomIndex = Math.floor(Math.random() * data.length)
  const question = data[randomIndex]

  const questionHtml = `
<div class="main__container">
    <h1 class="main__question">${question.question}</h1>
    <p class="card options">${question.optionOne}</p>
    <p class="card options">${question.optionTwo}</p>
    <p class="card options">${question.optionThree}</p>
    <p class="card options">${question.optionFour}</p>
</div>
  `

  document.getElementById('main').innerHTML = questionHtml

  for (let option of options) {
    option.addEventListener('click', handleAnswer)
  }
}

function handleAnswer(e) {
  data.forEach(function (question) {
    if (e.target.textContent === question.answer) {
      const options = document.getElementsByClassName('options')
      for (let option of options) {
        if (e.target.textContent === option.textContent) {
          option.style.backgroundColor = 'green'
        } else {
          option.style.backgroundColor = 'red'
        }
      }
    }
  })
}

renderQuestion()
