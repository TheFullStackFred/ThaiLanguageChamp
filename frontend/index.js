import { data } from './data.js'

function renderQuestion() {
  const options = document.getElementsByClassName('options')

  const randomIndex = Math.floor(Math.random() * data.length)
  const question = data[randomIndex]

  const questionHtml = `
      <div id='main__container' class="main__container">
        <h1 class="main__question">${question.question}</h1>
        <p class="card options">${question.optionOne}</p>
        <p class="card options">${question.optionTwo}</p>
        <p class="card options">${question.optionThree}</p>
        <p class="card options">${question.optionFour}</p>
      </div>
    `

  document.getElementById('main').innerHTML = questionHtml

  for (let option of options) {
    option.addEventListener('click', function (event) {
      handleAnswer(event, question)
    })
  }
}

function handleAnswer(event, question) {
  const selectedOption = event.target.textContent
  const options = document.getElementsByClassName('options')
  const mainContainer = document.getElementById('main__container')

  if (selectedOption === question.answer) {
    mainContainer.innerHTML += '<h2 class="correct">Correct</h2>'
  } else {
    mainContainer.innerHTML += '<h2 class="wrong">Wrong</h2>'
  }

  for (let option of options) {
    if (option.textContent === question.answer) {
      option.style.backgroundColor = 'rgb(173, 255, 47)'
    } else {
      option.style.backgroundColor = 'rgb(237, 30, 54)'
    }
  }

  const nextQuestionBtn = document.createElement('button')
  nextQuestionBtn.textContent = 'Next Question'
  nextQuestionBtn.classList.add('next-question-btn')
  nextQuestionBtn.addEventListener('click', renderQuestion)
  mainContainer.appendChild(nextQuestionBtn)
}

renderQuestion()
