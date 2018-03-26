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

const handleError = err => console.log('oops', err.message)

const handlesCountdownstart = () => {
  setInterval(countdownTick(), 10)
}
function countdownTick() {
  return () => {
    // update our counter
    // handle the trash
    // render our changes
  }
}
