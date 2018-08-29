const countDown = (seconds) => {
  let counter = seconds * 100;

  let count = setInterval(() => {

  // convert to string and split to display numbers
  resArr = counter.toString().split('');

  // set each div id to a part in the array output
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


// create button
const digits = document.getElementsByClassName('digits')[0];
const button = document.createElement('button');
button.innerHTML = 'Start Timer';
button.setAttribute('onClick', `countDown(seconds)`);
digits.appendChild(button);
