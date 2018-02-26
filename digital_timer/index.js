const secondsOnes = document.getElementById("secondOnes");
const secondsTens = document.getElementById("secondTens");
const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");

timer();

function timer() {
  init();

  function init() {
    secondTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    msTens.innerHTML = 0;
    msHundreds.innerHTML = 0;
  }
}

function increment(numPlace) {
  numPlace++
}

function endTimer() {

}

function updateTimer() {

}

// TODO: 
// setInteval()