let delay = 10; // milliseconds
let msTens = 0;
let msHundreds = 0;
let secondOnes = 0;
let secondTens = 0;
let displaySecTens = document.querySelector('#secondTens');
let displaySecOnes = document.querySelector('#secondOnes');
let displayMSHundreds = document.querySelector('#msHundreds');
let displayMSTens = document.querySelector('#msTens');
let startBtn = document.querySelector('.start-btn');
let resetBtn = document.querySelector('.reset-btn');
let timer = 0;


displaySecTens.innerHTML = secondTens;
displaySecOnes.innerHTML = secondOnes;
displayMSTens.innerHTML = msTens;
displayMSHundreds.innerHTML = msHundreds;

resetBtn.addEventListener('click', function () {
  msTens = 0;
  msHundreds = 0;
  secondOnes = 0;
  secondTens = 0;

  displaySecTens.innerHTML = secondTens;
  displaySecOnes.innerHTML = secondOnes;
  displayMSTens.innerHTML = msTens;
  displayMSHundreds.innerHTML = msHundreds;

  displaySecTens.classList.remove('redDigit');
  displaySecOnes.classList.remove('redDigit');
  displayMSTens.classList.remove('redDigit');
  displayMSHundreds.classList.remove('redDigit');
});

startBtn.addEventListener('click', function () {
  startBtn.disabled = true;
  timer = setInterval(startTimer, delay);
});


function startTimer() {
  msHundreds += 1;
  if (msHundreds == 10) {
    msHundreds = 0;
    msTens += 1;
  }

  if (msTens == 10) {
    msTens = 0;
    secondOnes += 1;
  }

  if (secondOnes == 10) {
    secondOnes = 0;
    secondTens += 1;
  }

  if (secondTens == 1) {
    console.log("Help");
    startBtn.disabled = false;
    clearInterval(timer);
    timer = 0;
    displaySecTens.classList.add('redDigit');
    displaySecOnes.classList.add('redDigit');
    displayMSTens.classList.add('redDigit');
    displayMSHundreds.classList.add('redDigit');
  }

  displaySecOnes.innerHTML = secondOnes;
  displaySecTens.innerHTML = secondTens;
  displayMSHundreds.innerHTML = msHundreds;
  displayMSTens.innerHTML = msTens;
}
