let tens = setInterval(addTens, 10);

document.getElementById('msTens').innerHTML = 0

function addTens() {
    (document.getElementById('msTens').innerHTML)++;
}

let hundreds = setInterval(addHundreds, 100);

document.getElementById('msHundreds').innerHTML = 0

function addHundreds() {
    (document.getElementById('msHundreds').innerHTML)++;
}