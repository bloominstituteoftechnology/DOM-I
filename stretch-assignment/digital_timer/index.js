let counter = 10;

const msTens = document.getElementById('msTens');
const msHundreds = document.getElementById('msHundreds');
const secondOnes = document.getElementById('secondOnes');
const secondTens = document.getElementById('secondTens');
msHundreds.textContent = 1;
secondOnes.textContent = 0;
secondTens.textContent = 0;
msTens.textContent = 0;
function timer() {
    counter--
    msHundreds.textContent = 0;
    if(counter < 0){
        msHundreds.textContent = 1;
        counter = 10;
        console.log('Done');
    } else {
        msTens.textContent = counter;
    }
}

setInterval(timer, 1000)