let msTens = 0;
let msHundreds = 0;
let secondOnes = 0;
let secondTens = 0;

let counter = 0;

const millTens = document.getElementById('msTens');
const millHun = document.getElementById('msHundreds');
const secOnes = document.getElementById('secondOnes');
const secTens = document.getElementById('secondTens');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const visibility = () => {
  start.classList.toggle('vis');
  stop.classList.toggle('vis');
};

const runTimer = () => {
  counter = setInterval(addTime, 10);
  return visibility();
};

const stopTimer = () => {
  clearInterval(counter);
  return visibility();
};

const addTime = () => {
  msTens++;
  millTens.textContent = msTens;
  if (msTens === 10) {
    msTens = 0;
    msHundreds++;
    millHun.textContent = msHundreds;
    if (msHundreds === 10) {
      msHundreds = 0;
      secondOnes++;
      secOnes.textContent = secondOnes;
      if (secondOnes === 10) {
        secondOnes = 0;
        secondTens++;
        secTens.textContent = secondTens;
        if (secondTens === 1) {
          clearInterval(counter);
          millTens.textContent = 0;
          millHun.textContent = 0;
          secOnes.textContent = 0;
          secTens.textContent = 1;
          millTens.classList.toggle('redDigit');
          millHun.classList.toggle('redDigit');
          secOnes.classList.toggle('redDigit');
          secTens.classList.toggle('redDigit');
          stop.classList.toggle('vis');
        }
      }
    }
  }
};

start.onclick = runTimer;
stop.onclick = stopTimer;
