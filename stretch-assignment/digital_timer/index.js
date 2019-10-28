//create start button
const startButton = document.createElement('button');
startButton.textContent = 'Start!';
//point to body
const body = document.getElementsByTagName('body')[0];
//create new div for button(s)
const buttonDiv = document.createElement('div');

body.style.display = 'flex';
body.style.flexWrap = 'wrap';
body.style.textAlign = 'center';
buttonDiv.style.width = "100%"
//add buttonDiv to body
body.appendChild(buttonDiv);
//add startButton to buttonDiv
buttonDiv.appendChild(startButton);


//used Date to account for browser lag


const timer = () => {
  const startTime = Date.now();
  setInterval(function() {
    let current = (Date.now() - startTime) / 10; // milliseconds elapsed since start, removed unneeded zero
    let msTens = Math.floor(current % 10);
    let msHundreds = Math.floor(current / 10) % 10;
    let secondOnes = Math.floor(current / 100) % 10;
    let secondTens = Math.floor(current / 1000) % 10
    if (current < 1001) {
      document.getElementById('msTens').textContent = msTens;
      document.getElementById('msHundreds').textContent = msHundreds;
      document.getElementById('secondOnes').textContent = secondOnes;
      document.getElementById('secondTens').textContent = secondTens;
    } 
    if (secondTens > 0) {
      document.querySelectorAll('.digit').forEach(num => num.style.color = 'red');
    }
}, 10);
}

startButton.addEventListener('click', timer);