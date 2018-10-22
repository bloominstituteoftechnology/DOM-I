// document.querySelector('#secondTens').textContent = '5';
// document.querySelector('#secondOnes').innerContent = '5';

let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundrends = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');

let secTen = 0;
let secOne = 0;
let msT = 0;
let msH = 0;

function timer() {
    if (msT <= 0) {
        let timerOff = setInterval(() => {
            msT++
            if (msT >= 10) {
                msH++;
                msT = 0;

            }
            if (msH >= 10) {
                secOne++;
                msH = 0;

            }
            if (secOne >= 10) {
                secTen++;
                secOne = 0;

            }
            if (secTen >= 1) {
                msTens.style.color = 'red';
                msHundrends.style.color = 'red';
                secondTens.style.color = 'red';
                secondOnes.style.color = 'red';
            }
            // if (secTen >= 10) clearInterval(timerOff)

            msTens.textContent = msT;
            msHundrends.textContent = msH;
            secondTens.textContent = secTen;
            secondOnes.textContent = secOne;

        }, 10)
    }
}

timer();

//console.log(secondTens);