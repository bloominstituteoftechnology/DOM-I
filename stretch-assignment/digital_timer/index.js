// Add title

// const myTitle = document.querySelector('body');
// myTitle.innerHTML = "<h1>My Pomodoro</h1>";

// Add second tens

// const mySecondTens = document.querySelector('#secondTens');
const mySecondTens = document.createElement('p');
const secondTens = document.querySelector('#secondTens');
mySecondTens.innerText = "0";
secondTens.appendChild(mySecondTens);

// Add second ones 

const mySecondOnes = document.createElement('p');
const secondOnes = document.querySelector('#secondOnes');
mySecondOnes.innerText = "0";
secondOnes.appendChild(mySecondOnes);

// Add ms hundreds

const myMsHundreds = document.createElement('p');
const msHundreds = document.querySelector('#msHundreds');
myMsHundreds.innerText = "0";
msHundreds.appendChild(myMsHundreds);

// Add ms tens

const myMsTens = document.createElement('p');
const msTens = document.querySelector('#msTens');
myMsTens.innerText = "0";
msTens.appendChild(myMsTens);

// Add button 

// const startButton = document.createElement('button');
// const myDigits = document.getElementsByClassName('digits');
// myDigits.innerText = "button test";
// startButton.appendChild(myDigits);

// Add timer functionality 


// setInterval(function(){ alert("Hello"); }, 3000);

// const myButtonGo = document.createElement("input");
// const myDigits = document.getElementsByClassName('digits');
// myButtonGo.innerText = "Testing";
// myDigits.appendChild(myButtonGo);


// function createButton(context, func) {
//     const button = document.createElement("input");
//     button.type = "button";
//     button.value = "Let's go!";
//     button.onclick = func;
//     context.appendChild(button);
// }

// window.onload = function() {
//     createButton(document.body, function() {
//         highlight(this.parentNode.childNodes[1]);
//         // Example of different context, copied function etc
//         // createButton(this.parentNode, this.onclick);
//     });
// };

// button.addEventListener('click', () => {
//     body.style.backgroundColor = "red";
//   });




const btn = document.createElement("BUTTON");        // Create a <button> element
const text = document.createTextNode("Let's go!");       // Create a text node
btn.appendChild(text);                                // Append the text to <button>
document.body.appendChild(btn);  

btn.addEventListener('click', () => {
        btn.style.color = "red";
        // function startTime() {
        //     var today = new Date();
        //     var h = today.getHours();
        //     var m = today.getMinutes();
        //     var s = today.getSeconds();
        //     m = checkTime(m);
        //     s = checkTime(s);
        //     document.getElementById('secondTens').innerHTML =
        //     h + ":" + m + ":" + s;
        //     var t = setTimeout(startTime, 500);
        // // }
        // function checkTime(i) {
        //     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        //     return i;
        // }
      });