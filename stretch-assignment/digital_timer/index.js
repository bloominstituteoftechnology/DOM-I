const secondTen = document.getElementById('secondTens');
const secondOne = document.getElementById('secondOnes');
const colons = document.getElementById('colon');
const hundreds = document.getElementbyId('msHundreds');
const tens = document.getElementById('msTens');
const allElements = document.querySelectorAll('.digit');





/*
every second we want msTens to increment by one from 0 to 9
After 9, we want:
  - msHundreds to increment by 1
  - msTens to reset to 0
  - everything changes to red: replace class .digit with class .redDigit
 */

const timerFunction = function(tens){
  for (let i = 0; i < 10; i++) {
    tens.textContent = i; 
  }

}

Window.setInterval(timerFunction(tens), 10); // execute the timerFunction every 10ms





