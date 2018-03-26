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
  msTens.innerHTML++;
  // Once 90 milliseconds have passed
  if (msTens.innerHTML === '9') {
    // Reset msTens value and increment msHundreds
    msTens.innerHTML = 0;
    msHundreds.innerHTML++;
  } 
  // Once 1000 milliseconds have passed
  if (msHundreds.innerHTML === '9') {
    // Reset msHundreds value and increment secondOnes
    msHundreds.innerHTML = 0;
    secondOnes.innerHTML++;
  }
  // Once 10 seconds have passed
  if (secondOnes.innerHTML === '9') {
    secondOnes.innerHTML = 0;
    secondTens.innerHTML++;
  }
  if (secondTens.innerHTML === '1') {
    clearInterval(timer);
    // Turn digits color red
    document.querySelector(".digits").className += " redDigit";
  }
}

// Start timer
const timer = setInterval(tenSecondTimer, 10);