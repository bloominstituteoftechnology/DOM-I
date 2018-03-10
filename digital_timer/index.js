let secondTens = document.querySelector("#secondTens");
let secondOnes = document.querySelector("#secondOnes");
let msHundreds = document.querySelector("#msHundreds");
let msTens = document.querySelector("#msTens");

let msCounter = 0;
let secCounter = 0;
let maxSeconds = 0;
secondTens.innerHTML = 0;
secondOnes.innerHTML = 0;
msHundreds.innerHTML = 0;
msTens.innerHTML = 0;

var timer = window.setInterval(function () {
    msTens.innerHTML++;
    msCounter++;
    secCounter++;

    if (msCounter === 10) {
        msHundreds.innerHTML++;
        msTens.innerHTML = 0;
        msCounter = 0;
    }
    if (secCounter === 100) {
        secondOnes.innerHTML++;
        msHundreds.innerHTML = 0;
        secCounter = 0;
        maxSeconds++;
    }
    if (maxSeconds === 10) {
        secondOnes.innerHTML = 0;
        secondTens.innerHTML = 1;
        document.querySelector('.digits').classList.add('redDigit')
        clearInterval(timer);
    }
}, 10)