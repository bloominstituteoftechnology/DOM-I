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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll('header > nav > a');
navLinks.forEach((link, i) => link.innerText = siteContent.nav[`nav-item-${[i+1]}`]);

// .cta
const ctaTxt = document.querySelector('.cta-text > h1');
ctaTxt.innerText = siteContent.cta.h1;

const ctaButton = document.querySelector('.cta-text > button');
ctaButton.innerText = siteContent.cta.button;

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.cta['img-src'];

// .main-content
// .main-content > .top-content
const topMainHead1 = document.querySelectorAll('.top-content > div > h4')[0];
topMainHead1.innerText = siteContent['main-content']['features-h4'];

const topMainPara1 = document.querySelectorAll('.top-content > div > p')[0];
topMainPara1.innerText = siteContent['main-content']['features-content'];

const topMainHead2 = document.querySelectorAll('.top-content > div > h4')[1];
topMainHead2.innerText = siteContent['main-content']['about-h4'];

const topMainPara2 = document.querySelectorAll('.top-content > div > p')[1];
topMainPara2.innerText = siteContent['main-content']['about-content'];

// .main-content > .middle-img
const midImg = document.querySelector('#middle-img');
midImg.src = siteContent["main-content"]["middle-img-src"];

// .main-content > .bottom-content
const bottomMainHead1 = document.querySelectorAll('.bottom-content > div > h4')[0];
bottomMainHead1.innerText = siteContent['main-content']['services-h4'];

const bottomMainPara1 = document.querySelectorAll('.bottom-content > div > p')[0];
bottomMainPara1.innerText = siteContent['main-content']['services-content'];

const bottomMainHead2 = document.querySelectorAll('.bottom-content > div > h4')[1];
bottomMainHead2.innerText = siteContent['main-content']['product-h4'];

const bottomMainPara2 = document.querySelectorAll('.bottom-content > div > p')[1];
bottomMainPara2.innerText = siteContent['main-content']['product-content'];

const bottomMainHead3 = document.querySelectorAll('.bottom-content > div > h4')[2];
bottomMainHead3.innerText = siteContent['main-content']['vision-h4'];

const bottomMainPara3 = document.querySelectorAll('.bottom-content > div > p')[2];
bottomMainPara3.innerText = siteContent['main-content']['vision-content'];

// .contact
