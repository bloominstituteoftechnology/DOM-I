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

let nav = document.querySelectorAll('nav a')
const newNavArray = Array.from(nav)
newNavArray.forEach((item,index) =>item.textContent = siteContent['nav'][`nav-item-${index}`])


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const addLink = document.querySelector('nav');

const h1Body = document.querySelector('h1');
// console.log(h1Body);
const newline = "\n";
h1Body.style.whiteSpace = 'pre'
h1Body.textContent = 'DOM' + newline + 'IS' + newline + 'AWESOME';

const buttonBody = document.querySelector('button');
buttonBody.textContent = 'Get Started';


const newAtag = document.createElement('a');
newAtag.textContent = 'Outreach';
newAtag.href = '#';
newAtag.style.color = 'green';
addLink.appendChild(newAtag);

const newH3 = document.createElement('h3');
newH3.textContent = 'Navigation:';
newH3.style.fontSize = '20px';
addLink.prepend(newH3);

//code snippit image
let code = document.getElementById("cta-img");
code.setAttribute('src', siteContent["cta"]["img-src"]);

let featurescontent = document.querySelector('.top-content .text-content:nth-of-type(1) h4')
featurescontent.textContent = 'FEATURES';

let featurestext = document.querySelector('.top-content .text-content:nth-of-type(1) p')
featurestext.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let aboutcontent = document.querySelector('.top-content .text-content:nth-of-type(2) h4')
aboutcontent.textContent = 'ABOUT';

let abouttext = document.querySelector('.top-content .text-content:nth-of-type(2) p')
abouttext.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


// middle image

let middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];


let servicescontent = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4')
servicescontent.textContent = 'SERVICES';

let servicestext = document.querySelector('.bottom-content .text-content:nth-of-type(1) p')
servicestext.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let productcontent = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
productcontent.textContent = 'PRODUCT';

let producttext = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
producttext.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

let visioncontent = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
visioncontent.textContent = 'VISION';

let visiontext = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
visiontext.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.querySelector('.contact h4').innerHTML = siteContent['contact']['contact-h4'];
document.querySelector('.contact p').innerHTML = '123 Way 456 Street <br> Somewhere, USA';
document.querySelector('.container .contact p:nth-of-type(2)').textContent = siteContent['contact']['phone'];
document.querySelector('.container .contact p:nth-of-type(3)').textContent = siteContent ['contact']['email'];

document.querySelector('footer').innerHTML = siteContent['footer']['copyright'];
