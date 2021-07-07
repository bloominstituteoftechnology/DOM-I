// const { forEach } = require("core-js/fn/array");

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
// header starts here
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
const allLinks = document.querySelectorAll('a')

// allLinks.style.color = 'green';

allLinks[0].style.color = 'green';
allLinks[1].style.color = 'green';
allLinks[2].style.color = 'green';
allLinks[3].style.color = 'green';
allLinks[4].style.color = 'green';
allLinks[5].style.color = 'green';
const link1 = allLinks[0].textContent = siteContent["nav"]["nav-item-1"];
const link2 = allLinks[1].textContent = siteContent["nav"]["nav-item-2"];
const link3 = allLinks[2].textContent = siteContent["nav"]["nav-item-3"];
const link4 = allLinks[3].textContent = siteContent["nav"]["nav-item-4"];
const link5 = allLinks[4].textContent = siteContent["nav"]["nav-item-5"];
const link6 = allLinks[5].textContent = siteContent["nav"]["nav-item-6"];

const headerH1 = document.querySelector('.cta-text h1');
headerH1.textContent = siteContent["cta"]["h1"];

const headerButton = document.querySelector('.cta-text button');
headerButton.textContent = siteContent["cta"]["button"];

const headerImg = document.getElementById('cta-img');
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);


const nav = document.querySelector('nav');
const navHome = document.createElement('a')
navHome.textContent = 'Home';
navHome.style.color = 'green';

nav.appendChild(navHome)
nav.prepend(navHome)
console.log(navHome)


// body starts here

const changeClass = document.querySelector('section div div');
  changeClass.className = "first-text";

  const textCont2 = document.querySelector('.first-text h4');
  textCont2.textContent = siteContent["main-content"]["features-h4"];

  const textCont2Pa = document.querySelector('.first-text p');
  textCont2Pa.textContent = siteContent["main-content"]["features-content"];

  const textCont1 = document.querySelector('.text-content h4');
  textCont1.textContent = siteContent["main-content"]["about-h4"];

  const textCont1Pa = document.querySelector('.text-content p');
  textCont1Pa.textContent = siteContent["main-content"]["about-content"];

  const bodyPic = document.querySelector('#middle-img');
  bodyPic.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const bottomText = document.querySelectorAll('.bottom-content div');

  const botfirst = bottomText[0].querySelector('h4');
  botfirst.textContent = siteContent['main-content']['services-h4']
;
  const botfirstPa = bottomText[0].querySelector('p');
  botfirstPa.textContent = siteContent['main-content']['services-content'];

  const botSec = bottomText[1].querySelector('h4');
  botSec.textContent = siteContent['main-content']['product-h4'];

  const botSecPa = bottomText[1].querySelector('p');
  botSecPa.textContent = siteContent['main-content']['product-content'];

  const botThird = bottomText[2].querySelector('h4')
  botThird.textContent = siteContent['main-content']['vision-h4'];

  const botThirdPa = bottomText[2].querySelector('p');
  botThirdPa.textContent = siteContent['main-content']['vision-content'];
//footer starts here

const footerContact = document.querySelector('.contact');
  
  const contactHeader = footerContact.querySelector('h4');
  
  contactHeader.textContent = siteContent["contact"]["contact-h4"];
  
const contactBody = footerContact.querySelectorAll('p');
    const address = contactBody[0].textContent = siteContent["contact"]["address"];
    const phone = contactBody[1].textContent = siteContent["contact"]["phone"];
    const email = contactBody[2].textContent = siteContent["contact"]["email"];
const  copyright = document.querySelector('footer p').textContent = siteContent["footer"]["copyright"]








