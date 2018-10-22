// index.js

let seconds = 0;
let milliseconds = 0;
let timeout = 0;

let all = document.querySelectorAll('.digit');
let msTens = document.querySelector('#msTens');
let msHundreds = document.querySelector('#msHundreds');
let secondOnes = document.querySelector('#secondOnes');
let secondTens = document.querySelector('#secondTens');

let startButton = document.querySelector('#startButton');

function increment() {

  milliseconds += 10;

  if (milliseconds > 1000) {
    seconds++;
    milliseconds = 0;
  }

  msTens.textContent = Math.floor(milliseconds / 10 % 10);
  msHundreds.textContent = Math.floor(milliseconds / 100 % 10);
  secondOnes.textContent = Math.floor(seconds % 10);
  secondTens.textContent = Math.floor(seconds / 10 % 10);

  if (seconds !== 10) {

    timeout = window.setTimeout(increment, 10);

  }

  else {

    all.forEach(item => item.style.color = "red");

  }

}

function reset() {

  clearTimeout(timeout);
  startButton.disabled = false;
  seconds = 0;
  milliseconds = 0;

  msTens.textContent = 0;
  msHundreds.textContent = 0;
  secondOnes.textContent = 0;
  secondTens.textContent = 0;

}

startButton.addEventListener("click", () => {

  startButton.disabled = true;
  increment();

});
resetButton.addEventListener("click", reset);
