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
        if (msHundreds<10){
            window.setInterval(()=>{ msHundreds.innerHTML++; }, 100);}
        if (msTens<10){
            window.setInterval(()=>{ msTens.innerHTML++ }, 10);}
        if (secondOnes<10){
            window.setInterval(()=>{ secondOnes.innerHTML++ }, 1000);}
        if (secondTens<10){
        window.setInterval(()=>{ secondTens.innerHTML++ }, 10000);}
    }

    function endTimer(){
    }

    function updateTimer(){
    }

    increment();
    updateTimer();
    endTimer();

}