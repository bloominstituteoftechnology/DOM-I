const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const colon = document.querySelector("#colon");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");

let mSeconds = 0;

const beginCount = setInterval(() => {
    if (mSeconds === 999) { 
        clearInterval(beginCount); 
        applyColor("red");
    }
    mSeconds++;
    secondTens.innerText = mSeconds.toString().slice(-4,-3) || `-`;
    secondOnes.innerText = mSeconds.toString().slice(-3,-2) || `-`;
    msHundreds.innerText = mSeconds.toString().slice(-2,-1) || `-`;
    msTens.innerText = mSeconds % 10;
}, 10);

function applyColor(color) {
    let digitPlaces = [secondTens, secondOnes, colon, msHundreds, msTens];
    for (let place of digitPlaces) {
        place.style.color = color;
    }
}
// setTimeout(() => clearInterval(beginCount), 12500);

// How to use `clearInterval()` after a set amount of time
// https://stackoverflow.com/a/11363425