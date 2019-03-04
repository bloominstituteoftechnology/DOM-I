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


 //console.log(siteContent.nav["nav-item-1"]);

// ============================ NAV SECTION =====================
// Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// Update Dom's data Nav
const navBarTop = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav a');
const navKeys = Object.keys(siteContent.nav);

navLinks.forEach(function(element,index){
  element.textContent = siteContent.nav[navKeys[index]];
});

// ============================ CTA SECTION =====================
//  CTA Image
const ctaImg = document.getElementById('cta-img');
ctaImg.src = 'img/header-img.png';

// CTA Text
//create new el - prepend new el to div 
const divCtaText = document.querySelector('.cta-text');
divCtaText.prepend(document.createElement('h1'));
divCtaText.prepend(document.createElement('h1'));

// grab all h1 in the div
const allCtaH1 = document.querySelectorAll('.cta-text h1');

allCtaH1.forEach(function(element, index){
  //make aray of strings out of 1 string
  let h1Content = siteContent.cta.h1.split(' ');
  element.textContent = h1Content[index];
});

// CTA Button
const ctaBtn = document.querySelector('button');
ctaBtn.textContent = siteContent.cta.button;

// ============================ MAIN SECTION =====================


// H4
const mainContentTopTextH4 = document.querySelectorAll('.main-content .top-content .text-content h4');
let listOfH4 = Array.from(mainContentTopTextH4);

listOfH4[0].textContent= siteContent["main-content"]["features-h4"];
listOfH4[1].textContent = siteContent["main-content"]["about-h4"];

// P 
const mainContentTopTextP = document.querySelectorAll('.main-content .top-content .text-content p');
let listOfP = Array.from(mainContentTopTextP);

listOfP[0].textContent= siteContent["main-content"]["features-content"];
listOfP[1].textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById('middle-img');
middleImg.src = 'img/mid-page-accent.jpg';