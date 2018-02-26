// set interval to 1k ms
// for loop
// Have a set interval function call
// for loop 0-10
// set interval every 1 sec
// within for loop - statement to stop the loop
// set interval, invoke cb, delay 10

let msHundreds = 0;
let msTens = 0;
let secondOnes = 0;
let secondTens = 0;

const cb = () => {

	let hundredsDiv = document.getElementById("msHundreds");

	if (msHundreds === 10) {
		msHundreds = 0;
		hundredsDiv.innerHTML = msHundreds;
		msTens++;
	}
	else{
		hundredsDiv.innerHTML = msHundreds;
		msHundreds++;
	}

	if (msTens === 10) {
		msTens = 0;
		secondOnes++;
	}
	else{


	}

	if (secondOnes === 10) {
		secondOnes = 0;
		secondTens++;
	}
	else{

	}

	if (secondTens === 1) {
		let tensDiv = document.getElementById("secondTens");
		tensDiv.innerHTML = "1";
		let divs = document.getElementsByClassName("digit");
		for (var i = 0; i < divs.length; i++) {
			divs[i].classList.add("redDigit");
		}
		clearInterval(intervalID);
	}

}

let intervalID = setInterval(cb, 10);