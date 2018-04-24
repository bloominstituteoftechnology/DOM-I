const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
let mSeconds = 0;

const beginCount = setInterval(() => {
    if (mSeconds === 999) { clearInterval(beginCount); }
    mSeconds++;
    secondTens.innerText = mSeconds.toString().slice(-4,-3) || `-`;
    secondOnes.innerText = mSeconds.toString().slice(-3,-2) || `-`;
    msHundreds.innerText = mSeconds.toString().slice(-2,-1) || `-`;
    msTens.innerText = mSeconds % 10;
}, 10);

// setTimeout(() => clearInterval(beginCount), 12500);

// How to use `clearInterval()` after a set amount of time
// https://stackoverflow.com/a/11363425