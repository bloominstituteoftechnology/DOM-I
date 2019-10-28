var start = Date.now();
setInterval(function() {
    let current = (Date.now() - start) / 10; // milliseconds elapsed since start, removed unneeded zero
    let ms = Math.floor(current % 10);
    let msHundred = Math.floor(current / 10) % 10;
    let s = Math.floor(current / 100) % 10;
    let sTen = Math.floor(current / 1000) % 10
    if (current < 1001) {
      document.getElementById('msTens').textContent = ms;
      document.getElementById('msHundreds').textContent = msHundred;
      document.getElementById('secondOnes').textContent = s;
      document.getElementById('secondTens').textContent = sTen;
    } 
    if (sTen > 0) {
      document.querySelectorAll('.digit').forEach(num => num.style.color = 'red');
    }
}, 10);