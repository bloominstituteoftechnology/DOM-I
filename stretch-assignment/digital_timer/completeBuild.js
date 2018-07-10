let mainDiv = document.createElement('div'); 

mainDiv.setAttribute('class', 'digits');


// let testText = document.createTextNode("This is just a test to see if i can get something on the board");

// mainDiv.appendChild(testText); 
// let body = document.querySelector("body");
//body.appendChild(mainDiv); 

document.body.appendChild(mainDiv); 

document.body.style.color = "Black"; 



let innerDiv1 = document.createElement("div"); 
let innerDiv2 = document.createElement("div"); 
let innerDiv3 = document.createElement("div"); 
let innerDiv4 = document.createElement("div"); 
let innerDiv5 = document.createElement("div"); 

const innerDivs = [innerDiv1, innerDiv2, innerDiv3, innerDiv4, innerDiv5];

const dash = document.createTextNode("-");
const dash2 = document.createTextNode("-");
const dash3 = document.createTextNode("-");
const dash4 = document.createTextNode("-");

const colon = document.createTextNode(":");

const idNames = ["secondTens", "secondOnes", "colon", "msHundreds", "msTens"];

const innerText = [dash, dash2, colon, dash3, dash4];

let i = 0; 
innerDivs.forEach(function(divElement){
    divElement.setAttribute('class', 'digit');
    divElement.setAttribute('id', idNames[i]);
    divElement.appendChild(innerText[i]); 
    mainDiv.appendChild(divElement);
    i++;
});


function startTimer () {
    mh++; 
    if(mh ===10){
        mh = 0; 
        mt++; 
    }
   if (mt === 10){
       mt = 0; 
       so++;
   }
   if(so === 10){
       so = 0;
       st++;
        
   }
   
   msHundreds.innerHTML = mh;
   msDigits.innerHTML = mt;
   secondOnes.innerHTML = so; 
   secondTens.innerHTML = st;
   if (st === 1){
       digitsClass.style.color = "Red";
        stopTimer(); 
   }
   }
   
   
   function stopTimer () {
    clearInterval(intervalID); 
    
   }
   function resetTimer () {
       so = 0;
       mh = 0;
       st = 0;
       mt = 0;
       msHundreds.innerHTML = mh;
       msDigits.innerHTML = mt;
       secondOnes.innerHTML = so; 
       secondTens.innerHTML = st;
   }
   
   let msDigits = document.querySelector("#msTens"); 
   let msHundreds = document.querySelector("#msHundreds");
   let secondOnes = document.querySelector("#secondOnes");
   let secondTens = document.querySelector("#secondTens"); 
   
   let so = 0;
   let mh = 0;
   let st = 0;
   let mt = 0;
   //^four variables for each digit. 
   
   let digitsClass = document.querySelector(".digits"); 
    
   
   let start = document.createElement("button"); 
   let stop = document.createElement("button"); 
   let reset = document.createElement("button");
   
   let startText = document.createTextNode("Start");//Sets Place for text;
   let stopText = document.createTextNode("Stop");//Sets Place for text;
   let resetText = document.createTextNode("Reset");
   
   start.appendChild(startText);
   stop.appendChild(stopText); 
   reset.appendChild(resetText); 
   
   let body = document.querySelector("body");
   body.appendChild(start);
   body.appendChild(stop); 
   body.appendChild(reset); 
   
   let buttons = document.querySelectorAll("button");
   
   let intervalID; 
   
   function timerGo () {
       intervalID = window.setInterval(startTimer, 10);
   }
   
   buttons[0].addEventListener("click", timerGo, false); 
    
   buttons[1].addEventListener("click", stopTimer, false); 
   buttons[2].addEventListener("click", resetTimer, false); 



