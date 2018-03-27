const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
let count = 0;

const resetClock = () => {
    secondTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    msHundreds.innerHTML = 0;
    msTens.innerHTML = 0;
}

const controller = () => {
    ++count;
    updateFunct();
    stopClock();
}

const updateFunct = ()  => {
    if (count % 1000 == 0) addDigit(secondTens);
    if (count % 100 == 0) addDigit(secondOnes);
    if (count % 10 == 0) addDigit(msHundreds);
}

const addDigit = (element) => {
    if (element.innerHTML == 9) element.innerHTML = 0;
    else ++element.innerHTML;
}

const stopClock = () => {
    if (secondTens.innerHTML == 1) {
        clearInterval(clockTimer);
        updateRed();
    }
}
const updateRed = () => {
    let elements = document.querySelectorAll(".digit");
    elements.forEach(element => {
        element.classList.add('redDigit');
    });
}

resetClock();
const clockTimer = setInterval(() => controller(), 10);

//10ms = 1/10 second
//1,000ms = 1 second
// 10,000ms = 10 seconds
