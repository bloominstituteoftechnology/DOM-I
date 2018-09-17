let digs = document.querySelectorAll(".digits .digit");

let ten = document.querySelector(".digits #secondTens");
let one = document.querySelector(".digits #secondOnes");
let tenth = document.querySelector(".digits #msHundreds");
let hundredth = document.querySelector(".digits #msTens");

hundredth.innerText = 0;
tenth.innerText = 0;
one.innerText = 0;
ten.innerText = 0;



// const point0x = setInterval(
//   () => (hundredth.innerText = parseInt(hundredth.innerText) + 1),
//   10
// );
// const pointx = setInterval(() => {
//   tenth.innerText = parseInt(tenth.innerText) + 1;
//   hundredth.innerText = 0;
// }, 100);
// const xpoint = setInterval(() => {
//   tenth.innerText = 0;
//   hundredth.innerText = 0;
//   one.innerText = parseInt(one.innerText) + 1;
// }, 1000);


let hundredths = 0;

const aTimer = setInterval(() =>{
    hundredths += 1;
    let stringed = String(hundredths)
    if (stringed.length === 1){
        hundredth.innerText = stringed
    }
    if(stringed.length ===2){
        tenth.innerText = stringed[0];
        hundredth.innerText = stringed[1];
    }
    if (stringed.length === 3){
        one.innerText = stringed[0];
        tenth.innerText = stringed[1];
        hundredth.innerText = stringed[2];
    }
},10)

setInterval(() =>{
    clearInterval(aTimer)
    ten.innerText = 1;
    one.innerText = 0;
    tenth.innerText = 0;
    hundredth.innerText = 0;
    digs.forEach(x => x.style.color = 'red')
}, 10000)