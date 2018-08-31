let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');

let counter = 0;

let intervalTimer = function () {
    setInterval(countUp, 10);
} 

function countUp() {
    counter++;
    if (counter < 10) {
        msTens.innerHTML = (counter.toString())[0];
    }
    else if (counter < 100) {
        msTens.innerHTML = (counter.toString())[1];
        msHundreds.innerHTML = (counter.toString())[0];
    }
    else if (counter < 1000) {
        msTens.innerHTML = (counter.toString())[2];
        msHundreds.innerHTML = (counter.toString())[1];
        secondOnes.innerHTML = (counter.toString())[0];
    } 
    else if (counter < 10000) {
        msTens.innerHTML = (counter.toString())[3];
        msHundreds.innerHTML = (counter.toString())[2];
        secondOnes.innerHTML = (counter.toString())[1];
        secondTens.innerHTML = (counter.toString())[0];
    }
    else {
        clearInterval(intervalTimer);
        msTens.innerHTML = '0';
        msHundreds.innerHTML = '0';
        secondOnes.innerHTML = '0';
        secondTens.innerHTML = '1';  
    }
}

let startButton = document.querySelector('#start');

startButton.addEventListener('click', intervalTimer);