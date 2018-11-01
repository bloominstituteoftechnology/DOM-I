// Initializing the counters

let msTensCounter = 0;
let msHundredsCounter = 0;
let secondOnesCounter = 0;
let secondTensCounter = 0;

// Initializing the timer to 00:00

const msTens = document.querySelector('#msTens');
msTens.textContent = msTensCounter;
const msHundreds = document.querySelector('#msHundreds');
msHundreds.textContent = msHundredsCounter;
const secondOnes = document.querySelector('#secondOnes');
secondOnes.textContent = secondOnesCounter;
const secondTens = document.querySelector('#secondTens');
secondTens.textContent = secondTensCounter;

//Start the timer for every 10 milliseconds
const timer = setInterval(setTimer, 10);

function setTimer() {
  msTens.textContent = msTensCounter + 1;
  msTensCounter++;
  if(msTensCounter === 9) {
    msTensCounter = 0;
    msTens.textContent = msTensCounter;
    msHundreds.textContent = msHundredsCounter + 1;
    msHundredsCounter ++;
    if(msHundredsCounter === 9) {
      msTensCounter = 0;
      msTens.textContent = msTensCounter
      msHundredsCounter = 0;
      msHundreds.textContent = msHundredsCounter
      secondOnes.textContent = secondOnesCounter + 1;
      secondOnesCounter ++;
      if(secondOnesCounter === 10) {
        secondOnesCounter = 0;
        msTens.textContent = msTensCounter;
        msHundreds.textContent = msHundredsCounter;
        secondOnes.textContent = secondOnesCounter;
        secondTens.textContent = secondTensCounter + 1;
        msTens.style.color = 'red';
        msHundreds.style.color = 'red';
        secondOnes.style.color = 'red';
        secondTens.style.color = 'red';

        stopTimer();
      }
    }
  }
}

function stopTimer() {
    clearInterval(timer);
}