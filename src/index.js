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
    // "logo-img": "http://localhost:9000/img/logo.png",
    // "cta-img": "http://localhost:9000/img/cta.png",
    // "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

// nav links
const links = document.querySelectorAll("nav a");
const linkText = Object.values(siteContent.nav)
links.forEach(function(link, idx) {
  link.textContent = linkText[idx]
});
// logo
const logoImg = document.querySelector("#logo-img");
logoImg.src = siteContent["images"]["logo-img"];
// cta 
const cta = document.querySelector(".cta-text h1");
cta.textContent = siteContent.cta.h1;
const button = document.querySelector(".cta-text button");
button.textContent = siteContent.cta.button;
// cta img
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent.images["cta-img"];

// main contents
// const mainToph4 = document.querySelector(".main-content .top-content h4");
// mainToph4.textContent = siteContent["main-content"]["features-h4"]
// const mainTopp = document.querySelector(".top-content p");
// mainTopp.textContent = siteContent["main-content"]["features-content"]
const topContents = document.querySelector(".top-content");
const feature = topContents.querySelector(".text-content:nth-of-type(1) h4");
feature.textContent = siteContent["main-content"]["features-h4"];
const featurePara = topContents.querySelector(".text-content:nth-of-type(1) p");
featurePara.textContent = siteContent["main-content"]["features-content"];
const about = topContents.querySelector(".text-content:nth-of-type(2) h4");
about.textContent = siteContent["main-content"]["about-h4"];
const aboutPara = topContents.querySelector(".text-content:nth-of-type(2) p");
aboutPara.textContent = siteContent["main-content"]["about-content"];

// const contentsText = Object.values(siteContent["main-content"])
// mainContents.forEach(function(content, idx){
//   content.textContent = contentsText[idx]
// });

// middle image
const middleImg = document.querySelector(".middle-img");
middleImg.src = siteContent["images"]["accent-img"]

// bottom text 
const bottomContents = document.querySelector(".bottom-content");
const service = bottomContents.querySelector(".text-content:nth-of-type(1) h4");
service.textContent = siteContent["main-content"]["services-h4"];
const servicePara = bottomContents.querySelector(".text-content:nth-of-type(1) p");
servicePara.textContent = siteContent["main-content"]["services-content"];
const product = bottomContents.querySelector(".text-content:nth-of-type(2) h4");
product.textContent = siteContent["main-content"]["product-h4"];
const productPara = bottomContents.querySelector(".text-content:nth-of-type(2) p");
productPara.textContent = siteContent["main-content"]["product-content"];
const vision = bottomContents.querySelector(".text-content:nth-of-type(3) h4");
vision.textContent = siteContent["main-content"]["vision-h4"];
const visionPara = bottomContents.querySelector(".text-content:nth-of-type(3) p");
visionPara.textContent = siteContent["main-content"]["vision-content"];


// contact
const contacts = document.querySelector(".contact");
const contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];
const contactAddress = contacts.querySelector("p:nth-of-type(1)");
contactAddress.textContent = siteContent["contact"]["address"];
const contactPhone = contacts.querySelector("p:nth-of-type(2)");
contactPhone.textContent = siteContent["contact"]["phone"];
const contactEmail = contacts.querySelector("p:nth-of-type(3)");
contactEmail.textContent = siteContent["contact"]["email"];
// const contactp = document.querySelectorAll(".contact p");
// for (let i = 1; i < 4; i++) {
//   contactp.textContent = siteContent["contact"][i]
// }
// const contacts = document.querySelector(".contact");
// const contactsObj = Object.values(siteContent["contact"]);
// contacts.forEach(function(contact, idx) {
//   contact.textContent = contactsObj[idx]
// })

// copyright
const copyright = document.querySelector("footer a");
copyright.textContent = siteContent["footer"]["copyright"];

