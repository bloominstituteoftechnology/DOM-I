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

const container = document.querySelector(".container");

const containerHeader = container.querySelector("header");
const containerHeaderImg = containerHeader.querySelector("img");

const navItemsArray = containerHeader.querySelectorAll("nav a");

navItemsArray.forEach((element, index) => element.textContent = siteContent["nav"][`nav-item-${index+1}`]);

const containerCta = container.querySelector(".cta");
const containerCtaImg = containerCta.querySelector("img");
const containerCtaTextH1 = containerCta.querySelector(".cta-text h1");
const containerCtaTextButt = containerCta.querySelector(".cta-text button");

const regex = /\s/g;
containerCtaTextH1.innerText = siteContent["cta"]["h1"].replace(regex, "\n");
containerCtaImg.setAttribute('src', siteContent["cta"]["img-src"]);
containerCtaTextButt.textContent = "Get Started";

const mainDivsTextCont = container.querySelectorAll(".main-content .text-content p");
console.log(mainDivsTextCont);
const mainDivsH4Cont = container.querySelectorAll(".main-content .text-content h4");

const mainContentArray = Object.keys(siteContent["main-content"]);

const contentInMainContent = mainContentArray.filter((element) => element.includes("-content"));


mainDivsTextCont.forEach((element, index) => element.textContent = siteContent["main-content"][`${contentInMainContent[index]}`]);

const h4InMainContent = mainContentArray.filter((element) => element.includes("h4"));

mainDivsH4Cont.forEach((element, index) => element.textContent = siteContent["main-content"][`${h4InMainContent[index]}`]);

const mainContImg = container.querySelector(".main-content img");
mainContImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const contactH4 = container.querySelector(".contact h4");
contactH4.textContent = "Contact";

const contactPArray = container.querySelectorAll(".contact p");
console.log(contactPArray);

const siteContentContactPs = {...siteContent["contact"]};
delete siteContentContactPs["contact-h4"];
const siteContentContactPsKeys = Object.keys(siteContentContactPs);

contactPArray.forEach((element, index) => element.textContent = siteContent["contact"][`${siteContentContactPsKeys[index]}`]);
console.log(contactPArray);

const footerP = container.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];
