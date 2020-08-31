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

// Example: Update ALL IMAGES ON THE WEBPAGE
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let circle = document.getElementById("cta-img");
circle.setAttribute('src', siteContent["cta"]["img-src"])

let numbers = document.getElementById("middle-img");
numbers.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//NAVIGATION
// Selectors
const nav = document.querySelector('nav');
const nav1 = nav.querySelector('a:nth-of-type(1)');
const nav2 = nav.querySelector('a:nth-of-type(2)');
const nav3 = nav.querySelector('a:nth-of-type(3)');
const nav4 = nav.querySelector('a:nth-of-type(4)');
const nav5 = nav.querySelector('a:nth-of-type(5)');
const nav6 = nav.querySelector('a:nth-of-type(6)');

// Fillers
nav1.textContent = siteContent['nav']['nav-item-1'];
nav2.textContent = siteContent['nav']['nav-item-2'];
nav3.textContent = siteContent['nav']['nav-item-3'];
nav4.textContent = siteContent['nav']['nav-item-4'];
nav5.textContent = siteContent['nav']['nav-item-5'];
nav6.textContent = siteContent['nav']['nav-item-6'];


// Styles
nav1.style.color = 'lightgreen';
nav2.style.color = 'lightgreen';
nav3.style.color = 'lightgreen';
nav4.style.color = 'lightgreen';
nav5.style.color = 'lightgreen';
nav6.style.color = 'lightgreen';

// NEW ITEMS NAV

const nav7 = nav.appendChild(document.createElement('a'));
nav7.href = '#';
nav7.textContent = 'News';
nav7.style.color = 'lightgreen';

const nav8 = nav.appendChild(document.createElement('a'));
nav8.href = '#';
nav8.textContent = 'Hello World';
nav8.style.color = 'lightgreen';

// CTA SECTION
// Selectors

const cta_h1 = document.querySelector('.cta-text h1');
const cta_button = document.querySelector('.cta-text button');

// Fillers

cta_h1.textContent = siteContent.cta.h1;
cta_button.textContent = siteContent.cta.button;

// MAIN CONTENT
// Selectors

const mc_h4_1 = document.querySelector('.top-content .text-content h4');
const mc_p_1 = document.querySelector('.top-content .text-content p');
const mc_h4_2 = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
const mc_p_2 = document.querySelector('.top-content .text-content:nth-of-type(2) p');

// Fillers

mc_h4_1.textContent = siteContent["main-content"]["features-h4"];
mc_p_1.textContent = siteContent["main-content"]["features-content"];
mc_h4_2.textContent = siteContent["main-content"]["about-h4"];
mc_p_2.textContent = siteContent["main-content"]["about-content"];

//BOTTOM CONTENT
// Selectors

const bc_h4_1 = document.querySelector('.bottom-content .text-content h4');
const bc_p_1 = document.querySelector('.bottom-content .text-content p');
const bc_h4_2 = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const bc_p_2 = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
const bc_h4_3 = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
const bc_p_3 = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');

// Fillers

bc_h4_1.textContent = siteContent["main-content"]["services-h4"];
bc_p_1.textContent = siteContent["main-content"]["services-content"];
bc_h4_2.textContent = siteContent["main-content"]["product-h4"];
bc_p_2.textContent = siteContent["main-content"]["product-content"];
bc_h4_3.textContent = siteContent["main-content"]["vision-h4"];
bc_p_3.textContent = siteContent["main-content"]["vision-content"];

//CONTACT SECTION
// Selectors

const c_h4 = document.querySelector('.contact h4');
const c_p1 = document.querySelector('.contact p:nth-of-type(1)');
const c_p2 = document.querySelector('.contact p:nth-of-type(2)');
const c_p3 = document.querySelector('.contact p:nth-of-type(3)');

// Fillers

c_h4.textContent = siteContent["contact"]["contact-h4"];
c_p1.textContent = siteContent["contact"]["address"];
c_p2.textContent = siteContent["contact"]["phone"];
c_p3.textContent = siteContent["contact"]["email"];

//FOOTER
// Selector
const f_p = document.querySelector('footer p');
//Filler
f_p.textContent = siteContent["footer"]["copyright"];



















