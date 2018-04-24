const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
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

let navLinks = document.querySelectorAll('nav a');

navLinks[0].innerText = siteContent.nav['nav-item-1'];
navLinks[1].innerText = siteContent.nav['nav-item-2'];
navLinks[2].innerText = siteContent.nav['nav-item-3'];
navLinks[3].innerText = siteContent.nav['nav-item-4'];
navLinks[4].innerText = siteContent.nav['nav-item-5'];

let createAnchor1 = document.createElement('a');
createAnchor1.innerHTML = 'About';

let createAnchor2 = document.createElement('a');
createAnchor2.innerHTML = 'Returns';

let nav = document.querySelector('nav');
nav.prepend(createAnchor1);
nav.appendChild(createAnchor2);

navLinks = document.querySelectorAll('nav a');

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].style.color = 'green';
}

let ctaText = document.querySelector('.cta-text h1');
ctaText.innerText = siteContent.cta.h1;

let button = document.querySelector('.cta-text button');
button.innerText = siteContent.cta.h1;

let img = document.querySelector('.cta img');
img.src = siteContent['cta']['img-src'];

// MAIN CONTENT
let mainContent = document.querySelector('.main-content');

// top content

let topContent = mainContent.getElementsByClassName('top-content');
topContent[0].children[0].children[0].innerHTML = siteContent['main-content']['features-h4'];
topContent[0].children[0].children[1].innerHTML = siteContent['main-content']['features-content'];

topContent[0].children[1].children[0].innerHTML = siteContent['main-content']['about-h4'];
topContent[0].children[1].children[1].innerHTML = siteContent['main-content']['about-content'];


// Middle Image
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// MAIN CONTENT 
// bottom content

let bottomContent = mainContent.getElementsByClassName('bottom-content');
bottomContent[0].children[0].children[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContent[0].children[0].children[1].innerHTML = siteContent['main-content']['services-content'];

bottomContent[0].children[1].children[0].innerHTML = siteContent['main-content']['product-h4'];
bottomContent[0].children[1].children[1].innerHTML = siteContent['main-content']['product-content'];

bottomContent[0].children[2].children[0].innerHTML = siteContent['main-content']['vision-h4'];
bottomContent[0].children[2].children[1].innerHTML = siteContent['main-content']['vision-content'];

// Contact
let contact = document.querySelector('.contact').children;
contact[0].innerHTML = siteContent['contact']['contact-h4'];
contact[1].innerHTML = siteContent['contact']['address'];
contact[2].innerHTML = siteContent['contact']['phone'];
contact[3].innerHTML = siteContent['contact']['email'];

// Footer
let footer = document.getElementsByTagName('footer');
footer[0].innerText = siteContent['footer']['copyright'];






