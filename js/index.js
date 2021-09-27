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

//Pushing to github

//updated header img
const cirImg = document.getElementById('cta-img');
cirImg.src = 'img/header-img.png';

//update middle image
const midImage = document.getElementById('middle-img');
midImage.src = 'img/mid-page-accent.jpg';

//update header
const navItem1 = document.querySelector('nav a');
navItem1.textContent = siteContent['nav']['nav-item-1'];

const navItem2 = document.querySelector('nav a:nth-of-type(2)');
navItem2.textContent = siteContent['nav']['nav-item-2'];

const navItem3 = document.querySelector('nav a:nth-of-type(3)');
navItem3.textContent = siteContent['nav']['nav-item-3'];

const navItem4 = document.querySelector('nav a:nth-of-type(4)');
navItem4.textContent = siteContent['nav']['nav-item-4'];

const navItem5 = document.querySelector('nav a:nth-of-type(5)');
navItem5.textContent = siteContent['nav']['nav-item-5'];

const navItem6 = document.querySelector('nav a:nth-of-type(6)');
navItem6.textContent = siteContent['nav']['nav-item-6'];


//updated cta content

const cta = document.querySelector('.cta-text');

const ctaText = cta.querySelector('h1');
ctaText.textContent = siteContent['cta']['h1'];

const ctaButton = cta.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];


//updating main content


//features
const features = document.querySelector('.top-content');

const featureHeading = features.querySelector('h4');
const featureText = features.querySelector('p');

featureHeading.textContent = siteContent['main-content']['features-h4'];
featureText.textContent = siteContent['main-content']['features-content'];


//about
const about = document.querySelector('.text-content:nth-of-type(2)');

const aboutHeading = about.querySelector('h4');
const aboutContent = about.querySelector('p');

aboutHeading.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];

//services

const bottom = document.querySelector('.bottom-content');

const services = bottom.querySelector('.text-content');

const servHeading = services.querySelector('h4');
const servContent = services.querySelector('p');

servHeading.textContent = siteContent['main-content']['services-h4'];
servContent.textContent = siteContent['main-content']['services-content'];


//product

const product = bottom.querySelector('.text-content:nth-of-type(2)');


const prodHeading = product.querySelector('h4');
const prodContent = product.querySelector('p');

prodHeading.textContent = siteContent['main-content']['product-h4'];
prodContent.textContent = siteContent['main-content']['product-content'];

//vision

const vision = bottom.querySelector('.text-content:nth-of-type(3)');


const visHeading = vision.querySelector('h4');
const visContent = vision.querySelector('p');

visHeading.textContent = siteContent['main-content']['vision-h4'];
visContent.textContent = siteContent['main-content']['vision-content'];






















