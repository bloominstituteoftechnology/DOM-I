// For the timer, the milisecond section of the timer should count to 1000ms
// Every time it reaches 1000ms, it should increase the second timer by second by one
// When the seconds section hit 10 seconds, the timer should turn red and stop

// Variables
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const colon = document.getElementById('colon');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

// Sets timer to 0 
secondTens.innerHTML = '0';
secondOnes.innerHTML = '0';
msHundreds.innerHTML = '0';
msTens.innerHTML = '0';

