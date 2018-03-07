let timeLeft = 0;


let timer = setInterval(function() {
document.getElementById('msTens').innerHTML = (++timeLeft % 10);
document.getElementById('msHundreds').innerHTML = parseInt(timeLeft / 10);
}, 1000);


setTimeout(function () {
    clearInterval(timer);
    document.getElementById('msTens').classList.add('redDigit');
    document.getElementById('msHundreds').classList.add('redDigit');
}, 10000);