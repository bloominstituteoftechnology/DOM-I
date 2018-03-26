const digits = document.getElementsByClassName('digit');
const secTen = document.getElementById('secondTens');
const secOne = document.getElementById('secondOnes');
const colon = document.getElementById('colon');
const msHun = document.getElementById('msHundreds');
const msTen = document.getElementById('msTens');
const myButton = document.getElementById('button');

myButton.addEventListener('click', timer);

let counter = 0;
let counts = '';


function timer() {
    msTen.innerHTML = `-`;
    msHun.innerHTML = `-`;
    secOne.innerHTML = `-`;
    secTen.innerHTML = `-`;
    counter = 0;
    for (let i = 0; i < digits.length; i++) {
        digits[i].style.color = 'black';
    }

    myButton.disabled = true;
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
            myButton.disabled = false;
            for (let i = 0; i < digits.length; i++) {
                digits[i].style.color = 'red';
            }

            // msTen.style.color = 'red';
            // msHun.style.color = 'red';
            // colon.style.color = 'red';
            // secOne.style.color = 'red';
            // secTen.style.color = 'red';
        }
    }
}
