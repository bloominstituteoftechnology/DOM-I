// //**Pointing to Divs*/

// let theTensPlace = document.querySelector("#secondTens");
// let theOnesPlace = document.querySelector("#secondOnes");
// let tenths = document.querySelector("#msHundreds");
// let hundreths = document.querySelector("#msTens");

// let startTime; //Need to declare globaly so local scopes have access.

// //**Gets a duration measurement, converts that measurement to 4 sperate digits, puts them in the place they belong*/

// const timeCheck = function (maxTime) {
//     let endTime = new Date().getTime();
//     let duration = endTime - startTime;
//     if (duration > maxTime) {
//         clearInterval(timeLooper);
//         document.querySelector(".digits").style.color = "red";
//         document.getElementById("start-button").removeAttribute('disabled');
//         return;
//     }
//     theTensPlace.textContent = Math.floor(duration / 10000);
//     theOnesPlace.textContent = Math.floor(duration / 1000) % 10;
//     tenths.textContent = Math.floor(duration / 100) % 10;
//     hundreths.textContent = Math.floor(duration / 10) % 10;
// }

// let timeLooper; //Need to declare globaly so local scopes have access.

// //*Button Functions*/

// //The start button function begins the measurement that timecheck() ends.
// const startButtonFunction = function() {
//     timeLooper = setInterval(timeCheck, 10, 3009); //TODO the `09` is because of CMOS off by one error.  There's probably a smarter way to do this.
//     startTime = new Date().getTime();
//     document.getElementById("start-button").setAttribute('disabled', 'disabled');
//     document.querySelector(".digits").style.color = "black";
// }

// const resetButtonFunction = function() {
//     theTensPlace.textContent = 0;
//     theOnesPlace.textContent = 0;
//     tenths.textContent = 0;
//     hundreths.textContent = 0;
//     document.querySelector(".digits").style.color = "black";
// }

// const stopButtonFunction = function() {
//     clearInterval(timeLooper);
//     document.getElementById("start-button").removeAttribute('disabled');
// }

// //*Event Listeners*/

// document.getElementById("start-button").addEventListener("click", startButtonFunction);
// document.getElementById("reset-button").addEventListener("click", resetButtonFunction);
// document.getElementById("stop-button").addEventListener("click", stopButtonFunction);

const secondsRest = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");
const stopBtn = document.getElementById("stop-btn");

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
			startBtn.textContent = "Start";
			return;
		}
		state.elapsed = elapsed + state.pausedAt;

		updateDisplay();
	}, 10);
}

startBtn.addEventListener("click", () => kickOffTimer(10009));
resetBtn.addEventListener("click", () => {
	clearInterval(state.intervalHandle);
	state.elapsed = 0;
	state.pausedAt = 0;
	startBtn.textContent = "Start";
	updateDisplay();
});
stopBtn.addEventListener("click", () => {
	clearInterval(state.intervalHandle);
	state.paused = true;
	startBtn.textContent = "Resume";
	state.pausedAt = state.elapsed;
});
