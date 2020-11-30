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

const navItem = document.querySelectorAll('nav a');
// console.log(navItem)
navItem[0].textContent = siteContent["nav"]["nav-item-1"];
navItem[1].textContent = siteContent["nav"]["nav-item-2"];
navItem[2].textContent = siteContent["nav"]["nav-item-3"];
navItem[3].textContent = siteContent["nav"]["nav-item-4"];
navItem[4].textContent = siteContent["nav"]["nav-item-5"];
navItem[5].textContent = siteContent["nav"]["nav-item-6"];

const title =  document.querySelector('h1');
title.textContent = siteContent["cta"]["h1"];
const button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];
let ctaImg = document.querySelector("#cta-img");
// console.log(ctaImg)
ctaImg.src = siteContent["cta"]["img-src"];

const topH = document.querySelectorAll(".top-content .text-content h4");
const topP = document.querySelectorAll(".top-content .text-content p");
console.log(topH);
console.log(topP);
topH[0].textContent = siteContent["main-content"]["features-h4"];
topH[1].textContent = siteContent["main-content"]["about-h4"];
topP[0].textContent = siteContent["main-content"]["features-content"];
topP[1].textContent = siteContent["main-content"]["about-content"];

const midImg = document.querySelector(".middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const botH = document.querySelectorAll(".bottom-content .text-content h4");
const botP = document.querySelectorAll(".bottom-content .text-content p");

botH[0].textContent = siteContent["main-content"]["services-h4"];
botH[1].textContent = siteContent["main-content"]["product-h4"];
botH[2].textContent = siteContent["main-content"]["vision-h4"];
botP[0].textContent = siteContent["main-content"]["services-content"];
botP[1].textContent = siteContent["main-content"]["product-content"];
botP[2].textContent = siteContent["main-content"]["vision-content"];