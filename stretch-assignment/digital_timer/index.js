let clock = document.querySelector('.digits');

const msTens = document.querySelector('#msTens');
const msHundreds = document.querySelector('#msHundreds');

// Button
const startButton = document.createElement('button');
startButton.innerText = 'start';
document.body.prepend(startButton);

const resetButton = document.createElement('button');
resetButton.innerText = 'reset';
document.body.prepend(resetButton);

// add counter to the button
startButton.addEventListener('click', startCounting, { once: true });

resetButton.addEventListener('click', function() {
  msTens.innerHTML = '-';
  msHundreds.innerHTML = '-';
  clock.classList.remove('redDigit');

  startButton.removeEventListener('click', startCounting, { once: true });
  startButton.addEventListener('click', startCounting, { once: true });
})

// functions
function startCounting () {
  msTensCounter = 0;
  msHundredsCounter = 0;

  let countInterval = setInterval(count, 10);

  function count() {
    msTensCounter += 1;
  
    if (msTensCounter % 1000 === 0) {
      clock.classList.add('redDigit');
      
      msTensCounter = 0;
      msHundredsCounter += 1;
      clearInterval(countInterval);
    }

    msTens.innerHTML = msTensCounter;
    msHundreds.innerHTML = msHundredsCounter;
  }
}
