const digits = document.querySelectorAll('.digit');
const startBtn = document.querySelector('.start-btn');
const currLap = document.querySelector('.current .the-lap');
const currtime = document.querySelector('.current .time');

let going = false;
let currentLap = 0;
let reset = false;

startBtn.addEventListener('click', _ => {
  if(reset) location.reload();

  if(going === false){
    digits[0].textContent = digits[1].textContent = digits[3].textContent = digits[4].textContent = 0;
    startBtn.textContent = "Lap"
    timer();
  }else {
    currentLap = lap();
    makeLap(`Lap ${currentLap}`, `${digits[0].textContent}${digits[1].textContent}:${digits[3].textContent}${digits[4].textContent}`);
  }
});

function timer(){
  going = true;
  digits.forEach(item => item.classList.toggle('push-down'));
  startBtn.classList.remove('start-btn');
  startBtn.classList.add('start-btn-lock');
  window.setInterval( _ => {
    currLap.textContent = `Lap ${currentLap+1}`;
    currtime.textContent = `${digits[0].textContent}${digits[1].textContent}:${digits[3].textContent}${digits[4].textContent}`;
    if(digits[0].textContent != 1) {
      if(digits[4].textContent < 9) {
        digits[4].textContent++;
      } else {
        digits[3].textContent++;
        digits[4].textContent = 0;
      }

      if(digits[3].textContent == 9) {
        digits[1].textContent++;
        digits[3].textContent = 0;
      }

      if(digits[1].textContent == 10) {
        digits[0].textContent++;
        digits[1].textContent = 0;
      }
    } else {
      going = false;
      reset = true;
      startBtn.classList.add('start-btn');
      startBtn.classList.remove('start-btn-lock');
      startBtn.textContent = 'Reset';
    }
  }, 10);

}

const lap = (_ => {
  let counter = 1;
  return _ => counter++; return counter;
})();

function makeLap(theLap, theTime){
  const lapCont = document.createElement('div');
  const lapNum = document.createElement('p');
  const lapTime = document.createElement('p');

  lapCont.classList.add('lap');
  lapNum.classList.add('the-lap');
  lapTime.classList.add('time');

  lapNum.textContent = theLap;
  lapTime.textContent = theTime;

  lapCont.append(lapNum, lapTime);
  document.querySelector('.past-laps').prepend(lapCont);
}