const digits = document.querySelectorAll('.digit');

digits[0].textContent = digits[1].textContent = digits[3].textContent = digits[4].textContent = 0;

window.setInterval( _ => {
  if(digits[0].textContent != 1){
    if(digits[4].textContent < 9) {
      digits[4].textContent++;
    } else {
      digits[3].textContent++;
      digits[4].textContent = 0;
    }

    if(digits[3].textContent == 9) {
      digits[1].textContent++;
      digits[3].textContent = 0;
    }

    if(digits[1].textContent == 10) {
      digits[0].textContent++;
      digits[1].textContent = 0;
    }
  }
}, 10)