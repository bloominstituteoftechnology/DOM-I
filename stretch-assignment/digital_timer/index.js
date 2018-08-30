let stop = false;
let reset = false;
let max = 10;
let secondTens = 0;
let secondOnes = 0;
let msHundreds = 0;
let msTens = 0;

document.getElementById('secondTens').innerHTML = secondTens;
document.getElementById('secondOnes').innerHTML = secondOnes;
document.getElementById('msHundreds').innerHTML = msHundreds;
document.getElementById('msTens').innerHTML = msTens;

function start() {
  const seconds = setInterval(increaseSeconds, 1000);
  const msH = setInterval(increaseMsHundreds, 100);
  const msT = setInterval(increaseMsTens, 10);

  function increaseSeconds() {
    if (secondOnes < max - 1 && !stop) {
      secondOnes += 1;
      document.getElementById('secondOnes').innerHTML = secondOnes;
    } else {
      stop = true;
      secondTens = 1;
      secondOnes = 0;
      document.getElementById('secondTens').innerHTML = secondTens;
      document.getElementById('secondOnes').innerHTML = secondOnes;
    }
  }

  function increaseMsHundreds() {
    if (!stop) {
      if (msHundreds > 9) {
        msHundreds = 0;
      }
      document.getElementById('msHundreds').innerHTML = msHundreds;
      msHundreds += 1;
    } else {
      document.getElementById('msHundreds').innerHTML = 0;
    }
  }

  function increaseMsTens() {
    if (!stop) {
      if (msTens > 9) {
        msTens = 0;
      }
      document.getElementById('msTens').innerHTML = msTens;
      msTens += 1;
    } else {
      document.getElementById('msTens').innerHTML = 0;
    }
  }
}

function resetTimer() {
  location.reload();
}

document.getElementById('reset-btn').addEventListener('click', resetTimer);

document.getElementById('start-btn').addEventListener('click', start);
