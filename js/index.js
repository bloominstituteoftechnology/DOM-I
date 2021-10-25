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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
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
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//! Top Images
//* 'Great Idea' Logo
const logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src'])

//* Code snippet image
const logo2 = document.getElementById('cta-img');
logo2.setAttribute('src', siteContent['cta']['img-src'])

//! Nav Bar
const navBar = document.querySelectorAll('nav a');
navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[5].textContent = siteContent['nav']['nav-item-6'];

//! Top Section
const lineBreaks = 'DOM<br>IS<br>AWESOME'
const h1 = document.querySelector('h1');
h1.innerHTML = lineBreaks;

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

//! Top Middle Section 
//* Features
const featuresH4 = document.querySelector('.top-content .text-content:nth-child(1) h4');
const featuresP = document.querySelector('.top-content .text-content:nth-child(1) p');
featuresH4.textContent = siteContent['main-content']['features-h4'];
featuresP.textContent = siteContent['main-content']['features-content'];

//* About
const aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
const aboutP = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutH4.textContent = siteContent['main-content']['about-h4'];
aboutP.textContent = siteContent['main-content']['about-content'];

//* Middle Image
const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

//! Bottom Middle Section
//* Services
const servicesH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
const servicesP = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesH4.textContent = siteContent['main-content']['services-h4'];
servicesP.textContent = siteContent['main-content']['services-content'];

//* Product
const productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
const productP = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productH4.textContent = siteContent['main-content']['product-h4'];
productP.textContent = siteContent['main-content']['product-content'];

//* Vision
const visionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
const visionP = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionH4.textContent = siteContent['main-content']['vision-h4'];
visionP.textContent = siteContent['main-content']['vision-content'];

//! Contact Section
//* Contact h4
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

//* Address
const addressP = document.querySelector('.contact p');
addressP.textContent = siteContent['contact']['address'];

//* Phone
// const phoneNumberP = document.querySelector('.contact p');
// phoneNumberP.textContent = siteContent['contact']['phone'];

//* Email
