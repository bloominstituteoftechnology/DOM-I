let count = 0;

let mainTimer = setInterval(function(){
  if (count === 1000) {
    clearInterval(mainTimer);
  }

// captire the html elements
let secondT = document.getElementById("secondTens");
let secondO = document.getElementById("secondOnes");
let colon = document.getElementById("colon");
let msH = document.getElementById("msHundreds");
let msT = document.getElementById("msTens");
let ms = count.toString();

// if the count is less than 10 then the tens units msh are all set to 0 and the ms are updated
if (count < 10) {
    secondT.innerHTML = "0";
    secondO.innerHTML = "0";
    msH.innerHTML = "0"
    msT.innerHTML = ms;
  }

  // if the count goes over 10 but then is still less than 100 update the msT and msH leaving the tens and units intact
  if (count < 100 && count >= 10) {
    secondT.innerHTML = "0";
    secondO.innerHTML = "0";
    msH.innerHTML = ms[0];
    msT.innerHTML = ms[1];
  }

});