document.addEventListener("DOMContentLoaded", function() {
    let startTime = new Date();
    let clock = document.querySelectorAll(".digits *:not(#colon)");
    let wholeClock = document.querySelector(".digits");
    let updateClockInt = setInterval(() => {
        updateClock(startTime, clock);
    }, 10);

    function updateClock(startTime, clock) {
        let currentTime = new Date();
        let currentDifference = Math.floor((currentTime - startTime) / 10)
            .toString()
            .padStart(4, "0")
            .split("");
        for (i = 0; i < clock.length; i++) {
            clock[i].textContent = currentDifference[i];
        }
        if (currentDifference[0] == "1") {
            clearInterval(updateClockInt);
            wholeClock.style.color = "red";
        }
    }
});
