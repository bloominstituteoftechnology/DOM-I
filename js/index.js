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

//all variables

const title = document.querySelector(".cta-text h1");

const annoyingText =
  "content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const navAs = document.querySelectorAll("nav a");

const button = document.querySelector("#btn");

const anchorTag = document.getElementsByTagName("a");

const headerNames = ["Features", "About", "Services", "Product", "Vision"];

const headers = document.querySelectorAll(".text-content h4");

const para = document.querySelectorAll(".text-content p");

const contact = document.querySelector(".contact h4");

const nav = document.querySelector(".container nav");

const contactSelect = document.querySelectorAll(".contact p");

const copyRight = document.querySelector("footer p");

const newNavElementOne = document.createElement("a");

const newNavElementTwo = document.createElement("a");

newNavElementOne.href = "#";

newNavElementTwo.href = "#";

const firstWord = document.createTextNode("Hello");

const lastWord = document.createTextNode("Goodbye");

newNavElementOne.prepend(firstWord);

nav.prepend(newNavElementOne);

newNavElementTwo.appendChild(lastWord);

nav.appendChild(newNavElementTwo);

/* --------------------------------------------------------------- */

const navItems = [
  "Services",
  "Product",
  "Vision",
  "Features",
  "About",
  "Contact",
];

const contacts = [
  "Copyright Great Idea! 2018",
  "123 Wat 456 Street Somewhere, USA",
  "1 (888) 888-8888",
  "sales@greatidea.io",
];

/* ------------------------------------------------------------ */

//top half of the page
title.innerHTML = "DOM <br/> IS <br/> AWESOME";

button.textContent = "Get Started";

contact.textContent = "Contact";

copyRight.textContent = "Copyright Great Idea! 2018";

document.getElementById("cta-img").src = "img/header-img.png";

document.getElementById("middle-img").src = "img/mid-page-accent.jpg";

for (let i = 0; i < navAs.length; i++) navAs[i].textContent = navItems[i];

for (let i = 0; i < headers.length; i++) {
  headers[i].textContent = headerNames[i];
}

for (let i = 0; i < para.length; i++) {
  para[i].textContent = `${headerNames[i]} ${annoyingText}`;
}

for (let i = 0; i < anchorTag.length; i++) {
  anchorTag[i].style.color = "green";
}

for (let i = 0; i < contactSelect.length; i++) {
  contactSelect[i].textContent = contacts[i];
}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);
