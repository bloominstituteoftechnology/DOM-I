let counter = 0;

const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');
const secondOnes = document.getElementById('secondOnes');
const secondTens = document.getElementById('secondTens');
msHundreds.textContent = 0;
secondOnes.textContent = 0;
secondTens.textContent = 0;
msTens.textContent = 0;
function timer() {
    counter++
    if(counter < 10){
        secondOnes.textContent = counter;
    } else if (counter = 10) {
        secondOnes.textContent = 0;
        secondTens.textContent = 1;
        secondOnes.classList.add('redDigit')
        secondTens.classList.add('redDigit')
    }
}
let counter2 = 0
function timer2() {
    counter2++
    if(counter2 > 9){
        counter2 = 0;
    } else if (counter === 10) {
        msHundreds.textContent = 0
    } else {
        msHundreds.textContent = counter2;
    }
}

let counter3 = 0
function timer3() {
    counter3++;
    if(counter3 > 9){
        counter3 = 0;
    } else if (counter === 10) {
        msTens.textContent = 0
    } else {
        msTens.textContent = counter3;
    }
}
setInterval(timer3, 10)
setInterval(timer2, 100)
setInterval(timer, 1000)