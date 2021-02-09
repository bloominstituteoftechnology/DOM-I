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

const titleUpdate = document.title ='Great Idea!'

//  NAV LIST
const nav = document.querySelectorAll('nav a')

const linksRealArr = Array.from(nav)
const services = nav[0];
const product = nav[1];
const vision = nav[2]
const features = nav[3]
const about = nav[4]
const contact = nav[5]

services.textContent = 'Services';
product.textContent = 'Product';
vision.textContent = 'Vision';
features.textContent = 'Features';
about.textContent = 'About';
contact.textContent = 'Contact';

const imageOne = document.querySelector('.logo')
imageOne.setAttribute('src', "img/logo.png")


const ctaTxt = document.querySelector('.cta-text')
ctaTxt.firstChild.textContent = 'DOM Is Awesome'
ctaTxt.lastChild.textContent = 'Get Started'

const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', "img/header-img.png");

const topContent = document.querySelector('.top-content')

const feature = topContent.querySelector('.text-content:nth-of-type(1)')
const featureTitle = feature.querySelector('h4')
featureTitle.textContent = "Feature"
const featureTxt = feature.querySelector('p')
featureTxt.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.'

const about = 
