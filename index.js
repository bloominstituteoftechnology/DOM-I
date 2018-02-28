// setInterval( (seconds) => {
// }, 1000);
let ones = document.getElementById('ones');
let tens = document.getElementById('tens');
let tenths = document.getElementById('tenths');
let hundredths = document.getElementById('hundredths');
let count = 0;
let timer = setInterval(()=>{
    console.log(count / 1000);
    if (count >= 10000) {
        ones.style.color = 'red';
        tens.style.color = 'red';
        tenths.style.color = 'red';
        hundredths.style.color = 'red';
        flashNumbers();
        clearInterval(timer);
    }
    if (10 % count === 0) {
        hundredths.textContent = count;
        // tenths.textContent = count;
    }
    if (1000 % count === 0) {
        tens.textContent = 1000 / count;
    }
    count += 10;
}, 10);

const flashNumbers = () => {
    setInterval(() => {
        ones.style.color === 'red'? ones.style.color = 'black' : ones.style.color = 'red';
        tens.style.color === 'red'? tens.style.color = 'black' : tens.style.color = 'red';
        tenths.style.color === 'red'? tenths.style.color = 'black' : tenths.style.color = 'red';
        hundredths.style.color === 'red'? hundredths.style.color = 'black' : hundredths.style.color = 'red';        
    }, 500);
    console.log("FlashNumbers");
}