totalMS=0;

setInterval(incrementTimer,10);
function incrementTimer(){
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
        document.querySelector('.digits').style.color='red';
    }
    let totalTime=seconds+''+milliseconds;
    document.getElementById('secondTens').innerHTML=totalTime[0];
    document.getElementById('secondOnes').innerHTML=totalTime[1];
    document.getElementById('msHundreds').innerHTML=totalTime[2];
    document.getElementById('msTens').innerHTML=totalTime[3];
}
}