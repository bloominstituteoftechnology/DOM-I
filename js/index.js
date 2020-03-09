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

//Nav items
const navItems = document.querySelectorAll("a");
  navItems[0].textContent = siteContent.nav["nav-item-1"];
  navItems[1].textContent = siteContent.nav["nav-item-2"];
  navItems[2].textContent = siteContent.nav["nav-item-3"];
  navItems[3].textContent = siteContent.nav["nav-item-4"];
  navItems[4].textContent = siteContent.nav["nav-item-5"];
  navItems[5].textContent = siteContent.nav["nav-item-6"];


  navItems.forEach(aColor => (aColor.style.color = "green"));

// Center items
const title = document.querySelector("h1");
  title.textContent = siteContent.cta.h1;

const button = document.querySelector("button");
  button.textContent = siteContent.cta.button;

const headerImg = document.querySelector("#cta-img");
  headerImg.src = siteContent.cta["img-src"];

// Top text Blocks
const features = document.querySelector(".top-content .text-content h4:nth-child(1)");
  features.textContent = siteContent["main-content"]["features-h4"];

const fContent = document.querySelector(".top-content .text-content p:nth-child(2)");
  fContent.textContent = siteContent["main-content"]["features-content"];

const about = document.querySelector(".top-content .text-content:last-child h4");
  about.textContent = siteContent["main-content"]["about-h4"];

const aContent = document.querySelector(".top-content .text-content:last-child p");
  aContent.textContent = siteContent["main-content"]["about-content"];

//Middle Image
const middleImg = document.querySelector("#middle-img");
  middleImg.src = siteContent["main-content"]["middle-img-src"];

// Bottom text blocks
const services = document.querySelector(".bottom-content .text-content:nth-child(1) h4");
  services.textContent = siteContent["main-content"]["services-h4"];

const sContent = document.querySelector(".bottom-content .text-content:nth-child(2) p");
  sContent.textContent = siteContent["main-content"]["services-content"];

const product = document.querySelector(".bottom-content .text-content:nth-child(1n + 2) h4");
  product.textContent = siteContent["main-content"]["product-h4"];

const pContent = document.querySelector(".bottom-content .text-content:nth-child(2n + 1) p");
  pContent.textContent = siteContent["main-content"]["product-content"];

const vision = document.querySelector(".bottom-content .text-content:last-child h4");
  vision.textContent = siteContent["main-content"]["vision-h4"];

const vContent = document.querySelector(".bottom-content .text-content:last-child p");
  vContent.textContent = siteContent["main-content"]["vision-content"];

//Contact
const contactH4 = document.querySelector(".contact h4");
  contactH4.textContent = siteContent.contact["contact-h4"];

const contactA = document.querySelector(".contact p:nth-of-type(1)");
  contactA.textContent = siteContent.contact["address"];

const contactP = document.querySelector(".contact p:nth-of-type(2)");
  contactP.textContent = siteContent.contact["phone"];

const contactE = document.querySelector(".contact p:nth-of-type(3)");
  contactE.textContent = siteContent.contact["email"];

//Footer
const footer = document.querySelector("footer");
  footer.textContent = siteContent.footer["copyright"];

//new nav stuff
const newNav1 = document.createElement("nav-item-7");
newNav1.textContent = "Bad Idea";
newNav1.style.color = "green";
const parentElement1 = document.querySelector("nav");
parentElement1.prepend(newNav1);

const newNav2 = document.createElement("nav-item-8");
newNav2.textContent = "Really Bad Idea";
newNav2.style.color = "green";
const parentElement2 = document.querySelector("nav");
parentElement2.appendChild(newNav2);