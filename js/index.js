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


const navElements = document.querySelectorAll('a');
navElements.forEach((item, i) => item.textContent = Object.values(siteContent.nav)[i]);

const topContent = document.querySelector('.top-content');

const ctaHeading = document.querySelector('h1');
ctaHeading.textContent = siteContent["cta"]["h1"];
const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent["cta"]["button"];
const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


const features = topContent.querySelector('.text-content:nth-of-type(1)');
const featuresHeading = document.querySelector('h4')
featuresHeading.textContent = siteContent["main-content"]["features-h4"];


const featuresContent = document.querySelector('p');
featuresContent.textContent = siteContent["main-content"]["features-content"];


const about = topContent.querySelector('.text-content:nth-of-type(2)');
const aboutHeading = about.querySelector('h4');
aboutHeading.textContent = siteContent["main-content"]["about-h4"];
const aboutContent = about.querySelector('p')
aboutContent.textContent = siteContent["main-content"]["about-content"];


const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const bottomSection = document.querySelector('.bottom-content');
const services = bottomSection.querySelector('.text-content:nth-of-type(1)');
const servicesHeading = services.querySelector('h4');
servicesHeading.textContent = siteContent["main-content"]["services-h4"];
const servicesContent = services.querySelector('p');
servicesContent.textContent = siteContent["main-content"]["services-content"];


const product = bottomSection.querySelector('.text-content:nth-of-type(2)');
const productHeading = product.querySelector('h4');
productHeading.textContent = siteContent["main-content"]["product-h4"];
const productContent = product.querySelector('p');
productContent.textContent = siteContent["main-content"]["product-content"];


const vision = bottomSection.querySelector('.text-content:nth-of-type(3)');
const visionHeading = vision.querySelector('h4');
visionHeading.textContent = siteContent["main-content"]["vision-h4"];
const visionContent = vision.querySelector('p');
visionContent.textContent = siteContent["main-content"]["vision-content"];

const contact = document.querySelector('.contact');
contactHeading = contact.querySelector('h4');
contactHeading.textContent = siteContent["contact"]["contact-h4"];

const address = contact.querySelector('p:nth-of-type(1)');
address.textContent = siteContent["contact"]["address"];

const phone = contact.querySelector('p:nth-of-type(2)');
phone.textContent = siteContent["contact"]["phone"];

const email = contact.querySelector('p:nth-of-type(3)');
email.textContent = siteContent["contact"]["email"];


const footer = document.querySelector('footer');
const copyright = footer.querySelector('p');
copyright.textContent = siteContent["footer"]["copyright"];

//adding new navs

const container = document.querySelector('.container');
const header = container.querySelector('header');
const careers = document.createElement('a');
careers.text = "Careers";
header.querySelector('nav').appendChild(careers);

const api = document.createElement('a');
api.text = "API";
header.querySelector('nav').prepend('api');