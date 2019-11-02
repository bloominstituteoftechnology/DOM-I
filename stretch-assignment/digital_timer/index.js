
const first = document.getElementById("secondTens");
const second = document.getElementById("secondOnes");
const colon = document.getElementById("colon");
const third = document.getElementById("msHundreds");
const fourth = document.getElementById("msTens");
const timer = document.querySelectorAll(".digits div");

var num = 0;
var numString = "";
let firstTemp= "0";
let secondTemp= "0";
let thirdTemp= "0";
let fourthTemp= "0";
var x = "";

let changeToWhite = function(obj) {
  obj.forEach(ele => {
    ele.classList.remove('redDigit');
    ele.classList.remove('grayDigit');
    ele.classList.add('whiteDigit');
  });
}
let changeToRed = function(obj) {
  obj.forEach(ele => {
    ele.classList.remove('whiteDigit');
    ele.classList.remove('grayDigit');
    ele.classList.add('redDigit');
  });
}

let changeToGray = function(obj) {
  obj.forEach(ele => {
    ele.classList.remove('whiteDigit');
    ele.classList.remove('redDigit');
    ele.classList.add('grayDigit');
  });
}

var myFunction = function() {
  setBase(num);
  ++num;
  numString = num.toString();
  if (num <10){
    fourthTemp = numString[0];
  }
  else if (num <100) {
    thirdTemp = numString[0];
    fourthTemp = numString[1];
  }
  else if (num <1000) {
    secondTemp = numString[0];
    thirdTemp = numString[1];
    fourthTemp = numString[2];
  }
  else {
    firstTemp = numString[0]
    secondTemp = numString[1];
    thirdTemp = numString[2];
    fourthTemp = numString[3];
  }
  //change each reference to document in DOM
first.textContent = firstTemp;
second.textContent = secondTemp;
third.textContent = thirdTemp;
fourth.textContent = fourthTemp;
    
//stop timer at 10:00 and change to red
  if (num > 999) {
    clearInterval(x);
    num = 0;
    enableStart();
    changeToRed(timer);
    
  }
}

let enableStart = function() {
  startTimer.setAttribute('onclick', 'x = setInterval(myFunction, 10); disableStart()');
  startTimer.style.backgroundColor = "green";
  startTimer.textContent = "Start";
  changeToGray(timer);
}

let disableStart = function() {
  startTimer.setAttribute('onclick', 'clearInterval(x); enableStart();');
  startTimer.style.backgroundColor = "red";
  startTimer.textContent = "Stop";
  changeToWhite(timer);
}

let setBase = function(num) {
  if(num==0){
    reset();
  }
  
}
let reset = function() {
  num=0;
  first.textContent = "-";
  second.textContent = "-";
  third.textContent = "-";
  fourth.textContent = "-";
  firstTemp = "0";
  secondTemp = "0";
  thirdTemp = "0";
  fourthTemp = "0";
  changeToWhite(timer);
}



document.querySelector(".digits").appendChild(document.createElement("section"));
document.querySelector(".digits section").appendChild(document.createElement("button"));
document.querySelector(".digits section").appendChild(document.createElement("button"));

let startTimer = document.querySelectorAll("button")[0];
startTimer.classList.add(".start");
startTimer.textContent = "Start";
enableStart();

let resetTimer = document.querySelectorAll("button")[1];
resetTimer.classList.add(".reset");
resetTimer.textContent = "Reset";
resetTimer.setAttribute('onclick', 'reset(); clearInterval(x); enableStart();');


let buttons = document.querySelectorAll("button");
buttons.forEach(ele => {
  ele.style.padding = "10px";
  ele.style.margin = "10px";
  ele.style.width = "70px";
  ele.style.border = "1px solid grey";
});
startTimer.style.backgroundColor = "green";
resetTimer.style.backgroundColor = "lightgrey";


let timerBody = document.querySelector(".digits");
const timeStyle = timerBody.style;
timeStyle.backgroundColor = 'MidnightBlue ';
timerBody.style.padding = '10px';
timerBody.style.border = '2px solid lightgrey'
timerBody.style.minWidth = '200px';
timerBody.style.textAlign = 'center';
timerBody.style.marginTop = "200px";
first.classList.add("whiteDigit");
second.classList.add("whiteDigit");
third.classList.add("whiteDigit");
fourth.classList.add("whiteDigit");
colon.classList.add("whiteDigit");
