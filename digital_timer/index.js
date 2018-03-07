const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
let count = 0;


const reset = () => {
    secondTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    msHundreds.innerHTML = 0;
    msTens.innerHTML = 0;
}

const timerController = () => {
    ++count;
    updateTimer();
    killTimer();
}

const updateTimer = () => {
    if (count % 1000 == 0) incrementDigit(secondTens);
    if (count % 100 == 0) incrementDigit(secondOnes);
    if (count % 10 == 0) incrementDigit(msHundreds)
}

const incrementDigit = (element) => {
    if (element.innerHTML == 9) element.innerHTML = 0;
    else ++element.innerHTML;
}

const killTimer = () => {
    if (secondTens.innerHTML == 1) {
        clearInterval(timer);
        changeDigitsRed();
    }
}

const changeDigitsRed = () => {
    let elements = document.querySelectorAll(".digit");
    elements.forEach(element => {
        element.classList.add('redDigit');
    });
}


reset();
const timer = setInterval(() => timerController(), 10);
