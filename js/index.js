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


const navSelections = document.querySelectorAll('a');
const navArray = Array.from(navSelections);
navArray[0].textContent = siteContent['nav']["nav-item-1"];
navArray[1].textContent = siteContent['nav']["nav-item-2"];
navArray[2].textContent = siteContent['nav']["nav-item-3"];
navArray[3].textContent = siteContent['nav']["nav-item-4"];
navArray[4].textContent = siteContent['nav']["nav-item-5"];
navArray[5].textContent = siteContent['nav']["nav-item-6"];

//CTA
const ctaheader = document.querySelector('.cta h1');
ctaheader.textContent = siteContent['cta']['h1'];

const ctabutton = document.querySelector('.cta button');
ctabutton.textContent = siteContent['cta']['button'];

const ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//Contnent
const mainContentTopHeader = document.querySelectorAll('.main-content .top-content .text-content h4');
const contentHeaderArray = Array.from(mainContentTopHeader);
contentHeaderArray[0].textContent = siteContent['main-content']['features-h4'];
contentHeaderArray[1].textContent = siteContent['main-content']['about-h4']

const mainContentTopP = document.querySelectorAll('.main-content .top-content .text-content p');
const mainContentTopPArray = Array.from(mainContentTopP);
mainContentTopPArray[0].textContent = siteContent['main-content']['features-content'];
mainContentTopPArray[1].textContent = siteContent['main-content']['about-content'];

const contentImg = document.querySelector('.main-content img');
contentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const mainContentBottomHeader = document.querySelectorAll('.main-content .bottom-content .text-content h4');
const mainContentBottomHeaderArray = Array.from(mainContentBottomHeader);
mainContentBottomHeaderArray[0].textContent = siteContent['main-content']['services-h4'];
mainContentBottomHeaderArray[1].textContent = siteContent['main-content']['product-h4'];
mainContentBottomHeaderArray[2].textContent = siteContent['main-content']['vision-h4'];

const mainContentBottomP = document.querySelectorAll('.main-content .bottom-content .text-content p');
const mainContentBottomPArray = Array.from(mainContentBottomP);
mainContentBottomPArray[0].textContent = siteContent['main-content']['services-content'];
mainContentBottomPArray[1].textContent = siteContent['main-content']['product-content'];
mainContentBottomPArray[2].textContent = siteContent['main-content']['vision-content'];

//contact
const contactSelectionHeader = document.querySelector('.contact h4');
contactSelectionHeader.textContent = siteContent['contact']['contact-h4'];

const contactSelectionP = document.querySelectorAll('.contact p');
const contactSelectionPArray = Array.from(contactSelectionP);
contactSelectionPArray[0].textContent = siteContent['contact']['address'];
contactSelectionPArray[1].textContent = siteContent['contact']['phone'];
contactSelectionPArray[2].textContent = siteContent['contact']['email'];

//footer
const footerSelection = document.querySelector('footer p');
footerSelection.textContent = siteContent['footer']['copyright'];
