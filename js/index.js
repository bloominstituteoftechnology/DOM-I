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

//Update the nav
const services = document.querySelector('nav a:nth-child(1)');
const product = document.querySelector('nav a:nth-child(2)');
const vision = document.querySelector('nav a:nth-child(3)');
const features = document.querySelector('nav a:nth-child(4)');
const about = document.querySelector('nav a:nth-child(5)');
const contact = document.querySelector('nav a:nth-child(6)');

services.textContent = siteContent['nav']['nav-item-1'];
product.textContent = siteContent['nav']['nav-item-2'];
vision.textContent = siteContent['nav']['nav-item-3'];
features.textContent = siteContent['nav']['nav-item-4'];
about.textContent = siteContent['nav']['nav-item-5'];
contact.textContent = siteContent['nav']['nav-item-6'];

//update on DOM is awesome text
const domIsAwesomeText = document.querySelector('.cta-text h1');
domIsAwesomeText.textContent = siteContent['cta']['h1']

//button under DOM is awesome
const button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];

//img next to DOM is awesome
const image = document.querySelector('#cta-img');
image.setAttribute('src', siteContent['cta']['img-src']);

//main content - features title
const featuresTitle = document.querySelector('.text-content h4:nth-child(1)');
featuresTitle.textContent = siteContent['main-content']['features-h4'];

//main content - features content
const featuresContent = document.querySelector('.text-content p');
featuresContent.textContent = siteContent['main-content']['features-content'];

//main content - about title
const aboutTitle = document.querySelector('.text-content:nth-child(2) h4');
aboutTitle.textContent = siteContent['main-content']['about-h4'];

//main content - about content
const aboutContent = document.querySelector('.text-content:nth-child(2) p');
aboutContent.textContent = siteContent['main-content']['about-content'];

//middle img
const middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//bottom content - services title
const servicesTitle = document.querySelector('.text-content:nth-child(3) h4');
servicesTitle.textContent = siteContent['main-content']['services-h4'];

//bottom content - services content
const servicesContent = document.querySelector('.text-content:nth-child(3) p');
servicesContent.textContent = siteContent['main-content']['services-content'];

//bottom content - product title
const productTitle = document.querySelector('.text-content:nth-child(4) h4');
productTitle.textContent = siteContent['main-content']['product-h4'];

//bottom content - product content
const productContent = document.querySelector('.text-content:nth-child(4) p');
productContent.textContent = siteContent['main-content']['product-content'];

//bottom content - vision title
const visionTitle = document.querySelector('.text-content:nth-child(5) h4');
visionTitle.textContent = siteContent['main-content']['vision-h4'];

//bottom content - vision content
const visionContent = document.querySelector('.text-content:nth-child(5) p');
visionContent.textContent = siteContent['main-content']['vision-content'];

//contact 
const contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];

//footer