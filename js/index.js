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

let navStuff = document.querySelectorAll('nav a');
navStuff[0].innerHTML = 'Services'
navStuff[1].innerHTML = 'Product'
navStuff[2].innerHTML = 'Vision'
navStuff[3].innerHTML = 'Features'
navStuff[4].innerHTML = 'About'
navStuff[5].innerHTML = 'Contact'

let ctaSelector = document.querySelector('.cta h1');
ctaSelector.innerHTML = 'DOM Is Awesome'

let ctaButton = document.querySelector('.cta button');
ctaButton.innerHTML = 'Get Started'

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute('src', siteContent["cta"]["img-src"])

let topHeaders = document.querySelectorAll('.top-content .text-content h4');
topHeaders[0].innerHTML = 'Features'
topHeaders[1].innerHTML = 'About'

let topText = document.querySelectorAll('.top-content .text-content p');
topText[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topText[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["img-src"])

let bottomHeaders = document.querySelectorAll('.bottom-content .text-content h4');
bottomHeaders[0].innerHTML = 'Services'
bottomHeaders[1].innerHTML = 'Product'
bottomHeaders[2].innerHTML = 'Vision'

let bottomText = document.querySelectorAll('.bottom-content .text-content p');
bottomText[0].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomText[1].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomText[2].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let contactHeader = document.querySelector('.contact h4');
contactHeader.innerHTML = 'Contact'

let contactText = document.querySelectorAll('.contact p');
contactText[0].innerHTML = "123 Way 456 Street Somewhere, USA"
contactText[1].innerHTML = "1 (888) 888-8888"
contactText[2].innerHTML = "sales@greatidea.io"

let copyrightInfo = document.querySelector('footer p');
copyrightInfo.innerHTML = "Copyright Great Idea! 2018"

let navFam = document.querySelector('nav');

let newNavItem1 = document.createElement('a');
let newNavItem1Text = document.createTextNode('Introduction');
newNavItem1.appendChild(newNavItem1Text);
navFam.prepend(newNavItem1);

let newNavItem2 = document.createElement('a');
let newNavItem2Text = document.createTextNode('Legal');
navFam.appendChild(newNavItem2).appendChild(newNavItem2Text);

let navSelection = document.querySelectorAll('a');
navSelection.style.color = 'green'