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

const mySelection = document.querySelectorAll('a');
mySelection[0].textContent = siteContent["nav"]["nav-item-1"];
mySelection[1].textContent = siteContent["nav"]["nav-item-2"];
mySelection[2].textContent = siteContent["nav"]["nav-item-3"];
mySelection[3].textContent = siteContent["nav"]["nav-item-4"];
mySelection[4].textContent = siteContent["nav"]["nav-item-5"];
mySelection[5].textContent = siteContent["nav"]["nav-item-6"];

mySelection.forEach(function(currentValue) {
  currentValue.style.color = "green";
});

let newNav = document.querySelector("nav");
const newNav1 = document.createElement("a");
newNav1.textContent = "New";
newNav.prepend(newNav1);

const newNav2 = document.createElement("a");
newNav2.textContent = "New2";
newNav.appendChild(newNav2);

newNav1.style.color = "green";
newNav1.style.cursor = "pointer";
newNav2.style.color = "green";
newNav2.style.cursor = "pointer";

const title = document.querySelector('h1');
title.textContent = "Dom is Awesome!";
let snippet = document.getElementById("cta-img");
snippet.setAttribute('src','img/header-img.png');

let button = document.querySelector('.cta-text>button');
button.textContent = siteContent['cta']['button'];

let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let headers = document.querySelectorAll('h4');
headers[0].textContent = siteContent['main-content']['text-content-h4'];
headers[1].textContent = siteContent['main-content']['About-h4'];
headers[2].textContent = siteContent['main-content']['Services-h4'];
headers[3].textContent = siteContent['main-content']['Products-h4'];
headers[4].textContent = siteContent['main-content']['Vision-h4'];

let paragraphs = document.querySelectorAll('p'); 
paragraphs[0].textContent = siteContent['main-content']['features-content']; 
paragraphs[1].textContent = siteContent['main-content']['about-content']; 
paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vision-content'];

let contact = document.querySelectorAll(".contact");
contact[0].children[0].textContent = siteContent["contact"]["contact-h4"];
contact[0].children[1].textContent = siteContent["contact"]["address"];
contact[0].children[2].textContent = siteContent["contact"]["phone"];

const bannerBtm = document.getElementsByTagName("footer");
bannerBtm.textContent = "Copyright Great Idea! 2018";
