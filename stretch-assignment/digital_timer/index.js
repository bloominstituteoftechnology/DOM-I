// SELECTORS
const digits = document.querySelectorAll('.digit');
const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

// INIT TIMER
secondTens.innerText = 0;
secondOnes.innerText = 0;
msHundreds.innerText = 0;
msTens.innerText = 0;

// Date
const start = Date.now();

console.log('hello');
let counter = 0;

const count = window.setInterval(() => {
  // console.log(Math.floor(Date.now() - start) / 10000);
  let time = Math.floor(Date.now() - start) / 10000;
  let timeStr = time.toString();
  // console.log(timeStr);
  if (secondTens.innerText === '1') {
    digits.forEach(digit => (digit.style.color = 'red'));
    return;
  } else {
    secondTens.innerText = timeStr[0];
    secondOnes.innerText = timeStr[2];
    msHundreds.innerText = timeStr[3];
    msTens.innerText = timeStr[4];
  }
}, 10);
