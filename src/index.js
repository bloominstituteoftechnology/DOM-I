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

//These are for the logo
const headerImg = document.querySelector("#logo-img");
headerImg.src = siteContent.images["logo-img"];

// These are to change the class and inner text of the header
const containerNav = document.querySelector(".container nav");

containerNav.children[0].textContent = siteContent.nav["nav-item-1"];
containerNav.children[0].className = "italic";
containerNav.children[1].textContent = siteContent.nav["nav-item-2"];
containerNav.children[1].className = "italic";
containerNav.children[2].textContent = siteContent.nav["nav-item-3"];
containerNav.children[2].className = "italic";
containerNav.children[3].textContent = siteContent.nav["nav-item-4"];
containerNav.children[3].className = "italic";
containerNav.children[4].textContent = siteContent.nav["nav-item-5"];
containerNav.children[4].className = "italic";
containerNav.children[5].textContent = siteContent.nav["nav-item-6"];
containerNav.children[5].className = "italic";

//These are to change to inner text of the cta
const ctaText = document.querySelector(".cta-text");

ctaText.children[0].textContent = siteContent.cta["h1"];
ctaText.children[1].textContent = siteContent.cta["button"];

//These are to change the cta img
const cta_img = document.querySelector("#cta-img");

cta_img.src = siteContent.images["cta-img"];

//These are the const for the top content
const topContent = document.querySelector(".top-content");

topContent.children[0].children[0].textContent =
  siteContent["main-content"]["features-h4"];
topContent.children[0].children[1].textContent =
  siteContent["main-content"]["features-content"];

topContent.children[1].children[0].textContent =
  siteContent["main-content"]["about-h4"];
topContent.children[1].children[1].textContent =
  siteContent["main-content"]["about-content"];

//These are the const to change the bottom content of the main section
const bottomContent = document.querySelector(".bottom-content");

bottomContent.children[0].children[0].textContent =
  siteContent["main-content"]["services-h4"];
bottomContent.children[0].children[1].textContent =
  siteContent["main-content"]["services-content"];
bottomContent.children[1].children[0].textContent =
  siteContent["main-content"]["product-h4"];
bottomContent.children[1].children[1].textContent =
  siteContent["main-content"]["product-content"];
bottomContent.children[2].children[0].textContent =
  siteContent["main-content"]["vision-h4"];
bottomContent.children[2].children[1].textContent =
  siteContent["main-content"]["vision-content"];

//These are to change the middle image
const mainMiddleImg = document.querySelector("#middle-img");

mainMiddleImg.src = siteContent.images["accent-img"];

//These are to change the text in the contact area

const contact = document.querySelector(".contact");
contact.children[0].textContent = siteContent.contact["contact-h4"];
contact.children[1].textContent = siteContent.contact["address"];
contact.children[2].textContent = siteContent.contact["phone"];
contact.children[3].textContent = siteContent.contact["email"];

//These are to change the a content  footer const
const copyRight = document.querySelector("footer a");

copyRight.className = "bold";
copyRight.textContent = siteContent.footer["copyright"];
