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

// Selectors

let navList = document.querySelectorAll('nav a');
let ctaText = document.querySelector('.cta-text h1');
let ctaBtn = document.querySelector('.cta-text button');
let ctaImg = document.querySelector('#cta-img');
let topContent = document.querySelector('.top-content');
let features = topContent.children[0];
let about = topContent.children[1];
let middleImg = document.querySelector('.middle-img');
let bottomContent = document.querySelector('.bottom-content');
let services = bottomContent.children[0];
let product = bottomContent.children[1];
let vision = bottomContent.children[2];
let contact = document.querySelector('.contact');
let footer = document.querySelector('footer p');



navList[0].textContent = siteContent['nav']['nav-item-1'];
navList[1].textContent = siteContent['nav']['nav-item-2'];
navList[2].textContent = siteContent['nav']['nav-item-3'];
navList[3].textContent = siteContent['nav']['nav-item-4'];
navList[4].textContent = siteContent['nav']['nav-item-5'];
navList[5].textContent = siteContent['nav']['nav-item-6'];

ctaText.textContent = siteContent['cta']['h1'];
ctaBtn.textContent = siteContent['cta']['button'];
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

features.children[0].textContent = siteContent['main-content']['features-h4'];
features.children[1].textContent = siteContent['main-content']['features-content'];
about.children[0].textContent = siteContent['main-content']['about-h4'];
about.children[1].textContent = siteContent['main-content']['about-content'];

middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

services.children[0].textContent = siteContent['main-content']['services-h4'];
services.children[1].textContent = siteContent['main-content']['services-content'];
product.children[0].textContent = siteContent['main-content']['product-h4'];
product.children[1].textContent = siteContent['main-content']['product-content'];
vision.children[0].textContent = siteContent['main-content']['vision-h4'];
vision.children[1].textContent = siteContent['main-content']['vision-content'];

contact.children[0].textContent = siteContent['contact']['contact-h4'];
contact.children[1].textContent = siteContent['contact']['address'];
contact.children[2].textContent = siteContent['contact']['phone'];
contact.children[3].textContent = siteContent['contact']['email'];

footer.textContent = siteContent['footer']['copyright'];

let newNavItem1 = document.createElement('a');
let newNavItem2 = document.createElement('a');
newNavItem1.textContent = 'Home';
newNavItem2.textContent = 'Gallery';
let navBar = document.querySelector('nav');

navBar.prepend(newNavItem1);
navBar.appendChild(newNavItem2);
navList = document.querySelectorAll('nav a');

navList.forEach(elm => elm.style.color = 'green');


let newImg = document.createElement('img');
let mainContent = document.querySelector('.main-content');
newImg.setAttribute('src', 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
newImg.style.width = '100%';
function toggleImg() {
  mainContent.prepend(newImg);
}

ctaBtn.setAttribute('onClick', 'toggleImg()');