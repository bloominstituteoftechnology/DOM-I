let tenMs = 9;
let hundredsMs = 9;
let oneSeconds = 9;
let tenSeconds = 0;
document.getElementById('msTens').innerHTML = tenMs;
document.getElementById('msHundreds').innerHTML = hundredsMs;
document.getElementById('secondOnes').innerHTML = oneSeconds;
document.getElementById('secondTens').innerHTML = tenSeconds;
tenMs++;
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