const digits = document.querySelectorAll('.digit')
const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const msHundreds = document.querySelector('#msHundreds')
const msTens = document.querySelector('#msTens')

for (let i = 0; i < 10; i++) {
  setTimeout(function () { msTens.textContent = i }, 100)
  setTimeout(function() {msHundreds}, 1000)
  setTimeout(function() {secondOnes})
}

