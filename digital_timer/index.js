const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const msHundreds = document.getElementById("msHundreds");
const msTens = document.getElementById("msTens");

timer();

function timer () {
    init();
    function init () {
        secondTens.innerHTML = 0;
        secondOnes.innerHTML = 0;
        msTens.innerHTML = 0;
        msHundreds.innerHTML = 0;
    }

    function increment(){
        window.setInterval(()=>{ msHundreds.innerHTML++ }, 100);
        window.setInterval(()=>{ msTens.innerHTML++ }, 10);
        window.setInterval(()=>{ secondOnes.innerHTML++ }, 1000);
        window.setInterval(()=>{ secondTens.innerHTML++ }, 10000);
    }

    function endTimer(){
        clearInterval();
    }

    function updateTimer(){
        window.setInterval(clearInterval(secondTens),10000);
        window.setInterval(clearInterval(secondOnes),1000);
        window.setInterval(clearInterval(msTens),10);
        window.setInterval(clearInterval(msHundreds),100);
    }
    increment();
    updateTimer();
    endTimer();

}