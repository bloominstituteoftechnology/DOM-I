let secondTensLabel = document.getElementById("secondTens");
let secondsLabel = document.getElementById("secondOnes");
let msHundredsLabel = document.getElementById("msHundreds");
let msTensLabel = document.getElementById("msTens");

let totalMs = 0;

let timerDigits = document.querySelectorAll('.digit');

function countUp() {
    const timer = setInterval(() => {
        totalMs+= 10;
        msTensLabel.textContent = (totalMs / 10) % 10;
        msHundredsLabel.textContent = Math.floor((totalMs / 100) % 10);
        secondsLabel.textContent = Math.floor((totalMs / 1000) % 10);
        secondTensLabel.textContent = Math.floor(totalMs / 10000);
    
        if (totalMs === 10000) {
            timerDigits.forEach(digit => digit.style.color = 'red');
            clearInterval(timer);
        }
    }, 10);
}

// const timer = setInterval(() => {
//     totalMs+= 10;
//     msTensLabel.textContent = (totalMs / 10) % 10;
//     msHundredsLabel.textContent = Math.floor((totalMs / 100) % 10);
//     secondsLabel.textContent = Math.floor((totalMs / 1000) % 10);
//     secondTensLabel.textContent = Math.floor(totalMs / 10000);

//     if (totalMs === 10000) {
//         timerDigits.forEach(digit => digit.style.color = 'red');
//         clearInterval(timer);
//     }
// }, 10);

let btn = document.createElement('button');
btn.textContent = 'start';
btn.setAttribute("onclick", "countUp()");

document.body.appendChild(btn);

console.log(btn);

// let timer = function() {
//     totalMs+= 10;
//     msTensLabel.textContent = (totalMs / 10) % 10;
//     msHundredsLabel.textContent = Math.floor((totalMs / 100) % 10);
//     secondsLabel.textContent = Math.floor((totalMs / 1000) % 10);
//     secondTensLabel.textContent = Math.floor(totalMs / 10000);

//     if (totalMs >= 2000) {
//         timerDigits.forEach(digit => digit.style.color = 'red');
//     }

//     clearInterval(timer);
// }

// let startTimer = setInterval(timer, 10);

// console.log(globalMs);