const resetTimerButton = document.querySelector("#reset-timer-button");
const startTimerButton = document.querySelector("#start-timer-button");

const timerDisplayElements = document.querySelectorAll(".timer-display");
const secondsDisplay = document.querySelector("#sec");
const millisecondsDisplay = document.querySelector("#ms");

let secondsCount = 0;
let millisecondsCount = 0;

function resetTimer() {
    timerDisplayElements.forEach(element =>
        element.classList.remove("redDigit"));
    resetTimerButton.disabled  = true;
    startTimerButton.removeAttribute("disabled");
    secondsDisplay.textContent = millisecondsDisplay.textContent = "--";
    secondsCount = millisecondsCount = 0;
}

function startTimer() {
    secondsDisplay.textContent = "00";
    startTimerButton.disabled = true;
    let timer = window.setInterval(() => {
        if (++millisecondsCount === 100) {
            secondsDisplay.textContent = String(++secondsCount).padStart(2, '0');
            millisecondsDisplay.textContent = String(millisecondsCount = 0).padStart(2, '0');
    
            if (secondsCount === 10) {
                window.clearInterval(timer);
                timerDisplayElements.forEach(element =>
                    element.classList.add("redDigit"));
                resetTimerButton.removeAttribute("disabled");
            }
        } else {
            millisecondsDisplay.textContent = String(millisecondsCount).padStart(2, '0');
        }
    }, 10);
}

resetTimerButton.addEventListener("click", resetTimer);
startTimerButton.addEventListener("click", startTimer);