// Selectors
const secondTens = document.querySelector('#secondTens'),
      secondOnes = document.querySelector('#secondOnes'),
      msHundreds = document.querySelector('#msHundreds'),
      msTens     = document.querySelector('#msTens'),
      colon      = document.querySelector('#colon');

let seconds = 0;
let hundreds = 0;
let countdownSeconds;
let countdownHundreds;

secondTens.textContent = 0;  
secondOnes.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;

countdownHundreds = window.setInterval(() => {
  hundreds += 1;
  hundreds >= 10 ? msTens.textContent = "" : "";
  msHundreds.textContent = hundreds;
  if (hundreds === 100) {
    msHundreds.textContent = 0;
    msTens.textContent = 0;
    hundreds = 0;
  }
}, 10)

countdownSeconds = window.setInterval(() => {
  seconds += 1;
  if (seconds >= 10) {
    secondTens.textContent = "";
    msHundreds.textContent = 0;
    msTens.textContent = 0;
    clearInterval(countdownSeconds);
    clearInterval(countdownHundreds);
    secondOnes.style.color = "red";
    msHundreds.style.color = "red";
    msTens.style.color = "red";
    colon.style.color = "red";
  }
  secondOnes.textContent = seconds;
}, 1000);