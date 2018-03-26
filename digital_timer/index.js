const digits = document.querySelector('.digits');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

timer();
function timer() {
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.innerHTML = "0";

    let ms = 0; // milliseconds

    const timerId = window.setInterval(() =>{
        ms += 10;
        if (ms === 10000) {
            stopTimer(timerId);
        }
        updateHtml(ms);
        }, 10);

}

function updateHtml(ms) {
    if (ms === 10000) {
        secondTens.innerHTML = "1";
        secondOnes.innerHTML = "0";
        msHundreds.innerHTML = "0";
        msTens.innerHTML = "0";
    }
    else if (ms % 1000 === 0) {
        secondOnes.innerHTML = addTime(secondOnes.innerHTML);
        msHundreds.innerHTML = "0";
        msTens.innerHTML = "0";
    }
    else if (ms % 100 === 0) {
        msHundreds.innerHTML = addTime(msHundreds.innerHTML);
        msTens.innerHTML = "0";
    }
    else {
        msTens.innerHTML = addTime(msTens.innerHTML);
    }

}

function addTime(string) {
    let number = Number(string) + 1;
    return number.toString();

}

function stopTimer(id) {
    clearInterval(id);
    Array.from(digits.children).forEach(digit => {
        digit.classList.add("redDigit");
    })
}