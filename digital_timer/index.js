const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const msHundreds = document.querySelector('#msHundreds')
const msTens = document.querySelector('#msTens')

let counter = 0

const interval = setInterval(() => {
  counter++
  msTens.innerHTML = counter
}, 10)

setTimeout(() => {
  clearTimeout(interval)
}, 10000)


