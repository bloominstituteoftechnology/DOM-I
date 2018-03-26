// function updateTime() {
//     var time = 0;
//     setInterval(function() {
//         document.querySelector(".digits").value = time;
//         time++;
//         if (time > 10) {
//             time = 1;
//         }
//     }, 10);
// }
// updateTime();


// let num = window.setInterval( function() {
//     console.log('Look at this');
// }, 1000);


// 

let secondTens = document.getElementById("secondTens")
let secondOnes = document.getElementById("secondOnes")
let msHundreds = document.getElementById("msHundreds")
let msTens = document.getElementById("msTens")
secondTens.innerHTML = "0"
secondOnes.innerHTML = "0"
msHundreds.innerHTML = "0"
msTens.innerHTML = "0"
const secondsOnes = setInterval(
    function timer(){ 
        if (secondOnes.innerHTML <= 9)  secondOnes = 0;
            secondOnes.innerHTML++;
 }, 10); 
const msTens = setInterval(
    function timer(){ 
        if ( msTens.innerHTML <= 9) msTens = 0;
             msTens.innerHTML++;
 }, 100);
const msHundreds = setInterval(
    function timer(){ 
        if ( msHundreds.innerHTML <= 9) msTens = 0;
             msHundreds.innerHTML++;
 }, 1000);

 

<meta charset="UTF-8"/>
