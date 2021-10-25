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

// Update nav bar and links
const navItems = document.querySelectorAll('nav a');
for (let i = 0; i < navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i}`];
}

// Top image
const topImage=document.querySelector('#cta-img')
topImage.setAttribute('src', 'img/header-img.png')

// Top Section H1
const title = document.querySelector('h1');
title.textContent = siteContent['cta']['h1'];

// Top Section button
const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

// Middle image
const codeImage=document.querySelector('#middle-img')
codeImage.setAttribute('src', 'img/mid-page-accent.jpg')

// Middle section h4
const firstH4=document.querySelector('.top-content .text-content:nth-of-type(1) h4')
firstH4.textContent='Features'

const secondH4=document.querySelector('.top-content .text-content:nth-of-type(2) h4')
secondH4.textContent='About'

const thirdH4=document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
thirdH4.textContent='Vision'

const fourthH4=document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
fourthH4.textContent='Product'

const fifthH4=document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')
fifthH4.textContent='Services'