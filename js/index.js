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
const change1 = document.querySelector('#logo-img').src = 'file:///C:/Users/16143/desktop/Ahmed/DOM-I/img/logo.png';
const change2 = document.querySelector('#cta-img').src = 'file:///C:/Users/16143/desktop/Ahmed/DOM-I/img/header-img.png';
const change3 = document.querySelector('#middle-img').src = 'file:///C:/Users/16143/desktop/Ahmed/DOM-I/img/mid-page-accent.jpg';

const Services = document.querySelectorAll('nav a ')[0].innerHTML = ' Services';
const Product = document.querySelectorAll('nav a ')[1].innerHTML = ' Product';
const Vision = document.querySelectorAll('nav a')[2].innerHTML = ' Vision';
const Features = document.querySelectorAll('nav a')[3].innerHTML = ' Features';
const About = document.querySelectorAll('nav a')[4].innerHTML = ' About';
const Contact = document.querySelectorAll('nav a')[5].innerHTML = ' Contact';


const h1 = document.querySelector('.cta-text h1').innerHTML ="DOM<br>Is<br>Awesome"
const button = document.querySelector('.cta-text button').innerHTML =" Get Started "
let Featuresh4 = document.querySelectorAll('.top-content .text-content h4 ')[0].innerHTML +='Features';
let Featuresp = document.querySelectorAll('.top-content .text-content p  ')[0].innerHTML +='Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
let Abouth4 = document.querySelectorAll('.top-content .text-content h4 ')[1].innerHTML +='About';
let Aboutp = document.querySelectorAll('.top-content .text-content p  ')[1].innerHTML +='About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


let Servicesh4 = document.querySelectorAll('.bottom-content .text-content h4 ')[0].innerHTML +='Services';
let Servicesp = document.querySelectorAll('.bottom-content .text-content p  ')[0].innerHTML +='Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let Producth4 = document.querySelectorAll('.bottom-content .text-content h4 ')[1].innerHTML +='Product';
let Productp = document.querySelectorAll('.bottom-content .text-content p  ')[1].innerHTML +='Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let Visionh4 = document.querySelectorAll('.bottom-content .text-content h4 ')[2].innerHTML +='Vision';
let Visionp = document.querySelectorAll('.bottom-content .text-content p  ')[2].innerHTML +='Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let Contacth4 = document.querySelectorAll('.contact h4')[0].innerHTML +='Contact';
let ContactAddress = document.querySelectorAll('.contact p ')[0].innerHTML +='123 Way 456 Street<br> Somewhere, USA';
let ContactPhone = document.querySelectorAll('.contact p ')[1].innerHTML +='1 (888) 888-8888';
let ContactEmail = document.querySelectorAll('.contact p ')[2].innerHTML +='sales@greatidea.io';
let Footerp = document.querySelectorAll('footer p')[0].innerHTML +='Copyright Great Idea! 2018';


document.querySelector("body").addEventListener("click", function(){
  this.style.backgroundColor = "#FF4F58FF";
});
document.querySelector("body").addEventListener("mouseover", function(){
  this.style.backgroundColor = "gray";
});

document.querySelector(".container").addEventListener("click", function(){
  this.style.backgroundColor = "white";
});

document.querySelector("nav").addEventListener("mouseover", function(){
  this.style.backgroundColor = '#FF4F58FF';
});
document.querySelector(".main-content").addEventListener("mouseover", function(){
  this.style.backgroundColor = '#FF4F58FF';
});
 document.querySelectorAll('nav a')[0].style.color = "green";
 document.querySelectorAll('nav a')[1].style.color = "green";
 document.querySelectorAll('nav a')[2].style.color = "green";
 document.querySelectorAll('nav a')[3].style.color = "green";
 document.querySelectorAll('nav a')[4].style.color = "green";
 document.querySelectorAll('nav a')[5].style.color = "green";

 // Item Creation Step 1: create a new element
// Item Creation Step 1: create a new element
const addEnd= document.createElement("a");
// Item Creation Step 2: add some content to the newly created div
addEns.textContent = "Append";
addEnd.style.color = "green"
// Item Creation Step 3: prepend or append the element to an existing DOM node on the page
const navEnd= document.querySelector('nav');

secondaryContent.append(addEnd);



const addBegining = document.createElement("a");
// Item Creation Step 2: add some content to the newly created div
addBegining.textContent = "Prepend";
addBegining.style.color = "green"
// Item Creation Step 3: prepend or append the element to an existing DOM node on the page
const navBegining = document.querySelector('nav');

pre.prepend(addBegining);
