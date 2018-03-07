const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

digitalTimer();

function digitalTimer () {
    initialize();

initialize => { /* set initial counter numbers to zero */
    secondTens.innerHTML = "0";
    secondOnes.innerHTML = "0";
    msHundreds.innerHTML = "0";
    msTens.InnerHTML = "0";
}

let setTime = setInterval(function() {
    countTimer() }, 10);

function updateTimer (){
    ++msTens
}





}
