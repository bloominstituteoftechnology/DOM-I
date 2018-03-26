let time = 0;
const timer = () => {
    const timeStr = time.toString().split('');
    if (time >= 1001) {
        clearInterval(timer);
    } else if(time >= 1000) {
        document.getElementById("secondTens").innerHTML = timeStr[0];
        document.getElementById("secondOnes").innerHTML = timeStr[1];
        document.getElementById("msHundreds").innerHTML = timeStr[2];
        document.getElementById("msTens").innerHTML = timeStr[3];
    } else if(time >= 100) {
        document.getElementById("secondOnes").innerHTML = timeStr[0];
        document.getElementById("msHundreds").innerHTML = timeStr[1];
        document.getElementById("msTens").innerHTML = timeStr[2];
    } else if(time >= 10) {
        document.getElementById("msHundreds").innerHTML = timeStr[0];
        document.getElementById("msTens").innerHTML = timeStr[1];
    } else {
        document.getElementById("msTens").innerHTML = timeStr[0];
    }
    time++;
}
document.getElementById("secondTens").innerHTML = "0";
document.getElementById("secondOnes").innerHTML = "0";
document.getElementById("msHundreds").innerHTML = "0";
document.getElementById("msTens").innerHTML = "0";
setInterval(timer, 10);
