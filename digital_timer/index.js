let tens;
let ones;
let miliH;
let miliT;
let count1 = 1;
let count2 = 0;
let count3 = 0;
let count4 = 0;

function timer(){
    tens = window.setInterval(sec1, 10000);
    ones = window.setInterval(sec2, 1000);
    miliH = window.setInterval(sec3, 100);
    miliT = window.setInterval(sec4, 10);
}
    
function sec1(){
    let sT = document.querySelector("#secondTens");
    if(count1 < 10){
        sT.innerHTML = count1;
        count1++;
    }else{
        count1 = 0;
    }
}

function sec2(){
    let sT = document.querySelector("#secondOnes");
    if(count2 < 10){
        sT.innerHTML = count2;
        count2++;
    }else{
        count2 = 0;
    }
}

function sec3(){
    let sT = document.querySelector("#msHundreds");
    if(count3 < 10){
        sT.innerHTML = count3;
        count3++;
    }else{
        count3 = 0;
    }
}

function sec4(){
    let sT = document.querySelector("#msTens");
    if(count4 < 10){
        sT.innerHTML = count4;
        count4++;
    }else{
        count4 = 0;
    }
}

// timer(change("#secondTens"), 1000);
// console.log(sT.innerHTML);
// onload="timer();"