const secondTens  = document.querySelector('#secondTens');
const secondOnes  = document.querySelector('#secondOnes');
const msHundreds  = document.querySelector('#msHundreds');
const msTens      = document.querySelector('#msTens');
const digits      = document.querySelector('.digits');
const startButton = document.querySelector('.start-button');
const stopButton  = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');
const enterMs     = document.querySelector('.enter-ms');
const alarm       = document.querySelector('#alarm');

let timer,
    counter;

const incrementDigit = str =>
  str === '9' ? '0' : (Number(str) + 1).toString()

// SIDE-EFFECTS:
const incrementCounter = (incBy) => counter = counter += incBy;
const killCounter = () => counter = 0;
const changeColor = (element, color) => element.style.color = color;
const reset = () => {
  secondTens.innerHTML = 0;
  secondOnes.innerHTML = 0;
  msHundreds.innerHTML = 0;
  msTens.innerHTML = 0;
  changeColor(digits, 'black');
  killCounter();
}

// Wrap this up in an init function?
reset();

const updateTimer = () => {
  incrementCounter(10);
  if (counter % 10 === 0) msTens.innerHTML = incrementDigit(msTens.innerHTML);
  if (counter % 100 === 0) msHundreds.innerHTML = incrementDigit(msHundreds.innerHTML);
  if (counter % 1000 === 0) secondOnes.innerHTML = incrementDigit(secondOnes.innerHTML);
  if (counter % 10000 === 0) secondTens.innerHTML = incrementDigit(secondTens.innerHTML);
}

// Rename this function, trim it down some?
const timeout = (ms, timer) => {
  setTimeout(() => {
    clearInterval(timer);
    changeColor(digits, 'red')
  }, ms);
}

const createTimer = ms => {
  timer = setInterval(updateTimer, 10);
  timeout(ms, timer);
}

startButton.addEventListener('click', (event) => {
  const input = enterMs.value;
  // if counter is not 0, do some stuff. maybe call the `timeout` function in here?
  if(counter) {
    // Victor's pseudocode:
    // we can also make setTimeout a method and call it here
    //if the counter is not 0, counter needs to be the difference of ms and the time already in the counter.
    //    if(counter != 0 null, ){
    //    timer = ms - counter;
    //    }
    clearInterval(timer);
    createTimer(input - counter);
  }

  reset();
  createTimer(input);
});

stopButton.addEventListener('click', (event) => {
  clearTimeout(timer);
});

resetButton.addEventListener('click', (event) => {
  reset();
  clearTimeout(timer);
  clearInterval(timer);
    
  enterMs.value = '';
  counter = 0;
});

