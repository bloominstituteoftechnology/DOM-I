//instantiate variables
const secTens = document.getElementById("secondTens");
const secOnes = document.getElementById("secondOnes");
const msTens = document.getElementById("msHundreds");
const msHuns = document.getElementById("msTens");

const clock = document.getElementsByClassName("digits");


//10 sec timer
const tenSecTimer = 10000;
const msHunTimer = 10;
secTens.innerHTML = "0";
secOnes.innerHTML = "0";
msTens.innerHTML = "0";
msHuns.innerHTML = "0";

const timerStart = (() => {
    let tensCount = 0;
    let hunsCount = 0;
    let ones = 0;
    const onesCounter = setInterval(() => {
        ones++;
        if (ones >= 10) ones = 0;
        secOnes.innerHTML = ones.toString();
    } ,1000);

    const tensCounter = setInterval(() => {
        
        tensCount++;
        if (tensCount >= 10) tensCount = 0;
        msTens.innerHTML = tensCount.toString();
    }, 100);

    const hunsCounter = setInterval(() => {
        hunsCount++;
        if (hunsCount >= 10) hunsCount = 0;
        msHuns.innerHTML = hunsCount.toString();
    }, 10);

    setTimeout(() => {
        secTens.innerHTML = "1";
        secOnes.innerHTML = "0";
        msTens.innerHTML = "0";
        msHuns.innerHTML = "0";
        clearInterval(onesCounter);
        clearInterval(tensCounter);
        clearInterval(hunsCounter);
        secTens.style.color = "red";
        secOnes.style.color = "red";
        msTens.style.color = "red";
        msHuns.style.color = "red";
    }, tenSecTimer);
});
timerStart();

//set tens after function complete
