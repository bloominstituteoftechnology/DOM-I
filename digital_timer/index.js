
// document.getElementById("secondTens").innerHTML = "0";
// document.getElementById("secondOnes").innerHTML = "0";
// document.getElementById("msHundreds").innerHTML = "0";
// document.getElementById("msTens").innerHTML = "0";

// let secondTensLabel = document.getElementById("secondTens");
// let secondOnesLabel = document.getElementById("secondOnes");
// let msHundredsLabel = document.getElementById("msHundreds");
// let msTensLabel = document.getElementById("msTens");

// let totalSeconds = 0;
// setInterval(setTime, 1000);

// function setTime() {
//   ++totalSeconds;
//   secondTensLabel.innerHTML = pad(totalSeconds % 60);
//   secondOnesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
// }

// function pad(val) {
//   var valString = val + "";
//   if (valString.length < 2) {
//     return "0" + valString;
//   } else {
//     return valString;
//   }
// }

const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

timer(10);

function timer (number) {
  init();

  function init () {
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";

    // set an interval that calls updateTimer as well as calls endTimer after 10 seconds
  }

  function increment () {
    // helper function that gets called by updateTimer
  }

  function endTimer () {

  }

  function updateTimer () {

  }
}