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
//====================================================================================
//  ADDED IMAGES
//====================================================================================

let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

const codeSnippet = document.getElementById('cta-img');
codeSnippet.src = siteContent['cta']['img-src'];

const codeAcrossScreen  = document.getElementById('middle-img');
codeAcrossScreen.src = siteContent['main-content']['middle-img-src'];

//====================================================================================
//  NAVIGATION
//====================================================================================

const linkKeys = Object.values(siteContent['nav']);
const navItems = document.querySelectorAll('a');
navItems.forEach((item, index) => item.innerHTML = linkKeys[index]);

//====================================================================================
//  CTA
//====================================================================================

// cta heading
const mainHeading = document.querySelector('.cta-text h1');
mainHeading.innerHTML = 'Dom<br>Is<br>Awesome';

// cta button
const ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = 'Get Started';

//====================================================================================
//  MAIN CONTENT
//====================================================================================

// Features Heading and Paragraphs
const featuresHeading = document.querySelector('.top-content .text-content:first-child h4');
featuresHeading.innerHTML = siteContent['main-content']['features-h4'];

const featuresContent = document.querySelector('.top-content .text-content:first-child p');
featuresContent.innerHTML = siteContent['main-content']['features-content'];

// About Heading and Paragraphs
const aboutHeading = document.querySelector('.top-content .text-content:last-child h4');
aboutHeading.innerHTML = siteContent['main-content']['about-h4'];

const aboutContent = document.querySelector('.top-content .text-content:last-child p');
aboutContent.innerHTML = siteContent['main-content']['about-content'];

// Services Heading and Paragraphs
const servicesHeading = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
servicesHeading.innerHTML = siteContent['main-content']['services-h4'];

const servicesContent = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesContent.innerHTML = siteContent['main-content']['services-content'];

// Products Heading and Paragraphs
const productHeading = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productHeading.innerHTML = siteContent['main-content']['product-h4'];

const productContent = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productContent.innerHTML = siteContent['main-content']['product-content'];

// Vision Heading and Paragraphs
const visionHeading = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionHeading.innerHTML = siteContent['main-content']['vision-h4'];

const visionContent = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionContent.innerHTML = siteContent['main-content']['vision-content'];

//====================================================================================
//  CONTACT SECTION
//====================================================================================

const contactHeading = document.querySelector('.contact h4');
contactHeading.innerHTML = siteContent['contact']['contact-h4'];