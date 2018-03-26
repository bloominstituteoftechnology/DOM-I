const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
const startButton = document.querySelector('button#start');
const stopButton = document.querySelector('button#stop');
const resetButton = document.querySelector('button#reset');
let count = 0;

const reset = () => {
    secondTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    msHundreds.innerHTML = 0;
    msTens.innerHTML = 0;
}

const timerController = () => {
    ++count;
    update();
    stopTimer();
}

const update = () => {
    if (count % 1000 == 0) incrementDigit(secondTens);
    if (count % 100 == 0) incrementDigit(secondOnes);
    if (count % 10 == 0) incrementDigit(msHundreds)
}

const incrementDigit = (element) => {
    if (element.innerHTML == 9) element.innerHTML = 0;
    else ++element.innerHTML;
}

const stopTimer = () => {
    if (secondTens.innerHTML == 1) {
        clearInterval(timer);
        changeDigitsToRed();
    }
}

const changeDigitsToRed = () => {
    let elements = document.querySelectorAll(".digit");
    elements.forEach(element => {
        element.classList.add('redDigit');
    });
}

reset();
const timer = setInterval(() => timerController(), 10);