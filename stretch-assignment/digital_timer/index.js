const allDigits = document.querySelectorAll('.digit')

const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const msTens = document.querySelector('#msTens')
const msHundreds = document.querySelector('#msHundreds')

let time = 0

const updateDOM = () => {
  secondTens.innerText = Math.floor((time / 10000) % 10)
  secondOnes.innerText = Math.floor((time / 1000) % 10)
  msTens.innerText = Math.floor((time / 100) % 10)
  msHundreds.innerText = Math.floor((time / 10) % 10)
}

const setTimeRed = () => {
  allDigits.forEach(digit => digit.classList.add('redDigit'))
}

let counter

const startCounter = () =>
  counter = window.setInterval(() => {
    time += 10
    updateDOM()
    if (time === 1000) {
      clearInterval(counter)
      setTimeRed()
    }
  }, 10)

const button = document.querySelector('button')
button.addEventListener('click', event => {
  startCounter()
  button.setAttribute('disabled', true)
})

const reset = document.createElement('button')
reset.innerText = 'reset'
reset.addEventListener('click', event => {
  button.removeAttribute('disabled')
  time = 0
  updateDOM()
})

document.querySelector('body').appendChild(reset)