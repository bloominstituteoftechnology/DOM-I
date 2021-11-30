const { text } = require("express");

const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

const atags = document.querySelectorAll('nav a');
const atagsarray = Array.from(atags);
const navServices = document.querySelector('.nav-item-1');
const navProduct = document.querySelector('.nav-item-2');
const navVision = document.querySelector('.nav-item-3');
const navFeatures = document.querySelector('.nav-item-4');
const navAbout = document.querySelector('.nav-item-5');
const navContact = document.querySelector('.nav-item-6');

navServices.textContent = siteContent['nav']['nav-item-1']
navProduct.textContent = siteContent['nav']['nav-item-2']
navVision.textContent = siteContent['nav']['nav-item-3']
navFeatures.textContent = siteContent['nav']['nav-item-4']
navAbout.textContent = siteContent['nav']['nav-item-5']
navContact.textContent = siteContent['nav']['nav-item-6']

const navtag = document.querySelector('nav');
navtag.textContent = 'nav';

let h1text =document.getElementsByTagName("h1");
h1text.setAttribute(textContent, siteContent["cta"]["h1"]);

let buttontext =document.getElementsByTagName("button");
buttontext.setAttribute(textContent, siteContent["cta"]["button"]);

let Features =document.getElementsByClassName("text-content");
Features.h4.textContent = siteContent["main-content"]["features-h4"];
Features.p.textContent = siteContent["main-content"]["features-content"];

let About =document.getElementsByTagClass("text-content2");
About.h4.textContent = siteContent["main-content"]["about-h4"];
About.p.textContent = siteContent["main-content"]["about-content"];

let Services =document.getElementsByClassName("text-Content3");
Services.h4.textContent = siteContent["main-content"]["services-h4"];
Services.p.textContent = siteContent["main-content"]["services-content"];

let Product =document.getElementsByClassName("text-Content4");
Product.h4.textContent = siteContent["main-content"]["product-h4"];
Product.p.textContent = siteContent["main-content"]["product-content"];


let Vision =document.getElementsByClassName("text-Content5");
Vision.h4.textContent = siteContent["main-content"]["vision-h4"];
Vision.p.textContent = siteContent["main-content"]["vision-content"];

let Contact =document.getElementsByClassName("contact");
Contact.h4.textContent = siteContent["contact"]["contact-h4"];
Contact.p.textContent = siteContent["contact"]["address"];
Contact.p.textContent = siteContent["contact"]["phone"];
Contact.p.textContent = siteContent["contact"]["email"];

let Footer = document.getElementsByTagName("footer");
Footer.textContent = siteContent["footer"]["copyright"];

let navClass = document.getElementsByTagName("a");
navClass.setAttribute(class, "italic");

let FooterClass = document.getElementsByTagName("footer");
FooterClass.setAttribute(class, "bold");

let logo = document.getElementsById("logo-img");
logo.setAttribute("src", siteContent["images"]["logo-img"]);

let cta = document.getElementsById("cta-img");
cta.setAttribute("src", siteContent["images"]["cta-img"]);

let midimg = document.getElementsById("middle-img");
midimg.setAttribute("src", siteContent["images"]["middle-img"]);
