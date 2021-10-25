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

//Navigation Bar
//Setting navigation variables
const services = document.querySelector('nav a:nth-of-type(1)');
const product = document.querySelector('nav a:nth-of-type(2)');
const vision = document.querySelector('nav a:nth-of-type(3)');
const features = document.querySelector('nav a:nth-of-type(4)');
const about = document.querySelector('nav a:nth-of-type(5)');
const contact = document.querySelector('nav a:nth-of-type(6)');
//Updating the text of navigation variables
services.textContent = siteContent.nav['nav-item-1'];
product.textContent = siteContent.nav['nav-item-2'];
vision.textContent = siteContent.nav['nav-item-3'];
features.textContent = siteContent.nav['nav-item-4'];
about.textContent = siteContent.nav['nav-item-5'];
contact.textContent = siteContent.nav['nav-item-6'];

//Changing text to green
services.style.color = 'green';
product.style.color = 'green';
vision.style.color = 'green';
features.style.color = 'green';
about.style.color = 'green';
contact.style.color = 'green';

//Adding to the navigation
const navBefore = document.createElement('a');
navBefore.textContent = "Before";
navBefore.href = '#';
document.querySelector('nav').prepend(navBefore);

const navAfter = document.createElement('a');
navAfter.textContent = 'After';
navAfter.href = '#';
document.querySelector('nav').appendChild(navAfter);

//Making the new things green
navBefore.style.color = 'green';
navAfter.style.color = 'green';

//Messing with anchors (this is just me having fun, not a part of the assignment)
const topConent = document.querySelector('.top-content');
topConent.setAttribute('id', 'top-content');

features.setAttribute('href', '#top-content');
about.setAttribute('href', '#top-content');

const botConent = document.querySelector('.bottom-content');
botConent.setAttribute('id', 'bottom-content');

services.setAttribute('href', '#bottom-content');
product.setAttribute('href', '#bottom-content');
vision.setAttribute('href', '#bottom-content');

const contactLink = document.querySelector('.contact');
contactLink.setAttribute('id', 'contact');

contact.setAttribute('href', '#contact');

//Call to Action
//Setting CTA variables
const ctaText = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImage = document.querySelector('#cta-img');

//Updating the text of CTA variables
ctaText.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImage.setAttribute('src', siteContent.cta['img-src']);

//Main Contant - Top
//Setting main content-top variables
const featuresH4 = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
const featuresContent = document.querySelector('.top-content .text-content:nth-of-type(1) p');
const aboutH4 = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
const aboutContent = document.querySelector('.top-content .text-content:nth-of-type(2) p');
const middleImage = document.querySelector('#middle-img');
//Updating the text of main content-top variables
featuresH4.textContent = siteContent['main-content']['features-h4'];
featuresContent.textContent = siteContent['main-content']['features-content'];
aboutH4.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Main Content - Bottom
//Setting main content-bottom variables
const servicesTitle = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
const servicesContent = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
const productTitle = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
const productContent = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
const visionTitle = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
const visionContent = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
//Updating the text of main content-bottom variables
servicesTitle.textContent = siteContent['main-content']['services-h4'];
servicesContent.textContent = siteContent['main-content']['services-content'];
productTitle.textContent = siteContent['main-content']['product-h4'];
productContent.textContent = siteContent['main-content']['product-content'];
visionTitle.textContent = siteContent['main-content']['vision-h4'];
visionContent.textContent = siteContent['main-content']['vision-content'];

//Contact Content
//Setting contact variables
const contactTitle = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');
//Updating the text of contact variables
contactTitle.textContent = siteContent.contact['contact-h4'];
address.textContent = siteContent.contact.address;
phone.textContent = siteContent.contact.phone;
email.textContent = siteContent.contact.email;

//Footer Content
//Setting footer variables
const footerContent = document.querySelector('footer p');
//Updating the text of footer variables
footerContent.textContent = siteContent.footer.copyright;