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

// Navigation - Getters

const navItem1 = document.querySelector("nav a:nth-of-type(1)");
const navItem2 = document.querySelector("nav a:nth-of-type(2)");
const navItem3 = document.querySelector("nav a:nth-of-type(3)");
const navItem4 = document.querySelector("nav a:nth-of-type(4)");
const navItem5 = document.querySelector("nav a:nth-of-type(5)");
const navItem6 = document.querySelector("nav a:nth-of-type(6)");
const navImage = document.querySelector("#logo-img");

// Navigation - Loading Text

navItem1.textContent = siteContent['nav']["nav-item-1"];
navItem2.textContent = siteContent['nav']['nav-item-2'];
navItem3.textContent = siteContent['nav']['nav-item-3'];
navItem4.textContent = siteContent['nav']['nav-item-4'];
navItem5.textContent = siteContent['nav']['nav-item-5'];
navItem6.textContent = siteContent['nav']['nav-item-6'];

// CTA - Getters

const ctaHeading = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.querySelector("#cta-img");

// CTA - Loading Content

ctaHeading.textContent = siteContent['cta']['h1'];
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];

// Main Content - Getters

const featuresHeading = document.querySelector(".top-content h4:nth-of-type(1)");
const featuresContent = document.querySelector(".top-content p:nth-of-type(1)");
const aboutHeading = document.querySelector(".text-content:nth-of-type(2) h4");
const aboutContent = document.querySelector(".text-content:nth-of-type(2) p");
const middleImg = document.querySelector("#middle-img");
const servicesHeading = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
const servicesContent = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
const productHeading = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
const productContent = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
const visionHeading = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
const visionContent = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");

// Main Content - Loading Text

featuresHeading.textContent = siteContent["main-content"]["features-h4"];
featuresContent.textContent = siteContent["main-content"]["features-content"];
aboutHeading.textContent = siteContent["main-content"]["about-h4"];
aboutContent.textContent = siteContent["main-content"]["about-content"];
middleImg.src = siteContent["main-content"]["middle-img-src"];
servicesHeading.textContent = siteContent["main-content"]["services-h4"];
servicesContent.textContent = siteContent["main-content"]["services-content"];

productHeading.textContent = siteContent["main-content"]["product-h4"]
productContent.textContent = siteContent["main-content"]["product-content"];
visionHeading.textContent = siteContent["main-content"]["vision-h4"];
visionContent.textContent = siteContent["main-content"]["vision-content"];

// Contact - Getters

const contactHeading = document.querySelector(".contact h4");
const address = document.querySelector(".contact p:nth-of-type(1)");
const phone = document.querySelector(".contact p:nth-of-type(2)");
const email = document.querySelector(".contact p:nth-of-type(3)");

// Contact - Loading Text

contactHeading.textContent = siteContent["contact"]["contact-h4"];
address.textContent = siteContent["contact"]["address"];
phone.textContent = siteContent["contact"]["phone"];
email.textContent = siteContent["contact"]["email"];

// Footer - Getters

const footerCopyright = document.querySelector("footer p");

// Footer - Loading Text

footerCopyright.textContent = siteContent["footer"]["copyright"];


// Adding New Links to Navigation 

const navItem7 = navItem1.cloneNode(true);
navItem7.textContent = "Team";
const navItem8 = navItem1.cloneNode(true);
navItem8.textContent = "Social Media";

document.querySelector("nav").appendChild(navItem7);
document.querySelector("nav").prepend(navItem8);

// Changing color of navigation text 

const navText = document.querySelector("nav");
navText.style.color = "green";