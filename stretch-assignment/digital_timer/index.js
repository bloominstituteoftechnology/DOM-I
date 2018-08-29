const countDown = (seconds) => {
  start.setAttribute('disabled', true);
  reset.setAttribute('disabled', true);
  let counter = seconds * 100;

  let count = setInterval(() => {

  // convert to string and split to display numbers
  resArr = counter.toString().split('');

  // set each div id to a part in the array output
  if (counter > 1000) {
    secondTens.innerHTML = resArr[0];
    secondOnes.innerHTML = resArr[1];
    msHundreds.innerHTML = resArr[2];
    msTens.innerHTML = resArr[3];
  }
  if (counter < 1000) {
    secondTens.innerHTML = 0;
    secondOnes.innerHTML = resArr[0];
    msHundreds.innerHTML = resArr[1];
    msTens.innerHTML = resArr[2];
  }
  if (counter < 100) {
    secondTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    msHundreds.innerHTML = resArr[0];
    msTens.innerHTML = resArr[1];
  }
  counter = counter - 1;

  if (counter === 10) {
    secondTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    msHundreds.innerHTML = 0;
    msTens.innerHTML = 0;
    alert('Time is Up');
    reset.removeAttribute('disabled');
    return clearInterval(count);
  }
}, 10);

}
// set the javascript id for each div
const setDigitId = (id) => {
  this.id = document.getElementById(id);
  return this.id;
}

setDigitId(secondTens);
setDigitId(secondOnes);
setDigitId(colon);
setDigitId(msHundreds);
setDigitId(msTens);

const resetCounter = () => {
  start.removeAttribute('disabled');
}
// append a div to body ---container for buttons---
const buttonDiv = document.createElement('div');
buttonDiv.setAttribute('id', 'buttons');
    // put body element in javascript variable
    document.body.appendChild(buttonDiv);
// create button
const digits = document.getElementsByClassName('digits')[0];
const button = document.createElement('button');
button.innerHTML = 'Start Timer';
button.setAttribute('onClick', `countDown(10)`);
button.setAttribute('id', 'start');
button.setAttribute('class', 'button');
buttonDiv.appendChild(button);
setDigitId(start);

// create reset button
const resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset Timer';
resetButton.setAttribute('onClick', 'resetCounter()');
resetButton.setAttribute('id', 'reset');
resetButton.setAttribute('class', 'button');
buttonDiv.appendChild(resetButton);
setDigitId(reset);

// create input to add seconds to Timer
const input = document.createElement('input');
digits.appendChild(input);
input.setAttribute('id','seconds');
// set to none to hide for now
input.style.display = 'none';
// create a function to take input in seconds and return countDown
const inputVal = () => {
  console.log(input.value);
  return countDown(input.value);
}


// change styles
document.body.style['flex-direction'] = 'column';
digits.style.background = 'lightgray';
digits.style.padding = '2% 1%';
buttonDiv.style.margin = '2% 1%';
buttonDiv.style.display = 'flex';
buttonDiv.style['flex-direction'] = 'column';
