let timer = document.getElementsByClassName('digit');

let milliTens = document.getElementById('msTens');

let milliHundreds = document.getElementById('msHundreds');

let secondOnes = document.getElementById('secondOnes');

let secondTens = document.getElementById('secondTens');

milliTens.textContent = 0;
milliHundreds.textContent = 0;
secondOnes.textContent = 0;
secondTens.textContent = 0;

timer = Array.from(timer);


window.setInterval(function() {
    console.log('testing');
    timer.forEach(item => {
        item.style.color = 'red';
    })
}, 10000);