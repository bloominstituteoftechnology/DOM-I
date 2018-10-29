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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// nav
let nav = document.querySelectorAll('nav a');

nav[0].textContent = siteContent.nav['nav-item-1'];
nav[1].textContent = siteContent.nav['nav-item-2'];
nav[2].textContent = siteContent.nav['nav-item-3'];
nav[3].textContent = siteContent.nav['nav-item-4'];
nav[4].textContent = siteContent.nav['nav-item-5'];
nav[5].textContent = siteContent.nav['nav-item-6'];

nav.forEach(item => item.style.color = 'green');

// cta
let header1 = document.querySelector('.cta-text h1');
header1.textContent = siteContent.cta.h1;

let button = document.querySelector('.cta-text button');
button.textContent = siteContent.cta.button;

let headerImage = document.querySelector('#cta-img');
headerImage.src = siteContent['cta']['img-src'];

// main-content 

// top
let topContentHeader = document.querySelectorAll('.top-content h4');

topContentHeader[0].textContent = siteContent['main-content']['features-h4'];
topContentHeader[1].textContent = siteContent['main-content']['about-h4'];

let topContent = document.querySelectorAll('.top-content p');
topContent[0].textContent = siteContent['main-content']['features-content'];
topContent[1].textContent = siteContent['main-content']['about-content'];

// middle
let middleImage = document.querySelector('#middle-img');
middleImage.src = siteContent['main-content']['middle-img-src'];

// bottom
let bottomContentHeader = document.querySelectorAll('.bottom-content h4');

bottomContentHeader[0].textContent = siteContent['main-content']['services-h4'];
bottomContentHeader[1].textContent = siteContent['main-content']['product-h4'];
bottomContentHeader[2].textContent = siteContent['main-content']['vision-h4'];

let bottomContent = document.querySelectorAll('.bottom-content p');
bottomContent[0].textContent = siteContent['main-content']['services-content'];
bottomContent[1].textContent = siteContent['main-content']['product-content'];
bottomContent[2].textContent = siteContent['main-content']['vision-content'];

// contact
let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent['contact']['contact-h4'];

let contact = document.querySelectorAll('.contact p');
contact[0].textContent = siteContent['contact']['address'];
contact[1].textContent = siteContent['contact']['phone'];
contact[2].textContent = siteContent['contact']['email'];

// footer 
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];