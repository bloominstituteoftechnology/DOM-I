// creating shortcut for console.log
const msTens = document.getElementById("msTens")
const msHundreds = document.getElementById("msHundreds")
const secOnes = document.getElementById("secondOnes");
const secTens = document.getElementById("secondTens");

let secondsTens = 0
let secondsOnes = 0
let secondsHundreds = 0

secOnes.textContent = secondsOnes;
secTens.textContent = secondsTens;

setInterval(() => {
  if(secondsTens <= 1) {

    if( secondsOnes === 9 ) {
      secOnes.textContent = 0
    } else {
      secondsOnes = secondsOnes + 1
    secOnes.textContent = secondsOnes
    }
    
  }
}, 1000);
