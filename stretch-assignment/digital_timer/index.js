let clock = document.querySelectorAll('.digit');
let digits = document.querySelectorAll('.digit:not(#colon)');
let tensPlace = document.querySelector('#secondTens');
let onesPlace = document.querySelector('#secondOnes');
let tenthsPlace = document.querySelector('#msTens');
let hundredthsPlace = document.querySelector('#msHundreds');
let startBtn = document.querySelector('.start');
let resetBtn = document.querySelector('.reset');

// Counter for the timer
var counter = 0;

// Array with the selectors so they can be iterated upon
const digitVariables = [hundredthsPlace, tenthsPlace, onesPlace, tensPlace];

function timerDisplay() {
  let numerator = counter;
  for(let i = 3; i >= 0; i--) {
    digitVariables[i].textContent = Math.floor(numerator / 10 ** i); //Isolates the digit at given 10's place.
    numerator %= 10 ** i; // Passes the rest of the number on to then isolate the next digit.
  }
  counter++;
}

// Click listener to start the timer
startBtn.addEventListener('click', function() {

  let tenSecondTimer = setInterval(function() {
    timerDisplay();
    
    startBtn.disabled = true;

    if(counter > 1000) {
      clearInterval(tenSecondTimer)
      clock.forEach(digit => digit.classList.add('redDigit'));
      startBtn.disabled = false;
    }
  }, 10)
});

// Click listener for reset button
resetBtn.addEventListener('click', function() {
  counter = 0;
  digits.forEach(digit => digit.textContent = '-');
  clock.forEach(digit => digit.classList.remove('redDigit'));
});