let tenMs = 0;
let hundredsMs = 0;
let oneSeconds = 0;
let tenSeconds = 0;
document.getElementById('msTens').innerHTML = tenMs;
document.getElementById('msHundreds').innerHTML = hundredsMs;
document.getElementById('secondOnes').innerHTML = oneSeconds;
document.getElementById('secondTens').innerHTML = tenSeconds;
//tenMs++;
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
if (tenSeconds === 1) {
  clearInterval(time);
  const digits = document.getElementsByClassName('digit');
  for (let i = 0; i < digits.length; i++) {
    digits[i].classList.add('redDigit');
  }
}
document.getElementById('msTens').innerHTML = tenMs;
document.getElementById('msHundreds').innerHTML = hundredsMs;
document.getElementById('secondOnes').innerHTML = oneSeconds;
document.getElementById('secondTens').innerHTML = tenSeconds;
}
let time = window.setInterval(test, 10);

// refrence 1 link 
// https://codepen.io/kyle-kauzlarich/details/VXrjBj
// refrence 2 link
// https://codepen.io/kyle-kauzlarich/pen/VXrjBj/
// refrence 3 link
// https://codepen.io/kyle-kauzlarich/pen/XEzjrW