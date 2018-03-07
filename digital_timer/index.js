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

const updateTimer = () => {
    if (count % 1000 == 0) increment(secondTens);
    if (count % 100 == 0) increment(secondOnes);
    if (count % 10 == 0) increment(msHundreds)
}

const increment = (element) => {
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

const timerController = () => {
    ++count;
    updateTimer();
    killTimer();
}

reset();
const timer = setInterval(() => timerController(), 10);
