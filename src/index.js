const siteContent = {
  // DO NOT CHANGE THIS OBJECT
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2021",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("project wired!");

//These are my const for the header// to change the class and inner text of the header
const headerNav = document.querySelector("header nav");
const headerNavA = document.querySelectorAll("header nav a");
const servicesHeader = headerNav.firstChild;
const productHeader = servicesHeader.nextSibling;
const visionHeader = productHeader.nextSibling;
const featuresHeader = visionHeader.nextSibling;
const aboutHeader = featuresHeader.nextSibling;
const contactHeader = aboutHeader.nextSibling;
const headerImg = document.querySelector("header .logo");
 
headerNavA.className = "italic";
servicesHeader.textContent = siteContent.nav["nav-item-1"];
productHeader.textContent = siteContent.nav["nav-item-2"];
visionHeader.textContent = siteContent.nav["nav-item-3"];
featuresHeader.textContent = siteContent.nav["nav-item-4"];
aboutHeader.textContent = siteContent.nav["nav-item-5"];
contactHeader.textContent = siteContent.nav["nav-item-6"];
headerImg.src = siteContent.images["logo-img"];

//These are const for the cta section // to change to inner text of the cta
const ctaTextSection = document.querySelector(".cta-text");
const cta_h1 = ctaTextSection.querySelector("h1");
const cta_button = ctaTextSection.querySelector("button");
const cta_img = document.querySelector("#cta-img");

cta_h1.textContent = siteContent.cta["h1"];
cta_button.textContent = siteContent.cta["button"];
cta_img.src = siteContent.images["cta-img"];

//These are the const for the top content
const topContent = document.querySelector('.top-content');

topContent.children[0].children[0].textContent = siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent = siteContent["main-content"]["features-content"];

topContent.children[1].children[0].textContent = siteContent["main-content"]["about-h4"];
topContent.children[1].children[0].textContent = siteContent["main-content"]["about-content"];

//These are the const to change the bottom content of the main section

//These are the const for the middle image // to change the middle image
const mainMiddleImg = document.querySelector("#middle-img");

mainMiddleImg.src = siteContent.images["accent-img"];

//These are the const for the contact section// to change the text

const contact = document.querySelector(".contact");
contact.children[0].textContent = siteContent.contact["contact-h4"];
contact.children[1].textContent = siteContent.contact["address"];
contact.children[2].textContent = siteContent.contact["phone"];
contact.children[3].textContent = siteContent.contact["email"]

//These are the footer const // to change the a content 
const copyRight = document.querySelector("footer a");

copyRight.className = "bold";
copyRight.textContent = siteContent.footer["copyright"];