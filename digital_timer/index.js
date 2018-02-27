// set interval to 1k ms
// for loop
// Have a set interval function call
// for loop 0-10
// set interval every 1 sec
// within for loop - statement to stop the loop
// set interval, invoke cb, delay 10

var msHundreds = 0;
var msTens = 0;
var secondOnes = 0;
var secondTens = 0;


const cb = () => {
	let secondOnesDiv = document.getElementById("secondOnes");
	let secondTensDiv= document.getElementById("secondTens");
	let hundredsDiv = document.getElementById("msHundreds");
	let msTensDiv = document.getElementById("msTens");

	if (msHundreds === 10) {
		msHundreds = 0;
		hundredsDiv.innerHTML = msHundreds;
		msTens = msTens + 1;
	}

	else{
		hundredsDiv.innerHTML = msHundreds;
		msHundreds++;
	}

	if (msTens === 10) {
		msTens = 0;
		msTensDiv.innerHTML = msTens;
		secondOnes++;
	}
	else{
		msTensDiv.innerHTML = msTens;
	}

	if (secondOnes === 10) {
		secondOnes = 0;
		secondOnesDiv.innerHTML = secondOnes;
		secondTens++;
	}
	else{
		secondOnesDiv.innerHTML = secondOnes;
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
