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
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log("project wired!");
const navClass = document.querySelectorAll("nav a");
console.log(navClass);
navClass.forEach((e) => e.classList.add("italic"));

const nav1 = document.querySelector("nav a:nth-of-type(1)");
const nav2 = document.querySelector("nav a:nth-of-type(2)");
const nav3 = document.querySelector("nav a:nth-of-type(3)");
const nav4 = document.querySelector("nav a:nth-of-type(4)");
const nav5 = document.querySelector("nav a:nth-of-type(5)");
const nav6 = document.querySelector("nav a:nth-of-type(6)");

nav1.textContent = siteContent.nav["nav-item-1"];
nav2.textContent = siteContent.nav["nav-item-2"];
nav3.textContent = siteContent.nav["nav-item-3"];
nav4.textContent = siteContent.nav["nav-item-4"];
nav5.textContent = siteContent.nav["nav-item-5"];
nav6.textContent = siteContent.nav["nav-item-6"];

const navImg = document.querySelector("#logo-img");
navImg.src = siteContent.images["logo-img"];

const cta = document.querySelector(".cta-text h1");
cta.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent.cta.button;

const ctaImage = document.querySelector("#cta-img");
ctaImage.src = siteContent.images["cta-img"];

const feath1 = document.querySelector(".text-content h4");
feath1.textContent = siteContent["main-content"]["features-h4"];

const featP = document.querySelector(".text-content p");
featP.textContent = siteContent["main-content"]["features-content"];

const aboutH1 = document.querySelector(".text-content:nth-of-type(2) h4");
aboutH1.textContent = siteContent["main-content"]["about-h4"];

const aboutP = document.querySelector(".text-content:nth-of-type(2) p");
aboutP.textContent = siteContent["main-content"]["about-content"];
