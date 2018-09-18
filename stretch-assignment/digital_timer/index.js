let hundredths = 0;
let tenths = 0;
let seconds = 0;
let timer;

document.getElementById('msHundreds').innerHTML = 0;
document.getElementById('msTens').innerHTML = 0;
document.getElementById('secondOnes').innerHTML = 0;
document.getElementById('secondTens').innerHTML = 0;
document.getElementById('start').addEventListener('click', timerStart);
document.getElementById('reset').addEventListener('click', resetButton);
document.getElementById('reset').style.display = 'none';

function myTimer() {
	document.getElementById('msHundreds').innerHTML = hundredths;
	document.getElementById('msTens').innerHTML = tenths;
	document.getElementById('secondOnes').innerHTML = seconds;

	if (hundredths < 9) {
		hundredths++;
	} else {
		hundredths = 0;
		if (tenths < 9) {
			tenths++;
		} else {
			tenths = 0;
			if (seconds < 9) {
				seconds++;
			} else {
				document.getElementById('msHundreds').innerHTML = 0;
				document.getElementById('msTens').innerHTML = 0;
				document.getElementById('secondOnes').innerHTML = 0;
        document.getElementById('secondTens').innerHTML = 1;
        clearInterval(timer);
      }
		}
	}
}

function timerStart() {
	timer = setInterval(myTimer, 10);
	document.getElementById('start').style.display = 'none';
	document.getElementById('reset').style.display = 'initial';
}

function resetButton() {
	clearInterval(timer);
	document.getElementById('start').style.display = 'initial';
	document.getElementById('reset').style.display = 'none';
	document.getElementById('msHundreds').innerHTML = 0;
	document.getElementById('msTens').innerHTML = 0;
	document.getElementById('secondOnes').innerHTML = 0;
	document.getElementById('secondTens').innerHTML = 0;
	hundredths = 0;
	tenths = 0;
	seconds = 0;
}
