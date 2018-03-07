let timeLeft = 0;


let timer = setInterval(function() {
document.getElementById('msTens').innerHTML = (++timeLeft % 10);
document.getElementById('msHundreds').innerHTML = parseInt(timeLeft / 10);
}, 1000);


setTimeout(function () {
    clearInterval(timer);
 document.querySelectorAll('.digit').forEach(element => element.classList.add('redDigit'));
}, 10000);