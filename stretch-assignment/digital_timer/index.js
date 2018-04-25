const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const colon = document.querySelector("#colon");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
const digitPlaces = [secondTens, secondOnes, colon, msHundreds, msTens];

const body = document.querySelector("body");

const newElem = elem => document.createElement(elem);
const newText = text => document.createTextNode(text);

function createButton(text) {
    let newButton = newElem("button");
    newButton.id = text;
    newButton.appendChild(newText(text));
    return newButton;
}
const startButton = createButton("Start");
const resetButton = createButton("Reset");

const buttonDiv = newElem("div");
buttonDiv.appendChild(startButton);
buttonDiv.appendChild(resetButton);
body.appendChild(buttonDiv);

let mSeconds = 0;

document.querySelector("#Start").addEventListener("click", function() {
    document.querySelector("#Reset").addEventListener("click", function() {
        clearInterval(beginCount);
        mSeconds = 0;
        for (let place of digitPlaces) {
            if (place !== colon) {
                place.innerText = "-";
            }
        }
        applyColor("black");
    });
    let beginCount = setInterval(() => {
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
});


function applyColor(color) {
    for (let place of digitPlaces) {
        place.style.color = color;
    }
}
// setTimeout(() => clearInterval(beginCount), 12500);

// How to use `clearInterval()` after a set amount of time
// https://stackoverflow.com/a/11363425