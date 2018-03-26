class Timer {
  constructor() {
    // Initialize at 00:00 and not running
    this.count = 0;
    this.running = false;
    this.digits = Array.from(document.querySelectorAll('.digit:not(#colon)')); // Grab all the non-colon digits
    this.allChars = Array.from(document.querySelectorAll('.digit')); // All of the display characters for color classes

    // Gather the control elements into properties
    this.startButton = document.querySelector('button#start');
    this.stopButton = document.querySelector('button#stop');
    this.resetButton = document.querySelector('button#reset');

    // Attach click event handlers to each button
    this.startButton.addEventListener('click', (event) => timer.start());
    this.stopButton.addEventListener('click', (event) => timer.stop());
    this.resetButton.addEventListener('click', (event) => timer.reset());
  }
  init() { // Add the tick() function to the window object on a 10ms interval
    window.setInterval(this.tick.bind(this), 10);
  }
  start() { // Start the timer and disable the start button
    this.running = true;
    this.startButton.setAttribute('disabled', 'disabled');
  }
  stop() { // Stop the timer and enable the start button
    this.running = false;
    this.startButton.removeAttribute('disabled');
  }
  tick() { // Updates current time
    if (this.count < 1000 && this.running) { // Only update count while running and not at max
      this.count += 1;
    }
    this.update();
  }
  update() { // Controls InnerHTML of digits and their display classes
    let timerString = this.count.toString().padStart(4, '0'); // Pad the count if it is not yet 1000
    this.digits.forEach((element, index) => element.innerHTML = timerString[index]); // Assign each digit of the count sequentially
    if (timerString == '1000') {
      this.allChars.forEach((element) => element.classList.add('redDigit')); // Turn them all red
    } 
  }
  reset() { // Start the count back at 0 and set color to black if necessary
    this.stop();
    this.count = 0;
    this.allChars.forEach((element) => element.classList.remove('redDigit'));
    this.update();
  }
}

// Make it all happen
let timer = new Timer();
timer.init();