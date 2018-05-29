let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');



let timer = function(){
    setInterval (function() {
        console.log(msTens.innerHTML, 'initial');
        console.log(typeof(msTens.innerHTML), 'type of initial');
        if (msTens.innerHTML === '-') {
            msTens.innerHTML = 0;
        } else if (msTens.innerHTML == '9'){
            msTens.innerHTML = 0;
            incrementByDigit(msHundreds,5);
        }else {
            ++msTens.innerHTML
            console.log(msTens.innerHTML, 'final');
        }
    },100)
}

function incrementByDigit(digit, carryOver){
    if (digit.innerHTML === '-') {
        digit.innerHTML = 1;
    } else if (digit.innerHTML == carryOver){
        digit.innerHTML = 0;
        incrementByDigit(secondOnes,9)
    }else {
        ++digit.innerHTML
        console.log(digit.innerHTML, 'final');
    }
}
