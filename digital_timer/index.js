let ms = 0;
const msLimit = 10000;

document.getElementById('secondTens').innerHTML = 0;
document.getElementById('secondOnes').innerHTML = 0;
document.getElementById('msHundreds').innerHTML = 0;
document.getElementById('msTens').innerHTML = 0;

function resetTimer() {
  let ms = 0;
  document.getElementById('secondTens').innerHTML = 0;
  document.getElementById('secondOnes').innerHTML = 0;
  document.getElementById('msHundreds').innerHTML = 0;
  document.getElementById('msTens').innerHTML = 0;
  document.querySelector('.digits').style = 'color: black;'
}

function startTimer() {
  document.getElementById('secondTens').innerHTML = 0;
  document.getElementById('secondOnes').innerHTML = 0;
  document.getElementById('msHundreds').innerHTML = 0;
  document.getElementById('msTens').innerHTML = 0;

  function incrementTimer() {
    ms += 10;

    document.getElementById('secondTens').innerHTML = parseInt(ms / 10000) % 10;
    document.getElementById('secondOnes').innerHTML = parseInt(ms / 1000) % 10;
    document.getElementById('msHundreds').innerHTML = parseInt(ms / 100) % 10;
    document.getElementById('msTens').innerHTML = parseInt(ms / 10) % 10;

    if (ms === msLimit) {
      stopTimer();
      document.querySelector('.digits').style = 'color: red;'
    }
  }

  function stopTimer() {
    ms = 0;
    clearInterval(msTimer);
  }

  let msTimer = setInterval(incrementTimer, 10);
}

const startButton = document.createElement('button');
document.body.appendChild(startButton);
startButton.innerHTML = 'Start';
startButton.onclick = startTimer;

const resetButton = document.createElement('button');
document.body.appendChild(resetButton);
resetButton.innerHTML = 'Reset';
resetButton.onclick = resetTimer;