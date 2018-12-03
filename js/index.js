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
//Image Selectors
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Nav Link content
let navBar = document.querySelector('nav');
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach((a, index) => { //NodeLists aren't actual arrays, but we can still use forEach on them!
  let navItemProperty = `nav-item-${index + 1}`;
  a.textContent =siteContent.nav[navItemProperty];
});

//CTA text and button
let ctaContent = document.querySelector('.cta-text');
let ctaHeader = ctaContent.children[0];
let ctaButton = ctaContent.children[1];
ctaHeader.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;

//Top Content
let topContent = document.querySelector('.top-content');

let featuresContent = topContent.children[0];
let featuresHeader = featuresContent.children[0];
let featuresText = featuresContent.children[1];

let aboutContent = topContent.children[1];
let aboutHeader = aboutContent.children[0];
let aboutText = aboutContent.children[1];

featuresHeader.textContent = siteContent["main-content"]["features-h4"];
featuresText.textContent = siteContent["main-content"]["features-content"];

aboutHeader.textContent = siteContent["main-content"]["about-h4"];
aboutText.textContent = siteContent["main-content"]["about-content"];

//Bottom Content
let bottomContent = document.querySelector('.bottom-content');

let servicesContent = bottomContent.children[0];
let servicesHeader = servicesContent.children[0];
let servicesText = servicesContent.children[1];

let productContent = bottomContent.children[1];
let productHeader = productContent.children[0];
let productText = productContent.children[1];

let visionContent = bottomContent.children[2];
let visionHeader = visionContent.children[0];
let visionText = visionContent.children[1];

servicesHeader.textContent = siteContent["main-content"]["services-h4"];
servicesText.textContent = siteContent["main-content"]["services-content"];

productHeader.textContent = siteContent["main-content"]["product-h4"];
productText.textContent = siteContent["main-content"]["product-content"];

visionHeader.textContent = siteContent["main-content"]["vision-h4"];
visionText.textContent = siteContent["main-content"]["vision-content"];

//Contact Content
let contactContent = document.querySelector('.contact');

let contactHeader = contactContent.children[0];
let contactAddress = contactContent.children[1];
let contactPhone = contactContent.children[2];
let contactEmail = contactContent.children[3];

contactHeader.textContent = siteContent.contact["contact-h4"];
contactAddress.textContent = siteContent.contact.address;
contactPhone.textContent = siteContent.contact.phone;
contactEmail.textContent = siteContent.contact.email;

//Footer content
let footerContent = document.querySelector('footer');
//Selecting specific element inside? document.querySelector('footer p') to select p tag inside footer
let footerText = footerContent.children[0];

footerText.textContent = siteContent.footer.copyright;

//Change navigation text to be green (Moved below prepend and append child so new links are also green!)
// navLinks.forEach(a => {
//   a.style.color = 'green';
// });

//Prepend and Append new children to Navigation links.
let newChild1 = document.createElement('a');
newChild1.textContent = "Home";
let newChild2 = document.createElement('a');
newChild2.textContent = "FAQ";

navBar.prepend(newChild1);
navBar.appendChild(newChild2);

//Update navlinks NodeList now that we added two more, so we can change their color to green as well.
navLinks = document.querySelectorAll('nav a');
//Change navigation text to be green (Moved below prepend and append child so new links are also green!)
navLinks.forEach(a => {
  a.style.color = 'green';
});

//Update styles for some elements.
ctaButton.style.boxShadow = '0px 2px 4px black';
ctaButton.style.transition = 'all .4s';

ctaButton.onmouseover = (e => {
  e.target.style.boxShadow = '0px 6px 6px black';
  e.target.style.backgroundColor = 'grey';
});
//Equivalent way to add event listeners, as these eventListeners are actually properties of elements/DOM Nodes.
// ctaButton.addEventListener("mouseover", (e) => {
//   e.target.style.boxShadow = '0px 6px 6px black';
//   e.target.style.backgroundColor = 'grey';
// });

ctaButton.onmouseleave = (e => {
  e.target.style.boxShadow = '0px 2px 4px black';
  e.target.style.backgroundColor = 'white';
});

//Click listener to change an elements content.
ctaHeader.onclick = (e => {
  e.target.textContent = `Please don't click on me...`;
});