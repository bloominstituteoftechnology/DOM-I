// variables
const msTens = document.querySelector('#msTens');
const msHuns = document.querySelector('#msHundreds');
const secOnes = document.querySelector('#secondOnes');
const secTens = document.querySelector('#secondTens');

const digits = document.querySelector(".digits"); // for red at 10s

// set times to 0
msTens.innerHTML = '0';
msHuns.innerHTML = '0';
secOnes.innerHTML = '0';
secTens.innerHTML = '0';

// timer function
const timer = () => {
    if (msTens.innerHTML < 9) {
        msTens.innerHTML++;
    } else {
        msTens.innerHTML = 0;
        if (msHuns.innerHTML < 9) {
            msHuns.innerHTML++;
        } else {
            msHuns.innerHTML = 0;
            if (secOnes.innerHTML < 9) {
                secOnes.innerHTML++;
            } else {
                secOnes.innerHTML = 0;
                clearInterval(count); // stop timer function (setInterval)
                digits.classList.add('redDigit'); // adds .redDigit to digits elements
                secTens.innerHTML++;                
            }
        }
    }
}

// calls timer function every 10ms until cleared (clearInterval)
let count = setInterval(timer, 10);

// stretch goals
// START button
const startBTN = document.createElement('BUTTON');
const startText = document.createTextNode('START');

startBTN.id = 'start'; // add 'start' id

startBTN.appendChild(startText);
document.body.appendChild(startBTN);

const startFunc = () => {
    document.getElementById('start').addEventListener('click', count);
}




// RESET button
let resetBTN = document.createElement('BUTTON');
let resetText = document.createTextNode('RESET');

resetBTN.id = 'restart'; // add 'restart' id

resetBTN.appendChild(resetText);
document.body.appendChild(resetBTN);

