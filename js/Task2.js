
// Ans. 2.0
// Add 2 new items to nav.
// const node = document.querySelector('nav') //(1)
// console.log(node) //(2)
// el1 = document.createElement('a'); //(3)
// console.log(el1) //(5)
// el1.textContent = "Doodly"
// el1.href = "#"
// el1.style.color = "purple"
// node.appendChild(el1) //(4)
// el2 = document.createElement('a'); //(3)
// console.log(el2) //(5)
// el2.textContent = "Doodly"
// el2.href = "#" //(7)
// el2.style.color = "blue"
// node.prepend(el2) //(4)
// console.log(el1,el2) //(6)
// (1) Address the nav.
// (2) log to verify...
/* output: {<nav>
                <a href="#" style="color: green;">Services</a>
                <a href="#" style="color: green;">Product</a>
                <a href="#" style="color: green;">Vision</a>
                <a href="#" style="color: green;">Features</a>
                <a href="#" style="color: green;">About</a>
                <a href="#" style="color: green;">Contact</a>
            </nav> }*/
// (3) create the elements. This needs to be "a".
// (4) append/prepend the elements
// (5) output: <nav-item-0></nav-item-0>
// (6) output: <a href="#" style="color: purple;">Doodly</a> <a href="#" style="color: purple;">Doodly</a>
// (7) href is a css element like fontSize(font-size in js?)

// Ans 2.1
// const addNav = document.querySelector('nav')
// el2 = document.createElement('a')
// el2.textContent = "Homie"
// el1 = el2 //(1)
// addNav.appendChild(el2)
// addNav.prepend(el1)
// console.log(addNav)
// (1) This doesnt make a copy. How to make a copy?
