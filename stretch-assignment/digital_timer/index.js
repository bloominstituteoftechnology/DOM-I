let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');

let digitArr = document.querySelectorAll('.digit');

let startBtn = document.querySelector('.start')
let resetBtn = document.querySelector('.reset')

var intervalID;

//Main Timer Function
let startTimer = function(){
    
    //Initialize values to zero;
    resetTimer()

    //Disable the start Button
    startBtn.disabled = true;
    startBtn.setAttribute('style', 'cursor:not-allowed')
    
    //Interval function that will run the timer
    intervalID = setInterval (function() {        

        // if the first digit gets to 1 make it all red and exit the timer
        if (secondTens.innerHTML === '1') {
            digitArr.forEach( cv => cv.setAttribute('style','color:red'))
            return;
        }

        //Increment the LSB and when carryover is reached call incrementByDigit
        if (msTens.innerHTML === '-') {
            msTens.innerHTML = 0;
        } else if (msTens.innerHTML == '9'){
            msTens.innerHTML = 0;
            incrementByDigit(msHundreds, secondOnes);
        }else {
            ++msTens.innerHTML
        }
    },10)
}

//Almost fully recursive
function incrementByDigit(digit, nextDigit){
    if (digit.innerHTML === '-') {
        digit.innerHTML = 1;
    } else if (digit.innerHTML == 9){
        digit.innerHTML = 0;
        incrementByDigit(nextDigit,secondTens)
    }else {
        ++digit.innerHTML
    }
}


//Reset Timer Function
let resetTimer = function(){
    clearInterval(intervalID);

    //Change all color to black and change all char to 0 except the colon
    digitArr.forEach( cv => {
        cv.setAttribute('style','color:black');
        if (cv.getAttribute('id') !== 'colon' ) cv.innerHTML = '0';
    })

    //Re-enable the buttons
    startBtn.disabled = false;
    startBtn.setAttribute('style', 'cursor:allowed')
    
}


//Grab the Button parent div
let butDiv = document.querySelector('.buttons');

//Add Event Listeners
butDiv.addEventListener('click', function(e){
    e.stopPropagation();
    if (e.target.innerHTML === 'Reset') {
        resetTimer()
    }
    else if (e.target.innerHTML === 'Start!') {
        startTimer()
    }

})

