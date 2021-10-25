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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


navLink1 = document.querySelector('nav a');
navLink2 = navLink1.nextSibling;
navLink3 = navLink2.nextSibling;
navLink4 = navLink3.nextSibling;
navLink5 = navLink4.nextSibling;
navLink6 = navLink5.nextSibling;

navLink1.textContent = siteContent['nav']['nav-item-1'];
navLink2.textContent = siteContent['nav']['nav-item-2'];
navLink3.textContent = siteContent['nav']['nav-item-3'];
navLink4.textContent = siteContent['nav']['nav-item-4'];
navLink5.textContent = siteContent['nav']['nav-item-5'];
navLink6.textContent = siteContent['nav']['nav-item-6'];

const ctaText = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('#cta-img');
ctaText.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.src = 'img/header-img.png';


const featuresH4 = document.querySelector('.top-content .text-content h4');
const featuresP = document.querySelector('.top-content .text-content p');
featuresH4.textContent = siteContent['main-content']['features-h4'];
featuresP.textContent = siteContent['main-content']['features-content'];

const aboutH4 = document.querySelector('.text-content:nth-of-type(2) h4');
const aboutP = document.querySelector('.text-content:nth-of-type(2) p');
aboutH4.textContent = siteContent['main-content']['about-h4'];
aboutP.textContent = siteContent['main-content']['about-content'];
