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

// -------------------- NAV SECTION ---------------------- //
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const nav2 = document.querySelector('nav');
nav2.setAttribute('color', 'green');

const nav = document.querySelectorAll('nav a')
for(let i = 0; i < nav.length; i++){
  let index = "nav-item-" + (i + 1);
  nav[i].textContent = siteContent['nav'][index];
}

// ------------------------- HEADER SECTION ------------------------- //

const h1Content = document.querySelector('.cta h1');
h1Content.textContent = siteContent['cta']['h1'];

const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = siteContent['cta']['button'];

const headImg = document.getElementById("cta-img");
headImg.setAttribute('src', siteContent['cta']['img-src']);

// ----------------------- BODY SECTION --------------------------//

const featuresH4 = document.querySelector('.top-content:nth-child(1) h4');
featuresH4.textContent = siteContent["main-content"]['features-h4'];
const featuresP = document.querySelector('.top-content:nth-child(1) p');
featuresP.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector('.top-content .text-content:nth-child(2) h4');
aboutH4.textContent = siteContent["main-content"]['about-h4'];
const aboutP = document.querySelector('.top-content .text-content:nth-child(2) p');
aboutP.textContent = siteContent['main-content']['about-content'];

const bodyImg = document.getElementById("middle-img");
bodyImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

const servicesH4 = document.querySelector('.bottom-content .text-content:nth-child(1) h4');
servicesH4.textContent = siteContent["main-content"]['services-h4'];
const servicesP = document.querySelector('.bottom-content .text-content:nth-child(1) p');
servicesP.textContent = siteContent['main-content']['services-content'];

const productH4 = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
productH4.textContent = siteContent["main-content"]['product-h4'];
const productP = document.querySelector('.bottom-content .text-content:nth-child(2) p');
productP.textContent = siteContent['main-content']['product-content'];

const visionH4 = document.querySelector('.bottom-content .text-content:nth-child(3) h4');
visionH4.textContent = siteContent['main-content']['vision-h4'];
const visionP = document.querySelector('.bottom-content .text-content:nth-child(3) p');
visionP.textContent = siteContent['main-content']['vision-content'];

// ---------------------- CONTACT INFO SECTION ---------------------------- //

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent['contact']['contact-h4']; 

const address = document.querySelector('.contact p:nth-of-type(1)');
address.textContent = siteContent['contact']['address'];

const phoneNumber = document.querySelector('.contact p:nth-of-type(2)');
phoneNumber.textContent = siteContent['contact']['phone'];

const email = document.querySelector('.contact p:nth-of-type(3)');
email.textContent = siteContent['contact']['email'];

// --------------------- FOOTER SECTION ------------------- //

