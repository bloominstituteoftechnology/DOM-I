// In order to see changes, run `npx serve digital_timer` from main directory

// In collaboration Axhon Ruiz 🐧, Kaitlyn Flynn👍, Tylar Pierson 🐘

const secondTens = document.getElementById('secondTens')
const secondOnes = document.getElementById('secondOnes')
const msHundreds = document.getElementById('msHundreds')
const msTens = document.getElementById('msTens')

const blue = event => {
  typeof event === typeof new Error()
    ? handleError(event)
    : handlesCountdownstart()
}

const handleError = err => console.error('oops', err)

const handlesCountdownstart = () => {
  return setInterval(countdownTick(), 10)
}

const handleCountdownStop = () => {}
// create a counter
// 0000
// 0010 = 10 ms
let c = 0
class Counter {
  constructor(c = 0) {
    this.c = c
  }
  checkIfDone() {
    return this.c > 9999 ? handleCountdownStop() : false
  }
  increment() {
    this.checkIfDone()
    this.c += 10
  }
}
const countdownCounter = new Counter()

const render = num => console.log(num)

function countdownTick() {
  return () => {
    // update our counter
    countdownCounter.increment()
    // handle the trash
    // render our changes
    render(countdownCounter.c)
  }
}
