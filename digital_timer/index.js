// Set references for DOM elements
let secondOnes = document.querySelector("#secondOnes");
let secondTens = document.querySelector("#secondTens");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");
let digits = document.querySelector(".digits");

// Initialize all variables to 0
secondOnes.innerHTML = 0;
secondTens.innerHTML = 0;
msHundreds.innerHTML = 0;
msTens.innerHTML = 0;

tenSecondTimer = () => {
  // Start timer by incrementing milliseconds
  if (msTens.innerHTML < 9) {
    msTens.innerHTML++;
  }
}

// Start timer
const timer = setInterval(tenSecondTimer, 10);