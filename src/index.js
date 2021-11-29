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
let cta = document.querySelector(".cta");
cta.querySelector("h1").innerHTML = siteContent.cta.h1;
cta.querySelector("button").innerHTML = siteContent.cta.button;

let navSel = document.querySelectorAll(".italic");
navSel.querySelector("nav a").textContent = siteContent.nav["nav-item-1"];
navSel.querySelector("nav a").textContent = siteContent.nav["nav-item-2"];
navSel.querySelector("nav a").textContent = siteContent.nav["nav-item-3"];
navSel.querySelector("nav a").textContent = siteContent.nav["nav-item-4"];
navSel.querySelector("nav a").textContent = siteContent.nav["nav-item-5"];
navSel.querySelector("nav a").textContent = siteContent.nav["nav-item-6"];

const mainContent = document.querySelector[".main-content"];

const mainImg = document.getElementById("cta-img");
mainImg.src = "http://localhost:9000/img/cta.png";
const logoImg = document.getElementById("logo-img");
logoImg.src = "http://localhost:9000/img/logo.png";

const accentImg = document.getElementById("accent-img");
logoImg.src = "http://localhost:9000/img/accent.png";

console.log(siteContent.nav["nav-item-1"]);
