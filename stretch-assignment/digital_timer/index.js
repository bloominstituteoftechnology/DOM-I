const digits = document.querySelector('.digits');
digits.style.backgroundColor = 'grey';
 
 
 
  
var timeLeft =10;
 var counter = 1;
 var first = document.querySelector('secondOnes');
  var hundred= document.getElementById('msHundreds');
 var tenth = document.getElementById('msTens');
 var bdiv = document.querySelector('#bdiv');
 bdiv.style.backgroundColor ='orange';
 var Mybutton = document.createElement('h1');
 bdiv.appendChild(Mybutton);

 Mybutton.textContent ='HAY!!';

  var sec =document.getElementById('secondOnes') 
    var interval =  setInterval(clock, 1000);

  
  
   let firstCounter =1;
  let secondCounter =1;
  let thirdCounter =1;

  const tenth = document.getElementById('msTens')
let firstCounter = 1
function timer(){
    const tenMs = setInterval(() => {
        tenth.innerText = firstCounter++
        if (firstCounter == 10){
            firstCounter = 0
        }
    }, 10)
}
// 10 ms
const tenMs = setInterval(() => {
    tenth.innerText = firstCounter++
    if (firstCounter == 10){
        firstCounter = 0
    }
}, 10)
// 100 ms
const hundMs = setInterval(() => {
    hundredth.innerText = secondCounter++
    if (secondCounter == 10){
        secondCounter = 0
    }
}, 100)
// 1 second
const oneSec = setInterval(() => {
    ones.innerText = thirdCounter++
    if (thirdCounter == 10){
        thirdCounter = 0
    }
}, 1000)
// 10 seconds
const tenSec = setInterval(() => {
    tens.innerText = 1
    tenth.innerText = 0
    clearInterval(tenMs)
    clearInterval(hundMs)
    clearInterval(oneSec)
    clearInterval(tenSec)
    digits.classList.add('redDigit')
}, 10000)
 
 timer()
  
  
 myButton.addEventListener('click', function(){
    clearInterval(tenMs)
    clearInterval(hundMs)
    clearInterval(oneSec)
    clearInterval(tenSec)
    firstCounter = 1
    secondCounter = 1
    thirdCounter = 1
})
tenth.innerText = 0
hundredth.innerText = 0
ones.innerText = 0
tens.innerText = 0
digits.classList.remove('redDigit')

 
 
 
  
//  button.addEventListener('click', clock );
 
 