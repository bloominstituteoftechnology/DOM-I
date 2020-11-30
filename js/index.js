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
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

let logo = document.getElementById("logo-img");
logo.setAttribute('src', 'img/logo.png');

const bigLogo = document.getElementById('cta-img');
bigLogo.setAttribute('src', 'img/header-img.png');

const h1Logo = document.querySelector('.cta-text h1');
h1Logo.innerText = "DOM \n is \n Awesome";

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = "Get Started";

// NAV
const servicesLink = document.createElement('a');
servicesLink.textContent = "Services";
servicesLink.href = "#";
document.querySelector('nav').append(servicesLink);

const productLink = document.createElement('a');
productLink.textContent = "Product";
productLink.href = "#";
document.querySelector('nav').append(productLink);

const visionLink = document.createElement('a');
visionLink.textContent = "Vision";
visionLink.href = "#";
document.querySelector('nav').append(visionLink);

const featuresLink = document.createElement('a');
featuresLink.textContent = "Features";
featuresLink.href = "#";
document.querySelector('nav').append(featuresLink);

const aboutLink = document.createElement('a');
aboutLink.textContent = "About";
aboutLink.href = "#";
document.querySelector('nav').append(aboutLink);

const contactLink = document.createElement('a');
contactLink.textContent = "Contact";
contactLink.href = "#";
document.querySelector('nav').append(contactLink);


//  MAIN CONTENT


//  TOP CONTENT
const midImg = document.getElementById("middle-img");
midImg.setAttribute('src', 'img/mid-page-accent.jpg');

const featuresH4 = document.querySelector('.top-content .text-content:nth-child(1) h4');
featuresH4.textContent = 'Features';

const featuresText = document.querySelector('.top-content .text-content:nth-child(1) p');
featuresText.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
aboutH4.textContent = "About";

const aboutText = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutText.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//  BOTTOM CONTENT

const servicesH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
servicesH4.textContent = "Services";

const servicesText = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesText.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productH4.textContent = "Product";

const productText = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productText.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const visionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionH4.textContent = "Vision";

const visionText = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionText.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";


//  CONTACT SECTION

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = "Contact";

const contactInfo1 = document.querySelector('.contact p');
contactInfo1.innerText = "123 Way 456 Street \n Somewhere, USA \n 1(888)-888-8888 \n sales@greatidea.io";

const copyright = document.querySelector('footer p');
copyright.textContent = "Copyright Great Idea! 2018";