// Global variables
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');
const secondOnes = document.getElementById('secondOnes');
const secondTens = document.getElementById('secondTens');
const digitsClass = document.querySelector('.digits');

// Create a counter
let counter = 0;

// Set Initial values
secondTens.innerHTML = '0';
secondOnes.innerHTML = '0';
msTens.innerHTML = '0';
msHundreds.innerHTML = '0';

// Increment Function
const increment = (string) => {
  let number = Number(string) + 1;
  return String(number);
};

// Update HTML Display function
const updateDisplay = (ms) => {
  if (ms === 10000) {
    secondTens.innerHTML = '1';
    secondOnes.innerHTML = '0';
    msTens.innerHTML = '0';
    msHundreds.innerHTML = '0';
  } else if (ms % 1000 === 0) {
    secondOnes.innerHTML = increment(secondOnes.innerHTML);
    msTens.innerHTML = '0';
    msHundreds.innerHTML = '0';
  } else if (ms % 100 === 0) {
    msTens.innerHTML = increment(msTens.innerHTML);
    msHundreds.innerHTML = '0';
  } else if (ms % 10 === 0) {
    msHundreds.innerHTML = increment(msHundreds.innerHTML);
  }
};

// Invoke the setInterval
const digitalTimer = setInterval(() => {
  counter += 10;
  if (counter === 10000) {
    clearInterval(digitalTimer);
    for (let i = 0; i < digitsClass.children.length; i++) {
      digitsClass.children[i].classList.add('redDigit');
    }
  }
  updateDisplay(counter);
}, 10);