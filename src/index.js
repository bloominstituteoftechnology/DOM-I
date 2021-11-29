const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",

  },
};

console.log('project wired!')

//Header section

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const firstLink = document.querySelector("a:nth-of-type(1)");
const secondLink = document.querySelector("a:nth-of-type(2)");
const thirdLink = document.querySelector("a:nth-of-type(3)");
const fourthLink = document.querySelector("a:nth-of-type(4)");
const fifthLink = document.querySelector("a:nth-of-type(5)");
const sixthLink = document.querySelector("a:nth-of-type(6)");
const logo = document.querySelector("#logo-img");

// CTA section

const getStarted = document.querySelector("h1");
const getStartedButton = document.querySelector("button");
const ctaImg = document.querySelector("#cta-img");

const featuresTitle = document.querySelector(".text-content:nth-of-type(1) h4");
const featuresParagraph = document.querySelector(".text-content:nth-of-type(1) p");

const aboutTitle = document.querySelector(".text-content:nth-of-type(2) h4");
const aboutParagraph = document.querySelector(".text-content:nth-of-type(2) p");

const servicesTitle = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
const servicesParagraph = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");

const productTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
const productParagraph = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");

const visionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
const visionParagraph = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");

const accentImage = document.querySelector("#middle-img");

// Contact
const contactTitle = document.querySelector(".contact h4");
const address = document.querySelector(".contact p:nth-of-type(1)");
const phone = document.querySelector(".contact p:nth-of-type(2)");
const email = document.querySelector(".contact p:nth-of-type(3)");

// Footer
const footerText = document.querySelector("footer a");




