

let current = 0;
let currentSec = 0;

const secondOnes = window.setInterval( () => {
    secondOne = document.getElementById('secondOnes');
    secondTens = document.getElementById('secondTens');

    secondOne.innerHTML = current;
    current = ++current;
  
        
    if (current === 10) {
        current = 0;
        currentSec = 0;
    }
}, 1000);




const secondTimes = window.setInterval( () => {
    secondTime = document.getElementById('secondTens');
    
    if ( currentSec === 0) {
        currentSec = ++currentSec;
    }
}, 10000);