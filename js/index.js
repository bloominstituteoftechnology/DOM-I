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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

let title = document.querySelector('title');
title.textContent = 'Great Idea!';

let nav1 = document.querySelectorAll('a')[0];
let nav2 = document.querySelectorAll('a')[1];
let nav3 = document.querySelectorAll('a')[2];
let nav4 = document.querySelectorAll('a')[3];
let nav5 = document.querySelectorAll('a')[4];
let nav6 = document.querySelectorAll('a')[5];
nav1.textContent = 'Services';
nav2.textContent = 'Product';
nav3.textContent = 'Vision';
nav4.textContent = 'Features';
nav5.textContent = 'About';
nav6.textContent = 'Contact';

let logo = document.querySelector('.logo');
logo.src = 'img/logo.png';

let h1Text = document.querySelector('h1');
h1Text.innerHTML = 'DOM<br> Is<br> Awesome';

let button = document.querySelector('button');
button.textContent = 'Get Started';

let headerImg = document.querySelector('#cta-img');
headerImg.src = 'img/header-img.png';

let topContent = document.querySelector('.top-content');
let topText1 = topContent.querySelectorAll('.text-content')[0];
let topText2 = topContent.querySelectorAll('.text-content')[1];
topText1.querySelector('h4').textContent = 'Features';
topText1.querySelector('p').textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topText2.querySelector('h4').textContent = 'About';
topText2.querySelector('p').textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

let bottomContent = document.querySelector('.bottom-content');
let bottomText1 = bottomContent.querySelectorAll('.text-content')[0];
let bottomText2 = bottomContent.querySelectorAll('.text-content')[1];
let bottomText3 = bottomContent.querySelectorAll('.text-content')[2];
bottomText1.querySelector('h4').textContent = 'Services';
bottomText1.querySelector('p').textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomText2.querySelector('h4').textContent = 'Product';
bottomText2.querySelector('p').textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomText3.querySelector('h4').textContent = 'Vision';
bottomText3.querySelector('p').textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let contact = document.querySelector('.contact');
let contactLine1 = contact.querySelectorAll('p')[0];
let contactLine2 = contact.querySelectorAll('p')[1];
let contactLine3 = contact.querySelectorAll('p')[2];
contact.querySelector('h4').textContent = 'Contact';
contactLine1.innerHTML = '123 Way 456 Street<br>Somewhere, USA';
contactLine2.textContent = '1 (888) 888-8888';
contactLine3.textContent = 'sales@greatidea.io';

document.querySelector('footer').querySelector('p').textContent = 'Copyright Great Idea! 2018';

let newAnchor1 = document.createElement('a');
let newAnchor2 = document.createElement('a');
newAnchor1.textContent = 'Help';
newAnchor2.textContent = 'Home';
document.querySelector('nav').appendChild(newAnchor1);
document.querySelector('nav').prepend(newAnchor2);

let navAll = document.querySelectorAll('a');
navAll.forEach(anchor => {
  anchor.style.color = 'green';
})