const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

const digits = document.getElementsByClassName('digits')[0];

const start = document.getElementById('start');



let msTensValue = 0;
let msHundredsValue = 0;
let secondOnesValue = 0;
let secondTensValue = 0;

start.onclick = e => {
  const intervalId = setInterval(() => {
    if (msTensValue <= 9) {
      msTens.textContent = msTensValue++;  
    } else if (msHundredsValue <= 9) {
      msTensValue = 0;
      msHundreds.textContent = msHundredsValue++;  
    } else if (secondOnesValue <= 9) {
      msHundredsValue = 0;
      secondOnes.textContent = secondOnesValue++;  
    } else {
      secondTens.textContent = 1;
      secondOnes.textContent = 0;
      msHundreds.textContent = 0;
      msTens.textContent = 0;
      digits.classList.add('redDigit');

      clearInterval(intervalId);
    }

  }, 10);
};
