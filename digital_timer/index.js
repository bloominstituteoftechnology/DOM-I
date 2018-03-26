/*eslint-env browser*/
// variables
let msTens = document.querySelector('#msTens');
let msHuns = document.querySelector('#msHundreds');
let secOnes = document.querySelector('#secondOnes');
let secTens = document.querySelector('#secondTens');

const digits = document.querySelector(".digits"); // for red at 10s

// set times to 0
msTens.innerHTML = '0';
msHuns.innerHTML = '0';
secOnes.innerHTML = '0';
secTens.innerHTML = '0';

// timer function
timer = () => {
    if (msTens.innerHTML < 9) {
        msTens.innerHTML++;
    } else {
        msTens.innerHTML = 0;
        if (msHuns.innerHTML < 9) {
            msHuns.innerHTML++;
        } else {
            msHuns.innerHTML = 0;
            if (secOnes.innerHTML < 9) {
                secOnes.innerHTML++;
            } else {
                secOnes.innerHTML = 0;
                // clearInterval(count); // stop
                secTens.innerHTML++;
                // digits.forEach(element => {
                //     element.classList.add('redDigit');
                // })
            }
        }
    }
}

set 10ms increments
let count = setInterval(function(){ timer() }, 10);
// setTimeout(timer(), 10000);
