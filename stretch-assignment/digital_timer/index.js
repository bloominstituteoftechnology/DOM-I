const secondsRest = document.getElementById('secondTens');
const secondOnes = document.getElementById('secondOnes');
const msHundreds = document.getElementById('msHundreds');
const msTens = document.getElementById('msTens');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const stopBtn = document.getElementById('stop-btn');

const state = {
  startTime: null,
  paused: false,
  pausedAt: 0,
  intervalHandle: null,
  elapsed: 0
};

function updateDisplay() {
  const elapsed = state.elapsed;
  msTens.textContent = Math.floor(elapsed / 10) % 10;
  msHundreds.textContent = Math.floor(elapsed / 100) % 10;
  secondOnes.textContent = Math.floor(elapsed / 1000) % 10;
  secondsRest.textContent = Math.floor(elapsed / 10000);
}

function kickOffTimer(duration) {
  if (state.intervalHandle) clearInterval(state.intervalHandle);
  if (state.paused) {
    state.paused = false;
    duration = duration - state.elapsed;
  }
  state.startTime = Date.now();
  state.intervalHandle = setInterval(() => {
    const currentTime = Date.now();
    const elapsed = currentTime - state.startTime;

    if (elapsed > duration) {
      clearInterval(state.intervalHandle);
      state.elapsed = 0;
      state.pausedAt = 0;
      startBtn.textContent = 'Start';
      return;
    }
    state.elapsed = elapsed + state.pausedAt;

    updateDisplay();
  }, 10);
}

startBtn.addEventListener('click', () => kickOffTimer(10009));
resetBtn.addEventListener('click', () => {
  clearInterval(state.intervalHandle);
  state.elapsed = 0;
  state.pausedAt = 0;
  startBtn.textContent = 'Start';
  updateDisplay();
});
stopBtn.addEventListener('click', () => {
  clearInterval(state.intervalHandle);
  state.paused = true;
  if (state.elapsed !== 0) {
    startBtn.textContent = 'Resume';
  }
  state.pausedAt = state.elapsed;
});
