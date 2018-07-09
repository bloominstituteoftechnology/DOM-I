totalMS=0;
let interval;
incrementTimer=()=>{
    interval=setInterval(function() {
    if (totalMS<10000) {
    totalMS+=10;
    let seconds=Math.floor(totalMS/1000);
    let milliseconds=(totalMS-seconds*1000)/10;
    seconds+='';
    milliseconds+='';
    if (seconds.length===1) {
        seconds='0'+seconds
    }
    if (milliseconds.length===1) {
        milliseconds='0'+milliseconds
    }
    if (seconds==='10') {
        toggle=0;
        document.querySelector('.digits').style.color='red';
        document.getElementById('startButton').disabled=false;
    }
    let totalTime=seconds+''+milliseconds;
    document.getElementById('secondTens').innerHTML=totalTime[0];
    document.getElementById('secondOnes').innerHTML=totalTime[1];
    document.getElementById('msHundreds').innerHTML=totalTime[2];
    document.getElementById('msTens').innerHTML=totalTime[3];} 
},10);
}
reset=()=>{
    clearInterval(interval);
    document.getElementById('startButton').disabled=false;
    totalMS=0;
    document.getElementById('secondTens').innerHTML=0;
    document.getElementById('secondOnes').innerHTML=0;
    document.getElementById('msHundreds').innerHTML=0;
    document.getElementById('msTens').innerHTML=0;
}
let startBtn=document.createElement('BUTTON');
let startBtnText=document.createTextNode('Start Me Up');
startBtn.setAttribute('id','startButton');
startBtn.appendChild(startBtnText);
document.querySelector('.digits').appendChild(startBtn);
document.getElementById('startButton').addEventListener('click',()=>{document.getElementById('startButton').disabled=true; incrementTimer();});
let resetBtn=document.createElement('Button');
let resetBtnText=document.createTextNode('Reset Me');
resetBtn.setAttribute('id','resetButton');
resetBtn.appendChild(resetBtnText);
document.querySelector('.digits').appendChild(resetBtn);
document.getElementById('resetButton').addEventListener('click',()=>{document.getElementById('startButton').disabled=false;reset()});
document.getElementById('startButton').style.backgroundColor='green';
document.getElementById('resetButton').style.backgroundColor='red';
document.body.style.fontFamily='Open Sans';
