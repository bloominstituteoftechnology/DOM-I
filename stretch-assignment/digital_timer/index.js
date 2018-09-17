// declare variables

const secondOnes = document.getElementById('secondOnes');
const secondTens = document.getElementById('secondTens');
const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');

function timer() {
  let time = 0;

  function increment() {
    time += 1
    // console.log(time);
    return time;
  }
  return increment;
}

const startButton = document.querySelector('button');
const resetButton = document.querySelectorAll('button')[1];
let currentTime = 0;

function displayTimer(displayTime) {
  displayTime = currentTime.toString();
  msTens.innerText = displayTime[displayTime.length -1];
  msHundreds.innerText = displayTime[displayTime.length -2] || 0;
  secondOnes.innerText = displayTime[displayTime.length -3] || 0;
  secondTens.innerText = displayTime[displayTime.length -4] || 0;
}

function runTimer() {
  document.body.style.color = 'black';
  startButton.setAttribute('disabled', 'disabled');
  let newTimer = timer();
  let interval = setInterval(function(){
    currentTime = newTimer();
    if (currentTime >= 1000) {
      document.body.style.color = 'red';
      clearInterval(interval);
    }
    displayTimer(currentTime);

    resetButton.addEventListener('click', resetTimer);

    function resetTimer() {
      document.body.style.color = 'black';
      startButton.removeAttribute('disabled');
      clearInterval(interval);
      currentTime = 0;
      displayTimer(currentTime);
    }
  }, 10);
}

startButton.addEventListener('click', runTimer);




