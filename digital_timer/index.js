
const digits = document.getElementsByClassName(".digits");
const tensSec = document.getElementById("secondTens");
const onesSec = document.getElementById("secondOnes");
const hundredsMil = document.getElementById("msHundreds");
const tensMil = document.getElementById("msTens");

myTimer();

function myTimer () {
  init();

  function init () {
    tensSec.innerHTML = "0";
    onesSec.innerHTML = "0";
    hundredsMil.innerHTML = "0";
    tensMil.innerHTML = "0";

//set interval that calls update timer as well as calls endtimer after 10 seconds

  }
//  function increment () {
// helper function that gets called by updateTimer
//  }
//  function endTimer () {

//  }
//  function updateTimer () {

//  }
}
