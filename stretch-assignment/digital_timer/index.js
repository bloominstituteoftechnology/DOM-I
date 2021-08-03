const button = document.createElement('button');


let elapsedTime = 0     // in msec

let timerHandle = window.setInterval(timerCB, 10);

window.setTimeout(stopTimer, 10001);

let mTens = document.querySelector('#msTens');
let mHundreds = document.querySelector('#msHundreds');
let sOnes = document.querySelector('#secondOnes');
let sTens = document.querySelector('#secondTens');
let timer = document.querySelector('.digits');

// callback called every 10 msec
function timerCB() {
    elapsedTime += 10;

    let msTens = Math.trunc(elapsedTime / 10).toString();
    let msHundreds = Math.trunc(elapsedTime / 100).toString();
    let secondOnes = Math.trunc(elapsedTime / 1000).toString();
    let secondTens = Math.trunc(elapsedTime / 10000).toString();

    mTens.textContent = msTens[msTens.length-1];
    mHundreds.textContent = msHundreds[msHundreds.length-1];
    sOnes.textContent = secondOnes[secondOnes.length-1];
    sTens.textContent = secondTens[secondTens.length-1];
    console.log(elapsedTime, secondTens, secondOnes, msHundreds, msTens);
}

function stopTimer() {
    window.clearInterval(timerHandle);
    timer.style.color = "red";
}
