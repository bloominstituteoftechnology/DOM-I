let current = 1;
let currentTens = 0;
let currentSec = 0;
let currentHs = 0;
let currentMs = 0;
let digitOne = document.getElementById('secondTens');
let digitTwo = document.getElementById('secondOnes');
let digitThree = document.getElementById('msHundreds');
let digitFour = document.getElementById('msTens');

const d2 = window.setInterval( () => {
    digitTwo.innerHTML = current;
    current = ++current;
    if (current === 10) {
        current = 0;
        currentSec = 0;
    }
}, 1000);

const d1 = window.setInterval( () => {
    if (currentHs === 9) {
        currentSec = ++currentSec;
    }
    digitOne.innerHTML = currentSec;
}, 10000);

const d4 = window.setInterval( () => {
    digitFour.innerHTML = currentMs;
    currentMs = ++currentMs;
    if (currentMs === 10) {
        currentMs = 0;
    }
    digitFour.innerHTML = currentMs;
    if (currentSec === 1) {
        clearInterval(d4);
        digitFour.innerHTML = 0;
    }
}, 10);

const d3 = window.setInterval( () => {
    digitThree.innerHTML = currentHs;
    currentHs = ++currentHs;
    if (currentHs === 10) {
        currentHs = 0;
    }
    digitThree.innerHTML = currentHs;
}, 100);

const stop = window.setTimeout( () => {
    clearInterval(d3);
    clearInterval(d2);
    // let digits = document.getElementsByClassName('digits');
    // digits.style.color = 'red';  // how to get class group to change together?
    digitFour.style.color = 'red';
    digitThree.style.color = 'red';
    digitTwo.style.color = 'red';
    digitOne.style.color = 'red';
    (document.getElementById('colon')).style.color = 'red';

}, 10001);



