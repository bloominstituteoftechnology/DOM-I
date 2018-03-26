let counter = 0;
let msHun = 0;
let msTen = 0;
let second = 0;


let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');

let timer = window.setInterval(() => {
    // keeps track of time in ms
    // if (counter % 1000 === 0) {
    //     document.getElementById('secondsOnes').innerHTML = counter;
    //     counter++;
    // } else if (counter % 100 === 0) {
    //     document.getElementById('msTens').innerHTML = counter;
    //     counter++;
    // } else if (counter % 10 === 0) {
    //     document.getElementById('msHundreds').innerHTML = counter;
    //     counter++;
    // } else {
    //     clearInterval(timer);
    // }

    if (counter !== 1001) {
        if (counter % 100 === 0) {
            document.getElementById('secondOnes').innerHTML = second;
            second++
            if (second === 10) {
                document.querySelector('#secondTens').style.display = 'none';
                document.querySelector('.digits').style.color = 'red';
                return second;
            }
        } else if (counter % 10 === 0) {
            document.getElementById('msTens').innerHTML = msTen;
            msTen++
            if (msTen === 10) {
                msTen = 1;
            }
        }
        // document.getElementById('msHundreds').innerHTML = counter;
        // document.getElementById('msTens').innerHTML = counter;
        // document.getElementById('secondOnes').innerHTML = counter;
        counter++;
    }
}, 10);
