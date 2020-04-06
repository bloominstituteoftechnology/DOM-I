// --- TENS ---
let secondTens = document.querySelector('#secondTens')

let secondTensCount = 0

setInterval(function () {
  if (secondOnesCount < 10) {
    secondTensCount++
    secondTens.textContent = 1
    secondTens.style.color = 'red'
  }
}, 10000)

// --- ONES ---
let secondOnes = document.querySelector('#secondOnes')

let secondOnesCount = 0

setInterval(function () {
  if (secondOnesCount < 9) {
    secondOnesCount++
    secondOnes.textContent = secondOnesCount
  } else {
    secondOnes.textContent = 0
    secondOnes.style.color = 'red'
  }
}, 1000)

//--- msHUNDREDS ---
let msHundreds = document.querySelector('#msHundreds')

let msHundredsCount = 0

setInterval(function () {
  if (msHundredsCount < 99) {
    msHundredsCount++
    msHundreds.textContent = msHundredsCount
  } else {
    msHundreds.textContent = 0
    msHundreds.style.color = 'red'
    msHundreds.style.fontSize = '80px'
  }
}, 100)

msHundreds.style.fontSize = '60px'

// --- msTHOUSANDS ---

let msThousands = document.querySelector('#msTens')

let msThousandsCount = 0

setInterval(function () {
  if (msThousandsCount < 999) {
    msThousandsCount++
    msThousands.textContent = msThousandsCount
  } else {
    msThousands.textContent = 0
    msThousands.style.color = 'red'
    msThousands.style.fontSize = '80px'
  }
}, 10)

msThousands.style.fontSize = '30px'

// --- COLON ---
let colon = document.querySelector('#colon')

setInterval(function () {
  colon.style.color = 'red'
}, 10000)