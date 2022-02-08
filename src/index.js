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

console.log('project wired!')

// General 
const bodyContainer = document.querySelector('.container');

// Header
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const logo = document.querySelector('#logo-img');

// Top
const top = document.querySelector('.cta');
const topText = top.querySelector('h1');
const topButton = top.querySelector('button');
const topImg = top.querySelector('img');

// Mid
const main = document.querySelector('.main-content');
const mid = main.querySelector('.top-content');
const midTextOne = document.querySelector('.text-content:nth-of-type(1)');
const midTextTwo = document.querySelector('.text-content:nth-of-type(2)');
const midImg = main.querySelector('.middle-img');

// Bottom
const botTextOne = document.querySelector('.text-content:nth-of-type(3)');
const botTextTwo = document.querySelector('.text-content:nth-of-type(4)');
const botTextThree = document.querySelector('.text-content:nth-of-type(5)');

// Contact
const contact = document.querySelector('.contact');
const contactTitle = contact.querySelector('h4');
const contactInfo = contact.querySelectorAll('p');

// Footer
const footer = document.querySelector('footer');
const footerLink = footer.querySelector('a');
