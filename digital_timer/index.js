reset = () => {
  // Initialize all variables to 0 by referencing DOM element IDs
  secondOnes.innerHTML = 0;
  secondTens.innerHTML = 0;
  msHundreds.innerHTML = 0;
  msTens.innerHTML = 0;
}

tenSecondTimer = () => {
  msTens.innerHTML++;
  
  // Once 100 milliseconds have passed
  if (msTens.innerHTML === '10') {
    // Reset msTens value and increment msHundreds
    msTens.innerHTML = 0;
    msHundreds.innerHTML++;
  } 
  // Once 1000 milliseconds have passed
  if (msHundreds.innerHTML === '10') {
    // Reset msHundreds value and increment secondOnes
    msHundreds.innerHTML = 0;
    secondOnes.innerHTML++;
  }
  // Once 10 seconds have passed
  if (secondOnes.innerHTML === '10') {
    secondOnes.innerHTML = 0;
    secondTens.innerHTML++;
  }
  if (secondTens.innerHTML === '1') {
    // Stop timer
    clearInterval(timer);
    // Turn digits color red
    document.querySelector(".digits").className += " redDigit";
  }
}

// Start timer
reset();
const timer = setInterval(tenSecondTimer, 10);