const digitalTimer = () => {
    let ticked = false;

    const tick = () => {
        if (ticked) {
            if (Number(msTens.innerText) < 9) {
                msTens.innerText = Number(msTens.innerText) + 1;
            }
            else if (Number(msHundreds.innerText) < 9) {
                msTens.innerText = 0;
                msHundreds.innerText = Number(msHundreds.innerText) + 1;
            }
            else if (Number(secondOnes.innerText) < 9) {
                msTens.innerText = 0;
                msHundreds.innerText = 0;
                secondOnes.innerText = Number(secondOnes.innerText) + 1;
            }
            else {
                msTens.innerText = 0;
                msHundreds.innerText = 0;
                secondOnes.innerText = 0;
                secondTens.innerText = Number(secondTens.innerText) + 1;
                clearInterval(newDigitalTimer);
                document.querySelector('div.digits').style.color = 'purple';
            }
        }
        else {
            const secondTens = document.querySelector("#secondTens");
            const secondOnes = document.querySelector("#secondOnes");
            const msHundreds = document.querySelector("#msHundreds");
            const msTens = document.querySelector("#msTens");
            secondTens.innerText = 0;
            secondOnes.innerText = 0;
            msHundreds.innerText = 0;
            msTens.innerText = 1;
        }
        ticked = true;
    }
    let newDigitalTimer = window.setInterval(tick, 10);
}

const button = document.createElement('div');

button.style.display = 'block';
button.style.textAlign = 'center';
button.style.backgroundColor = 'gray';
button.style.border = '1px solid black';
button.style.padding = '12px 18px';

button.innerText = 'Click me, yo!';

let digits = document.querySelector('.digits');
digits.appendChild(button);


button.onclick = digitalTimer;
