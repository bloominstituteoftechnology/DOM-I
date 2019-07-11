let digiClock = document.querySelectorAll('.digit');

let startButton = document.createElement('BUTTON');
startButton.textContent = 'START';
document.body.appendChild(startButton);

startButton.addEventListener('click', function() {
  startTheClock();
  startButton.disabled = true;
  resetButton.disabled = false;
});

let resetButton = document.createElement('BUTTON');
resetButton.textContent = 'RESET';
document.body.appendChild(resetButton);

function startTheClock() {
  resetButton.addEventListener('click', function() {
    clearInterval(runClock);
    resetButton.disabled = true;
    startButton.disabled = false;
    posFour.textContent = 0;
    posThree.textContent = 0;
    posTwo.textContent = 0;
    posOne.textContent = 0;
    digiClock.forEach((numba) => numba.classList.remove('redDigit'));
  });

  let mTen = 0;
  let mHun = 0;
  let sOne = 0;
  let sTen = 0;
  let posFour = document.querySelector('#msTens');
  let posThree = document.querySelector('#msHundreds');
  let posTwo = document.querySelector('#secondOnes');
  let posOne = document.querySelector('#secondTens');

  let runClock = setInterval(clockAdvance, 10);

  function clockAdvance() {
    mTen++;
    if (mTen === 10) {
      mTen = 0;
      mHun++;
      if (mHun === 10) {
        mHun = 0;
        sOne++;
        if (sOne === 10) {
          sOne = 0;
          sTen = 1;
          clearInterval(runClock);
          // startButton.disabled = false;
          // resetButton.disabled = true;
          digiClock.forEach((numba) => numba.classList.add('redDigit'));
        }
      }
    }
    posFour.textContent = mTen;
    posThree.textContent = mHun;
    posTwo.textContent = sOne;
    posOne.textContent = sTen;
    // console.log(posOne);
  }
}
