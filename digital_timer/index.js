// Sherria's Code

window.onload = function startTimer() {
    const digitSelector = document.getElementsByClassName('digit');
    const secondTen = digitSelector[0];
    const secondOne = digitSelector[1];
    const colon = digitSelector[2];
    const msHundred = digitSelector[4]
    const msTen = digitSelector[3];
    console.log(secondTen);

       
    let milliSec = 0;
    secondTen.innerHTML = "0";
    secondOne.innerHTML = "0";
    msHundred.innerHTML = "0";
    msTen.innerHTML = "0";

        const digitalTimer = setInterval (() => {
            milliSec += 10;
            if (milliSec === 10000) {
               endTimer(digitalTimer); 
            }
            updateTimer(milliSec);
        }, 10);
     

        function increment (string) {
            let number = Number(string) + 1;
            return number.toString();
        }
     
        function endTimer (stopId) {
            clearInterval(stopId);
            Array.from(digitSelector).forEach(digit => {
                digit.classList.add("redDigit");
            })
        }

        function updateTimer (milliSec) {
           if(milliSec === 10000) {
              secondTen.innerHTML = "1";
              secondOne.innerHTML = "0";
              msHundred.innerHTML ="0";
              msTen.innerHTML = "0";
           } else if (milliSec % 1000 === 0) {
               secondOne.innerHTML = increment(secondOne.innerHTML);
               msHundred.innerHTML = "0";
               msTen.innerHTML = "0";
           } else if (milliSec % 100 === 0) {
               msHundred.innherHTML = increment(msHundred.innerHTML);
               msTen.innerHTML = "0";
           } else {
               msTen.innerHTML = increment(msTen.innerHTML);
           }
        }
           
    }
        
// Justin's code

window.onload = function startTimer() {
    const digitSelector = document.getElementsByClassName('digit');
    const secondTen = digitSelector[0];
    const secondOne = digitSelector[1];
    const colon = digitSelector[2];
    const msHundred = digitSelector[4]
    const msTen = digitSelector[3];
    console.log(secondTen);

       
    let milliSec = 0;
    secondTen.innerHTML = "0";
    secondOne.innerHTML = "0";
    msHundred.innerHTML = "0";
    msTen.innerHTML = "0";

    (function init(){
        msTen.innerHTML = "0";
        msHundred.innerHTML = "0";
        secondOne.innerHTML = "0";
        secondTen.innerHTML = "0";
    }());

    let myInt = function() {
        if (msHundred.innerHTML === "9") {
            msHundred.innerHTML = "0";
            incrementMsTens();
        } else msHundred.innerHTML = ++msHundred.innerHTML;
    };

    var go = setInterval( function(){ myInt()}, 10);

    function incrementMsTens(){
        if(msTen.innerHTML === "9") {
            msTen.innerHTML = "0";
            incrementSecondsOnes();
        } else msTen.innerHTML = ++msTen.innerHTML;
        //every 10th second increment
    }

    function incrementSecondsOnes(){
        //every second increment
        if(secondOne.innerHTML === "9") {
            secondOne.innerHTML = "0";
            incrementSecondsTens();
        } else secondOne.innerHTML = ++secondOne.innerHTML;
    }

    function incrementSecondsTens(){
        //every 10 seconds increment
        secondTen.innerHTML = "1";
        clearInterval(go);
        msHundred.style.color = "red";
        msTen.style.color = "red";
        secondTen.style.color = "red";
        secondOne.style.color = "red";
        colon.style.color = "red";
    }
}
