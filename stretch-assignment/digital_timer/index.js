let digits = document.querySelector('.digits').children;
window.addEventListener('load', () => {
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
                digits[i].style.color = 'red';
        }
    }, 10);
});