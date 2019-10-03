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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])




const mainContent= document.querySelector('.main-content')
// console.log(mainContent.textContent)

mainContent.textContent= "NO, NO, NO"

// =====================================

const header = document.getElementById("cta-img");
header.setAttribute('src', siteContent["cta"]["img-src"])


const h4Left= document.querySelector('h4');
h4Left.textContent = "Hello";






const menuItem = document.querySelectorAll('nav');
console.log(menuItem)
menuItem.textContent= "Hello"






// const email =document.querySelector("site-content p:nth-child(4)")
// contactP3.textContent= "sales@gmail.com";


// ------------ WORKS     WORKS     WORKS ------------------
const contactP3 =document.querySelector(".contact p:nth-child(4)")
contactP3.textContent= "1 (888) 888-8888";
// ------------ WORKS     WORKS     WORKS ------------------
const contactP2 =document.querySelector(".contact p:nth-child(3)")
contactP2.textContent= "Somewhere, USA"

// ------------ WORKS     WORKS     WORKS ------------------
const contactP1 =document.querySelector(".contact p:nth-child(2)")
contactP1.textContent= "123 Way 456 Street ";

// ------------ WORKS     WORKS     WORKS ------------------
const contactH4 =document.querySelector(".contact h4")
contactH4.textContent=  " Contact ";

// ------------ WORKS     WORKS     WORKS ------------------
const ctaButton= document.querySelector(".cta button")
ctaButton.textContent=      "Get Started"

// ------------ WORKS     WORKS     WORKS ------------------
const cta= document.querySelector(".cta h1")
cta.textContent=     "DOM Is Awesome"

// ------------ WORKS     WORKS     WORKS ------------------
const footer = document.querySelector('footer')
footer.textContent=  "Copyright Great Idea! 2018"

// ------------ WORKS     WORKS     WORKS ------------------
const email =document.querySelector("site-content p:nth-child(8)")
contactP3.textContent= "sales@gmail";

// // ------------ WORKS     WORKS     WORKS ------------------
const ctaImg= document.querySelector("#cta-img")
ctaImg.src = 'img/header-img.png';

// ------------ WORKS     WORKS     WORKS ------------------
const headerH1= document.querySelector('h1')
headerH1.style.color= "red";








const midImg= document.querySelector('.middle-img')
midImg.src = '/Users/TimGrey/DOM-I/img/mid-page-accent.jpg';




//                     NOTE  NOT WORKING        NOT WORKING       NOT WORKING       NOTWORKING
// let ctaImg = document.querySelector("#cta-img");
// ctaImg.setAttribute=  "img/header-img.png"
// -------------------------------------------------------------
// const midImg= document.querySelector(".middle-img")
// midImg.setAttribute= ("src", "/Users/TimGrey/DOM-I/img/mid-page-accent.jpg");
// console.log(midImg)

// -------------------------------------------------------------
// const contactP2 =document.querySelector("p")
// contactP2.textContent= "1 (888) 888-8888";


// const textContent1= document.querySelectorAll(".top-content ")
// console.log(textContent1)

