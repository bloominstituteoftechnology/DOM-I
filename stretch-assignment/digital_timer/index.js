let tensPlace = document.querySelector('#secondTens');
let onesPlace = document.querySelector('#secondOnes');
let tenthsPlace = document.querySelector('#msTens');
let hundredthsPlace = document.querySelector('#msHundreds');



var counter = 0;
var tenSecondTimer = setInterval(function() {
  tensPlace.textContent = Math.floor(counter / 1000);
  var oneSecond = counter % 1000;
  onesPlace.textContent = Math.floor(oneSecond / 100);
  var tenthSecond = oneSecond % 100;
  tenthsPlace.textContent = Math.floor(tenthSecond / 10);
  var hundredthSecond = tenthSecond % 10;
  hundredthsPlace.textContent = Math.floor(hundredthSecond / 1);
  counter++;

  if(counter > 1000) {
    clearInterval(tenSecondTimer)
  }
}, 10);

