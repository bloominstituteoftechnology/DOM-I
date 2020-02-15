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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navItems = document.querySelectorAll('nav a');

let serviciesLink = document.querySelector('a');
serviciesLink.textContent = siteContent['nav']['nav-item-1'];

let productLink = navItems[1];
productLink.textContent = siteContent['nav']['nav-item-2'];

let visionLink = navItems[2];
visionLink.textContent = siteContent['nav']['nav-item-3'];

let featuresLink = navItems[3];
featuresLink.textContent = siteContent['nav']['nav-item-4'];

let aboutLink = navItems[4];
aboutLink.textContent = siteContent['nav']['nav-item-5'];

let contactLink = navItems[5];
contactLink.textContent = siteContent['nav']['nav-item-6'];

let title = document.querySelector('h1');
title.textContent = siteContent['cta']['h1'];

let buttonText = document.querySelector('button');
buttonText.textContent = siteContent['cta']['button'];

let codeSnippet = document.getElementById('cta-img');
codeSnippet.setAttribute('src', siteContent['cta']['img-src']);

let h4Titles = document.querySelectorAll('.main-content h4');

let mainContentText = document.querySelectorAll('.text-content p');

let featuresTitle = h4Titles[0];
featuresTitle.textContent = siteContent['main-content']['features-h4'];

let featuresText = mainContentText[0];
featuresText.textContent = siteContent['main-content']['features-content'];

let aboutTitle = h4Titles[1];
aboutTitle.textContent = siteContent['main-content']['about-h4'];

let aboutText = mainContentText[1];
aboutText.textContent = siteContent['main-content']['about-content'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let servicesTitle = h4Titles[2];
servicesTitle.textContent = siteContent['main-content']['services-h4'];

let servicesText = mainContentText[2];
servicesText.textContent = siteContent['main-content']['services-content'];

let productTitle = h4Titles[3];
productTitle.textContent = siteContent['main-content']['product-h4'];

let productText = mainContentText[3];
productText.textContent = siteContent['main-content']['product-content'];

let visionTitle = h4Titles[4];
visionTitle.textContent = siteContent['main-content']['vision-h4'];

let visionText = mainContentText[4];
visionText.textContent = siteContent['main-content']['vision-content'];

let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];

let contactText = document.querySelectorAll('.contact p');

let address = contactText[0];
address.textContent = siteContent['contact']['address'];

let phoneNum = contactText[1];
phoneNum.textContent = siteContent['contact']['phone'];

let email = contactText[2];
email.textContent = siteContent['contact']['email'];

let footText = document.querySelector('footer p');
footText.textContent = siteContent['footer']['copyright'];





