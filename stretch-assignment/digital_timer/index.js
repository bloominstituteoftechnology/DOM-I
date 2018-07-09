millitenseconds = 0;
millihundredseconds = 0
seconds = 0;
secondTens = 0

setInterval(timer, 10);

function timer(){
    document.getElementById('msTens').innerText = millitenseconds;
    document.getElementById('msHundreds').innerText = millihundredseconds;
    document.getElementById('secondOnes').innerText = seconds;
    document.getElementById('secondTens').innerText = secondTens;
    if (secondTens < 10){
        Math.trunc(millitenseconds += 10);
        Math.trunc(millihundredseconds += 1);
        Math.trunc(seconds += 0.1);
        Math.trunc(secondTens += 0.01);
    }
    if (seconds===10) {
        document.querySelector('.digits').style.color='red';
    }
}