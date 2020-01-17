let msTens = 0
let msHundreds = 0
let secondOnes = 0

let msTensDiv = document.getElementById("msTens")
let msHundredsDiv = document.getElementById("msHundreds")
let secondOnesDiv = document.getElementById("secondOnes")
setInterval(() => {
    msTens++
    msTensDiv.textContent = parseInt(msTens)
    if (msTens > 9) {
        msTens = 0
        msHundreds++
        msHundredsDiv.textContent = parseInt(msHundreds)
    }
    if (msHundreds > 9) {
        msHundreds = 0
        secondOnes++
        secondOnesDiv.textContent = parseInt(secondOnes)
    }
    
}, 10)