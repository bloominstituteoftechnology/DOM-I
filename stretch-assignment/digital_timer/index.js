let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');
let digits = document.querySelectorAll('.digit');

secondTens.innerText = '0';
secondOnes.innerText = '0';
msHundreds.innerText = '0';
msTens.innerText = '0';

let counter = 0;
let seconds = 0;

function timer() {
  let time = setInterval(timeIt, 100);

  function timeIt() {
    counter += 1;

    msHundreds.innerText = 0;
    msTens.innerText = counter;

    if (counter > 9) {
      msHundreds.innerText = 1;
      msTens.innerText = 0;
      let milliseconds = Number(`${msHundreds.innerText}${msTens.innerText}`);

      if (milliseconds === 10) {
        seconds += 1;
        secondOnes.innerText = seconds;

        if (seconds === 10) {
          secondTens.innerText = 1;
          secondOnes.innerText = 0;
          digits.forEach(digit => digit.style.color = 'red');

          stopTime(time);
        }
      }
      counter = 0;
    }
  }

  function stopTime(timer) {
    clearInterval(timer);
  }
}

timer();
