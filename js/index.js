const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//  Task 1 & 2: Create selectors to point your data into elements &
// Using your selectors, update the content to match the example file

//anchor links
const navBarItems = document.querySelectorAll("a");

navBarItems[0].textContent = siteContent.nav[`nav-item-1`];
navBarItems[1].textContent = siteContent.nav[`nav-item-2`];
navBarItems[2].textContent = siteContent.nav[`nav-item-3`];
navBarItems[3].textContent = siteContent.nav[`nav-item-4`];
navBarItems[4].textContent = siteContent.nav[`nav-item-5`];
navBarItems[5].textContent = siteContent.nav[`nav-item-6`];

// //loops over node list and populates anchor link text (would replace the above code) - Josh Luscombe
// navBarItems.forEach((item, index) => {
//   item.textContent = siteContent.nav[`nav-item-${index + 1}`];
// });

//h1 text
const h1 = document.querySelector("h1");

h1.textContent = siteContent.cta.h1;

//"Get Started Button"
const getStartedButton = document.querySelector("button");

getStartedButton.textContent = siteContent.cta.button;

// Update cta-img
let imgHeader = document.querySelector("#cta-img");

imgHeader.setAttribute("src", siteContent.cta["img-src"]);
console.log(getStartedButton);

// Update middle-img-src
let mainContentImg = document.getElementById("middle-img");
mainContentImg.src = siteContent["main-content"]["middle-img-src"];

let h4 = document.querySelectorAll("h4");
h4[0].textContent = siteContent["main-content"]["features-h4"];
h4[1].textContent = siteContent["main-content"]["about-h4"];
h4[2].textContent = siteContent["main-content"]["services-h4"];
h4[3].textContent = siteContent["main-content"]["product-h4"];
h4[4].textContent = siteContent["main-content"]["vision-h4"];

let p = document.querySelectorAll("p");
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];

// //Top content - Features h4
// const features = document.querySelectorAll(".top-content .text-content h4")[0];
// features.textContent = siteContent["main-content"]["features-h4"];

// //Top content - Features paragraph
// const featuresParagraph = document.querySelectorAll(
//   ".top-content .text-content p"
// )[0];
// featuresParagraph.textContent = siteContent["main-content"]["features-content"];

// // Top content - About h4
// const about = document.querySelectorAll(".top-content .text-content h4")[1];
// about.textContent = siteContent["main-content"]["about-h4"];

// //Top content - About paragraph
// const aboutParagraph = document.querySelectorAll(
//   ".top-content .text-content p"
// )[1];
// aboutParagraph.textContent = siteContent["main-content"]["about-content"];

// // Bottom content - Services h4
// const services = document.querySelector(".bottom-content .text-content h4")[2];
// services.textContent = siteContent["main-content"]["services-h4"];

// //Bottom content - Services paragraph
// const servicesParagraph = document.querySelectorAll(
//   ".bottom-content .text-content p"
// )[2];
// servicesParagraph.textContent = siteContent["main-content"]["services-content"];

// // Bottom content - Product h4
// const product = document.querySelectorAll(
//   ".bottom-content .text-content h4"
// )[3];
// services.textContent = siteContent["main-content"]["product-h4"];

// //Bottom content - Product paragraph
// const productParagraph = document.querySelectorAll(
//   ".bottom-content .text-content p"
// )[3];
// productParagraph.textContent = siteContent["main-content"]["product-content"];

// // Bottom content - Vision h4
// const vision = document.querySelectorAll(".bottom-content .text-content h4")[4];
// services.textContent = siteContent["main-content"]["vision-h4"];

// //Bottom content - Vision paragraph
// const visionParagraph = document.querySelectorAll(
//   ".bottom-content .text-content p"
// )[4];
// visionParagraph.textContent = siteContent["main-content"]["vision-content"];

// Task 3: Add new content - color
navBarItems.forEach(element => {
  element.style.color = "green";
});

// Task 3: append and prepend
const aButton = document.createElement("a");
aButton.href = "#";
aButton.textContent = "Append Button";
aButton.style.color = "green";

const nav = document.querySelector("nav");
nav.appendChild(aButton);

const pButton = document.createElement("a");
pButton.href = "#";
pButton.textContent = "Prepend Button";
pButton.style.color = "green";
nav.prepend(pButton);
