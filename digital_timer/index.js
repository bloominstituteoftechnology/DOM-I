let ms = 0;
const LIMIT = 10000;

function startTimer() {
  ms = 0;
  document.querySelector('.digits').style = 'color: black;'
  document.getElementById('secondTens').innerHTML = 0;
  document.getElementById('secondOnes').innerHTML = 0;
  document.getElementById('msHundreds').innerHTML = 0;
  document.getElementById('msTens').innerHTML = 0;
  myStartButton.style.background = 'lightgray';
  myStartButton.disabled = true;

  function incrementTimer() {    
    ms += 10;

    document.getElementById('secondTens').innerHTML = parseInt((ms / 10000) % 10)
    document.getElementById('secondOnes').innerHTML = parseInt((ms / 1000) % 10)
    document.getElementById('msHundreds').innerHTML = parseInt((ms / 100) % 10)
    document.getElementById('msTens').innerHTML = parseInt((ms / 10) % 10)

    if (ms === LIMIT) {
      clearInterval(msTimer);
      document.querySelector('.digits').style = 'color: red;'
      myResetButton.style.backgroundColor = 'wheat';
      myResetButton.disabled = false;
    }
  }

  let msTimer = setInterval(incrementTimer, 10);
}

function resetTimer() {
  ms = 0;
  document.querySelector('.digits').style = 'color: black;'
  document.getElementById('secondTens').innerHTML = 0;
  document.getElementById('secondOnes').innerHTML = 0;
  document.getElementById('msHundreds').innerHTML = 0;
  document.getElementById('msTens').innerHTML = 0;
  myStartButton.style.backgroundColor = 'wheat';
  myStartButton.disabled = false;
  myResetButton.style.backgroundColor = 'lightgray'
  myResetButton.disabled = true;
}

document.body.style.flexDirection = 'column';

const myStartButton = document.createElement('button');
myStartButton.innerHTML = 'Start';
myStartButton.onclick = startTimer;
myStartButton.style = 'margin: 10px; width: 100px; height: 30px; background-color: wheat; border: 2px solid black; border-radius: 25px;'
document.body.appendChild(myStartButton);

const myResetButton = document.createElement('button');
myResetButton.innerHTML = 'Reset';
myResetButton.disabled = true;
myResetButton.onclick = resetTimer;
myResetButton.style = 'margin: 10px; width: 100px; height: 30px; background-color: lightgray; border: 2px solid black; border-radius: 25px;'
document.body.appendChild(myResetButton);