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



// ***********************************
// *****************NAV***************
// ***********************************
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// const logo = document.querySelector('#logo-img');
// logo.src = "img/logo.png";

const nav = document.querySelector('nav');
// console.log(nav);
const navItems = Array.from(document.querySelectorAll('nav > a'));
// console.log(navItems[0]);

navItems[0].textContent = "Services";
navItems[1].textContent = "Product";
navItems[2].textContent = "Vision";
navItems[3].textContent = "Features";
navItems[4].textContent = "About";
navItems[5].textContent = "Contact";


// ***********************************
// ****************CTA****************
// ***********************************
const ctaH1= document.querySelector('.cta-text > h1');
const ctaH1_2 = document.createElement("h1");
const ctaH1_3 = document.createElement("h1");
const ctaButton = document.querySelector('.cta-text > button');
const ctaImg = document.querySelector('#cta-img');

ctaH1.textContent = "DOM";
ctaH1.appendChild(ctaH1_2);
ctaH1.appendChild(ctaH1_3);
ctaH1_2.textContent = "Is";
ctaH1_3.textContent = "Awesome";
ctaButton.textContent = "Get Started";
ctaImg.src = "img/header-img.png";

// ***********************************
// ****************MAIN***************
// ***********************************

const firstTopContentH4 = document.querySelector('.top-content > .text-content h4');
const firstTopContentP = document.querySelector('.top-content > .text-content p');
const secondTopContentH4 = document.querySelector('.top-content > :last-child h4');
const secondTopContentP = document.querySelector('.top-content > :last-child p');
const mainImg = document.querySelector('#middle-img');
const firstBottomContentH4 = document.querySelector('.bottom-content > .text-content h4');
const firstBottomContentP = document.querySelector('.bottom-content > .text-content p');
const secondBottomContentH4 = document.querySelector('.bottom-content > :nth-child(2) h4');
const secondBottomContentP = document.querySelector('.bottom-content > :nth-child(2) p');
const thirdBottomContentH4 = document.querySelector('.bottom-content > :last-child h4');
const thirdBottomContentP = document.querySelector('.bottom-content > :last-child p');

firstTopContentH4.textContent = 'Features';
firstTopContentP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
secondTopContentH4.textContent = 'About';
secondTopContentP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainImg.src = "img/mid-page-accent.jpg";
firstBottomContentH4.textContent = 'Services';
firstBottomContentP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
secondBottomContentH4.textContent = 'Product';
secondBottomContentP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
thirdBottomContentH4.textContent = 'Vision';
thirdBottomContentP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// ***********************************
// *************CONTACT***************
// ***********************************

const contactH4 = document.querySelector('.contact > h4');
const contactAddress = document.querySelector('.contact > p');
const contactPhone = document.querySelector('.contact > p:nth-child(3)');
const addressLocations = document.createElement('p');
const contactEmail = document.querySelector('.contact > p:last-child');

contactH4.textContent = "Contact";
contactAddress.textContent = "123 Way 456 Street";
contactAddress.appendChild(addressLocations);
addressLocations.textContent = " Somewhere, USA"
addressLocations.style.marginTop = "0";
contactPhone.textContent = "1 (888) 888-8888";
contactEmail.textContent = "sales@greatidea.io";

// ***********************************
// *************FOOTER****************
// ***********************************

const footerP = document.querySelector('footer > p');
footerP.textContent = "Copyright Great Idea! 2018";


