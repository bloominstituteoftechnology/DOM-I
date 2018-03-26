class Timer {
  constructor() {
    this.count = 0;
    this.running = false;

    this.startButton = document.querySelector('button#start');
    this.stopButton = document.querySelector('button#stop');
    this.resetButton = document.querySelector('button#reset');

    this.startButton.addEventListener('click', (event) => timer.start());
    this.stopButton.addEventListener('click', (event) => timer.stop());
    this.resetButton.addEventListener('click', (event) => timer.reset());
  }
  init() {
    window.setInterval(this.tick.bind(this), 10);
  }
  start() {
    this.running = true;
    this.startButton.setAttribute('disabled', 'disabled');
  }
  stop() {
    this.running = false;
    this.startButton.removeAttribute('disabled');
  }
  tick() {
    if (this.count < 1000 && this.running) {
      this.count += 1;
    }
    this.update();
  }
  update() {
    let timerString = this.count.toString().padStart(4, '0');
    const digits = Array.from(document.querySelectorAll('.digit:not(#colon)'));
    digits.forEach((element, index) => element.innerHTML = timerString[index]);
    if (timerString == '1000') {
      console.log('done');
      digits.push(document.querySelector('#colon'));
      digits.forEach((element) => element.classList.add('redDigit'));
    }
  }
  reset() {
    this.count = 0;
    this.update();
  }
}

let timer = new Timer();
timer.init();