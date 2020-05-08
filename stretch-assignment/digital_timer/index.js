window.onload = function() {
    // Instantiate variables 
    let msTens = 0;
    let msHundreds = 0;
    let secondOnes = 0; 
    let secondTens = 0;

    // Instantiate the name of the function
    let Interval;

    // Instantiate ms and second elements
    let addMsHundreds = document.getElementById("msHundreds");
    let addMsTens = document.getElementById("msTens");
    let addSecondOnes = document.getElementById("secondOnes");
    let addSecondTens = document.getElementById("secondTens");

    // Instantiate buttons
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");

    // Start Button
    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(digitalTimer, 10);
    }

    // Stop Button
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }

    //Reset Button
    buttonReset.onclick = function() {
        // Remove the redDigit class so that numbers go back to original colors
        addMsHundreds.classList.remove("redDigit");
        addMsTens.classList.remove("redDigit");
        addSecondOnes.classList.remove("redDigit");
        addSecondTens.classList.remove("redDigit");


        clearInterval(Interval);

        msTens = "-"; msHundreds = "-"; secondOnes = "-"; secondTens = "-";
        addMsHundreds.innerHTML = `${msHundreds}`;
        addMsTens.innerHTML = `${msTens}`;
        addSecondOnes.innerHTML = `${secondOnes}`;
        addSecondTens.innerHTML = `${secondTens}`;
        msTens = 0; msHundreds = 0; secondOnes = 0; secondTens = 0;
    }

    function digitalTimer() {
        msHundreds += 1;

        if (msHundreds < 9) {
            addMsHundreds.innerHTML = `${msHundreds}`;
        }

        if (msHundreds > 9) {
            console.log("tenths");
            msTens += 1;
            addMsTens.innerHTML = `${msTens}`;
            msHundreds = 0;
            addMsHundreds.innerHTML = `${msHundreds}`;
        }

        if (msTens < 9) {
            addMsTens.innerHTML = `${msTens}`;
        }

        if (msTens > 9) {
            console.log("seconds");
            secondOnes += 1;
            addSecondOnes.innerHTML = `${secondOnes}`;
            msTens = 0;
            addMsTens.innerHTML = `${msTens}`;
        }

        if (secondOnes < 9) {
            addSecondOnes.innerHTML = `${secondOnes}`;
        }

        if (secondOnes > 9) {
            secondTens += 1;
            addSecondTens.innerHTML = `${secondTens}`;
            secondOnes = 0;
            addSecondOnes.innerHTML = `${secondOnes}`;
        }

        if (secondTens === 1) {
            clearInterval(Interval);
            msTens = 0; msHundreds = 0; secondOnes = 0; secondTens = 1;
            addMsHundreds.innerHTML = `${msHundreds}`;
            addMsTens.innerHTML = `${msTens}`;
            addSecondOnes.innerHTML = `${secondOnes}`;
            addSecondTens.innerHTML = `${secondTens}`;
            addMsHundreds.className += " redDigit";
            addMsTens.className += " redDigit";
            addSecondOnes.className += " redDigit";
            addSecondTens.className += " redDigit";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
        }
    }
} 