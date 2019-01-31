const digit = document.querySelectorAll('.digit');

ms10 = 0;
ms100 = 0;
sec1 = 0;
sec10 = 0;

digit[0].innerHTML = sec10;
digit[1].innerHTML = sec1;
digit[3].innerHTML = ms100;
digit[4].innerHTML = ms10;

const ms10func = () => {
  ms10++
  if(ms10 === 10) {
    ms10 = 0;
  }
  digit[3].innerHTML = ms10; 
}

const ms100func = () => {
  ms100++
  if(ms100 === 10) {
    ms100 = 0;
  }
  digit[4].innerHTML = ms100; 
}

const sec1func = () => {
  sec1++
  if(sec1  === 10) {
    sec1 = 0;
  }
  digit[1].innerHTML = sec1; 
}

const sec10func = () => {
  sec10++
  if(sec10  === 10) {
    sec10 = 0;
  }
  digit[0].innerHTML = sec10; 
}

setInterval(ms100, 10)
setInterval(ms10func, 100)
setInterval(sec1func, 1000)
setInterval(sec10func, 10000)