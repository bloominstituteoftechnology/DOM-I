const msTens = document.getElementById("msTens")
var seconds = 0

setInterval(() => {
    seconds = seconds + 1
    msTens.textContent = seconds
}, 1000);
