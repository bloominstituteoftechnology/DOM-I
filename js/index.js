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
//nav
const navi = document.querySelectorAll('nav a')

navi[0].textContent = siteContent['nav']['nav-item-1'];
navi[1].textContent = siteContent['nav']['nav-item-2'];
navi[2].textContent = siteContent['nav']['nav-item-3'];
navi[3].textContent = siteContent['nav']['nav-item-4'];
navi[4].textContent = siteContent['nav']['nav-item-5'];
navi[5].textContent = siteContent['nav']['nav-item-6'];

// first section

const mainImg = document.querySelector('#cta-img');
mainImg.setAttribute('src', siteContent['cta']['img-src'])

const h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1']

const button = document.querySelector('button');
button.textContent = siteContent['cta']['button']

// middle info

const mainCont = document.querySelectorAll('.main-content .text-content h4');
mainCont[0].textContent = siteContent['main-content']['features-h4'];
mainCont[1].textContent = siteContent['main-content']['about-h4'];
mainCont[2].textContent = siteContent['main-content']['services-h4']
mainCont[3].textContent = siteContent['main-content']['product-h4']
mainCont[4].textContent = siteContent['main-content']['vision-h4']


const secondCont = document.querySelectorAll('.main-content .text-content p');
secondCont[0].textContent = siteContent['main-content']['features-content'];
secondCont[1].textContent = siteContent['main-content']['about-content'];

const middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
secondCont[2].textContent = siteContent['main-content']['services-content'];
secondCont[3].textContent = siteContent['main-content']['product-content'];
secondCont[4].textContent = siteContent['main-content']['vision-content'];

// contact
const contactSec = document.querySelector('.contact h4');
contactSec.textContent = siteContent['contact']['contact-h4']

const contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent['contact']['address']
contactText[1].textContent = siteContent['contact']['phone']
contactText[2].textContent = siteContent['contact']['email']

// footer
const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright']