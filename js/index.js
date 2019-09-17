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

// nav
const nav = document.querySelectorAll('a');
nav[0].innerText = siteContent["nav"]["nav-item-1"];
nav[1].innerText = siteContent["nav"]["nav-item-2"];
nav[2].innerText = siteContent["nav"]["nav-item-3"];
nav[3].innerText = siteContent["nav"]["nav-item-4"];
nav[4].innerText = siteContent["nav"]["nav-item-5"];
nav[5].innerText = siteContent["nav"]["nav-item-6"];


const navs = document.querySelector('nav');
const aElement = document.createElement('a');
navs.prepend(aElement);

// cta
const ch1 = document.querySelector('.cta-text h1');
ch1.innerText = siteContent['cta']['h1'];

const cButton = document.querySelector('.cta-text button');
cButton.innerText = siteContent['cta']['button'];

let cImg = document.getElementById("cta-img");
cImg.setAttribute('src', siteContent["cta"]["img-src"]);


// features 
const textC = document.querySelectorAll('.top-content .text-content h4');
textC[0].innerText = siteContent['main-content']['features-h4'];

const textCP = document.querySelectorAll('.text-content p');
textCP[0].innerText = siteContent['main-content']['features-content'];

// about
textC[1].innerText = siteContent['main-content']['about-h4'];
textCP[1].innerText = siteContent['main-content']['about-content'];

// image
const img2 = document.querySelector('#middle-img');
img2.src = siteContent["main-content"]["middle-img-src"];

// services
const servicesHL = document.querySelectorAll(".bottom-content .text-content h4");
servicesHL[0].innerText = siteContent['main-content']['services-h4'];
const bottomPL = document.querySelectorAll(".bottom-content .text-content p");
bottomPL[0].innerText = siteContent['main-content']['services-content'];

const servicesHM = document.querySelectorAll(".bottom-content .text-content h4");
servicesHM[1].innerText = siteContent['main-content']['product-h4'];
const bottomPM = document.querySelectorAll(".bottom-content .text-content p");
bottomPM[1].innerText = siteContent['main-content']['product-content'];

const servicesHR = document.querySelectorAll(".bottom-content .text-content h4");
servicesHR[2].innerText = siteContent['main-content']['vision-h4'];
const bottomPR = document.querySelectorAll(".bottom-content .text-content p");
bottomPR[2].innerText = siteContent['main-content']['vision-content'];

// contact
const contact = document.querySelectorAll('.contact h4');
contact[0].innerText = siteContent['contact']['contact-h4'];

const contactP = document.querySelectorAll('.contact p');
contactP[0].innerText = siteContent['contact']['address'];
contactP[1].innerText = siteContent['contact']['phone'];
contactP[2].innerText = siteContent['contact']['email'];

// footer
const footer = document.querySelector('footer p');
footer.innerText = siteContent['footer']['copyright'];