let allDigits = document.querySelectorAll(".digit");
let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector("#msHundreds");
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");

// Increase the value of msTens
let msTensCount = 0;
const msTensIncrement = () => {
  if (msTensCount < 10) {
    msTens.innerHTML = msTensCount;
    msTensCount++;
  } else {
    msTens.innerHTML = 0;
    msHundredsIncrement();
    msTensCount = 1;
  }
};

// Increase the value of msHundreds
let msHundredsCount = 1;
const msHundredsIncrement = () => {
  if (msHundredsCount < 10) {
    msHundreds.innerHTML = msHundredsCount;
    msHundredsCount++;
  } else {
    msHundreds.innerHTML = 0;
    secondOnesIncrement();
    msHundredsCount = 1;
  }
};

// Increase the value of secondOnes
let secondOnesCount = 1;
const secondOnesIncrement = () => {
  if (secondOnesCount < 10) {
    secondOnes.innerHTML = secondOnesCount;
    secondOnesCount++;
  } else {
    secondOnes.innerHTML = 0;
    secondTensIncrement();
    secondOnesCount = 1;
  }
};

// Increase the value of secondTens
const secondTensIncrement = () => {
  clearInterval(timer);
  secondTens.innerHTML = 1;
  allDigits.forEach(obj => obj.classList.add("redDigit"));
};

// Count to the time for increase
const timer = window.setInterval(msTensIncrement, 10);
