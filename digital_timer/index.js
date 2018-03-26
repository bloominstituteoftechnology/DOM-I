let tenMs = 0;
let hundredsMs = 0;
let oneSeconds = 0;
let tenSeconds = 0;
document.getElementById('msTens').innerHTML = tenMs;
document.getElementById('msHundreds').innerHTML = hundredsMs;
document.getElementById('secondOnes').innerHTML = oneSeconds;
document.getElementById('secondTens').innerHTML = tenSeconds;
let test = function() {
    for (i = 0; i < 1; i++) { tenMs++}
  if (tenMs === 10) {
    hundredsMs++;
    tenMs = 0;
  }
  if (hundredsMs === 10) {
    oneSeconds++;
    hundredsMs = 0;
  }
  if (oneSeconds === 10) {
    tenSeconds++;
    oneSeconds = 0;
  }
  document.getElementById('msTens').innerHTML = tenMs;
  document.getElementById('msHundreds').innerHTML = hundredsMs;
  document.getElementById('secondOnes').innerHTML = oneSeconds;
  document.getElementById('secondTens').innerHTML = tenSeconds;
  }
  setInterval(test, 10);