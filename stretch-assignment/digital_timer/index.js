/*

  Timer Stretch
  Bernard Johnson
  10/30/2018

  Variable and Data Set Up

*/
//Reset Colon color
document.querySelector('#colon').style.color = 'black';

//Digit selectors
let first = document.querySelector('#secondTens');
let second = document.querySelector('#secondOnes');
let third = document.querySelector('#msHundreds');
let last = document.querySelector('#msTens');

//Counter variables
let countMsT = 0;
let countMsH = 0;
let countS1 = 0;
let countS10 = 0;

//Working arrays of variables
const arr = [first, second, third, last];
const countArr = [countMsT, countMsH, countS1, countS10];

//timer box variable
let timerBox = document.querySelector('.timerBox');

/*

  Functions Set Up

*/


//changes timer digit color
function colorChange(color, arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i].style.color = color;
  }
}

//changes box theme color
function boxColorChange(color) {
  timerBox.style.border = `5px ridge ${color}`;
  timerBox.style.boxShadow = `0px 0px 12px 6px ${color}`;
}

//Basic Timer Function
function timer() {
  if(last.innerText === '9') {
    //milliseconds hundreds reset
    countMsT = -1;

    if(third.innerText === '9') {
      //milliseconds tens reset
      countMsH = -1;

      if(second.innerText === '9') {
        //seconds reset
        countS1 = -1;

        //seconds tens counter and update
        countS10++;

        first.innerText = countS10;

        //End timer <-----------------------------------------------------
        if(first.innerText === '1') {
          //Stop Timer and Change to Red Theme
          timerStop();
        }
      }
      //seconds counter and update
      countS1++;
      second.innerText = countS1;

      //Yellow timer Warning
      if(countS1 === 7) {
        //Change to Yellow Theme
        colorChange('GoldenRod', arr);
        boxColorChange('GoldenRod');
      }
    }

    //milliseconds hundreds counter and update
    countMsH++;
    third.innerText = countMsH;
  }

  //milliseconds tens counter and update
  countMsT++;
  last.innerText = countMsT;
}


//Stop timer at 10s
function timerStop() {
  //adjust timer color
  colorChange('red', arr);
  boxColorChange('red');
  clearInterval(interval)
}

//Start timer button
let interval;

function timerStart() {
  colorChange('green', arr);
  interval = setInterval(timer, 10);
}

let startBtn = document.querySelector('button');
startBtn.addEventListener('click', timerStart)

//Reset Timer button
function timerReset() {
  clearInterval(interval);
  for(let i = 0; i < arr.length; i++) {
    arr[i].innerText = '-';
    arr[i].style.color = 'black';
  }
  boxColorChange('green');
  countS10 = 0;
}

let resetBtn = document.querySelector('button:nth-child(2)');
resetBtn.addEventListener('click', timerReset);
