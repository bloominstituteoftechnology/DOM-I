let msTens = 0
let msHundreds = 0
let secondOnes = 0
let secondTens = 0

let msTensDiv = document.getElementById("msTens")
let msHundredsDiv = document.getElementById("msHundreds")
let secondOnesDiv = document.getElementById("secondOnes")
let secondTensDiv = document.getElementById("secondTens")
let playPauseButton = document.getElementById("play-pause-timer")
let resetButton = document.getElementById("reset-timer")
let run = false;
let timer

playPauseButton.addEventListener("click", () => {
    run = !run;
    if (run) {
        startTimer()
        playPauseButton.textContent = "Stop"
    } else {
        window.clearInterval(timer)
        playPauseButton.textContent = "Start"
    }
})

resetButton.addEventListener("click", () => {
    Array.from(document.querySelector(".digits").children).forEach((child) => {
        if (child.id === "colon") {
            child.textContent = ":"
        } else {
            child.textContent = "-"
        }
    })
    run = run && !run
    window.clearInterval(timer)
    playPauseButton.textContent = "Start"
})

const startTimer = () => {
    timer = setInterval(() => {
        msTens++
        msTensDiv.textContent = parseInt(msTens)
        if (msTens > 9) {
            msTens = 0
            msTensDiv.textContent = parseInt(msTens)
            msHundreds++
            msHundredsDiv.textContent = parseInt(msHundreds)
        }
        if (msHundreds > 9) {
            msHundreds = 0
            msHundredsDiv.textContent = parseInt(msHundreds)
            secondOnes++
            secondOnesDiv.textContent = parseInt(secondOnes)
        }
    
        if (msHundreds > 9) {
            msHundreds = 0
            msHundredsDiv.textContent = parseInt(msHundreds)
            secondOnes++
            secondOnesDiv.textContent = parseInt(secondOnes)
        }
    
        if (secondOnes > 9) {
            secondOnes = 0
            secondOnesDiv.textContent = parseInt(secondOnes)
            secondTens++
            secondTensDiv.textContent = parseInt(secondTens)
        }
    }, 10)
}
