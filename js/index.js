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

// nav 

const servicesNav = document.querySelector('header nav a:nth-of-type(1)');
const productNav = document.querySelector('header nav a:nth-of-type(2)');
const visionNav = document.querySelector('header nav a:nth-of-type(3)');
const featuresNav = document.querySelector('header nav a:nth-of-type(4)');
const aboutNav = document.querySelector('header nav a:nth-of-type(5)');
const contactNav = document.querySelector('header nav a:nth-of-type(6)');

servicesNav.textContent = siteContent['nav']['nav-item-1'];
productNav.textContent = siteContent['nav']['nav-item-2'];
visionNav.textContent = siteContent['nav']['nav-item-3'];
featuresNav.textContent = siteContent['nav']['nav-item-4'];
aboutNav.textContent = siteContent['nav']['nav-item-5'];
contactNav.textContent = siteContent['nav']['nav-item-6'];

// cta
const h1 = document.querySelector('.cta .cta-text h1');
const button = document.querySelector('.cta .cta-text button');
const ctaImg = document.querySelector('#cta-img');

h1.textContent = siteContent['cta']['h1'];
button.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];

// main content
    // top content
const featuresHeader = document.querySelector('.main-content .top-content .text-content h4:nth-of-type(1)');
const featuresContent = document.querySelector('.main-content .top-content .text-content p:nth-of-type(1)');
const aboutHeader = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) h4');
const aboutContent = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) p');


featuresHeader.textContent = siteContent['main-content']['features-h4'];
featuresContent.textContent = siteContent['main-content']['features-content'];
aboutHeader.textContent = siteContent['main-content']['about-h4'];
aboutContent.textContent = siteContent['main-content']['about-content'];

    // middle Img
const middleImg = document.querySelector('.main-content .middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

    // bottom Content
const servicesHeader = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(1) h4');
const servicesContent = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(1) p');
const productHeader = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(2) h4');
const productContent = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(2) p');
const visionHeader = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(3) h4');
const visionContent = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(3) p');

servicesHeader.textContent = siteContent['main-content']['services-h4'];
servicesContent.textContent = siteContent['main-content']['services-content'];
productHeader.textContent = siteContent['main-content']['product-h4'];
productContent.textContent = siteContent['main-content']['product-content'];
visionHeader.textContent = siteContent['main-content']['vision-h4'];
visionContent.textContent = siteContent['main-content']['vision-content'];

// contact
const contactHeader = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');

contactHeader.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

// footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

// const navColor = document.querySelectorAll('nav a');
// navColor.forEach(element => navColor.style.color = green;)