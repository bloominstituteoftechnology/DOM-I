const digits = document.getElementsByClassName('digits')[0];
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');
secondTens.innerHTML = '0';
secondOnes.innerHTML = '0';
msHundreds.innerHTML = '0';
msTens.innerHTML = '0';

let milliseconds = 0;
const increment = function(string){
    let number = Number(string) + 1;
    return String(number);
}

const updateTimer = function(milliseconds) {
    if(milliseconds === 10000) {
        secondTens.innerHTML = '1';
        secondOnes.innerHTML = '0';
        msHundreds.innerHTML = '0';
        msTens.innerHTML = '0';
    }
    else if(milliseconds % 1000 === 0) {
        secondOnes.innerHTML = increment(secondOnes.innerHTML);
        msHundreds.innerHTML = '0';
        msTens.innerHTML = '0';
    } else if (milliseconds % 100 === 0) {
        msHundreds.innerHTML = increment(msHundreds.innerHTML);
        msTens.innerHTML = '0';
    } else if(milliseconds % 10 === 0){
        msTens.innerHTML = increment(msTens.innerHTML);
    }
}

const timeIncrement = setInterval(function() {
  milliseconds += 10;
  if (milliseconds === 10000) {
    clearInterval(timeIncrement);
    digits.classList.add('redDigit');
  }
  updateTimer(milliseconds);
}, 10);

