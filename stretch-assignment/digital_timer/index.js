document.getElementById('start-timer').addEventListener("click", timer, {once: true});
document.getElementById('reset-timer').addEventListener("click", reset, {once:true});


let mTens = 0;
let mHundreds = 0;
let sOnes = 0;
let sTens = 0;
function timer() {

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
            document.getElementById('reset-timer').addEventListener("click", reset, {once: true});
                clearInterval(timer);
                let redDigits = document.getElementsByClassName('digit');
                for (let i = 0; i < redDigits.length; i++) {
                    redDigits[i].classList.add('redDigit');
                };

        }

        document.getElementById('msTens').innerText = mTens;
        document.getElementById('msHundreds').innerText = mHundreds;
        document.getElementById('secondOnes').innerText = sOnes;
        document.getElementById('secondTens').innerText = sTens;
       },   10);
}

function reset(){
mTens = 0;
mHundreds = 0;
sOnes = 0;
sTens = 0;

document.getElementById('msTens').innerText = mTens;
document.getElementById('msHundreds').innerText = mHundreds;
document.getElementById('secondOnes').innerText = sOnes;
document.getElementById('secondTens').innerText = sTens;
let blackDigits = document.getElementsByClassName('digit');

for (let i = 0; i < blackDigits.length; i++) {
    blackDigits[i].classList.remove('redDigit');
};

document.getElementById('start-timer').addEventListener("click", timer, {once: true});
}
