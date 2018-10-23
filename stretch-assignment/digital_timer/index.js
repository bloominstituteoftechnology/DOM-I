let digits = document.querySelectorAll('.digit');
// digits = Array.from(digits);
// digits.splice(2, 1);

const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');
const secondOnes = document.getElementById('secondOnes');
const secondTens = document.getElementById('secondTens');


let int_msTens = 0;
let int_msHundreds = 0;
let int_secondOnes = 0;
let int_secondTens = 0;

msTens.textContent = int_msTens;
msHundreds.textContent = int_msHundreds;
secondOnes.textContent = int_secondOnes;
secondTens.textContent = int_secondTens;

function timer() {
    if (int_secondTens === 1) {
        digits.forEach(ele => ele.classList.add('redDigit'));
        clearInterval(timeInterval);

    } else {
        msTens_func();
    }
}

function msTens_func() {
    if (int_msTens === 9) {
        int_msTens = 0;
        msTens.textContent = int_msTens;
        msHundreds_func();
    } else {
        int_msTens += 1;
        msTens.textContent = int_msTens;
    }
}

function msHundreds_func() {
    if (int_msHundreds === 9) {
        int_msHundreds = 0;
        msHundreds.textContent = int_msHundreds;
        secondOnes_func();
    } else {
        int_msHundreds += 1;
        msHundreds.textContent = int_msHundreds;
    }
}

function secondOnes_func() {
    if (int_secondOnes === 9) {
        int_secondOnes = 0;
        secondOnes.textContent = int_secondOnes;
        secondTens_func();
    } else {
        int_secondOnes += 1;
        secondOnes.textContent = int_secondOnes;
    }
}

function secondTens_func() {
    if (int_secondTens === 9) {
        int_secondTens = 0;
        secondTens.textContent = int_secondTens;
    } else {
        int_secondTens += 1;
        secondTens.textContent = int_secondTens;
    }
}



function timeInterval() {
    button[0].removeAttribute('onclick');
    let timeInterval = window.setInterval(timer, 10);
    return timeInterval();

}

let button = document.getElementsByClassName('button');
button[0].setAttribute('onclick', 'timeInterval()');