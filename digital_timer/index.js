let ms = 0;
const LIMIT = 10000;

startTimer();
function startTimer() {
    ms = 0;
    document.querySelector('.digits').style = 'color: black;'
    document.getElementById('secondTens').innerHTML = 0;
    document.getElementById('secondOnes').innerHTML = 0;
    document.getElementById('msHundreds').innerHTML = 0;
    document.getElementById('msTens').innerHTML = 0;

    function incrementTimer() {
        ms += 10;

        document.getElementById('secondTens').innerHTML = parseInt((ms / 10000) % 10)
        document.getElementById('secondOnes').innerHTML = parseInt((ms / 1000) % 10)
        document.getElementById('msHundreds').innerHTML = parseInt((ms / 100) % 10)
        document.getElementById('msTens').innerHTML = parseInt((ms / 10) % 10)

        if (ms === LIMIT) {
            stopTimer();
            document.querySelector('.digits').style = 'color: red;'
        }
    }

    function stopTimer() {
        clearInterval(msTimer);
    }

    let msTimer = setInterval(incrementTimer, 10);
}

const myStartButton = document.createElement('button');
document.body.appendChild(myStartButton);
myStartButton.innerHTML = 'Start';
myStartButton.onclick = startTimer;