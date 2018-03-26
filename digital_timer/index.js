const digits = document.getElementsByClassName('digit');
const secTen = document.getElementById('secondTens');
const secOne = document.getElementById('secondOnes');
const msHun = document.getElementById('msHundreds');
const msTen = document.getElementById('msTens');
let counter = 0;
let counts = '';


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
        digits.style.color = 'red';
    }
}

