let timer = 00000;
window.onload = function() {
    setInterval(function() { 
        if (timer < 10000) {
            timer += 00010;
            document.querySelector("#msHundreds").textContent = timer.toString().slice(3,4);
            document.querySelector("#msTens").textContent = timer.toString().slice(2,3);
            document.querySelector("#secondOnes").textContent = timer.toString().slice(1,2);
            document.querySelector("#secondTens").textContent = timer.toString().slice(0,1);
            console.log(timer);
        } else {
            document.querySelector("#secondTens").className = "digit redDigit";
            document.querySelector("#secondOnes").className = "digit redDigit";
            document.querySelector("#msTens").className = "digit redDigit";
            document.querySelector("#msHundreds").className = "digit redDigit";
        }
    }, 10);
}
