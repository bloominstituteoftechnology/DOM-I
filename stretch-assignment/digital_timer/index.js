let digits = document.querySelector('.digits').children;
let buttonDiv = document.createElement('div');
buttonDiv.style.display = 'flex';
buttonDiv.style.position = 'absolute';
buttonDiv.style.top = '25%';
let startButton = document.createElement('button');
startButton.textContent = 'START';
buttonDiv.appendChild(startButton);
let resetButton = document.createElement('button');
resetButton.textContent = 'RESET';
buttonDiv.appendChild(resetButton);
document.querySelector('body').appendChild(buttonDiv);
const timerFunction = () => {
	for (let i = 0; i < digits.length; i++)
		digits[i].classList.remove('redDigit');
	document.querySelector('button').disabled = 'true';
    [centiseconds, deciseconds, seconds, tens] = [0, 0, 0, 0];
    let time = 0;
    let timer = setInterval(() => {
        time += 10;
        if(centiseconds === 9){
            if (deciseconds === 9){
                if (seconds === 9){
                    tens += 1;
                    seconds = 0;
                    deciseconds = 0;
                    centiseconds = 0;
                } else {
                    seconds += 1;
                    deciseconds = 0;
                    centiseconds = 0;
                }
            } else {
                deciseconds += 1;
                centiseconds = 0;
            }
        } else centiseconds += 1;
        digits[4].textContent = centiseconds;
        digits[3].textContent = deciseconds;
        digits[1].textContent = seconds;
        digits[0].textContent = tens;
        if (time >= 10000){
            clearInterval(timer);
            for (let i = 0; i < digits.length; i++)
                digits[i].classList.add('redDigit');
				startButton.removeAttribute('disabled');
        }
		const resetFunction = () => {
			clearInterval(timer);
			[time, tens, seconds, centiseconds, deciseconds] = [0, 0, 0, 0, 0];
			startButton.removeAttribute('disabled');
			for (let i = 0; i < digits.length; i++){
				digits[i].classList.remove('redDigit');
				if (i !== 2) digits[i].textContent = 0;
			}
		}
		resetButton.addEventListener('click', resetFunction);
    }, 10);
}

startButton.addEventListener('click', timerFunction);
