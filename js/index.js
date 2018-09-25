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

let nav = document.querySelectorAll('nav a');
nav[0].innerText = 'Services';
nav[1].innerText = 'Product';
nav[2].innerText = 'Vision';
nav[3].innerText = 'Features';
nav[4].innerText = 'About';
nav[5].innerText = 'Contact';

//let navItems = document.querySelectorAll('a');

//let cta = document.getElementsByClassName('.cta-text');
let headingOne = document.querySelector('h1');
headingOne.innerText = 'DOM IS Awesome';

let codeSnippet = document.getElementById('cta-img');
codeSnippet.src = 'img/header-img.png';

let featuresHeading = document.querySelector('.top-content h4');
featuresHeading.innerText = 'Features';

let featuresContent = document.querySelector('.top-content p');
featuresContent.innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let aboutHeading = document.querySelectorAll('.top-content h4');
aboutHeading[1].innerText = 'About';

let aboutContent = document.querySelectorAll('.top-content p');
aboutContent[1].innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."';

let button = document.querySelector('button');
button.innerText = 'Get Started';

let servicesHeading = document.querySelector('.bottom-content h4');
servicesHeading.innerText = 'Services';

let servicesContent = document.querySelector('.bottom-content p');
servicesContent.innerText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

let productHeading = document.querySelectorAll('.bottom-content h4');
productHeading[1].innerText = 'Product';

let productContent = document.querySelectorAll('.bottom-content p');
productContent[1].innerText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let visionHeading = document.querySelectorAll('.bottom-content h4');
visionHeading[2].innerText = 'Vision';

let visionContent = document.querySelectorAll('.bottom-content p');
visionContent[2].innerText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//let topContent = document.getElementsByClassName('.top-content');

let middleImage = document.getElementById('middle-img');
middleImage.src = 'img/mid-page-accent.jpg';

//let bottomContent = document.getElementsByClassName('.bottom-content');

let contact = document.querySelector('.contact h4');
contact.innerText = 'Contact';

let contactContent = document.querySelector('.contact p');
contactContent.innerText = '123 Way 456 Street Somewhere, USA';

let contactPhone = document.querySelectorAll('.contact p');
contactPhone[1].innerText = '1 (888) 888-8888';

let contactEmail = document.querySelectorAll('.contact p');
contactEmail[2].innerText = 'sales@greatidea.io';

let footer = document.querySelector('footer p');
footer.innerText = 'Copyright Great Idea! 2018';


