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

const header = document.querySelectorAll('header');

const headerContainer = document.querySelectorAll ('container');


// NAV LINKS // 
const headerLinks = document.querySelectorAll('header nav a');

services = headerLinks[0].textContent = 'Services';
product = headerLinks[1].textContent = 'Product';
vision = headerLinks[2].textContent = 'Vision';
features = headerLinks[3].textContent = 'Features';
about = headerLinks[4].textContent = 'About';
contact = headerLinks[5].textContent = 'Contact';


// CTA SECTION //

const ctaText = document.querySelector('h1');
addCta = ctaText.textContent = 'DOM Is Awesome';

const ctaButton = document.querySelector('button');
addButtonText = ctaButton.textContent = 'Get Started';

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);


// MAIN CONTENT //
const mainTextTop = document.getElementsByTagName('h4');
const mainParTop = document.getElementsByTagName('p');


addFeaturesText = mainTextTop[0].textContent = 'Features';
addFeaturesPar = mainParTop[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

addAboutText = mainTextTop[1].textContent = 'About';
addAboutPar = mainParTop[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

addServicesText = mainTextTop[2].textContent = 'Services';
addServicesPar = mainParTop[2].textContent ='Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

addProductText = mainTextTop[3].textContent = 'Product';
addProductPar = mainParTop[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

addVisionText = mainTextTop[4].textContent = 'Vision';
addVisionPar = mainParTop[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

// CONTACT //

const contactText = document.querySelector('.contact h4');
contactText.textContent = siteContent.contact['contact-h4'];

const contactInfo = document.querySelectorAll ('.contact p');
contactInfo[0].textContent = siteContent.contact['address'];
contactInfo[1].textContent = siteContent.contact['phone'];
contactInfo[2].textContent = siteContent.contact['email'];

// FOOTER//

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer['copyright'];













