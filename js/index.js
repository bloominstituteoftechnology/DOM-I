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

let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', "./img/header-img.png");

let navElements = siteContent["nav"];
const siteLinks = document.querySelectorAll("nav  a"); //select all child <a> to parent <nav>
siteLinks.forEach((item, i) => {item.textContent = siteContent['nav'][`nav-item-${i + 1}`]; });

//iterate through array siteLinks to give it text content from siteContent [nav]
//can this be done w/ a foreach method?
//for(let i = 0; i < siteLinks.length; i++){
//siteLinks[i].textContent = navElements[`nav-item-${i}`]};

const cta = siteContent["cta"];
const newCta = document.querySelector(".cta-text").children[0];
newCta.textContent = cta["h1"];

const newBttn = document.querySelector(".cta-text").children[1];
newBttn.textContent=cta["button"];

const mainContent = document.querySelector(".main-content").children;
const topContent = mainContent[0].children;
const bottomContent = mainContent[2].children;
const imgContent = mainContent[1]; //I don't know what this does?

topContent[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent[0].children[1].textContent = siteContent["main-content"]["features-content"];
topContent[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent[1].children[1].textContent = siteContent["main-content"]["about-content"];

let middleHero = document.getElementById("middle-img");
middleHero.setAttribute('src', "./img/mid-page-accent.jpg");

bottomContent[0].children[0].textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].children[1].textContent = siteContent["main-content"]["services-content"];
bottomContent[1].children[0].textContent = siteContent["main-content"]["product-h4"];
bottomContent[1].children[1].textContent = siteContent["main-content"]["product-content"];
bottomContent[2].children[0].textContent = siteContent["main-content"]["vision-h4"];
bottomContent[2].children[1].textContent = siteContent["main-content"]["vision-content"];

//contact info
const contactInfo = document.querySelector(".contact").children;
contactInfo[0].textContent = siteContent["contact"]["contact-h4"];
contactInfo[1].textContent = siteContent["contact"]["address"];
contactInfo[2].textContent = siteContent["contact"]["phone"];
contactInfo[3].textContent = siteContent["contact"]["email"];

//copyright
const copyrightInfo = document.querySelector("footer").children;
copyrightInfo[0].textContent = siteContent["footer"]["copyright"];