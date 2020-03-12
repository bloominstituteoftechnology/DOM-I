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

// My code

// Navigation
const navlinkone = document.querySelectorAll('header nav a')[0];
navlinkone.textContent = siteContent.nav['nav-item-1'];

const navlinktwo = document.querySelectorAll('header nav a')[1];
navlinktwo.textContent = siteContent.nav['nav-item-2'];

const navlinkthree = document.querySelectorAll('header nav a')[2];
navlinkthree.textContent = siteContent.nav['nav-item-3'];

const navlinkfour = document.querySelectorAll('header nav a')[3];
navlinkfour.textContent = siteContent.nav['nav-item-4'];

const navlinkfive = document.querySelectorAll('header nav a')[4];
navlinkfive.textContent = siteContent.nav['nav-item-5'];

const navlinksix = document.querySelectorAll('header nav a')[5];
navlinksix.textContent = siteContent.nav['nav-item-6'];



// CTA
const ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = 'DOM <br> Is <br> Awesome';

const ctaLogo = document.getElementById('cta-img');
ctaLogo.setAttribute('src', siteContent['cta']['img-src']);

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

// Main Content
const featH4 = document.querySelectorAll('.text-content h4')[0];
featH4.textContent = siteContent['main-content']['features-h4'];

const featPara = document.querySelectorAll('.text-content p')[0];
featPara.textContent = siteContent['main-content']['features-content'];


const aboutH4 = document.querySelectorAll('.text-content h4')[1];
aboutH4.textContent = siteContent['main-content']['about-h4'];

const aboutPara = document.querySelectorAll('.text-content p')[1];
aboutPara.textContent = siteContent['main-content']['about-content'];


const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);


const servicesH4 = document.querySelectorAll('.text-content h4')[2];
servicesH4.textContent = siteContent['main-content']['services-h4'];

const servicesPara = document.querySelectorAll('.text-content p')[2];
servicesPara.textContent = siteContent['main-content']['services-content'];


const productH4 = document.querySelectorAll('.text-content h4')[3];
productH4.textContent = siteContent['main-content']['product-h4'];

const productPara = document.querySelectorAll('.text-content p')[3];
productPara.textContent = siteContent['main-content']['product-content'];


const visionH4 = document.querySelectorAll('.text-content h4')[4];
visionH4.textContent = siteContent['main-content']['vision-h4'];

const visionPara = document.querySelectorAll('.text-content p')[4];
visionPara.textContent = siteContent['main-content']['vision-content'];