// set interval to 1k ms
// for loop
// Have a set interval function call
// for loop 0-10
// set interval every 1 sec
// within for loop - statement to stop the loop
// set interval, invoke cb, delay 10

let msHundreds = 0;
let msTens = 0;
let secondOnes = 0;
let secondTens = 0;

const cb = () => {
    msHundreds++;
    if (msHundreds === 10) {
        msTens++;
        msHundreds = 0;
    }
    if (msTens === 10) {
        secondOnes++;
        msTens = 0;
    }
    if (secondOnes === 10) {
        secondTens++;
        secondOnes = 0;
    }
    if (secondTens === 1) {
        let divs = document.getElementsByClassName("digit");
        for (var i = 0; i < divs.length; i++) {
            divs[i].classList.add("redDigit");
        }
        clearInterval(intervalID);
    }

}

let intervalID = setInterval(cb, 10);
