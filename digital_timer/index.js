let timeLeft = 0;

let timer = setInterval(function() {
document.getElementById('msTens').innerHTML = (++timeLeft % 10);
document.getElementById('msHundreds').innerHTML = parseInt(timeLeft / 10);
}, 1000);


setTimeout(function () {
    clearInterval(timer);
  document.getElementById('msTens').style.color = "red";
  document.getElementById('msHundreds').style.color = "red";
}, 10000);