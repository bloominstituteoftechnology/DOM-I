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
    "h1": "DOM <br> Is <br> Awesome",
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
    "address1" : "123 Way 456 Street",
    "address2" : "Somewhere, USA",
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

const nav = document.querySelectorAll('nav a');
nav.forEach((link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i+1}`]
});

const changeColor = document.querySelectorAll('nav a');
changeColor.forEach((link) => {
  link.style.color = 'hotpink';
});
// console.log(nav);

const bigHeading = document.querySelector('h1');
bigHeading.innerHTML = siteContent.cta.h1;

const roundImg = document.getElementById('cta-img');
roundImg.src = siteContent['cta']['img-src'];

const button = document.querySelector('button');
button.textContent = siteContent.cta.button;
// console.log(button);

const codeSnip = document.getElementById('middle-img');
codeSnip.src = siteContent['main-content']['middle-img-src'];

const features = document.querySelectorAll('h4')[0];
features.textContent = siteContent['main-content']['features-h4'];

const about = document.querySelectorAll('h4')[1];
about.textContent = siteContent['main-content']['about-h4'];

const services = document.querySelectorAll('h4')[2];
services.textContent = siteContent['main-content']['services-h4'];

const product = document.querySelectorAll('h4')[3];
product.textContent = siteContent['main-content']['product-h4'];

const vision = document.querySelectorAll('h4')[4];
vision.textContent = siteContent['main-content']['vision-h4'];

const featuresPara = document.querySelectorAll('p')[0];
featuresPara.textContent = siteContent['main-content']['features-content'];

const aboutPara = document.querySelectorAll('p')[1];
aboutPara.textContent = siteContent['main-content']['about-content'];

const servicesPara = document.querySelectorAll('p')[2];
servicesPara.textContent = siteContent['main-content']['services-content'];

const productPara = document.querySelectorAll('p')[3];
productPara.textContent = siteContent['main-content']['product-content'];

const visionPara = document.querySelectorAll('p')[4];
visionPara.textContent = siteContent['main-content']['vision-content'];

const contact = document.querySelector('.contact h4');
contact.textContent = siteContent['contact']['contact-h4'];
//console.log(contact);

const address1 = document.querySelectorAll('.contact p')[0];
address1.textContent = siteContent['contact']['address1'];
// console.log(address1);

const address2 = document.querySelectorAll('.contact p')[1];
address2.textContent = siteContent['contact']['address2'];

const phone = document.querySelectorAll('.contact p')[2];
phone.textContent = siteContent['contact']['phone'];

const email = document.createElement('p');
email.textContent = siteContent['contact']['email'];
const addEmail = document.querySelector('.contact');
addEmail.append(email);

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;