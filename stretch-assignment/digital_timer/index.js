/*

  Timer Stretch

*/

let first = document.querySelector('#secondTens');
let second = document.querySelector('#secondOnes');
let third = document.querySelector('#msHundreds');
let last = document.querySelector('#msTens');

let countMsT = 0;
let countMsH = 0;

let countS1 = 0;
let countS10 = 0;

function timer() {

  if(last.innerText === '9') {
    //milliseconds tens reset
    countMsT = -1;

    if(third.innerText === '9') {
      //milliseconds hundreds reset
      countMsH = -1;

      if(second.innerText === '9') {
        //seconds reset
        countS1 = -1;
        //seconds tens counter and update
        countS10++;
        first.innerText = countS10;

      }
      //seconds counter and update
      countS1++;
      second.innerText = countS1;
    }

    //milliseconds hundreds counter and update
    countMsH++;
    third.innerText = countMsH;
  }

  //milliseconds tens counter and update
  countMsT++;
  last.innerText = countMsT;
}

setInterval(timer, 10);
