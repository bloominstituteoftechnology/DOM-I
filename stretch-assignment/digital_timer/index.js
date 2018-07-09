//grab timer divs
let digits = document.querySelector('.digits');
let secondTens = document.getElementById('secondTens');
let secondOnes = document.getElementById('secondOnes');
let msHundreds = document.getElementById('msHundreds');
let msTens = document.getElementById('msTens');

//global variables
let duration = 10000;//10 seconds in milliseconds
let count = 0;//my count, what all the shown numbers are based off of
let clock;//to hold the interval function
let isPaused = false;//pause/unpause interval

//Button creation
let container = document.createElement('div');//create a containing div for styling later
container.id = 'btn-div';//give it an id

let startButton = document.createElement('button');
let resetButton = document.createElement('button');
let pauseButton = document.createElement('button');//create three buttons
startButton.innerText = 'Start';
startButton.id = 'start';
resetButton.innerText = 'Reset';
resetButton.id = 'reset';
pauseButton.innerText = 'Pause';
pauseButton.id = 'pause';//set innerText and id's for each button
pauseButton.disabled = true;//pause button disabled by default
container.appendChild(startButton);
container.appendChild(resetButton);
container.appendChild(pauseButton);//append buttons to created div

container.style = 'width: 100%; display: flex; justify-content: center;';//style created div
container.querySelectorAll('button').forEach(btn => {
  btn.style = 'background: lightblue; color: white; margin-right: 20px; font-size: 16px; text-align: center; border-radius: 5px; padding: 15px 32px;'
});//grab all three buttons and give them the same style

document.querySelector('body').style.flexWrap = 'wrap';//give body flexwrap: wrap because I want buttons on another line

document.querySelector('body').append(container);//append the container with it's buttons to the end of the body.

//functions
const updateClock = () => {
  if(!isPaused){//toggles running everything in the clock or not.
    count += 10;//increase count by 10 milliseconds, I know this function is going to get called once every 10 milliseconds

    if(count == duration){//if count is equal to the duration, this stops everything.
      clearInterval(clock);//clears interval function
      digits.style.color = 'red';//changes color of stuff on body to red
      startButton.disabled = false;//turns start button back on
      pauseButton.disabled = true;//turns off pause button
    }

    secondTens.textContent = Math.floor(count / 10000);
    secondOnes.textContent = Math.floor(count / 1000) % 10;
    msHundreds.textContent = Math.floor(count / 100) % 10;
    msTens.textContent = Math.floor(count/10) % 10;//displays based on what count is currently at
  }
}//update function

const reset = () => {
  clearInterval(clock);//clear interval
  count = 0;//reset count to 0
  isPaused = false;
  pauseButton.innerText = 'Pause';//reset the pause
  digits.style.color = 'black';//reset color

  secondTens.textContent = '-';
  secondOnes.textContent = '-';
  msHundreds.textContent = '-';
  msTens.textContent = '-';//reset the numbers to original

  startButton.disabled = false;//turn on start button
  pauseButton.disabled = true;//turn off pause button
}//in case I want to reset in the middle instead of the end

const startClock = () => {
  reset();//I need to call pretty much everything in reset, no need to rewrite it
  clock = setInterval(updateClock, 10);//set interval to call updateClock every 10 milliseconds
  startButton.disabled = true;//disable start button
  pauseButton.disabled = false;//enable pause button
}//kicks off the shebang

const pauseToggle = () => {
  if(!isPaused){//if not paused
    isPaused = true;
    pauseButton.innerText = 'Unpause';
  } else{//if paused
    isPaused = false;
    pauseButton.innerText = 'Pause';
  }
}//toggles pause on and off.

//event listeners
startButton.addEventListener('click', startClock);
pauseButton.addEventListener('click', pauseToggle);
resetButton.addEventListener('click', reset);//add click listeners to each button according to associated method
