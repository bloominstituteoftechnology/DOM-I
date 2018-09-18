let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');
let digits = document.querySelectorAll('.digit');

secondTens.innerText = 0;
secondOnes.innerText = 0;
msHundreds.innerText = 0;
msTens.innerText = 0;

let counter = 0;
let seconds = 0;

function timer() {
  let time = setInterval(timeIt, 10);

  function timeIt() {
    startBtn.disabled = true;
    resetBtn.disabled = true;
    counter += 1;

    msHundreds.innerText = 0;
    msTens.innerText = counter;

    if (counter > 9) {
      msHundreds.innerText = 0;
    } else {
      msHundreds.style.display = 'none';
    }
    if (counter > 59) {
      // msHundreds.style.display = 'none';
      msTens.innerText = 0;
      // let milliseconds = Number(`${msHundreds.innerText}${msTens.innerText}`);
      let milliseconds = Number(`${msTens.innerText}`);

      if (milliseconds === 0) {
        seconds += 1;
        secondOnes.innerText = seconds;

        if (seconds === 10) {
          secondTens.innerText = 1;
          secondOnes.innerText = 0;
          digits.forEach(digit => digit.classList.add('redDigit'));

          stopTime(time);
          msHundreds.style.display = 'inline-block';
          resetBtn.disabled = false;
        }
      }
      counter = 0;
    }
  }

  resetBtn.addEventListener('click', resetTime);

  function stopTime(timer) {
    clearInterval(timer);
  }

  function resetTime() {
    secondTens.innerText = 0;
    msHundreds.innerText = 0;
    seconds = 0;
    digits.forEach(digit => digit.classList.remove('redDigit'));
    startBtn.disabled = false;
    msHundreds.style.display = 'inline-block';
  }
}

let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', timer)
