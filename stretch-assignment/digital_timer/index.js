

const timerBtns = document.querySelectorAll('.timerBtn');

reset();

timerBtns[0].addEventListener('click', function() {

  //Start the timer for every 10 milliseconds
  const doneTest = startTimer(10);

});

timerBtns[1].addEventListener('click', reset);

function startTimer(interval) {

  // Initializing the counters
  let msTensCounter = 0;
  let msHundredsCounter = 0;
  let secondOnesCounter = 0;
  let secondTensCounter = 0;

  const msTens = document.querySelector('#msTens');
  const msHundreds = document.querySelector('#msHundreds');
  const secondOnes = document.querySelector('#secondOnes');
  const secondTens = document.querySelector('#secondTens');

  const digits = document.querySelector('.digits');

  // Disable button
  timerBtns[0].setAttribute('disabled', 'true');
  timerBtns[1].setAttribute('disabled', 'true');

  
  const timer = setInterval(setTimer, interval);

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
          
          digits.classList.add("redDigit");

          // Stop timer
          clearInterval(timer);

          // Enable the reset timer button
          timerBtns[1].disabled = false;

        }
      }
    }
  }
}

function reset() {
 
  // Initializing the timer to 00:00  
  const msTens = document.querySelector('#msTens');
  msTens.textContent = 0;
  const msHundreds = document.querySelector('#msHundreds');
  msHundreds.textContent = 0;
  const secondOnes = document.querySelector('#secondOnes');
  secondOnes.textContent = 0;
  const secondTens = document.querySelector('#secondTens');
  secondTens.textContent = 0;  

  // Resetting the digits to black
  const digits = document.querySelector('.digits');
  digits.classList.remove("redDigit");

  // Enable the start timer button
  timerBtns[0].disabled = false;

}