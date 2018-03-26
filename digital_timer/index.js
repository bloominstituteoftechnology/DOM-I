const digits = document.getElementsByClassName('digit');
const secTen = document.getElementById('secondTens');
const secOne = document.getElementById('secondOnes');
const colon = document.getElementById('colon');
const msHun = document.getElementById('msHundreds');
const msTen = document.getElementById('msTens');
const startbtn = document.getElementById('start');
const resetbtn = document.getElementById('reset');

startbtn.addEventListener('click', timer);
resetbtn.addEventListener('click', reset);
let counter = 0;
let counts = '';
let ready = true;


function timer() {
    if (ready) {
        resetbtn.disabled = true;
        startbtn.disabled = true;
        let interval = window.setInterval(myFunc, 10);

        function myFunc() {
            counter += 10;
            let counts = counter.toString();

            while (counts.length < 5) {
                counts = '0' + counts;
            }

            msTen.innerHTML = `${counts[3]}`;
            msHun.innerHTML = `${counts[2]}`;
            secOne.innerHTML = `${counts[1]}`;
            secTen.innerHTML = `${counts[0]}`;
            if (counter === 10000) {
                window.clearInterval(interval);
                resetbtn.disabled = false;
                for (let i = 0; i < digits.length; i++) {
                    digits[i].style.color = 'red';
                }
                ready = false;
                // msTen.style.color = 'red';
                // msHun.style.color = 'red';
                // colon.style.color = 'red';
                // secOne.style.color = 'red';
                // secTen.style.color = 'red';
            }
        }
    }
}

function reset() {
    msTen.innerHTML = `0`;
    msHun.innerHTML = `0`;
    secOne.innerHTML = `0`;
    secTen.innerHTML = `0`;
    counter = 0;
    ready = true;
    startbtn.disabled = false;
        
    for (let i = 0; i < digits.length; i++) {
        digits[i].style.color = 'black';
    }
}