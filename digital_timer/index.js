const msHundreds = document.getElementById('msHundreds'),
    msTens = document.getElementById('msTens'),
    secondOnes = document.getElementById('secondOnes'),
    secondTens = document.getElementById('secondTens'),
    digitsClass = document.getElementsByClassName('digits');

let counter = 0;

const digitalTimer = () => {

    counter++;

    const counterArr = counter.toString().split('');

    msHundreds.innerText = counterArr[counterArr.length - 1];
    msTens.innerText = counterArr[counterArr.length - 2];
    secondOnes.innerText = counterArr[counterArr.length - 3];
    secondTens.innerText = counterArr[counterArr.length - 4];

}

setInterval(digitalTimer, 10);
