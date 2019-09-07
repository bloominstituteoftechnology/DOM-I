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

// Images
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Nav Items
let navigation = document.querySelectorAll('nav a');
const navigationArr = Array.from(navigation);
navigationArr[0].textContent = siteContent["nav"]["nav-item-1"];
navigationArr[1].textContent = siteContent["nav"]["nav-item-2"];
navigationArr[2].textContent = siteContent["nav"]["nav-item-3"];
navigationArr[3].textContent = siteContent["nav"]["nav-item-4"];
navigationArr[4].textContent = siteContent["nav"]["nav-item-5"];
navigationArr[5].textContent = siteContent["nav"]["nav-item-6"];

// Header
let headerContent = document.querySelectorAll('div .cta-text h1');
const headerContentArr = Array.from(headerContent);
headerContent[0].textContent = siteContent["cta"]['h1'];
let ctaButton = document.querySelectorAll('div .cta-text button');
const ctaButtonArr = Array.from(ctaButton);
ctaButton[0].textContent = siteContent["cta"]['button'];


// Main content top
let mainContentHeader = document.querySelectorAll('div .text-content h4');
const mainContentHeaderArr = Array.from(mainContentHeader);
mainContentHeaderArr[0].textContent = siteContent['main-content']['features-h4'];
mainContentHeaderArr[1].textContent = siteContent['main-content']['about-h4'];
mainContentHeaderArr[2].textContent = siteContent['main-content']['services-h4'];
mainContentHeaderArr[3].textContent = siteContent['main-content']['product-h4'];
mainContentHeaderArr[4].textContent = siteContent['main-content']['vision-h4'];

//Main content bottom
let mainContentParagraph = document.querySelectorAll('div .text-content p');
const mainContentParagraphrArr = Array.from(mainContentParagraph);
mainContentParagraphrArr[0].textContent = siteContent['main-content']['features-content'];
mainContentParagraphrArr[1].textContent = siteContent['main-content']['about-content'];
mainContentParagraphrArr[2].textContent = siteContent['main-content']['services-content'];
mainContentParagraphrArr[3].textContent = siteContent['main-content']['product-content'];
mainContentParagraphrArr[4].textContent = siteContent['main-content']['vision-content'];

// Contact section 
let contactHeader = document.querySelectorAll('.contact h4');
const contactHeaderArr = Array.from(contactHeader);
contactHeaderArr[0].textContent = siteContent['contact']['contact-h4'];
let contactParagraph = document.querySelectorAll('.contact p');
const contactParagraphArr = Array.from(contactParagraph);
contactParagraphArr[0].textContent = siteContent['contact']['address'];
contactParagraphArr[1].textContent = siteContent['contact']['phone'];
contactParagraphArr[2].textContent = siteContent['contact']['email'];


// Footer 
let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

// change color text of the navigation 
let navColor = document.querySelectorAll('nav a');
navColor.forEach( (element) => {
  element.style.color = 'green';
});

// Add new nav items
const navElements = document.querySelector('nav');
let newNavItem = document.createElement('a');
newNavItem.textContent = "Login";
navElements.appendChild(newNavItem);

const navElements2 = document.querySelector('nav');
let newNavItem2 = document.createElement('a');
newNavItem2.textContent = "Home";
navElements.prepend(newNavItem2);

// Add color to new nav items above
navColor = document.querySelectorAll('nav a');
navColor.forEach( (element) => {
  element.style.color = 'green';
});