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

let topTextP = document.querySelector('.top-content .text-content p');
topTextP.textContent = siteContent['main-content']['features-content'];

let topTexth4 = document.querySelector('.top-content .text-content h4');
topTexth4.textContent = siteContent['main-content']['features-h4'];

let bottomH4 = document.querySelectorAll('.bottom-content h4');
bottomH4.item(0).textContent = siteContent['main-content']['services-h4'];
bottomH4.item(1).textContent = siteContent['main-content']['product-h4'];
bottomH4.item(2).textContent = siteContent['main-content']['vision-h4'];

let contactP1 = document.querySelector('.contact p');
contactP1.textContent = siteContent['contact']['address'];

let contactP2 = contactP1.nextElementSibling;
contactP2.textContent = siteContent['contact']['phone'];

let contactP3 = contactP2.nextElementSibling;
contactP3.textContent = siteContent['contact']['email'];

let footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];

const newLink = document.createElement('a');
newLink.textContent = 'NewLink';
newLink.href = '#';

let contacth4 = document.querySelector('.contact h4');
contacth4.textContent = siteContent['contact']['contact-h4'];

const nuLink = newLink.cloneNode(true);

let nav = document.querySelector('nav');

nav.appendChild(newLink);
nav.prepend(nuLink);

ctah1.textContent = siteContent[`cta`][`h1`];

let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

let links = document.querySelectorAll('nav a');
console.log(links);

links.forEach((link,i) => {
  link.textContent = siteContent["nav"][`nav-item-${i}`];
  link.style.color = 'green';
});