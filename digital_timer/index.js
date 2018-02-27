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
    
        // set an interval that calls updateTimer as well as calls endTimer after 10 seconds
        let ms = 0;
        let timerInt = window.setInterval(() => {
            // console.log('its been 10 ms already.');
            ms += 10;
            if (ms === 10000) {
                endTimer(timerInt);
            }
            updateTimer(ms);
        }, 10);
    }

    function increment(string) {

    }

    function endTimer(intervalStop) {
        clearInterval(intervalStop);
        Array.from(digitsClass).forEach((digit) => {
            digit.classList.add('redDigit');
        })
    }

    function endTimerSeconds(intervalStop) {
        clearInterval(intervalStop);
    }

    function updateTimer(ms) {
        if (ms === 10000) {
            secondTens.innerHTML = '1';
            secondOnes.innerHTML = '0';
            msTens.innerHTML = '0';
            msHundreds.innerHTML = '0';
        } else if (ms % 1000 === 0) {
            secondTens.innerHTML = '0';
            msTens.innerHTML = '0';
            msHundreds.innerHTML = '0';
            let seconds = 0;
            let secInterval = window.setInterval(() => {
                seconds += 100;
                if (seconds === 900) {
                    endTimerSeconds(secInterval);
                }
                let number = Number(secondOnes.innerHTML) + 1;
                secondOnes.innerHTML = number.toString();
            }, 1000);
        }
    }
}

timer();