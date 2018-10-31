let clock = document.querySelectorAll('.digit');
let tensPlace = document.querySelector('#secondTens');
let onesPlace = document.querySelector('#secondOnes');
let tenthsPlace = document.querySelector('#msTens');
let hundredthsPlace = document.querySelector('#msHundreds');
let startBtn = document.querySelector('.start');

var counter = 0;

// var tenSecondTimer = setInterval(function() {
//   tensPlace.textContent = Math.floor(counter / 1000);
//   var oneSecond = counter % 1000;
//   onesPlace.textContent = Math.floor(oneSecond / 100);
//   var tenthSecond = oneSecond % 100;
//   tenthsPlace.textContent = Math.floor(tenthSecond / 10);
//   var hundredthSecond = tenthSecond % 10;
//   hundredthsPlace.textContent = Math.floor(hundredthSecond / 1);
//   counter++;

//   if(counter > 1000) {
//     clearInterval(tenSecondTimer);
//     clock.forEach(digit => digit.style.color = 'red');
//   }
// }, 10);

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