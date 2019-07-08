let timer = window.setInterval(callback, 1000);
let counter = 0;

function callback() {
  if (counter < 10) counter++;
  console.log(counter);
}

callback();
