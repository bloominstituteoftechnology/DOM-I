const digits = document.querySelector('.digits');
const secondTens = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');

function initialize() {
    secondTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    msTens.innerHTML = 0;
    msHundreds.innerHTML = 0;
}

initialize();