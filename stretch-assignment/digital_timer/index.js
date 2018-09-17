let startButton = document.getElementById('start-timer');
let resetButton = document.getElementById('reset-timer');
let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');

startButton.addEventListener("click", timer, {once: true});



let mTens = 0;
let mHundreds = 0;
let sOnes = 0;
let sTens = 0;



function timer() {
  document.getElementById('start-timer').classList.add('inactive-button');

    let timer = setInterval(function(){

        mTens += 1;

        if (mTens > 9){
            mHundreds += 1;
            mTens = 0;
        };

        if (mHundreds > 9){
            sOnes += 1;
            mHundreds = 0;
        };

        if (sOnes > 9) {
            sTens += 1;
            sOnes = 0;
        };


        if (sTens === 1){
            mTens = 0;
            resetButton.addEventListener("click", reset, {once: true});
                clearInterval(timer);
                let redDigits = document.getElementsByClassName('digit');
                for (let i = 0; i < redDigits.length; i++) {
                    redDigits[i].classList.add('redDigit');
                };
                resetButton.classList.remove('inactive-button'); 
        }

        msTens.innerText = mTens;
        msHundreds.innerText = mHundreds;
        secondOnes.innerText = sOnes;
        secondTens.innerText = sTens;
       },   10);
}

function reset(){
  clearInterval(timer);
mTens = 0;
mHundreds = 0;
sOnes = 0;
sTens = 0;

msTens.innerText = mTens;
msHundreds.innerText = mHundreds;
secondOnes.innerText = sOnes;
secondTens.innerText = sTens;
let blackDigits = document.getElementsByClassName('digit');

for (let i = 0; i < blackDigits.length; i++) {
    blackDigits[i].classList.remove('redDigit');
};

startButton.addEventListener("click", timer, {once: true});
startButton.classList.remove('inactive-button');
resetButton.classList.add('inactive-button');

}
