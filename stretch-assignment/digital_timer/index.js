let tenSpot = document.getElementById("secondTens");
let oneSpot = document.querySelector("body digits #secondOnes");
let tenthSpot = document.querySelector("#msHundreds");
let hundrethSpot = document.querySelector("#msTens");

function alertUser(){
    alert("Timer is Done")
}
function goUp(count){
    return(count++);
}
console.log(tenSpot)
//let maxTime = setInterval(alertUser,10000);

/*  Pseudo Code

1.) Set a cap of 10 seconds
2.) update individual items every 10 - 10000 ms
3.) set a cap on each item to 9 
4.) think to myself how overthought this is

WHY
IS EVERYTHING
NULL!!!!!!!!!!
*/
let tenCounter = 0;
tenSpot.setInterval(goUp(tenCounter),1000).innerText = (tenCounter); 
