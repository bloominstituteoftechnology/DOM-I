// function timer(){
//   setInterval(function(){
//     console.log("potatos");
//   },10000);
// }
//
// window.clearInterval(timerVariable)
//
// myVar = setInterval(function, milliseconds);
// clearInterval(myVar);

function timedText() {
    setInterval(myTimeout1, 10)
    setInterval(myTimeout2, 20)
    setInterval(myTimeout3, 30)
    setTimeout(myTimeout4, 10000)
}
function didget1() {
    document.getElementById("secondTens").textContent = "2 seconds";
}
function didget2() {
    document.getElementById("secondOnes").innerHTML = "4 seconds";
}
function didgit3() {
    document.getElementById("msHundreds").innerHTML = "6 seconds";
}
function digit4() {
    document.getElementById("msTens").innerHTML = "6 seconds";
}

// var $badge = $('#badge'); // cache
//    setInterval(function () {
//         var value = parseInt($badge.html());
//         value++;
//         $badge.html(value);
//    }, 1000);
