// const { text } = require("express");


const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png" ,
  },
};

// const navItem1 = document.querySelector('.nav-item-1');
// const navItem2 = document.querySelector('.nav-item-2');
// const navItem3 = document.querySelector('.nav-item-3');
// const navItem4 = document.querySelector('.nav-item-4');
// const navItem5 = document.querySelector('.nav-item-5');
// const navItem6 = document.querySelector('.nav-item-6');

// const headLine = document.querySelector('.h1')
// const clickAble = document.querySelector('.button')
// console.log('HEY');
const navWeb = document.querySelectorAll('nav a');
// console.log(navWeb);
navWeb.forEach(function(link, index) {
  console.log(link);
  link.textContent = siteContent['nav'][`nav-item-${index+1}`];
  link.classList.add('italic');
});

const textHeader = document.querySelector('.cta .cta-text h1');
console.log(textHeader);

textHeader.textContent = siteContent['cta']['h1'];

const headerButton = document.querySelector('.cta .cta-text button');
console.log(headerButton);
headerButton.textContent = siteContent['cta']['button'];




const mainF4 = document.querySelectorAll('.main-content .text-content h4');
console.log(mainF4);
mainF4[0].textContent = siteContent['main-content']['features-h4'];
mainF4[1].textContent = siteContent['main-content']['about-h4'];

const mainP = document.querySelectorAll('.main-content .text-content p');
console.log(mainP)
mainP[0].textContent = siteContent['main-content']['features-content'];
mainP[1].textContent = siteContent['main-content']['features-content'];

const bottomHeader = document.querySelectorAll('.bottom-content .text-content h4');
console.log(bottomHeader)
bottomHeader[0].textContent = siteContent['main-content']['services-h4']
bottomHeader[1].textContent = siteContent['main-content']['product-h4']
bottomHeader[2].textContent = siteContent['main-content']['vision-h4']

const bottomPara = document.querySelectorAll('.bottom-content .text-content p');
console.log(bottomPara)
bottomPara[0].textContent = siteContent['main-content']['services-content']
bottomPara[1].textContent = siteContent['main-content']['product-content']
bottomPara[2].textContent = siteContent['main-content']['vision-content']

const contactInfo = document.querySelector('.contact h4')
console.log(contactInfo);
contactInfo.textContent = siteContent['contact']['contact-h4']

const contactP = document.querySelectorAll('.contact p')
console.log(contactP);
contactP[0].textContent =siteContent['contact']['address'];
contactP[1].textContent =siteContent['contact']['email'];
contactP[2].textContent =siteContent['contact']['phone'];

const imges = document.querySelector('#logo-img');
imges.setAttribute('src', siteContent['images']['logo-img'] );
console.log(imges);

const snippet = document.querySelector ('#cta-img');
snippet.setAttribute('src', siteContent['images']['cta-img']);
console.log(snippet);

const accent = document.querySelector('#middle-img');
accent.setAttribute('src', siteContent['images']['accent-img']);
console.log(accent);

const copyright = document.querySelector('footer a');
console.log(copyright);
copyright.textContent = siteContent['footer']['copyright'];
copyright.classList.add('bold');