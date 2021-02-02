const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
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
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

const navOne = document.querySelectorAll("a");
navOne.forEach(
  (elem, idx) => (elem.textContent = siteContent.nav[`nav-item-${idx}`])
);

document.querySelector("#logo-img").src = siteContent.nav["img-src"];
const hOne = document.querySelector(".cta h1");
const butt = document.querySelector(".cta button");
const imgCTA = document.querySelector("#cta-img");

hOne.textContent = siteContent["cta"]["h1"];
butt.textContent = siteContent["cta"]["button"];
imgCTA.src = siteContent["cta"]["img-src"];

const hFour = document.querySelectorAll(".text-content h4");
hFour[0].textContent = siteContent["main-content"]["features-h4"];
hFour[1].textContent = siteContent["main-content"]["about-h4"];
hFour[2].textContent = siteContent["main-content"]["services-h4"];
hFour[3].textContent = siteContent["main-content"]["product-h4"];
hFour[4].textContent = siteContent["main-content"]["vision-h4"];

document.querySelector("#middle-img").src =
  siteContent["main-content"]["middle-img-src"];

const pText = document.querySelectorAll(".text-content p");
pText[0].textContent = siteContent["main-content"]["features-content"];
pText[1].textContent = siteContent["main-content"]["about-content"];
pText[2].textContent = siteContent["main-content"]["services-content"];
pText[3].textContent = siteContent["main-content"]["product-content"];
pText[4].textContent = siteContent["main-content"]["vision-content"];

const contSec = document.querySelector(".contact");
console.log(contSec.children);
contSec.children[0].textContent = siteContent["contact"]["contact-h4"];
contSec.children[1].textContent = siteContent["contact"]["address"];
contSec.children[2].textContent = siteContent["contact"]["phone"];
contSec.children[3].textContent = siteContent["contact"]["email"];

document.querySelector("footer p").textContent =
  siteContent["footer"]["copyright"];

const linkY = document.createElement("a");
linkY.textContent = "Free Cheese";
linkY.href = "#";

document.querySelector("nav").appendChild(linkY);

document
  .querySelectorAll("nav a")
  .forEach((elem) => (elem.style.color = "green"));

const fLink = document.createElement("a");
fLink.textContent = "Hell Yeah";
fLink.href = "#";

document.querySelector("nav").prepend(fLink);
