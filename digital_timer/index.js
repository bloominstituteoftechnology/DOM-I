// Countdown clock
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');

timer();

function timer () {
  init();

  function init () {
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";


    // set an interval that calls updateTimer and calls endTimer after 10 seconds

    let myInterval = window.setInterval(() => {
      console.log('10ms has passed');
      updateTimer();
    }, 10);
}

  function increment (number) {
    // helper function that gets called by updateTimer
    for (let i = 0; i < 9; i++) {
      return number.innerHTML = i;
    }

    }
  }

  function endTimer () {
    return clearInterval(myInterval);
  }

  function updateTimer () {
    increment(msTens);
  }
