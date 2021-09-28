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

const nav = document.querySelector('nav')
nav.classList.add('mainNav')

const navLinkOne = document.querySelector('nav a')
navLinkOne.classList.add('nav-item-1')
navLinkOne.textContent = document.querySelector('.nav-item-1');

const navLinkTwo = navLinkOne.nextElementSibling;
navLinkTwo.classList.add('nav-item-2')
navLinkTwo.textContent = document.querySelector('.nav-item-2');

const navLinkThree = navLinkTwo.nextElementSibling;
navLinkThree.classList.add('nav-item-3')
navLinkThree.textContent = document.querySelector('.nav-item-3');

const navLinkFour = navLinkThree.nextElementSibling;
navLinkFour.classList.add('nav-item-4')
navLinkFour.textContent = document.querySelector('.nav.item-4');

const navLinkFive = navLinkFour.nextElementSibling;
navLinkFive.classList.add('nav-item-5')
navLinkFive.textContent = document.querySelector('.nav-item-5');

const navLinkSix = navLinkFive.nextElementSibling;
navLinkSix.classList.add('nav-item-6')
navLinkSix.textContent = document.querySelector('.nav-item-6')

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])



let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

