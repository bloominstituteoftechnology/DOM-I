let current = 1;
let currentTens = 0;
let currentSec = 0;
let currentHs = 0;
let currentMs = 0;

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
    // secondTime = document.getElementById('secondTens');
    if (currentHs === 9) {
        currentSec = ++currentSec;
    }
    secondTens.innerHTML = currentSec;
}, 10000);

const hsTimes = window.setInterval( () => {
    hsTime = document.getElementById('msHundreds');
    hsTime.innerHTML = currentHs;
    currentHs = ++currentHs;
    if (currentHs === 10) {
        currentHs = 0;
    }
    hsTime.innerHTML = currentHs;
}, 100);

const msTimes = window.setInterval( () => {
    msTime = document.getElementById('msTens');
    msTime.innerHTML = currentMs;
    currentMs = ++currentMs;
    if (currentMs === 10) {
        currentMs = 0;
    }
    msTime.innerHTML = currentMs;
    if (currentSec === 1) {
        clearInterval(msTimes);
        msTime.innerHTML = 0;
        msTime.style.color = 'red';
    }
}, 10);

const stop = window.setTimeout( () => {
    clearInterval(hsTimes);
    clearInterval(secondOnes);
    // let digits = document.getElementsByClassName('digits');
    // digits.style.color = 'red';
    hsTime.style.color = 'red';
    secondOne.style.color = 'red';
    secondTens.style.color = 'red';
    (document.getElementById('colon')).style.color = 'red';

}, 10001);



