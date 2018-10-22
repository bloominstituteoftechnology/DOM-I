// index.js

let seconds = 0;
let milliseconds = 0;

let all = document.querySelectorAll('.digit');
let msTens = document.querySelector('#msTens');
let msHundreds = document.querySelector('#msHundreds');
let secondOnes = document.querySelector('#secondOnes');
let secondTens = document.querySelector('#secondTens');

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

    window.setTimeout(increment, 10);

  }

  else {

    all.forEach(item => item.style.color = "red");

  }

}

increment();
