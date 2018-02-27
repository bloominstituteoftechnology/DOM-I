const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const colon = document.getElementById("colon");

timer();

function timer () {

  function init () {
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";
    colon.innerHTML = ":";
    // set an interval that calls updateTimer as well as calls endTimer after 10 seconds
    secondsCounter();
  }

  let totalSeconds = 0;

  const secondsCounter = setInterval (() => {
    totalSeconds++;
    updateTimer();

    if (totalSeconds === 1000){
        stop();
    }

  }, 10);

  function stop () {
      clearInterval(secondsCounter);
      secondTens.classList.add('redDigit');
      secondOnes.classList.add('redDigit');
      msHundreds.classList.add('redDigit');
      msTens.classList.add('redDigit');
      colon.classList.add('redDigit');
  }
  
  function updateTimer () {
    secondTens.innerHTML = Math.floor(totalSeconds / 1000 % 10) ;
    secondOnes.innerHTML = Math.floor(totalSeconds / 100 % 10);
    msHundreds.innerHTML = Math.floor(totalSeconds / 10 % 10);
    msTens.innerHTML = Math.floor(totalSeconds / 1 % 10);
  }

  init();

}

