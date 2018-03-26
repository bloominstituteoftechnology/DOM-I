let counter = 0;

let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');

let timer = window.setInterval( () => {
    if (counter < 10) {
        document.getElementById('msHundreds').innerHTML = counter;
        counter++;
    } else {
        clearInterval(timer);
    }
}, 10);





// document.querySelector('.digits').style.color = 'red';
