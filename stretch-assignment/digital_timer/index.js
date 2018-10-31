/*

  Timer Stretch

*/

let first = document.querySelector('#secondTens');
let second = document.querySelector('#secondOnes');
let third = document.querySelector('#msHundreds');
let last = document.querySelector('#msTens');

const arr = [first, second, third, last];

let countMsT = 0;
let countMsH = 0;

let countS1 = 0;
let countS10 = 0;


//Basic Timer Function
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

        //End timer <-----------------------------------------------------
        if(first.innerText === '1') {
          timerStop();
        }
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

//Start timer
let interval = setInterval(timer, 10);

//Stop timer
function timerStop() {
  //adjust timer color
  for(let i = 0; i < arr.length; i++) {
    arr[i].style.color = 'red';
  }
  clearInterval(interval)
}
