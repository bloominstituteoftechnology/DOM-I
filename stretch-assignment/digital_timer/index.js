const digits = document.querySelectorAll('.digit');
const startBtn = document.querySelector('.start-btn');
let going = false;

startBtn.addEventListener('click', _ => {
  if(going === false){
    digits[0].textContent = digits[1].textContent = digits[3].textContent = digits[4].textContent = 0;
    timer();
  }
});

function timer(){
  going = true;
  startBtn.classList.remove('start-btn');
  startBtn.classList.add('start-btn-lock');
  window.setInterval( _ => {
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
      startBtn.classList.add('start-btn');
      startBtn.classList.remove('start-btn-lock');
    }
  }, 10);
}