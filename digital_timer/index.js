// set interval to 1k ms
// for loop
// Have a set interval function call
// for loop 0-10
// set interval every 1 sec
// within for loop - statement to stop the loop
// set interval, invoke cb, delay 10



const cb = () => {

    let hundredsDiv = document.getElementById("msHundreds");
    let msTensDiv = document.getElementById("msTens");
    let onesDiv = document.getElementById("secondOnes");


	if (msHundreds === 10) {
		msHundreds = 0;
		hundredsDiv.innerHTML = msHundreds;
<<<<<<< HEAD
=======

>>>>>>> dd203be40babd70d3f653ef8c6e639f46a7d061e
		msTens = msTens + 1;
	}
	else {
		hundredsDiv.innerHTML = msHundreds;
		msHundreds = msHundreds + 1;
	}

	if (msTens === 10) {
<<<<<<< HEAD
        msTens = 0;
        msTensDiv.innerHTML = msTens;
		onesDiv = onesDiv + 1;
	}
	else { 
        msTensDiv.innerHTML = msTens;
        msTens = msTens + 1;

	}

	if (secondOnes === 10) {
        secondOnes = 0;
        onesDiv.innerHTML = secondOnes;
		secondTens = secondTens + 1;
	}
	else {
        onesDiv.innerHTML = secondOnes;
        secondOnes = secondOnes + 1;
=======
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
>>>>>>> dd203be40babd70d3f653ef8c6e639f46a7d061e

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
