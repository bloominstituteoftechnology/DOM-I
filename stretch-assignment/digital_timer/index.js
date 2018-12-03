const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const colon = document.querySelector('#colon');
const msHundreds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');

secondTens.textContent = 0;
secondOnes.textContent = 0;
msHundreds.textContent = 0;
msTens.textContent = 0;



function addTime() {
    msTens.textContent++
    if (msTens.textContent > 9) {
        msTens.textContent = 0;
        msHundreds.textContent++;
        if (msHundreds.textContent > 9) {
            msHundreds.textContent = 0;
            secondOnes.textContent++;
            if (secondOnes.textContent > 9) {
                secondOnes.textContent = 0;
                secondTens.textContent++;
                secondTens.style.color = 'red';
                secondOnes.style.color = 'red';
                msTens.style.color = 'red';
                msHundreds.style.color = 'red';
                clearInterval(run);
                startButton.disabled = true;
                }
            }
        }
    }

let run = 0;

function timer() {
   run = setInterval(addTime, 10);
}

const startButton = document.querySelector('.start');
startButton.onclick = function() {
    timer();
}

const resetButton = document.querySelector('.reset');
resetButton.onclick = function() {
    secondTens.textContent = 0;
    secondOnes.textContent = 0;
    msHundreds.textContent = 0;
    msTens.textContent = 0;
    secondTens.style.color = 'black';
    secondOnes.style.color = 'black';
    msTens.style.color = 'black';
    msHundreds.style.color = 'black';
    clearInterval(run);
    startButton.disabled = false;

}



