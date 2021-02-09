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

//header
const navSelections = document.querySelectorAll('a');
const navArray = Array.from(navSelections);
navArray[0].textContent = 'Services';
navArray[1].textContent = 'Product';
navArray[2].textContent = 'Vision';
navArray[3].textContent = 'Features';
navArray[4].textContent = 'About';
navArray[5].textContent = 'Contact';

const greenNav= document.querySelector('nav');
greenNav.style.color = 'green';


//CTA
const ctaheader = document.querySelector('.cta h1');
ctaheader.textContent = siteContent['cta']['h1'];

const ctabutton = document.querySelector('.cta button');
ctabutton.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//Contnent
const mainContentTopHeader = document.querySelector('.main-content .top-content .text-content h4');
mainContentTopHeader.textContent = siteContent['main-content']['features-h4'];

const mainContentTopP = document.querySelector('.main-content .top-content .text-content p');
mainContentTopP.textContent = siteContent['main-content']['features-content'];


