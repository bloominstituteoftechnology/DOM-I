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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// nav

const nav = document.querySelectorAll('a');
nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];

//------------------------------------------------------

//cta

const ctaText = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];


const ctaImage = getElementById('cta-img');
ctaImage.setAttribute('src', siteContent['cta']['img-src']);
//--------------------------------------------------------

//main-content

const mainH4 = document.querySelector('main-content');
mainH4.textContent = siteContent['main-content']['features-h4'];

const mainContent = document.querySelector('main-content');
mainContent.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector('main-content');
aboutH4.textContent = siteContent['main-content']['about'];

const middleImage = getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['img-src']);

const servicesH4 = document.querySelector('main-content');
servicesH4.textContent = siteContent['main-content']['services-content'];

const servicesContent = document.querySelector('main-content');
servicesContent.textContent = siteContent['main-content']['services-content'];

const productH4 = document.querySelector('main-content');
productH4.textContent = siteContent['main-content']['product-h4'];

const productContent = document.querySelector('main-content');
productContent.textContent = siteContent['main-content']['product-content'];

const visionH4 = document.querySelector('main-content');
visionH4.textContent = siteContent['main-content']['vision-h4'];

const visionContent = document.querySelector('main-content');
visionContent = siteContent['main-content']['vision-content'];
//------------------------------------------------------

//contact

// "contact": {
//   "contact-h4" : "Contact",
//   "address" : "123 Way 456 Street Somewhere, USA",
//   "phone" : "1 (888) 888-8888",
//   "email" : "sales@greatidea.io",
// },

const contactH4 = document.querySelector('contact');
contactH4.textContent = siteContent['contact']['contact-h4'];

const address = document.querySelector('contact');
address.textContent = siteContent['contact']['address'];

const phone = document.querySelector('contact');
phone.textContent = siteContent['contact']['phone'];

const email = document.querySelector('contact');
email.textContent = siteContent['contact']['email'];
//---------------------------------------------------

//footer


const footer = document.querySelector('copyright');
copyright.textContent = siteContent['footer']["copyright"];
