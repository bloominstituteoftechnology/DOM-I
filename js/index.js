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

// Setting navItems -----------------------------------
const navItems = document.querySelectorAll('nav a');
navItems[0].textContent = siteContent["nav"]["nav-item-1"];
navItems[1].textContent = siteContent["nav"]["nav-item-2"];
navItems[2].textContent = siteContent["nav"]["nav-item-3"];
navItems[3].textContent = siteContent["nav"]["nav-item-4"];
navItems[4].textContent = siteContent["nav"]["nav-item-5"];
navItems[5].textContent = siteContent["nav"]["nav-item-6"];

// Setting CTA Section  -----------------------------------

  // setting ctaText
let ctaText = document.querySelector('h1');
ctaText.textContent = siteContent["cta"]["h1"];
ctaText.style.justify = "center";

  // setting ctaButton
let ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent["cta"]["button"];

  // setting cta-img
let ctaImg = document.querySelector('.cta #cta-img');
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

// Setting Main Content -----------------------------------

// setting topContent

  // setting topHeadings
let topHeadings = document.querySelectorAll(".top-content .text-content h4");
topHeadings[0].textContent = siteContent["main-content"]["features-h4"];
topHeadings[1].textContent = siteContent["main-content"]["about-h4"];
  // setting topText
let topText = document.querySelectorAll(".top-content .text-content p");
topText[0].textContent = siteContent["main-content"]["features-content"];
topText[1].textContent = siteContent["main-content"]["about-content"];

//  setting mainImg
let middleImg = document.querySelector("#middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

//  setting bottomContent

  // setting bottomHeadings
let bottomHeadings = document.querySelectorAll(".bottom-content .text-content h4");
bottomHeadings[0].textContent = siteContent["main-content"]["services-h4"];
bottomHeadings[1].textContent = siteContent["main-content"]["product-h4"];
bottomHeadings[2].textContent = siteContent["main-content"]["vision-h4"];
  // setting bottomText
let bottomText = document.querySelectorAll(".bottom-content .text-content p");
bottomText[0].textContent = siteContent["main-content"]["services-content"];
bottomText[1].textContent = siteContent["main-content"]["product-content"];
bottomText[2].textContent = siteContent["main-content"]["vision-content"];

// Setting Contact -----------------------------------
let contactHeading = document.querySelector(".contact h4");
contactHeading.textContent = siteContent["contact"]["contact-h4"];

let contactText = document.querySelectorAll(".contact p");
contactText[0].textContent = siteContent["contact"]["address"];
contactText[1].textContent = siteContent["contact"]["phone"];
contactText[2].textContent = siteContent["contact"]["email"];

/* ALTERNATE way to code Contact using .children[index]

let contactSec = document.querySelector('.contact');
contactSec.children[0].textContent = siteContent["contact"]["contact-h4"] 
contactSec.children[1].textContent = siteContent["contact"]["address"] 
contactSec.children[2].textContent = siteContent["contact"]["phone"] 
contactSec.children[3].textContent = siteContent["contact"]["email"] 

*/

// Setting Footer -----------------------------------
let footerText = document.querySelector("footer p");
footerText.textContent = siteContent["footer"]["copyright"];


/*  ALTERNATE way to code footer section

let footerPL = document.querySelector('footer').children[0]
footerPL.textContent = siteContent["footer"]["copyright"] 

*/