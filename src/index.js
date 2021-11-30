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

//HEADER query Selector
//Identifying object
const navLinks = Array.from(document.querySelectorAll("nav a"));
//Declaring data of the object
const textContent = siteContent.nav;
//return an array whose elements are strings
const keys = Object.keys(textContent);
keys.forEach((key) => {
  const content = textContent[key];
  const el = navLinks.shift();
  if (el) {
    el.textContent = content;
  } else {
    console.log(`could not find element using selector ".${key}"`);
  }
});
console.log(textContent);

//Images query Selector
const headerImg = document.querySelector("#logo-img");
headerImg.src = siteContent["images"]["logo-img"];
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["images"]["cta-img"];
const middleImage = document.querySelector("#middle-img");
middleImage.src = siteContent["images"]["accent-img"];
// add class name Italic
const classNav = document.querySelectorAll("nav a ");
classNav.forEach((el) => (el.className = "italic"));

//Selector for h1 and button
const ctaHeader = document.querySelector("h1");
ctaHeader.textContent = siteContent["cta"]["h1"];
const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

const features = document.querySelector(".top-content:nth-of-type(1) h4");
features.textContent = siteContent["main-content"]["features-h4"];
const featuresContent = document.querySelector(".top-content:nth-of-type(1) p");
featuresContent.textContent = siteContent["main-content"]["features-content"];

const about = document.querySelector(".text-content:nth-of-type(2) h4");
about.textContent = siteContent["main-content"]["about-h4"];
const aboutContent = document.querySelector(".text-content:nth-of-type(2) p");
aboutContent.textContent = siteContent["main-content"]["about-content"];

const services = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) h4"
);
services.textContent = siteContent["main-content"]["services-h4"];
const servicesContent = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) p"
);
servicesContent.textContent = siteContent["main-content"]["services-content"];

const product = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) h4"
);
product.textContent = siteContent["main-content"]["product-h4"];
const productContent = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) p"
);
productContent.textContent = siteContent["main-content"]["product-content"];

function nthOfType(selector, index) {
  return selector + `:nth-of-type(${index})`;
}

const vision = document.querySelector(
  `.bottom-content ${nthOfType(".text-content", 3)} h4`
);
vision.textContent = siteContent["main-content"]["vision-h4"];
const visionContent = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) p"
);
visionContent.textContent = siteContent["main-content"]["vision-content"];
// Adding footer
const footerContent = document.querySelector("footer a");
footerContent.textContent = siteContent["footer"]["copyright"];
//Adding the className for the footer
const classFooter = document.querySelector("footer a");
classFooter.classList.add("bold");
// Adding Contact section
const contact = document.querySelector("section.contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];
//---Adding address
const addressInfo = document.querySelector(".contact p:nth-of-type(1) ");
addressInfo.textContent = siteContent["contact"]["address"];
//----Adding phone number
const phoneInfo = document.querySelector(".contact p:nth-of-type(3) ");
phoneInfo.textContent = siteContent["contact"]["phone"];
//=====Adding email
const emailInfo = document.querySelector(".contact p:nth-of-type(2) npm");
emailInfo.textContent = siteContent["contact"]["email"];
