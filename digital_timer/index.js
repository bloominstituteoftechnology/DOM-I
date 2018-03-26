let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

let msTensValue = 0;
let msHundredsValue = 0;
let secondOnesValue = 0;
let secondTensValue = 0;

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
    clearInterval(intervalId);
  }

}, 10);
