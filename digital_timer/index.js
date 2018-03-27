// In order to see changes, run `npx serve digital_timer` from main directory

// In collaboration Axhon Ruiz 🐧, Kaitlyn Flynn👍, Tylar Pierson 🐘

const secondTens = document.getElementById('secondTens')
const secondOnes = document.getElementById('secondOnes')
const msHundreds = document.getElementById('msHundreds')
const msTens = document.getElementById('msTens')
const digits = document.getElementsByClassName('digits')[0]
let timer
const blue = event => {
  // handle error somewhere?
  timer = handlesCountdownstart()
}

const handleError = err => console.error('oops', err)

const handlesCountdownstart = () => {
  countdownCounter.start = new Date()
  return setInterval(countdownTick(), 10)
}

const handleCountdownStop = () => {
  clearInterval(timer)
  digits.classList.add('redDigit')
  return true
}

const timeArr = [secondTens, secondOnes, msHundreds, msTens]

// create a counter
class Counter {
  constructor() {
    this.start = new Date()
  }
  now() {
    return new Date(Math.abs(new Date() - this.start))
  }

  checkIfDone() {
    return this.now() >= 10000 ? handleCountdownStop() : false
  }

  reset() {
    timeArr.map(timeDigit => (timeDigit.innerText = '0'))
    digits.classList.remove('redDigit')
  }
}
const countdownCounter = new Counter()

const render = time => {
  // secondTens
  secondTens.innerText = changeIfNewSecond(time, 1, secondTens)
  // secondOnes
  secondOnes.innerText = changeIfNewSecond(time, 10, secondOnes)
  // msHundreds
  msHundreds.innerText = changeIfNewMillisecond(time, 1000, msHundreds)
  // msTens
  msTens.innerText = changeIfNewMillisecond(time, 100, msHundreds)

  if (countdownCounter.now() > 10000) secondTens.innerText = '1'
}

function changeIfNewSecond(time, mult, item) {
  return item.innerText === `${time.getSeconds() % mult}`
    ? item.innerText
    : `${time.getSeconds() % mult}`
}

function changeIfNewMillisecond(time, mult, item) {
  return item.innerText === `${time.getMilliseconds() % mult}`
    ? item.innerText
    : `${((time.getMilliseconds() % mult) / 100).toFixed()}`
}

function countdownTick() {
  return () => {
    // update our counter
    countdownCounter.checkIfDone()
    // handle the trash
    // timeout runs an extra time
    // render our changes
    render(countdownCounter.now())
  }
}
