let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');
let digitArr = document.querySelectorAll('.digit');

let startBtn = document.querySelector('.start')
let resetBtn = document.querySelector('.reset')

//Main Timer Function
let timer = function(){
    console.log('start button clicked!')

    //Interval function that will run the timer
    setInterval (function() {

        //Quite the timer if we get to 10 seconds
        startBtn.disabled = true;
        startBtn.setAttribute('style', 'cursor:not-allowed')

        // if the first digit gets to 1 make it all red
        if (secondTens.innerHTML === '1') {
            digitArr.forEach( cv => cv.setAttribute('style','color:red'))
            return;
        }

        //Increment the LSB and when carryover is reached call incrementByDigit
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

//Almost fully recursive
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


//Reset Timer Function
let resetTimer = function(){
    console.log('reset button clicked!')
    digitArr.forEach( cv => {
        cv.setAttribute('style','color:black');
        if (cv.getAttribute('id') !== 'colon' ) cv.innerHTML = '0';
    })
    startBtn.disabled = false;
}


//Grab the Button parent div
let butDiv = document.querySelector('.buttons');

//Add Event Listeners
butDiv.addEventListener('click', function(e){
    e.stopPropagation();
    console.log(e);
    if (e.target.innerHTML === 'Reset') {
        resetTimer()
    }
    else if (e.target.innerHTML === 'Start!') {
        timer()
    }

})

