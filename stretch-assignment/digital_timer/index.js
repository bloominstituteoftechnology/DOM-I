// Create a button
let button = document.createElement("button");
let body = document.getElementsByTagName("body")[0];
button.innerHTML = "Start";
body.append(button);

// Create timer
let max = 1000;
function startInterval() {
    let interval = setInterval(() => {
        let count = 1000 - --max;
        document.getElementById("msTens").innerHTML = count % 10;
        document.getElementById("msHundreds").innerHTML = Math.floor((count/10) % 10);
        document.getElementById("secondOnes").innerHTML = Math.floor((count/100) % 10);
        document.getElementById("secondTens").innerHTML = Math.floor((count/1000) % 10);
        if(max <= 0)
            clearInterval(interval);
    },10)
}

// Set On Click for button
button.onclick = startInterval;