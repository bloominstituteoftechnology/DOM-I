const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// CTA
const ctaH1 = document.querySelector("h1");
const ctaText = document.createTextNode(siteContent.cta.h1);
ctaH1.append(ctaText);

const ctaBTN = document.querySelector("button");
const btnText = document.createTextNode(siteContent.cta.button);
ctaBTN.append(btnText);

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent.cta["img-src"]);

// Nav
let navLink = document.querySelectorAll("a");
console.log(navLink);
let services = document.createTextNode(siteContent.nav["nav-item-1"]);
let product = document.createTextNode(siteContent.nav["nav-item-2"]);
let vision = document.createTextNode(siteContent.nav["nav-item-3"]);
let features = document.createTextNode(siteContent.nav["nav-item-4"]);
let about = document.createTextNode(siteContent.nav["nav-item-5"]);
let contact = document.createTextNode(siteContent.nav["nav-item-6"]);

navLink[0].append(services);
navLink[1].append(product);
navLink[2].append(vision);
navLink[3].append(features);
navLink[4].append(about);
navLink[5].append(contact);
