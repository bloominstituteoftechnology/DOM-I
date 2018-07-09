//**Pointing to Divs*/

let theTensPlace = document.querySelector("#secondTens");  
let theOnesPlace = document.querySelector("#secondOnes");
let tenths = document.querySelector("#msHundreds");
let hundreths = document.querySelector("#msTens");

let startTime; //Need to declare globaly so local scopes have access.

//**Gets a duration measurement, converts that measurement to 4 sperate digits, puts them in the place they belong*/

const timeCheck = function (maxTime) {
    let endTime = new Date().getTime();
    let duration = endTime - startTime;
    if (duration > maxTime) {
        clearInterval(timeLooper);
        document.querySelector(".digits").style.color = "red";
        document.getElementById("start-button").removeAttribute('disabled');
        return;
    }
    theTensPlace.textContent = Math.floor(duration / 10000);
    theOnesPlace.textContent = Math.floor(duration / 1000) % 10;
    tenths.textContent = Math.floor(duration / 100) % 10;
    hundreths.textContent = Math.floor(duration / 10) % 10;
}

let timeLooper; //Need to declare globaly so local scopes have access.

//*Button Functions*/

//The start button function begins the measurement that timecheck() ends.
const startButtonFunction = function() {
    timeLooper = setInterval(timeCheck, 10, 3009); //TODO the `09` is because of CMOS off by one error.  There's probably a smarter way to do this.
    startTime = new Date().getTime();
    document.getElementById("start-button").setAttribute('disabled', 'disabled');
    document.querySelector(".digits").style.color = "black";
}

const resetButtonFunction = function() {
    theTensPlace.textContent = 0;
    theOnesPlace.textContent = 0;
    tenths.textContent = 0;
    hundreths.textContent = 0;
    document.querySelector(".digits").style.color = "black";
}

const stopButtonFunction = function() {
    clearInterval(timeLooper);
    document.getElementById("start-button").removeAttribute('disabled');
}

//*Event Listeners*/

document.getElementById("start-button").addEventListener("click", startButtonFunction);
document.getElementById("reset-button").addEventListener("click", resetButtonFunction);
document.getElementById("stop-button").addEventListener("click", stopButtonFunction);

