let seconds = 0;
let ms = 0;
const timeLimit = 10;

// document.getElementsByClassName('digit').style.color = ‘red’;

document.getElementById('secondTens').innerHTML = 0;
document.getElementById('secondOnes').innerHTML = 0;
document.getElementById('msHundreds').innerHTML = 0;
document.getElementById('msTens').innerHTML = 0;

let msTimer = setInterval(function() {
  document.getElementById('msHundreds').innerHTML = parseInt(ms / 10);
  document.getElementById('msTens').innerHTML = ms++ % 10;
  if(ms === 100){
    ms = 0;
  }
  if(seconds === timeLimit){
    ms = 0;
    document.getElementById('msTens').innerHTML = ms;
    document.getElementById('msHundreds').innerHTML = ms;
    clearInterval(msTimer);
  }
}, 10)

let secondTimer = setInterval(function() {
  document.getElementById('secondTens').innerHTML = parseInt(seconds / 10);
  document.getElementById('secondOnes').innerHTML = ++seconds % 10;
  if(seconds === timeLimit){
    clearInterval(secondTimer);
    document.getElementById('secondTens').innerHTML = 1;
    document.getElementById('secondOnes').innerHTML = 0;
  }
}, 1000)