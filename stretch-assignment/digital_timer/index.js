//create start button
const startButton = document.createElement('button');
startButton.textContent = 'Start';
//create reset button 
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';

//create new div for button(s)
const buttonDiv = document.createElement('div');

//pointers to html
const body = document.getElementsByTagName('body')[0];
let msTensHTML = document.getElementById('msTens');
let msHundredsHTML = document.getElementById('msHundreds');
let secondOnesHTML = document.getElementById('secondOnes');
let secondTensHTML = document.getElementById('secondTens');
let digits = document.querySelectorAll('.digit');
const colon = document.getElementById('colon');

//add buttonDiv to body
body.appendChild(buttonDiv);
//add startButton to buttonDiv
buttonDiv.appendChild(startButton);
//add resetButton to buttonDiv
buttonDiv.appendChild(resetButton);

//styles for usability
body.style.display = 'flex';
body.style.flexWrap = 'wrap';
body.style.textAlign = 'center';
buttonDiv.style.width = "100%";
startButton.style.marginRight = '5%';

//timer function is defined within event listener
startButton.addEventListener('click', () => {
  digits.forEach(num => num.style.color = 'black');
  startButton.disabled = true;
  //used Date to account for browser lag
  const startTime = Date.now();
  timer = setInterval(function() {
    // milliseconds elapsed since start, removed unneeded zero
    let current = (Date.now() - startTime) / 10;
    //set variables with value for each digit
    let msTens = Math.floor(current % 10);
    let msHundreds = Math.floor(current / 10) % 10;
    let secondOnes = Math.floor(current / 100) % 10;
    let secondTens = Math.floor(current / 1000) % 10
    if (current < 1001) {
      msTensHTML.textContent = msTens;
      msHundredsHTML.textContent = msHundreds;
      secondOnesHTML.textContent = secondOnes;
      secondTensHTML.textContent = secondTens;
    } 
    if (secondTens > 0) {
      digits.forEach(num => num.style.color = 'red');
      startButton.disabled = false;
      return clearInterval(timer);
    }
}, 10)
});

resetButton.addEventListener('click', () => {
  startButton.disabled = false;
  digits.forEach(num => {
    num.style.color = 'black';
    num.textContent = 0;
  })
  colon.textContent = ':';
  return clearInterval(timer);
});