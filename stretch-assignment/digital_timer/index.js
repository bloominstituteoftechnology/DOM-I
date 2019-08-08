let seconds = 0;

function timer() {
    t = setTimeout(add, 10);
    // console.log(t);
}

timer();

function add(){
    seconds++;
    console.log(seconds);
    timer();
}