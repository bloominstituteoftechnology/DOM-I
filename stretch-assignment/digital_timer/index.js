/* index.js for stretch assignment */

// Variables

let sTens = document.querySelector("#secondTens");
let sOnes = document.querySelector("#secondOnes");
let msTens = document.querySelector("#msTens");
let msHundreds = document.querySelector('#msHundreds');
let digits = document.querySelectorAll('.digits .digit');
let counter = 0;

let startBtn = document.createElement('button');
startBtn.innerText = 'Start';
let resetBtn = document.createElement('button');
resetBtn.innerText = 'Reset';

document.body.prepend(startBtn);
document.body.appendChild(resetBtn);


// Timer implementation



const count = setInterval(() => {
    counter++;
    let countStr = `${0000 + counter}`;
    if (counter >= 1000) {
        sTens.innerText = 1;
        digits.forEach((digit, index) => {
            if (index !== 0 && index !== 2) {
                digit.innerText = 0;
            }
            digit.style.color = 'red';
        });
        clearInterval(count);
    } else if (counter >= 100) {
        sTens.innerText = 0;
        sOnes.innerText = countStr[0];
        msTens.innerText = countStr[1];
        msHundreds.innerText = countStr[2];
    } else if (counter >= 10) {
        msTens.innerText = countStr[0];
        msHundreds.innerText = countStr[1];
    } else {
        msHundreds.innerText = countStr[0];
    }
}, 10);