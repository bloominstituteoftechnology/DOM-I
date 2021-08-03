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

let nav = document.querySelectorAll('nav a');
const newNavArray = Array.from(nav);
newNavArray.forEach((item, index) => item.textContent = siteContent['nav'][`nav-item-${index + 1}`]);

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = 'DOM \n is\n Awesome';
let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent['cta']['button'];
let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let featuresH4 = document.querySelector(".top-content .text-content:nth-child(1) h4");
featuresH4.textContent = siteContent['main-content']['features-h4'];
let featuresP = document.querySelector(".top-content .text-content:nth-child(1) p");
featuresP.textContent = siteContent['main-content']['features-content'];
let aboutH4 = document.querySelector(".top-content .text-content:nth-child(2) h4");
aboutH4.textContent = siteContent['main-content']['about-h4'];
let aboutP = document.querySelector(".top-content .text-content:nth-child(2) p");
aboutP.textContent = siteContent['main-content']['about-content'];

let middleImg = document.querySelector(".middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let servicesH4 = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
servicesH4.textContent = siteContent['main-content']['services-h4'];
let servicesP = document.querySelector(".bottom-content .text-content:nth-child(1) p");
servicesP.textContent = siteContent['main-content']['services-content'];
let productH4 = document.querySelector(".bottom-content .text-content:nth-child(2) h4");
productH4.textContent = siteContent['main-content']['product-h4'];
let productP = document.querySelector(".bottom-content .text-content:nth-child(2) p");
productP.textContent = siteContent['main-content']['product-content'];
let visionH4 = document.querySelector(".bottom-content .text-content:nth-child(3) h4");
visionH4.textContent = siteContent['main-content']['vision-h4'];
let visionP = document.querySelector(".bottom-content .text-content:nth-child(3) p");
visionP.textContent = siteContent['main-content']['vision-content'];

let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent['contact']['contact-h4'];

let addressP = document.querySelector(".contact p:nth-of-type(1)");
addressP.textContent = siteContent['contact']['address'];

let phoneP = document.querySelector(".contact p:nth-of-type(2)");
phoneP.textContent = siteContent['contact']['phone'];

let emailP = document.querySelector(".contact p:nth-of-type(3)");
emailP.textContent = siteContent['contact']['email'];