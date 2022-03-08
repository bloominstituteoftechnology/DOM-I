const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

//Changing header img src
const header = document.querySelector("header");
header.querySelector("img").src = siteContent["images"]["logo-img"];

// Changing cta section img src
const ctaSection = document.querySelector('.cta');
ctaSection.querySelector('img').src = siteContent['images']['cta-img'];

// Changing main-content img src
const mainCont = document.querySelector(".main-content");
mainCont.querySelector('img').src = siteContent['images']['accent-img'];



// Changes Nav Links

// Link One
const serviceLink = document.querySelector('.italic:nth-of-type(1)');
serviceLink.textContent = siteContent['nav']['nav-item-1']; 

// Link Two
const productLink = document.querySelector('.italic:nth-of-type(2)');
productLink.textContent = siteContent['nav']['nav-item-2'];

// Link Three
const visionLink = document.querySelector('.italic:nth-of-type(3)');
visionLink.textContent = siteContent['nav']['nav-item-3'];

// Link Four
const featuresLink = document.querySelector('.italic:nth-of-type(4)');
featuresLink.textContent = siteContent['nav']['nav-item-4'];

// Link Five
const aboutLink = document.querySelector('.italic:nth-of-type(5)');
aboutLink.textContent = siteContent['nav']['nav-item-5'];

// Link Six
const ContactLink = document.querySelector('.italic:nth-of-type(6)');
ContactLink.textContent = siteContent['nav']['nav-item-6'];



// Changes cta section

// ctaSection h1 
ctaSection.querySelector('h1').textContent = siteContent['cta']['h1'];

// ctaSection button
ctaSection.querySelector('button').textContent = siteContent['cta']['button'];