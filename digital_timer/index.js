// DOM-I Project - 2/26/2018 - Zack Hitchcock
const digitsClass = document.getElementsByClassName('digit');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');


function timer() {

    init();

    function init() {
        secondTens.innerHTML = '0';
        secondOnes.innerHTML = '0';
        msTens.innerHTML = '0';
        msHundreds.innerHTML = '0';
    
        let ms = 0;
        let timerInt = window.setInterval(() => {
            ms += 10;
            if (ms === 10000) {
                endTimer(timerInt);
            }
            updateTimer(ms);
        }, 10);
    }

    function increment(string) {
        let number = Number(string) + 1;
        return number.toString();
    }

    function endTimer(intervalStop) {
        clearInterval(intervalStop);
        Array.from(digitsClass).forEach((digit) => {
            digit.classList.add('redDigit');
        })
    }

    function updateTimer(ms) {
        if (ms === 10000) {
            secondTens.innerHTML = '1';
            secondOnes.innerHTML = '0';
            msTens.innerHTML = '0';
            msHundreds.innerHTML = '0';
        } else if (ms % 1000 === 0) {
            secondOnes.innerHTML = increment(secondOnes.innerHTML);
            msTens.innerHTML = '0';
            msHundreds.innerHTML = '0';
        } else if (ms % 100 === 0) {
            msTens.innerHTML = '0';
            msHundreds.innerHTML = increment(msHundreds.innerHTML);
        } else {
            msTens.innerHTML = increment(msTens.innerHTML);
        }
    }
}

timer();