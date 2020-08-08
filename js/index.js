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

const jsItems = document.querySelectorAll('a');

jsItems[0].textContent = siteContent['nav']['nav-item-1'];
jsItems[1].textContent = siteContent['nav']['nav-item-2'];
jsItems[2].textContent = siteContent['nav']['nav-item-3'];
jsItems[3].textContent = siteContent['nav']['nav-item-4'];
jsItems[4].textContent = siteContent['nav']['nav-item-5'];
jsItems[5].textContent = siteContent['nav']['nav-item-6'];

jsItems[0].style.color = 'red';
jsItems[1].style.color = 'purple';
jsItems[2].style.color = 'orange';
jsItems[3].style.color = 'green';
jsItems[4].style.color = 'brown';
jsItems[5].style.color = 'hotpink'

const navBar = document.querySelector('nav');

const firstItem = document.createElement('a');
const lastItem = document.createElement('a');

firstItem.href = '#';
firstItem.textContent = 'First Item';

firstItem.style.color = 'orange';
navBar.prepend(firstItem);

lastItem.textContent = 'Last Item';
lastItem.style.color = 'blue';
navBar.appendChild(lastItem);

const ctaText = document.querySelector('.cta .cta-text');
const myH1 = document.querySelectorAll('h1');
const h1Arr = siteContent['cta']['h1'];
const isH1 = document.createElement('h1');

isH1.textContent = h1Arr;
ctaText.prepend(isH1);

const btn = document.querySelector('button');
btn.textContent = siteContent[ 'cta']['button'];

const headerImg = document.querySelector('#cta-img');
headerImg.src = siteContent['cta']['img-src'];
headerImg.alt = 'Main header circle image';

const mainHeading = document.querySelectorAll('.main-content .text-content h4');
const mainContent = document.querySelectorAll('.main-content .text-content p');
const middleImg = document.querySelector('#middle-img');

mainHeading[0].textContent = siteContent['main-content']['features-h4'];
mainHeading[0].textContent = siteContent['main-content']['features-content'];

mainHeading[1].textContent = siteContent['main-content']['about-h4'];
mainContent[1].textContent = siteContent['main-content']['about-content'];

middleImg.src = siteContent['main-content']['middle-img-src'];

mainHeading[2].textContent = siteContent['main-content']['services-h4'];
mainContent[2].textContent = siteContent['main-content']['services-content'];

mainHeading[3].textContent = siteContent['main-content']['product-h4'];
mainContent[3].textContent = siteContent['main-content']['product-content'];

mainHeading[4].textContent = siteContent['main-content']['vision-h4'];
mainContent[4].textContent = siteContent['main-content']['vision-content'];

const contactH4 = document.querySelector('.contact h4');
const contactContent = document.querySelectorAll('.contact p');

contactH4.textContent = siteContent['contact']['contact-h4'];

contactContent[0].textContent = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];

const footerConent = document.querySelector('footer p');
footerConent.textContent = siteContent['footer']['copyright'];

const header = document.querySelector('header');
header.style.background = 'lightgrey';

const ctaSection = document.querySelector('.cta');
ctaSection.style.background = 'darkgrey';

const mainSection = document.querySelector('.main-content');
mainSection.style.background = 'black';
mainSection.style.color = 'white';