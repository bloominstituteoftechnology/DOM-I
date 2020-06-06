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

// navigation menu
let navBar = document.querySelectorAll('nav a');
navBar.forEach((value, index) => {
  value.textContent = siteContent['nav'][`nav-item-${index + 1}`];
});
navBar[0].style.color = 'green';
navBar[1].style.color = 'green';
navBar[2].style.color = 'green';
navBar[3].style.color = 'green';
navBar[4].style.color = 'green';
navBar[5].style.color = 'green';

// cta section
let ctaH1 = document.querySelector('.cta-text h1');
ctaH1.innerHTML = '<h1>DOM<br> Is<br> Awesome</h1>';

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

let ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// main-content section
let topContentH4 = document.querySelectorAll('.main-content .top-content h4');
topContentH4[0].textContent = siteContent['main-content']['features-h4'];
topContentH4[1].textContent = siteContent['main-content']['about-h4'];

let topContentP = document.querySelectorAll('.main-content .top-content p');
topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent = siteContent['main-content']['about-content'];

let mainContentImg = document.querySelector('.main-content img');
mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let bottomContentH4 = document.querySelectorAll('.main-content .bottom-content h4');
bottomContentH4[0].textContent = siteContent['main-content']['product-h4'];
bottomContentH4[1].textContent = siteContent['main-content']['services-h4'];
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4'];

let bottomContentP = document.querySelectorAll('.main-content .bottom-content p');
bottomContentP[0].textContent = siteContent['main-content']['product-content'];
bottomContentP[1].textContent = siteContent['main-content']['services-content'];
bottomContentP[2].textContent = siteContent['main-content']['vision-content'];

// contact section
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4'];

let contactP = document.querySelectorAll('.contact p');
contactP[0].innerHTML = '<p>123 Way 456 Street<br> Somewhere, USA</p>';
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

// footer
let footerP = document.querySelector('footer p');
footerP.textContent = siteContent['footer']['copyright'];

// my two nav items
let nav = document.getElementsByTagName('nav')[0];

let navItem1 = document.createElement('a');
navItem1.textContent = 'FAQ';
navItem1.style.color = 'green';
nav.prepend(navItem1);

let navItem2 = document.createElement('a');
navItem2.textContent = 'Help';
navItem2.style.color = 'green';
nav.appendChild(navItem2);