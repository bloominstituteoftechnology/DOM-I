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

const navB = document.querySelectorAll("a");

navB[0].textContent = siteContent["nav"]["nav-item-1"];
navB[1].textContent = siteContent["nav"]["nav-item-2"];
navB[2].textContent = siteContent["nav"]["nav-item-3"];
navB[3].textContent = siteContent["nav"]["nav-item-4"];
navB[4].textContent = siteContent["nav"]["nav-item-5"];
navB[4].textContent = siteContent["nav"]["nav-item-6"];




const h1 = document.querySelector('h1');
h1.textContent = siteContent["cta"]["h1"];

const button = document.querySelector('.cta-text button');
button.textContent = siteContent["cta"]["button"];

const img = document.querySelector('#cta-img');
img.src = siteContent["cta"]["img-src"];
const firstH = document.querySelectorAll('.top-content .text-content h4');
firstH[0].textContent = siteContent["main-content"]["features-h4"];
firstH[1].textContent = siteContent["main-content"]["about-h4"];


const topP = document.querySelectorAll('.top-content .text-content p');
topP[0].textContent = siteContent["main-content"]["features-content"];
topP[1].textContent = siteContent["main-content"]["about-content"];



const mImage = document.querySelector('.middle-img');
mImage.src = siteContent["main-content"]["middle-img-src"];



const bContent = document.querySelectorAll('.bottom-content .text-content h4');
bContent[0].textContent = siteContent["main-content"]["services-h4"];
bContent[1].textContent = siteContent["main-content"]["product-h4"];
bContent[2].textContent = siteContent["main-content"]["vision-h4"];


const bttmP = document.querySelectorAll('.bottom-content .text-content p');
bttmP[0].textContent = siteContent["main-content"]["services-content"];
bttmP[1].textContent = siteContent["main-content"]["product-content"];
bttmP[2].textContent = siteContent["main-content"]["vision-content"];





const cHeadline = document.querySelector('.contact h4');
cHeadline.textContent = siteContent["contact"]["contact-h4"];
const cInfo = document.querySelectorAll('.contact p');
cInfo[0].textContent = siteContent["contact"]["address"];
cInfo[1].textContent = siteContent["contact"]["phone"];
cInfo[2].textContent = siteContent["contact"]["email"];

const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];
