const secondTens = document.querySelector("#secondTens");
const secondOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");


function initialize () {
    var totalSeconds = 0;
    ++totalSeconds;
    secondTens.innerHtml = "0";
    secondOnes.innerHtml= Math.floor((totalSeconds/1000) % 60);
    msHundreds.innerHTML= "0";
    msTens.innerHTML ="0";
}

var timer = window.setInterval(initialize, 1000);

function stopUpdating () {
    clearInterval(timer);
}

setTimeout(stopUpdating, 10000);




// var seconds = Math.floor((t/1000 % 60 )