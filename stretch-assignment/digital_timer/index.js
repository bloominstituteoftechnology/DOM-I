// DOM
const digits = document.querySelector('.digits');
const sTens = document.getElementById('secondTens');
const sOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');
const msOnes = document.getElementById('msOnes');

timer();

function timer() {
  // This will set digits to 0 to start
  init();
  function init() {
    let ms = 0;
    sTens.textContent = '0';
    sOnes.textContent = '0';
    msHundreds.textContent = '0';
    msTens.textContent = '0';

    // This will specify a specific interval in ms until clearInterval or window is closed. timeInterval is going to keep track of the interval. Every 10ms we need to change something on the DOM and increment.
    const timeInterval = window.setInterval(() => {
      ms += 10;
      if (ms === 10000) {
        endTimer(timeInterval);
      }
      updateTimer(ms);
    }, 10);
  }

  // Increment
  function increment(str) {
    let num = Number(str) + 1;
    return num.toString();
  }

  // End Timer using clearInterval
  function endTimer(intervalVal) {
    clearInterval(intervalVal);
    Arry.from(digits.children).forEach(digit => {
      digit.classList.add('redDigit');
    });
  }

  // Update the Timer
  function updateTimer(ms) {
    if (ms === 10000) {
      sTens.textContent = '1';
      sOnes.textContent = '0';
      msHundreds.textContent = '0';
      msTens.textContent = '0';
    } else if (ms % 1000 === 0) {
      sOnes.textContent = increment(sOnes.textContent);
      msHundreds.textContent = '0';
      msTens.textContent = '0';
    } else if (ms % 100 === 0) {
      msHundreds.textContent = increment(msHundreds.textContent);
      msTens.textContent = '0';
    } else {
      msTens.textContent = increment(msTens.textContent);
    }
  }
}
