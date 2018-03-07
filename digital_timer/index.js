let ones;
let miliH;
let count1 = 0;
let count2 = 0;

function timer(){
    miliH = window.setInterval(sec2, 100);
    ones = window.setInterval(sec1, 1000);
}

function sec1(){
    let sT1 = document.querySelector("#secondTens");
    let sT2 = document.querySelector("#secondOnes");
    let sT3 = document.querySelector("#msHundreds");
    let sT4 = document.querySelector("#msTens");
    let colon = document.querySelector("#colon");
    
    count1++;
    sT2.innerHTML = count1;
    sT1.innerHTML = "";
    if(count1 === 10){
        sT1.innerHTML = 1;
        sT2.innerHTML = 0;
        sT3.innerHTML = 0;
        sT4.innerHTML = 0;
        clearInterval(ones);
        clearInterval(miliH);
        // clearInterval(miliT);
        sT1.style.color = "red";
        sT2.style.color = "red";
        sT3.style.color = "red";
        sT4.style.color = "red";
        colon.style.color = "red";
    }
}

function sec2(){
    let sT1 = document.querySelector("#msHundreds");
    let sT2 = document.querySelector("#msTens");
    sT2.innerHTML = "";
    count2++;
    sT1.innerHTML = count2;
}