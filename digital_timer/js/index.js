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

let timer, timeout, counter, freshStart;

const incrementDigit = str =>
  str === '9' ? '0' : (Number(str) + 1).toString();

const incrementCounter = incBy => counter = counter += incBy;
const killCounter = () => counter = 0;
const killInputValue = input => input.value = '';
const changeColor = (element, color) => element.style.color = color;
const resetTo = value => {
  secondTens.innerHTML = value;
  secondOnes.innerHTML = value;
  msHundreds.innerHTML = value;
  msTens.innerHTML     = value;
}

const initTimer = resetValue => {
  killCounter();
  changeColor(digits, 'black');
  resetTo(resetValue);
}

const createTimer = ms => {
  timer = setInterval(updateTimer, 10);
  console.log(timer)
  clearTime(ms, timer);
}

const updateTimer = () => {
  incrementCounter(10);
  if (counter % 10 === 0) msTens.innerHTML = incrementDigit(msTens.innerHTML);
  if (counter % 100 === 0) msHundreds.innerHTML = incrementDigit(msHundreds.innerHTML);
  if (counter % 1000 === 0) secondOnes.innerHTML = incrementDigit(secondOnes.innerHTML);
  if (counter % 10000 === 0) secondTens.innerHTML = incrementDigit(secondTens.innerHTML);
}

// clearTime :: Int, timer[ID] -> 
const clearTime = (ms, timer) => {
  timeout = setTimeout(() => {
    clearInterval(timer);
    killCounter();
    killInputValue(enterMs);
    changeColor(digits, 'red')
  }, ms);
}

// EVENT LISTENERS:
startButton.addEventListener('click', (event) => {
  const input = enterMs.value;

  if(counter && counter < input) {
    clearInterval(timer);
    createTimer(input - counter);
  }

  else {
    initTimer(0);
    createTimer(input);
  }
});

stopButton.addEventListener('click', (event) => {
  console.log(counter)
  clearInterval(timer);
  clearTimeout(timeout);
});

resetButton.addEventListener('click', (event) => {
  console.log('timer:', timer)
  console.log('counter:', counter)
  initTimer('-');

  clearInterval(timer);
    
  killInputValue(enterMs);
  counter = 0;
});

