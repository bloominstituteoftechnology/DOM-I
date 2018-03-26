// In order to see changes, run `npx serve digital_timer` from main directory

// In collaboration Axhon Ruiz 🐧, Kaitlyn Flynn👍, Tylar Pierson 🐘

const secondTens = document.getElementById('secondTens')
const secondOnes = document.getElementById('secondOnes')
const msHundreds = document.getElementById('msHundreds')
const msTens = document.getElementById('msTens')
let timer
const blue = event => {
  // handle error somewhere?
  // typeof event === typeof new Error()
  //   ? handleError(event)
  //   :
  timer = handlesCountdownstart()
}

const handleError = err => console.error('oops', err)

const handlesCountdownstart = () => {
  return setInterval(countdownTick(), 10)
}

const handleCountdownStop = () => {
  clearInterval(timer)
  return true
}
// create a counter
// 0000
// 0010 = 10 ms
let c = 0
class Counter {
  constructor(c = 0) {
    this.c = c
  }
  checkIfDone() {
    return this.c > 10000 ? handleCountdownStop() : false
  }
  increment() {
    !this.checkIfDone() ? (this.c += 10) : ''
  }
}
const countdownCounter = new Counter()

const cacheFunction = cb => {
  const cache = {}
  const addToCache = obj => Object.assign(cache, obj)

  // property names cannot be numbers
  const isInCache = key => Object.keys(cache).includes(key.toString())

  const handleAddToCache = k => {
    const obj = {}
    obj[k] = cb(k)
    addToCache(obj)
    return obj[k]
  }

  return k => (isInCache(k) ? cache[k] : handleAddToCache(k))
}

const renderCache = cacheFunction
const render = num => {
  // secondTens
  secondTens.innerText = `${num % 10}`
  // secondOnes
  secondOnes.innerText = `${num % 100}`
  // msHundreds
  msHundreds.innerText = `${num % 1000}`
  // msTens
  msTens.innerText = `${num % 10000}`

  const timeArr = [secondTens, secondOnes, msHundreds, msTens]
}

function countdownTick() {
  return () => {
    // update our counter
    countdownCounter.increment()
    // handle the trash
    // timeout runs an extra time
    // render our changes
    render(countdownCounter.c)
  }
}
