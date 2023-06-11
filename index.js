import { data } from './data.js'

function renderQuestion() {
  const randomIndex = Math.floor(Math.random() * data.length)
  const question = data[randomIndex]

  const questionHtml = `
    <div class="main__container">
      <h1 class="main__question">${question.question}</h1>
 <p class='card'>${question.optionOne}</p>
 <p class='card'>${question.optionTwo}</p>
 <p class='card'>${question.optionThree}</p>
 <p class='card'>${question.optionFour}</p>

    </div>
  `

  document.getElementById('main').innerHTML = questionHtml
}

renderQuestion()
