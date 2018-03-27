const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

const digits = document.getElementsByClassName('digits')[0];

const startButton = document.getElementById('startButton');


let msTensValue = 1;
let msHundredsValue = 1;
let secondOnesValue = 1;

startButton.onclick = e => {
  const intervalmsTensId = setInterval(() => {
    msTens.textContent = msTensValue++;  
  }, 10);

  const intervalmsHundredsId = setInterval(() => {
    msTensValue = 0;
    msHundreds.textContent = msHundredsValue++;
  }, 100);

  const intervalSecondOnesId = setInterval(() => {
    msHundredsValue = 0;
    secondOnes.textContent = secondOnesValue++;  
  }, 1000);


  const intervalSecondTensId = setInterval(() => {
    secondTens.textContent = 1;
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;
    digits.classList.add('redDigit');

    clearInterval(intervalmsTensId);
    clearInterval(intervalmsHundredsId);
    clearInterval(intervalSecondOnesId);
    clearInterval(intervalSecondTensId);
  }, 10000);
};
