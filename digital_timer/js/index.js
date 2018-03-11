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

const digitsArray = [secondTens, secondOnes, msHundreds, msTens];
let timer, timeout, counter;


/*** PURE FUNCTIONS ***/
const incrementDigit = str =>
  str === '9' ? '0' : (Number(str) + 1).toString();


/*** DOM MANIPULATION ***/
const incrementCounter = incBy => counter = counter += incBy;
const killCounter = () => counter = 0;
const killInputValue = input => input.value = '';
const changeColor = (element, color) => element.style.color = color;


/*** INITIALIZE TIMER ***/
const setBulkInnerHTML = arr => value => arr.forEach(element => element.innerHTML = value);
const resetTo = setBulkInnerHTML(digitsArray);

const initTimer = resetValue => {
  killCounter();
  changeColor(digits, 'black');
  resetTo(resetValue);
};

const createTimer = ms => {
  timer = setInterval(updateTimer, 10);
  createTimeout(ms, timer);
};


/*** UPDATE TIMER ***/
const updateTimer = () => {
  incrementCounter(10);
  if (counter % 10 === 0)    msTens.innerHTML     = incrementDigit(msTens.innerHTML);
  if (counter % 100 === 0)   msHundreds.innerHTML = incrementDigit(msHundreds.innerHTML);
  if (counter % 1000 === 0)  secondOnes.innerHTML = incrementDigit(secondOnes.innerHTML);
  if (counter % 10000 === 0) secondTens.innerHTML = incrementDigit(secondTens.innerHTML);
};


/*** RESET TIMER ***/
const createTimeout = (ms, timer) => {
  timeout = setTimeout(() => {
    clearInterval(timer);
    killCounter();
    killInputValue(enterMs);
    changeColor(digits, 'red')
  }, ms);
};

const killTimer = () => {
  clearInterval(timer);
  clearTimeout(timeout);
}


/*** EVENT LISTENERS ***/
const handleSubmit = event => {
  event.preventDefault();
  const input = enterMs.value;

  if(counter && counter < input) {
    clearInterval(timer);
    createTimer(input - counter);
  }
  else {
    initTimer(0);
    createTimer(input);
  }
};

startButton.addEventListener('click', event => handleSubmit(event));
stopButton.addEventListener('click', event => killTimer());
resetButton.addEventListener('click', event => {
  killTimer();
  killInputValue(enterMs);
  killCounter();
  initTimer('-');
});
