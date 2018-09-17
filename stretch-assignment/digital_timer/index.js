let digs = document.querySelectorAll(".digits .digit");

let ten = document.querySelector(".digits #secondTens");
let one = document.querySelector(".digits #secondOnes");
let tenth = document.querySelector(".digits #msHundreds");
let hundredth = document.querySelector(".digits #msTens");

hundredth.innerText = 0;
tenth.innerText = 0;
one.innerText = 0;
ten.innerText = 0;



const point0x = setInterval(
  () => (hundredth.innerText = parseInt(hundredth.innerText) + 1),
  10
);
const pointx = setInterval(() => {
  tenth.innerText = parseInt(tenth.innerText) + 1;
  hundredth.innerText = 0;
}, 100);
const xpoint = setInterval(() => {
  tenth.innerText = 0;
  hundredth.innerText = 0;
  one.innerText = parseInt(one.innerText) + 1;
}, 1000);
setInterval(() =>{
    clearInterval(point0x)
    clearInterval(pointx)
    clearInterval(xpoint)
    ten.innerText = 1;
    one.innerText = 0;
    tenth.innerText = 0;
    hundredth.innerText = 0;
    digs.forEach(x => x.style.color = 'red')
}, 10000)
