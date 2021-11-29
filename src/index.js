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
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

// console.log('project wired!')
// let logo = document.getElementById('logo-img');
// logo.setAttribute('src', siteContent['nav']['img-src'])
// console.log("HEEEYYY!!!! IT'S A ME, MARIOOOO!!!!")

// const nav = document.getElementsByTagName('nav')
// const links = document.querySelectorAll('nav a')

const navLinks = document.querySelectorAll('nav a');
const linkTexts = Object.values(siteContent.nav)
console.log(linkTexts)
navLinks.forEach(function(link, idx){
  link.textContent = linkTexts[idx]
});

const logoImage = document.querySelector('#logo-img');
console.log(logoImage);
logoImage.src = siteContent.images['logo-img'];

const codeImage = document.querySelector('#cta-img');
codeImage.src = siteContent.images['cta-img'];

const accentImage = document.querySelector('.middle-img');
accentImage.src = siteContent.images['accent-img'];

const h1 = document.querySelector('.cta-text h1');
h1.textContent = siteContent.cta.h1;

const getStartedButton = document.querySelector('.cta-text button');
getStartedButton.textContent = siteContent.cta.button;

const features = document.querySelector('.main-content h4');
features.textContent = siteContent["main-content"]['features-h4'];

const featContent = document.querySelector('.main-content p')
featContent.textContent = siteContent['main-content']['features-content'];