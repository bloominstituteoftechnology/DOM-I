function timedText() {
    setTimeout(myTimeout1, 2000)
    setTimeout(myTimeout2, 4000)
    setTimeout(myTimeout3, 6000)
}
function myTimeout1() {
    document.getElementById("demo").innerHTML = "2 seconds";
}
function myTimeout2() {
    document.getElementById("demo").innerHTML = "4 seconds";
}
function myTimeout3() {
    document.getElementById("demo").innerHTML = "6 seconds";
}