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

const navItem1 = document.querySelector('.nav-item-1');
const navItem2 = document.querySelector('.nav-item-2');
const navItem3 = document.querySelector('.nav-item-3');
const navItem4 = document.querySelector('.nav-item-4');
const navItem5 = document.querySelector('.nav-item-5');
const navItem6 = document.querySelector('.nav-item-6');
const navImage = document.querySelector('.img-src');

const ctaHeader = document.querySelector('.h1');
const ctaButton = document.querySelector('.button');
const ctaImage = document.querySelector('.img-src');

const h4Features = document.querySelector('.features-h4');
const featuresContent = document.querySelector('.features-content');
const h4About = document.querySelector('.about-h4');
const aboutContent = document.querySelector('.about-content');
const contentImage = document.querySelector('.middle-img-src');
const h4Services = document.querySelector('.services-h4');
const servicesContent = document.querySelector('.services-content');
const h4Product = document.querySelector('.product-h4');
const productContent = document.querySelector('.product-content');
const h4Vision = document.querySelector('.vision-h4');
const visionContent = document.querySelector('.vision-content');

const contactHeading = document.querySelector('.contact-h4');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');

const copyright = document.querySelector('.copyright');

navItem1.textContent = siteContent['nav']['nav-item-1']
navItem2.textContent = siteContent['nav']['nav-item-2']
navItem3.textContent = siteContent['nav']['nav-item-3']
navItem4.textContent = siteContent['nav']['nav-item-4']
navItem5.textContent = siteContent['nav']['nav-item-5']
navItem6.textContent = siteContent['nav']['nav-item-6']
navImage.textContent = siteContent['nav']['img-src']

ctaHeader.textContent = siteContent['cta']['h1']
ctaButton.textContent = siteContent['cta']['button']
ctaImage.textContent = siteContent['cta']['img-src']

h4Features.textContent = siteContent['main-content']['features-h4']
featuresContent.textContent = siteContent['main-content']['features-content']
h4About.textContent = siteContent['main-content']['about-h4']
aboutContent.textContent = siteContent['main-content']['about-content']
contentImage.textContent = siteContent['main-content']['middle-img-src']
h4Services.textContent = siteContent['main-content']['services-h4']
servicesContent.textContent = siteContent['main-content']['services-content']
h4Product.textContent = siteContent['main-content']['product-h4']
productContent.textContent = siteContent['main-content']['product-content']
h4Vision.textContent = siteContent['main-content']['vision-h4']
visionContent.textContent = siteContent['main-content']['vision-content']

contactHeading.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

copyright.textContent = siteContent['footer']['copyright'];

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
