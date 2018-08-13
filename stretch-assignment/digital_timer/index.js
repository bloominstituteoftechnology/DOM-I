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

});