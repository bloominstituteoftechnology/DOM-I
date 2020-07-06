const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//let logo = document.getElementById("logo-img");
//logo.setAttribute('src', 'https://images.all-free-download.com/images/graphicthumb/cat_cats_eyes_curious_215925.jpg')
//


//const div1 = document.querySelector('#logo-img')

//#1reate selectors by using any of the DOM element's methods
//div1.className = "newClass"
//div1.classList.add('newClass')
//div1.classList.remove('newClass')
//console.log(div1)


//#2Note that IDs have been used on all images. Use the IDs to update src path content
//const newImg = document.querySelectorAll('img')

//newImg.forEach(link => {
  //link.setAttribute('src', 'https://images.all-free-download.com/images/graphicthumb/cat_hangover_relax_213869.jpg')
   
 //})
//console.log(newImg)

//#3
//adding button text
const button = document.querySelectorAll('a')
button[0].textContent = 'Services';
button[1].textContent = 'Product';
button[2].textContent = 'Vision';
button[3].textContent = 'Features';
button[4].textContent = 'About';
button[5].textContent = 'Contact';
console.log(button)
//adding logo image
let logo = document.getElementById("logo-img");
logo.setAttribute('src', '../img/logo.png')
//chaning container to flex
//const cont = document.querySelector("container")

//console.log(cont)

//adding text to button

const button2 = document.querySelector('button')
button2.textContent = 'Get Strarted'
//adding h1 text

const headerText = document.querySelector('h1')
headerText.textContent = "DOm is Awesome"
// adding middle image
let headImg = document.getElementById("cta-img");
headImg.setAttribute('src', '../img/header-img.png')
//adding mid image
let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', '../img/mid-page-accent.jpg')
//adding h4 text
const button3 = document.querySelectorAll('h4')
button3[0].textContent = 'Services';
button3[1].textContent = 'Product';
button3[2].textContent = 'Vision';
button3[3].textContent = 'Features';
button3[4].textContent = 'About';
button3[5].textContent = 'Contact';
//adding txt to p in h4's
const pText1 = document.querySelectorAll('.text-content p')
pText1[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pText1[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pText1[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
pText1[3].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
pText1[4].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
console.log(pText1)
//adding contact info
const pText2 = document.querySelectorAll('.contact p')
pText2[0].textContent ='123 Way 456 Street Somewhere, USA'
pText2[1].textContent ='1 (888) 888-8888'
pText2[2].textContent ='sales@greatidea.io'

//pText2.wrap(20)
//pText2[0].breakAt(3)
//adding copyright
const cRight = document.querySelector('footer p')
console.log(cRight)
cRight.textContent = 'Copyright Great Idea! 2018'
// Change the color of the navigation text to be green.

const header = document.querySelectorAll('.container a')
console.log(header)
//header.style.color = 'green' 
header.forEach(link => {
     link.style.color = 'green'
   })

   //Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
const nav = document.querySelector('nav');
const newA = document.createElement('a')
newA.textContent = 'Hello Dom!'
nav.appendChild(newA)
console.log(newA)
//prepending
const foot = document.querySelector('footer');
const newC = document.createElement('p')
newC.textContent = 'Privacy'
foot.prepend(newC)