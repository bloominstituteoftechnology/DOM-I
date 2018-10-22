let timer = document.getElementsByClassName('digit');

timer = Array.from(timer);

window.setInterval(function() {
    console.log('testing');
    timer.forEach(item => {
        item.style.color = 'red';
    })
}, 10000);

console.log(timer)