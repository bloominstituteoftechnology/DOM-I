let clock = document.querySelectorAll('.digit');
let digits = document.querySelectorAll('.digit:not(#colon)');
let tensPlace = document.querySelector('#secondTens');
let onesPlace = document.querySelector('#secondOnes');
let tenthsPlace = document.querySelector('#msTens');
let hundredthsPlace = document.querySelector('#msHundreds');
let startBtn = document.querySelector('.start');
let resetBtn = document.querySelector('.reset');

var counter = 0;

function timer() {
  tensPlace.textContent = Math.floor(counter / 1000);
  var oneSecond = counter % 1000;
  onesPlace.textContent = Math.floor(oneSecond / 100);
  var tenthSecond = oneSecond % 100;
  tenthsPlace.textContent = Math.floor(tenthSecond / 10);
  var hundredthSecond = tenthSecond % 10;
  hundredthsPlace.textContent = Math.floor(hundredthSecond / 1);
  counter++;
}

startBtn.addEventListener('click', function() {

  let tenSecondTimer = setInterval(function() {
    timer()
    
    startBtn.disabled = true;

    if(counter > 1000) {
      clearInterval(tenSecondTimer)
      clock.forEach(digit => digit.style.color = 'red');
      startBtn.disabled = false;
    }
  }, 10)
});

resetBtn.addEventListener('click', function() {
  counter = 0;
  digits.forEach(digit => digit.textContent = '-');
  clock.forEach(digit => digit.style.color = 'black');
})