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
//images for website
const logo = document.getElementById("logo-img");
logo.src = (siteContent["nav"]["img-src"]);

const middleImage = document.getElementById('middle-img');
middleImage.src = (siteContent['main-content']['middle-img-src']);
// middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

//nav nav nav nav nav nav nav nav
// newNav.
//  let newNav = document.querySelectorAll('.nav');
//  let navItems = [nav]
// CTA CTA CTA CTA CTA CTA
const newH1 = document.querySelector('h1');
newH1.textContent = siteContent.cta.h1;

const newButton = document.querySelector('button');
newButton.textContent = siteContent.cta.button;

const ctaImage = document.getElementById('cta-img');
ctaImage.src = (siteContent["cta"]["img-src"]);
//main content main content main content
const newMainContent = document.querySelector('.main-content');
const newContact = document.querySelector('.contact');
const NewContactP = document.querySelectorAll('.contact p')
console.log(NewContactP);
const newFooter = document.querySelector('footer');
console.log(siteContent.contact);

// newContact.textContent = siteContent.contact.array.forEach(element => {
  
// });;
newFooter.textContent = siteContent.footer.copyright;

