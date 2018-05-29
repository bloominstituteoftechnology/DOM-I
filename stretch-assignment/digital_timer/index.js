let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');


let timer = function(){

    setInterval (function() {

        //Quite the timer if we get to 10 seconds
        if (secondTens.innerHTML === '1') {
            let digitArr = document.querySelectorAll('.digit');
            digitArr.forEach( cv => cv.setAttribute('style','color:red'))
            return;
        }

        if (msTens.innerHTML === '-') {
            msTens.innerHTML = 0;
        } else if (msTens.innerHTML == '9'){
            msTens.innerHTML = 0;
            incrementByDigit(msHundreds,5, secondOnes);
        }else {
            ++msTens.innerHTML
        }
    },10)
}

function incrementByDigit(digit, carryOver, nextDigit){
    if (digit.innerHTML === '-') {
        digit.innerHTML = 1;
    } else if (digit.innerHTML == carryOver){
        digit.innerHTML = 0;
        incrementByDigit(nextDigit,9,secondTens)
    }else {
        ++digit.innerHTML
    }
}
