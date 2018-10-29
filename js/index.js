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
logo.setAttribute('src', siteContent['nav']['img-src'])



// =====Navigation=====

const navSelector = document.querySelector("nav");
navSelector.appendChild(document.createElement("a"));
navSelector.appendChild(document.createElement("a"));

const navLinks = document.querySelectorAll("nav a");
const navKeys = Object.keys(siteContent["nav"]);
navLinks.forEach(function(_element,index){
  _element.textContent = siteContent["nav"][navKeys[index]];
  _element.style.color = "green";
})

/// ====CTA====

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


// ====DOM-ish stuff====

const header1 = document.querySelector(".cta-text");
header1.prepend(document.createElement("h1"));
header1.prepend(document.createElement("h1"));
header1 = document.querySelectorAll(".cta-text h1");

header1.forEach(function(_element,index){
  _element.textContent = siteContent["cta"]["h1"].split(" ")[index];
})

const getButton = document.querySelector(".cta-text button");
getButton.textContent = siteContent["cta"]["button"];


// ====Main Content====

const topContent = document.querySelectorAll(".main-content .text-content h4, .main-content .text-content p");
const mainKeys = Object.keys(siteContent["main-content"]);
mainKeys.splice(4,1);

topContent.forEach(function(_element,index){
    _element.textContent = siteContent["main-content"][mainKeys[index]];
})

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


// ====Footer====

const footerText = document.querySelector("footer p");
footerText.textContent = siteContent["footer"]["copyright"];

© 2018 Great Idea! Inc.