const digits = document.querySelector(".digits");
const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");


let ms = 0;
secondTens.innerHTML = '0';
secondOnes.innerHTML = '0';
msHundreds.innerHTML = '0';
msTens.innerHTML = '0';

const increment = (string) => {
    let num = Number(string) + 1;
    return String(num);
}

const updateTimer = (ms) => {
    if (ms === 10000) {
        secondTens.innerHTML = '1';
        secondOnes.innerHTML = '0';
        msHundreds.innerHTML = '0';
        msTens.innerHTML = '0';
    } else if (ms % 1000 === 0) {
        secondOnes.innerHTML = increment(secoondOnes.innerHTML);
        msHundreds.innerHTML = '0';
        msTens.innerHTML = '0';
    } else if (ms % 100 === 0) {
        msHundreds.innerHTML = increment(msHundreds.innerHTML);
        msTens.innerHTML = '0';

    } else if (ms % 10 === 0) {
        ms.tens.innerHTML = increment(msTens.innerHTML);
    }

}

const timerInterval = setInterval( () => {
    ms = ms + 10;
    if (ms === 10000) {
        clearInterval(timerInterval);
        for(let i = 0; i < digits.children.length; i++) {
            digits.children[i].classList.add('redDigit')
        }
    }
    updateTimer(ms);
}, 10)
