// Add variables

const secTens = document.getElementById("secondTens");
const secOnes = document.getElementById("secondOnes");
const msOnes = document.getElementById("msTens");
const msTens = document.getElementById("msHundreds");
const startButton = document.querySelector(".button-start");

// Wrap up all digits in a variable for easier manipulation

const timer = document.querySelectorAll('.digit');

// Set default values to 0,0,0,0 on a timer

secTens.innerHTML = "0";
secOnes.innerHTML = "0";
msOnes.innerHTML = "0";
msTens.innerHTML = "0";

// Initialize main function

const countdownStart = () => {

	// prepare temporary variables

	let ones = 0;
	let tens = 0;
	let hunds = 0;
	let final = 0;

	// Interval function working in sync to produce desired outcome

	const msOnesTimer = setInterval(() => {
		ones++;
		if (ones >= 10) ones = 0;
		msOnes.innerHTML = ones.toString();
	}, 10);

	const msTensTimer = setInterval(() => {
		tens++;
		if (tens >= 10) tens = 0;
		msTens.innerHTML = tens.toString();
	}, 100);

	const hundsTimer = setInterval(() => {
		hunds++;
		if (hunds >= 10) hunds = 0;
		secOnes.innerHTML = hunds.toString();
	}, 1000);

	// After certain time stop the timer with variable set to 0 except secTens

	setInterval(() => {
		// Add timer functions into an array for easier manipulation thanks to clear function
		let timerFunctions = [msOnesTimer, msTensTimer, hundsTimer];
		clear(timerFunctions);
	}, 10000)

}

// Defined clear function to make code cleaner and DRY, reset values to 0, loop through all elements to clear invervals and add class for red color
const clear = (element) => {
	secTens.innerHTML = "1";
	secOnes.innerHTML = "0";
	msOnes.innerHTML = "0";
	msTens.innerHTML = "0";
	element.forEach((f) => clearInterval(f));
	timer.forEach((element) => element.classList.add("redDigit"));
};

startButton.addEventListener("click", () => {
	countdownStart();
});