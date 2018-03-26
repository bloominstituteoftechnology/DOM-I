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
/*
var h1 = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


// Start button
start.onclick = timer;

// Stop button
stop.onclick = function() {
    clearTimeout(t);
}

// Clear button
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}
*/

/*
let test = setInterval(() => {

	const msTens = document.querySelector('').innerHTML;
	let number = Number(msTens);

	if (msTens === '-') msTens = 0;
	else msTens = number + 1;

	if (numer === 10) {
		clearInterval(test);
		msTens = 'END';
	}

}, 1000);

const setTimeout = setTimeout(() => {
	document.querySelector('#msTens').innerHTML = 'END';
}, 5000);

function test() {
	// 

}
*/