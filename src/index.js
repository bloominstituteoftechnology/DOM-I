const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!')

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['images']['logo-img']);


/* navigation */
const nav = document.querySelectorAll('nav a');
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

const navigation = document.querySelectorAll('header nav a');
navigation.forEach(italic => {
  italic.style.fontStyle = 'italic'
});

/* cta */
const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];
const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];
const ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['images']['cta-img']);

/* main content */
const features = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
const featuresContent = document.querySelector('.top-content .text-content:nth-of-type(1) p');
const about = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
const aboutContent = document.querySelector('.top-content .text-content:nth-of-type(2) p');

features.textContent = siteContent['main-content']['features-h4'];
featuresContent.textContent = siteContent['main-content']['features-content'];
about.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];

const midImg = document.querySelector('#middle-img');
midImg.setAttribute('src', siteContent['images']['accent-img']);

const services = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const servicesContent = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
services.textContent = siteContent['main-content']['services-h4'];
servicesContent.textContent = siteContent['main-content']['services-content'];

const product = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
product.textContent = siteContent['main-content']['product-h4'];
const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productContent.textContent = siteContent['main-content']['product-content'];

const vision = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
vision.textContent = siteContent['main-content']['vision-h4'];
const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionContent.textContent = siteContent['main-content']['vision-content'];

/* contact */
const contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];

const address = document.querySelector('.contact p:nth-of-type(1)');
address.textContent = siteContent['contact']['address'];

const phone = document.querySelector('.contact p:nth-of-type(2)');
phone.textContent = siteContent['contact']['phone'];

const email = document.querySelector('.contact p:nth-of-type(3)');
email.textContent = siteContent['contact']['email'];

/* footer */
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright'];
const footerA = document.querySelector('footer a');
footerA.classList.add('bold');