let count = 0;
let timer = setInterval(function() {
	document.getElementById('msTens').innerHTML = (++count % 10);
	document.getElementById('msHundreds').innerHTML = parseInt(count / 10);
}, 1000);

setTimeout(function () {
    clearInterval(timer);
    document.querySelectorAll('.digit').forEach(element => element.classList.add('redDigit'));
}, 10000);





