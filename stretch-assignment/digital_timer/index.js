let i = 0;
let x = 0;
let y = 0;
let z = 0;

let time = setInterval(function timer(){
    if(i<9){
        i += 1;
    }else{
        i=0;
        x+=1;
        if(x===9){
            x = 0;
            y += 1;
        }if(y===10){
            z = 1;
            y = 0;
            document.getElementById('msTens').textContent = 0;
            document.getElementById('msHundreds').textContent = 0;
            document.getElementById('secondOnes').textContent = 0;
            document.getElementById('secondTens').textContent = 1;
            document.querySelectorAll('.digit').forEach(item => item.classList.add('redDigit'));
            stopTimer();
        }
    }
    document.getElementById('msTens').textContent = i;
    document.getElementById('msHundreds').textContent = x;
    document.getElementById('secondOnes').textContent = y;
    document.getElementById('secondTens').textContent = z;
    
}, 10)

function stopTimer(){
    clearInterval(time);
}
