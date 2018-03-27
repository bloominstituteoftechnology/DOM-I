const secondsTen = document.getElementById('secondTens');
const secondsOne = document.getElementById('secondOnes');
const msHundos   = document.getElementById('msHundreds');
const msTens     = document.getElementById('msTens');
/*************************************************************************/
const digits = document.getElementsByClassName('digits')[0];
let countSeconds = 0,
	count10seconds = 0,
	ms10s = 0,
	ms100s= 0;

let interval = setInterval(function() {
	ms10s++;
	msTens.innerHTML = ms10s;

	if (ms10s === 10) {
		ms10s = 0;
		ms100s++;
		msTens.innerHTML = ms10s;
		msHundos.innerHTML = ms100s;

		if (ms100s === 10) {
			ms100s = 0;
			countSeconds++;
			msHundos.innerHTML = ms100s;
			secondsOne.innerHTML = countSeconds;

			if (countSeconds === 10) {
				clearInterval(interval);
				countSeconds = 0;
				count10seconds++;
				secondsOne.innerHTML = countSeconds;
				secondsTen.innerHTML = count10seconds;
				digits.setAttribute('class', 'redDigit');
			}
		}
	}
}, 10);