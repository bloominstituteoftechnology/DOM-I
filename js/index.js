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

// initial commit

const nav = document.querySelector('nav');
const navList = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact', logo.png];
navList.forEach(navigation => {
  let navItems = document.createElement('a');
  navItems.textContent = navigation;
  nav.append(navItems);
});

// cta h1
const cta = document.querySelector('.cta')
const ctaText = document.querySelector('.cta .cta-text')
const h1Arr = siteContent['cta']['h1'].split(' ');
const domH1 = document.createElement('h1');
const isH1 = document.createElement('h1');
const awesomeH1 = document.createElement('h1');

cta.prepend(awesomeH1);
cta.prepend(isH1);
cta.prepend(domH1);
ctaText.prepend(awesomeH1);
ctaText.prepend(isH1);
ctaText.prepend(domH1);

domH1.textContent = h1Arr[0];
isH1.textContent = h1Arr[1];
awesomeH1.textContent = h1Arr[2];

// cta button
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta['button'];

//cta get-started image
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent.cta['img-src'];

// main-content middle-img
const middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// main-content text-content
const textH4 = Array.from(document.querySelectorAll('.text-content h4'));
const textP = Array.from(document.querySelectorAll('.text-content p'));

const features = textH4[0];
const featureP = textP[0];
features.textContent = siteContent['main-content']['features-h4'];
featureP.textContent = siteContent['main-content']['features-content'];

const about = textH4[1];
const aboutContent = textP[1];
about.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];

const services = textH4[2];
const servicesContent = textP[2];
services.textContent = siteContent['main-content']['services-h4'];
servicesContent.textContent = siteContent['main-content']['services-content'];

const product = textH4[3];
const productContent = textP[3];
product.textContent = siteContent['main-content']['product-h4'];
productContent.textContent = siteContent['main-content']['product-content'];

const vision = textH4[4];
const visionContent = textP[4];
vision.textContent = siteContent['main-content']['vision-h4'];
visionContent.textContent = siteContent['main-content']['vision-content'];

// contact
const contact = document.querySelectorAll('.contact h4')
contact[0].textContent = siteContent['contact']['contact-h4']

const contactUs = document.querySelectorAll('.contact p')
contactUs[0].textContent = siteContent['contact']['address']
contactUs[1].textContent = siteContent['contact']['phone']
contactUs[2].textContent = siteContent['contact']['email']