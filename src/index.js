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
  },
};

console.log('project wired!');

const navbar = document.querySelector('nav');
navbar.style.fontStyle = "italic";
const nav1 = document.querySelector('nav a:nth-of-type(1)');
const nav2 = document.querySelector('nav a:nth-of-type(2)');
const nav3 = document.querySelector('nav a:nth-of-type(3)');
const nav4 = document.querySelector('nav a:nth-of-type(4)');
const nav5 = document.querySelector('nav a:nth-of-type(5)');
const nav6 = document.querySelector('nav a:nth-of-type(6)');
nav1.textContent = siteContent["nav"]["nav-item-1"];
nav2.textContent = siteContent["nav"]["nav-item-2"];
nav3.textContent = siteContent["nav"]["nav-item-3"];
nav4.textContent = siteContent["nav"]["nav-item-4"];
nav5.textContent = siteContent["nav"]["nav-item-5"];
nav6.textContent = siteContent["nav"]["nav-item-6"];

const companyLogo = document.querySelector('#logo-img');
companyLogo.src = siteContent["images"]["logo-img"];

const ctaText = document.querySelector("h1");
ctaText.textContent = siteContent["cta"]["h1"];
const buttonText = document.querySelector("button");
buttonText.textContent = siteContent["cta"]["button"];

const ctaImage = document.querySelector("#cta-img");
ctaImage.src = siteContent["images"]["cta-img"];

const features = document.querySelector(".text-content:nth-of-type(1) h4");
features.textContent = siteContent["main-content"]["features-h4"];
const featuresPara = document.querySelector(".text-content:nth-of-type(1) p");
featuresPara.textContent = siteContent["main-content"]["features-content"]

const about = document.querySelector(".text-content:nth-of-type(2) h4");
about.textContent = siteContent["main-content"]["about-h4"];
const aboutPara = document.querySelector(".text-content:nth-of-type(2) p");
aboutPara.textContent = siteContent["main-content"]["about-content"];

const midImage = document.querySelector(".middle-img")
midImage.src = siteContent["images"]["accent-img"];

const services = document.querySelector(".text-content:nth-of-type(3) h4");
services.textContent = siteContent["main-content"]["services-h4"];
const servicesPara = document.querySelector(".text-content:nth-of-type(3) p");
servicesPara.textContent = siteContent["main-content"]["services-content"];

const product = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
product.textContent = siteContent["main-content"]["product-h4"];

const productPara = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
productPara.textContent = siteContent["main-content"]["product-content"];

const vision = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4:nth-of-type(3)");
vision.textContent = siteContent["main-content"]["vision-h4"];



