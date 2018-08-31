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

// Set Navigation (Menu) Links
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll("nav a"); // Grab the nav links
navLinks[0].innerHTML = siteContent ['nav'] ['nav-item-1'];
navLinks[1].innerHTML = siteContent ['nav'] ['nav-item-2'];
navLinks[2].innerHTML = siteContent ['nav'] ['nav-item-3'];
navLinks[3].innerHTML = siteContent ['nav'] ['nav-item-4'];
navLinks[4].innerHTML = siteContent ['nav'] ['nav-item-5'];   
navLinks[5].innerHTML = siteContent ['nav'] ['nav-item-6'];

// Change links to green
navLinks.forEach(function(links) {
  links.style.color = 'green';
});

// Add new link to the front and end of the nav bar
let newNavLink1 = document.createElement('a');
newNavLink1.innerHTML = 'New Features';
newNavLink1.style.color = 'green';
nav.prepend(newNavLink1);

let newNavLink2 = document.createElement('a');
newNavLink2.innerHTML = 'Our Team';
newNavLink2.style.color = 'green';
nav.appendChild(newNavLink2);

// Set Banner Content
let title = document.querySelector('.cta-text h1'); // Grab the cta and h1 text
title.innerHTML = siteContent ['cta'] ['h1'];

// Set Button
let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.innerHTML = siteContent ['cta'] ['button'];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

// Set Top Main-Content
  // Top Heading
let heading = document.querySelectorAll('.main-content .top-content h4');
heading[0].innerHTML = siteContent ['main-content'] ['features-h4'];
heading[1].innerHTML = siteContent ['main-content'] ['about-h4'];
  // Top Text
let topText = document.querySelectorAll('.main-content .top-content p');
topText[0].innerHTML = siteContent ['main-content'] ['features-content'];
topText[1].innerHTML = siteContent ['main-content'] ['about-content'];

// Middle Image
let middleImage = document.querySelector('.main-content .middle-img');
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

// Set Bottom Main-Content
  // Bottom Heading
let bottomHeading = document.querySelectorAll('.main-content .bottom-content h4');
bottomHeading[0].innerHTML = siteContent ['main-content'] ['services-h4'];
bottomHeading[1].innerHTML = siteContent ['main-content'] ['product-h4'];
bottomHeading[2].innerHTML = siteContent ['main-content'] ['vision-h4'];
 // Bottom Text
let bottomText = document.querySelectorAll('.main-content .bottom-content p');
bottomText[0].innerHTML = siteContent ['main-content'] ['services-content'];
bottomText[1].innerHTML = siteContent ['main-content'] ['product-content'];
bottomText[2].innerHTML = siteContent ['main-content'] ['vision-content'];

// Set Contact Content
let contact = document.querySelectorAll('.contact p');
contact[0].innerHTML = siteContent ['contact'] ['contact-h4'];
contact[1].innerHTML = siteContent ['contact'] ['address'];
contact[2].innerHTML = siteContent ['contact'] ['phone'];
contact[3].innerHTML = siteContent ['contact'] ['email'];

// Set Footer Content
const footer = document.querySelector('footer p');
footer.innerHTML = siteContent ['footer'] ['copyright'];