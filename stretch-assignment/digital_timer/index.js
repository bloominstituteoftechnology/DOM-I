let milliseconds = 0
let centiseconds = 0
let seconds = 0
let running = false
let htmlMS = document.querySelector("#msTens")
let htmlCS = document.querySelector("#msHundreds")
let htmlS = document.querySelector("#secondOnes")
let htmlTS = document.querySelector("#secondTens")

let digits = document.querySelector(".digits")



let startTimer = function(){
    if (!running){
        running = true
        htmlTS.textContent = 0
        htmlS.textContent = 0
        myInterval = setInterval(function(){
            milliseconds += 1
            if (milliseconds >= 10){
                centiseconds += 1
                if (centiseconds >= 10){
                    centiseconds -= 10
                    seconds += 1
                    if (seconds >= 10){
                        seconds -= 10
                        htmlTS.textContent = 1
                        digits.classList.add("redDigit");
                        running = false
                        clearInterval(myInterval)
                    }
                    htmlS.textContent = seconds
                }
                milliseconds -= 10
                htmlCS.textContent = centiseconds
            }
            htmlMS.textContent = milliseconds
        }, 10);
    }
}
let reset = function(){
    if (!running){
        htmlTS.textContent = "-"
        htmlS.textContent = "-"
        htmlMS.textContent = "-"
        htmlCS.textContent = "-"
        digits.classList.remove("redDigit");
    }
}
