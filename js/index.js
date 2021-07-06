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

// creating selectors to put data into elements.

//nav
let navOne = document.querySelector('a:nth-of-type(1)');
navOne.textContent = siteContent["nav"]["nav-item-1"];

let navTwo = document.querySelector('a:nth-of-type(2)');
navTwo.textContent = siteContent["nav"]["nav-item-2"];

let navThree = document.querySelector('a:nth-of-type(3)');
navThree.textContent = siteContent["nav"]["nav-item-3"];

let navFour = document.querySelector('a:nth-of-type(4)');
navFour.textContent = siteContent["nav"]["nav-item-4"];

let navFive = document.querySelector('a:nth-of-type(5)');
navFive.textContent = siteContent["nav"]["nav-item-5"];

let navSix = document.querySelector('a:nth-of-type(6)');
navSix.textContent = siteContent["nav"]["nav-item-6"]; // bracket notation

//h1

let headerOne = document.querySelector('h1');
headerOne.textContent = siteContent.cta.h1; // dot notation

//image

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

//button
let button = document.querySelector('button');
button.textContent = siteContent.cta.button;

//features 
let featuresOne = document.querySelector(".text-content > h4");
featuresOne.textContent = siteContent["main-content"]["features-h4"];

let featuresTwo = document.querySelector(".text-content > p");
featuresTwo.textContent = siteContent["main-content"]["features-content"];

//about 
let aboutOne = document.querySelector(".top-content div:nth-child(2) > h4");
aboutOne.textContent = siteContent["main-content"]["about-h4"];

let aboutTwo = document.querySelector(".top-content div:nth-child(2) > p");
aboutTwo.textContent = siteContent["main-content"]["about-content"];

//middle img
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//services
let servicesOne = document.querySelector(".bottom-content div:nth-child(1) > h4");
servicesOne.textContent = siteContent["main-content"]["services-h4"];

let servicesTwo = document.querySelector(".bottom-content div:nth-child(1) > p");
servicesTwo.textContent = siteContent["main-content"]["services-content"];

//product

let productOne = document.querySelector(".bottom-content div:nth-child(2) > h4");
productOne.textContent = siteContent["main-content"]["product-h4"];

let productTwo = document.querySelector(".bottom-content div:nth-child(2) > p");
productTwo.textContent = siteContent["main-content"]["product-content"];

//vision
let visionOne = document.querySelector(".bottom-content div:nth-child(3) > h4");
visionOne.textContent = siteContent["main-content"]["vision-h4"];

let visionTwo = document.querySelector(".bottom-content div:nth-child(3) > p");
visionTwo.textContent = siteContent["main-content"]["vision-content"];

//contact
let cOne = document.querySelector(".contact > h4");
let cTwo = document.querySelector(".contact > p:nth-child(2)");
let cThree = document.querySelector(".contact > p:nth-child(3)");
let cFour= document.querySelector(".contact > p:nth-child(4)");

cOne.textContent = siteContent["contact"]["contact-h4"];
cTwo.textContent = siteContent["contact"]["address"];
cThree.textContent = siteContent["contact"]["phone"];
cFour.textContent = siteContent["contact"]["email"];

//footer
let footer = document.querySelector("footer > p");
footer.textContent = "Copyright Great Idea! 2019";

//add two new items to nav

const newNavOne = document.createElement('a');
newNavOne.textContent = "New A Tag";
const parentElement = document.querySelector('nav');
parentElement.append(newNavOne);

const newNavTwo = document.createElement('a');
newNavTwo.textContent = "New Tag Number Two";
const parentElementTwo = document.querySelector('nav');
parentElementTwo.append(newNavTwo);

//change nav text to green
const navColor = document.querySelectorAll('a');
navColor.forEach(element => {
  element.style.color = "green";
});
