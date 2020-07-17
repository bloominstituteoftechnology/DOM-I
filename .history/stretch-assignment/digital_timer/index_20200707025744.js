const digits = document.querySelectorAll('.digit')
const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const msHundreds = document.querySelector('#msHundreds')
const msTens = document.querySelector('#msTens')

setTimeout(function () {
  for (let i = 1; i < 10; i++) {
    setTimeout(function () { msTens.textContent = i }, 500)
    setTimeout(function () { msHundreds.textContent = i }, 1000)
    setTimeout(function () { secondOnes.textontent = i }, 1000)
    setTimeout(function () { secondTens.textContent = i }, 10000)
  }
}, 10000)

for let