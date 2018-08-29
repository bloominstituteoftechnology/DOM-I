let button = document.createElement("DIV");
let buttonText = document.createTextNode("Start");
let body = document.querySelector("body");
let msTens = document.getElementById("msTens");
let msHundreds = document.getElementById("msHundreds");
let secondOnes = document.getElementById("secondOnes");
let secondTens = document.getElementById("secondTens");
let digits = document.querySelector(".digits");
let digit = document.querySelectorAll(".digit");
let reset = document.createElement("DIV");
let resetText = document.createTextNode("Reset");
button.classList.add("buttonClass");
reset.classList.add("buttonClass");
body.style.display = "flex";
body.style["flex-direction"] = "column";
body.style["justify-content"] = "center";
body.style["align-items"] = "center";
body.style.background = "paleTurquoise"
button.appendChild(buttonText);
body.appendChild(button);
reset.appendChild(resetText);
body.appendChild(reset);
let buttonClass = document.querySelectorAll(".buttonClass")
buttonClass.forEach((item)  =>  {
    item.style["margin-top"] = "30px";
    item.style.width = "200px";
    item.style.height = "35px";
    item.style.border = "1px solid black";
    item.style.display = "flex";
    item.style["justify-content"] = "center";
    item.style["align-items"] = "center";
    item.style["border-radius"] = "10px";
})
button.style.background = "aquamarine"
reset.style.background = "salmon"
let breakFunc = ()    =>  {
    clearInterval(run);
}
const start = function()    {
    let func = ()  =>  {
        reset.addEventListener("click", ()  =>  {
            return window.clearInterval(run);
        })
        if(msTens.innerHTML == "-") {
            msTens.innerHTML = "1"
        }   else if(parseInt(msTens.innerHTML) < 9)  {
                msTens.innerHTML = parseInt(msTens.innerHTML)+1 + "";
        }   else if(msHundreds.innerHTML == "-")    {
                msHundreds.innerHTML = "1"
                msTens.innerHTML = "0";
        }   else if(parseInt(msHundreds.innerHTML) < 9) {
                msHundreds.innerHTML = parseInt(msHundreds.innerHTML) + 1 + "";
                msTens.innerHTML = "0";
        }   else if(secondOnes.innerHTML == "-")  {
                msTens.innerHTML = "0";
                msHundreds.innerHTML = "0";
                secondOnes.innerHTML = "1";
        }   else if(parseInt(secondOnes.innerHTML) < 9) {
                msTens.innerHTML = "0"
                msHundreds.innerHTML = "0"
                secondOnes.innerHTML = parseInt(secondOnes.innerHTML) + 1 + ""
        }   else {
                msTens.innerHTML = "0";
                msHundreds.innerHTML = "0";
                secondOnes.innerHTML = "0";
                secondTens.innerHTML = "1";
                digits.style.color = "red";
                window.clearInterval(run)
        }
    }
    let run =  window.setInterval(func, 10);
}
button.addEventListener("click", start)
reset.addEventListener("click", ()  =>  {
    digit.forEach((item)    =>  {
        return item.innerHTML != ":" ? item.innerHTML = "0" : item.innerHTML = ":";
    })
    digits.style.color = "black";
})
