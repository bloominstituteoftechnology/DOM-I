var intervalID = window.setInterval(myCallback, 10, 'Parameter 1', 'Parameter 2');

let ones, tens, tenths, hundreths = 0;
let digitEl = document.querySelector("#msTens");

console.log(digitEl.textContent);

debugger
function myCallback(a, b){
 if(a.textContent === "0"){
    a.textContent = 0;
    myCallback(a);
 } else if(a.textContent === "9"){
    a.textContent = 0;
    myCallback(b);
 } else if(a.textContent === ":"){
    myCallback(a);
 }else{
     a.textContent = a.textContent+1;
    }
}
