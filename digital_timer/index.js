// const secondsTen = document.getElementById('secondTens');
// const secondsOne = document.getElementById('secondOnes');
// const msHundos   = document.getElementById('msHundreds');
// const msTens     = document.getElementById('msTens');
/*************************************************************************/
let countSeconds = 0,
	countMinutes = 0,
	ms10s = 0,
	ms100s= 0;

let msOutput = setInterval(function() {
	ms10s++;
	document.getElementById('msTens').innerHTML = ms10s;

	if (ms10s === 10) {
		ms10s = 0;
		ms100s++;
		document.getElementById('msTens').innerHTML = ms10s;
		document.getElementById('msHundreds').innerHTML = ms100s;

		if (ms100s === 10) {
			ms100s = 0;
			countSeconds++;
			document.getElementById('msHundreds').innerHTML = ms100s;
			document.getElementById('secondOnes').innerHTML = countSeconds;

			if (countSeconds === 10) {
				clearInterval(msOutput);
				countSeconds = 0;
				countMinutes++;
				document.getElementById('secondOnes').innerHTML = countSeconds;
				document.getElementById('secondTens').innerHTML = countMinutes;
				//document.querySelector('div').style = {'color:red'};
			}
		}
	}
}, 10);

/*************************************************************************/
