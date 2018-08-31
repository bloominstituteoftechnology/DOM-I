let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');
let digits = document.querySelectorAll('.digit');

secondTens.innerHTML = '0';
secondOnes.innerHTML = '0';
msHundreds.innerHTML = '0';
msTens.innerHTML = '0';

let counter = 0;

let intervalTimer = function () {
    setInterval(countUp, 10);
} 

function countUp() {
    counter++;
    if (counter > 0 && counter < 10) {
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
    else if (counter === 1000) {
        clearInterval(intervalTimer);
        msTens.innerHTML = (counter.toString())[3];
        msHundreds.innerHTML = (counter.toString())[2];
        secondOnes.innerHTML = (counter.toString())[1];
        secondTens.innerHTML = (counter.toString())[0];
        digits.forEach(function (item) {
            item.classList.add('redDigit')
        });
    }
}


let startButton = document.querySelector('#start');

startButton.addEventListener('click', intervalTimer);