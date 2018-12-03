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

// General Selectors

const container = document.getElementsByClassName("container");

// Header

const header = document.getElementsByTagName("header");
const nav = document.getElementsByTagName("nav");
const navLinks = document.querySelectorAll("nav>a");
const logo = document.getElementById("logo-img");

// CTA Section

const ctaSection = document.getElementsByClassName("cta");
const ctaTextDiv = document.getElementsByClassName("cta-text");
const ctaH1 = document.querySelector(".cta>h1");
const ctaButton = document.querySelector(".cta>button");
const ctaImg = document.getElementById("cta-img");

// Main-Content Section
const mainContentH4 = document.querySelector(".main-content>h4");
const mainContentP = document.querySelector(".main-content>p");

const mainContentSection = document.getElementsByClassName("main-content");
const topContentDiv = document.getElementsByClassName("top-content");
const textContentDiv = document.getElementsByTagName("text-content");
const middleImg = document.getElementById("middle-img");
const bottomContentDiv = document.getElementsByClassName("bottom-content");

// Contact Section
const contactSection = document.getElementsByClassName("contact");
const contactH4 = document.querySelector(".contact>h4");
const contactP = document.querySelector(".contact>p");

// Footer 
const footer = document.getElementsByTagName("footer");
const footerP = document.querySelector(".footer>p");

// Modifiers
// logo.setAttribute('src', siteContent["nav"]["img-src"])
