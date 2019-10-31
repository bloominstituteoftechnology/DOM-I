let time = 0;

let counter;

const secondTens = document.querySelector('#secondTens');
const secondOnes = document.querySelector('#secondOnes');
const msHunds = document.querySelector('#msHundreds');
const msTens = document.querySelector('#msTens');
const startButton = document.querySelector('.startButton');
const resetButton = document.querySelector('.resetButton');
const digits = document.querySelector('.digits');

function displayTime() {
    time +=10;
    let timeArray = time.toString().split('');
    msTens.textContent = timeArray[timeArray.length-2];
    if(timeArray.length >=3){
        msHunds.textContent = timeArray[timeArray.length-3]
    }
    if(timeArray.length >=4){
        secondOnes.textContent = timeArray[timeArray.length-4];
    }


if(timeArray.length >= 5){
    msTens.textContent = 0;
    msHunds.textContent = 0;
    secondOnes.textContent = 0;
    secondTens.textContent = 1;
    digits.style.color = 'red';
    clearInterval(counter);
    }
}

startButton.addEventListener("click", startTimer);
function startTimer (){
    counter = setInterval( displayTime ,10);
    startButton.disabled = true;
}

resetButton.addEventListener("click",resetTimer);
function resetTimer(){
    clearInterval(counter);
    time = 0;
    digits.style.color = 'black';
    msTens.textContent = '-';
    msHunds.textContent = '-';
    secondOnes.textContent = '-';
    secondTens.textContent = '-';
    startButton.disabled = false;
}

const body = document.querySelector('body');
body.style.flexDirection = 'column';
startButton.style.height = '40px';
startButton.style.width = '80px';
resetButton.style.height = '40px';
resetButton.style.width = '80px';
startButton.style.border = '1px solid black';
resetButton.style.border = '1px solid black';
startButton.style.borderRadius = '15px';
resetButton.style.borderRadius = '15px';
startButton.style.fonSize = '1.6rem';
resetButton.style.fontsize = '1.6rem';

const digitContainer = document.querySelector('body div');
digitContainer.style.border = '2px solid black';
digitContainer.style.borderRadius = '30px';
digitContainer.style.marginBotton = '15px';


