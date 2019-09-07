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

//nav
let navBar = document.querySelectorAll("a");

navBar.forEach(function(value, i) {
  value.textContent = siteContent.nav[`nav-item-${i+1}`];
});

//main content
const domIsAwesome = document.querySelector('h1');

domIsAwesome.textContent = siteContent.cta.h1;

const codeSnippetImg = document.getElementById('cta-img');
codeSnippetImg.src = "img/header-img.png"

const buttonGetStarted = document.querySelector('button');
buttonGetStarted.textContent = siteContent.cta.button;

const features = document.querySelectorAll('.top-content .text-content h4')[0];
features.textContent = siteContent[`main-content`][`features-h4`];

const about = document.querySelectorAll('.top-content .text-content h4')[1];
about.textContent = siteContent[`main-content`][`about-h4`];

const featuresParagraph = document.querySelectorAll('.top-content .text-content p')[0];
featuresParagraph.textContent = siteContent[`main-content`][`features-content`];

const aboutContent = document.querySelectorAll('.top-content .text-content p')[1];
aboutContent.textContent = siteContent[`main-content`][`about-content`];

//middle img

const midImg = document.getElementById('middle-img');
midImg.src = "img/mid-page-accent.jpg";

//bottom content

const services = document.querySelectorAll('.bottom-content .text-content h4')[0];
services.textContent = siteContent[`main-content`][`services-h4`];

const product = document.querySelectorAll('.bottom-content .text-content h4')[1];
product.textContent = siteContent[`main-content`][`product-h4`];

const vision = document.querySelectorAll('.bottom-content .text-content h4')[2];
vision.textContent = siteContent[`main-content`][`vision-h4`];

const servicesParagraph = document.querySelectorAll('.bottom-content .text-content p')[0];
servicesParagraph.textContent = siteContent[`main-content`][`services-content`];

const productContent = document.querySelectorAll('.bottom-content .text-content p')[1];
productContent.textContent = siteContent[`main-content`][`product-content`];

const visionContent = document.querySelectorAll('.bottom-content .text-content p')[2];
visionContent.textContent = siteContent[`main-content`][`vision-content`];

//contact

const contact = document.querySelectorAll('.contact h4')[0];
contact.textContent = siteContent[`contact`][`contact-h4`];

const contactAddress = document.querySelectorAll('.contact p')[0];
contactAddress.textContent = siteContent[`contact`][`address`];

const contactPhone = document.querySelectorAll('.contact p')[1];
contactPhone.textContent = siteContent[`contact`][`phone`];

const contactEmail = document.querySelectorAll('.contact p')[2];
contactEmail.textContent = siteContent[`contact`][`email`];

//footer

const foot = document.querySelector('footer p');
foot.textContent = siteContent[`footer`][`copyright`];


//~ 


const home = document.createElement('a');
home.textContent = "Home";


const navDom = document.createElement('a');
navDom.textContent = "DOM";


const newNavHome = document.querySelector('nav');
newNavHome.prepend(home);


const newNavDom = document.querySelector('nav');
newNavDom.appendChild(navDom);

//~

const navText = document.querySelectorAll('a');
navText.forEach(element => {
  element.style.color = 'green'
});
