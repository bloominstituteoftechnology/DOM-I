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
// Nav Bar Selectors
const navItem1 = document.querySelector('a:nth-of-type(1)');
const navItem2 = document.querySelector('a:nth-of-type(2)');
const navItem3 = document.querySelector('a:nth-of-type(3)');
const navItem4 = document.querySelector('a:nth-of-type(4)');
const navItem5 = document.querySelector('a:nth-of-type(5)');
const navItem6 = document.querySelector('a:nth-of-type(6)');
navItem1.textContent = siteContent['nav']['nav-item-1'];
navItem2.textContent = siteContent['nav']['nav-item-2'];
navItem3.textContent = siteContent['nav']['nav-item-3'];
navItem4.textContent = siteContent['nav']['nav-item-4'];
navItem5.textContent = siteContent['nav']['nav-item-5'];
navItem6.textContent = siteContent['nav']['nav-item-6'];


const ctaItems = document.querySelector('h1');
ctaItems.textContent = siteContent['cta']['h1'];

const ctabutton = document.querySelector('button');
ctabutton.textContent = siteContent['cta']['button'];
const ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);



const mainContent = document.querySelector('.main-content');
const contactItem = document.querySelector('.contact');
const footItem = document.querySelector('footer');




