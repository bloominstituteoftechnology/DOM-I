const countUp = () => {
    let counter = 0;
    if (counter === 10000) {
        document.querySelector('#secondTens').innerText = 1;
        document.querySelectorAll('.digits .digit').forEach((digit, index) => {
            if (index !== 0) {
                digit.innerText = 0;
            }
        });
    } else if (counter >= 1000) {
        document.querySelector('#secondTens').innerText = Math.floor(seconds / 100);
        document.querySelector('#secondOnes')[1].innerText = Math.floor(seconds / 10);
        document.querySelector('#msHundreds')[2].innerText = Math.floor(seconds);
        document.querySelector('#msTens')[3].innerText = Math.floor(seconds * 10);
    } else if (counter >= 100){
        document.querySelector('#secondOnes')[1].innerText = Math.floor(seconds / 10);
        document.querySelector('#msHundreds')[2].innerText = Math.floor(seconds);
        document.querySelector('#msTens')[3].innerText = Math.floor(seconds * 10);
    } else if (counter >= 10) {
        document.querySelector('#msHundreds')[2].innerText = Math.floor(seconds);
        document.querySelector('#msTens')[3].innerText = Math.floor(seconds * 10);
    } else {
        document.querySelector('#msTens')[3].innerText = Math.floor(seconds * 10);
    }
    return () => ++counter;
};

window.setInterval(countUp, 10);