// select our 4 divs

var digits = document.querySelectorAll(".digit");

// initialise counter to 0

function initialise() {
    for (let i = 0; i < digits.length; i++) {
        if (digits[i].innerHTML !== ":") {
            digits[i].innerHTML = 0;
            digits[i].innerText = parseInt(digits[i].innerHTML);
        }
    }
    return digits;
}

var incrementVar = setInterval(increment, 10)

// function to increment our timer every 10ms
let ms = 0;
let hs = 0;
let s = 0;
let ns = 0;

function increment() {

    if (digits[4].innerHTML !== "9") {
        ms++;
        digits[4].innerHTML = ms;
    } else {
        hs++;
        ms = 0;
        digits[4].innerHTML = ms;
        if (digits[3].innerHTML !== "9") {
            digits[3].innerHTML = hs;
        } else {
            s++;
            hs = 0;
            digits[3].innerHTML = hs;
            if (digits[1].innerHTML !== "9") {
                digits[1].innerHTML = s;
            } else {
                ns++;
                s = 0;
                digits[1].innerHTML = s;
                digits[0].innerHTML = ns;
                if (ns == 1) {
                    for (let i = 0; i < digits.length; i++) {
                        digits[i].style.color = "red";
                    }
                    clearInterval(incrementVar);
                }
            }
        }
    }
}



// function myStopFunction() {
//     clearInterval(incrementVar);
// }
initialise();