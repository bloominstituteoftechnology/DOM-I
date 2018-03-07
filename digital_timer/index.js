let tens;
let ones;
let miliH;
let miliT;
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

function timer(){
    // tens = window.setInterval(sec1, 10000);
    miliH = window.setInterval(sec2, 100);
    ones = window.setInterval(sec1, 1000);
    
    // miliT = window.setInterval(sec3, 10);
}

// let i = 0;
// const cb = () => {
//     i++
//     console.log(i);
//     if(i === 10){
//         clearInterval()
//     }
// }
    
// function sec1(){
//     let sT = document.querySelector("#secondTens");
//     if(count1 < 10){
        
//         count1++;
//     }else{
//         clearInterval(tens);
//     }
// }

function sec1(){
    let sT1 = document.querySelector("#secondTens");
    let sT2 = document.querySelector("#secondOnes");
    let sT3 = document.querySelector("#msHundreds");
    let sT4 = document.querySelector("#msTens");
    let colon = document.querySelector("#colon");
    // if(count2 < 10){
    //     sT2.innerHTML = count2;
    //     count2++;
    count2++;
    sT2.innerHTML = count2;
    sT1.innerHTML = "";
    if(count2 === 10){
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
    //else{
    //     sT1.innerHTML = 1;
    //     sT2.innerHTML = 0;
    //     clearInterval(ones);
    //     clearInterval(miliH);
    //     clearInterval(miliT);
    // }
}

function sec2(){
    let sT1 = document.querySelector("#msHundreds");
    let sT2 = document.querySelector("#msTens");
    sT2.innerHTML = "";
    count3++;
    sT1.innerHTML = count3;
}

// function sec3(){
//     let sT = document.querySelector("#msTens");
//     count4 += 1;
//     console.log(count4);
    
//     sT.innerHTML = count4;
// }

// timer(change("#secondTens"), 1000);
// console.log(sT.innerHTML);
// onload="timer();"