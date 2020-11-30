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

const nav = document.querySelectorAll('nav a');
nav.forEach((link, i) => link.textContent= siteContent['nav'][`nav-item-${i + 1}`]);

const title = document.querySelector('.cta-text h1')
title.innerHTML = siteContent['cta']['h1'];

const codeImg = document.querySelector('.cta img')
codeImg.setAttribute('src', siteContent['cta']['img-src']);

const button = document.querySelector('.cta-text button')
button.textContent = siteContent['cta']['button'];

//feature section
const featureSec = document.querySelector('.top-content .text-content:nth-of-type(1) h4')
featureSec.textContent = siteContent['main-content']['features-h4']

const featureText = document.querySelector('.text-content:nth-of-type(1) p')
featureText.textContent = siteContent['main-content']['features-content']

//About section
const aboutSec = document.querySelector('.text-content:nth-of-type(2) h4')
aboutSec.textContent = siteContent['main-content']['about-h4']

const aboutText = document.querySelector('.text-content:nth-of-type(2) p')
aboutText.textContent = siteContent['main-content']['about-content']

//middle image
const centerImg = document.querySelector('.middle-img')
centerImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//services Section
const servicesSec = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')
servicesSec.textContent = siteContent['main-content']['services-h4']

const servicesText = document.querySelector('.bottom-content .text-content:nth-of-type(1) p')
servicesText.textContent = siteContent['main-content']['services-content']

//product Section
const productSec = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
productSec.textContent = siteContent['main-content']['product-h4']

const productText = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
productText.textContent = siteContent['main-content']['product-content']

//Vision Section
const visionSec = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
visionSec.textContent = siteContent['main-content']['vision-h4']

const visionText = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
visionText.textContent = siteContent['main-content']['vision-content']

//footer
const contact = document.querySelector('.contact h4')
contact.textContent = siteContent['contact']['contact-h4']

const address = document.querySelector('.contact p:nth-of-type(1) ')
address.textContent = siteContent['contact']['address']

const phone = document.querySelector('.contact p:nth-of-type(2) ')
phone.textContent = siteContent['contact']['phone']

const email = document.querySelector('.contact p:nth-of-type(3) ')
email.textContent = siteContent['contact']['email']

const footer = document.querySelector('footer')
footer.textContent = siteContent['footer']['copyright']

//color change of vavigation text
nav.forEach((link) => link.style.color = 'green');

//adding to nav
const community = document.createElement('a')
community.textContent = 'Community'
 document.querySelector('nav').appendChild(community)
 community.style.color = 'green'

 const projects = document.createElement('a')
 projects.textContent = 'Projects'
 document.querySelector('nav').prepend(projects)
 projects.style.color = 'green'
