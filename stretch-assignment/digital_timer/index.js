let secondsTens = document.querySelector('#secondTens');
let secondsOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens.digit');
let colon = document.querySelector('#colon.digit');
let timer = document.querySelector('.digits');

setInterval(addTime, 100);
function addTime(digit) {
  digit.textContent++;
}
if (secondsTens > 10) {
  addTime(secondsTens);
}

secondsTens.textContent = '0';
secondsOnes.textContent = '0';
msHundreds.textContent = '0';
msTens.textContent = '0';

console.log(document.querySelector('div'));

