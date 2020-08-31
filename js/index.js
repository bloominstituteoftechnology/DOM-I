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
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

//NAV BAR

const navItem1 = document.querySelector("a");
navItem1.textContent = "Services";

const navItem2 = navItem1.nextElementSibling;
navItem2.textContent = "Product";

const navItem3 = navItem2.nextElementSibling;
navItem3.textContent = "Vision";

const navItem4 = navItem3.nextElementSibling;
navItem4.textContent = "Features";

const navItem5 = navItem4.nextElementSibling;
navItem5.textContent = "About";

const navItem6 = navItem5.nextElementSibling;
navItem6.textContent = "Contact";

//NEW MENU
const newNav = document.querySelector("nav"); // Parent Element

const newNavItem = document.createElement("a");
newNavItem.textContent = "Dom Is Awesome";

newNav.appendChild(newNavItem);

//IMAGE
const imgSrc = document.querySelector(".container img");
imgSrc.src = "img/logo.png";

//H1
const heading = document.querySelector(".cta .cta-text h1");
heading.textContent = "DOM Is Awesome";

//BUTTON
const newButton = document.querySelector(".cta .cta-text button");
newButton.textContent = "Get Started";

//IMAGE
const newImgSrc = document.querySelector(".cta img");
newImgSrc.src = "img/header-img.png";

//FEATURES CONTENT
const features = document.querySelector("h4");
features.textContent = "Features";

const featuresContent = document.querySelector(".text-content p");
featuresContent.textContent =
  "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//ABOUT
const about = document.querySelectorAll(".text-content h4");
about[1].textContent = "About";

const aboutContent = document.querySelectorAll(".text-content p");
aboutContent[1].textContent =
  "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//IMAGE
const middleImgSrc = document.querySelector(".middle-img");
middleImgSrc.src = "img/mid-page-accent.jpg";

//SERVICES
const services = document.querySelectorAll(".text-content h4");
services[2].textContent = "Services";

const serviceContent = document.querySelectorAll(".text-content p");
serviceContent[2].textContent =
  "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//PRODUCTS
const products = document.querySelectorAll(".text-content h4");
products[3].textContent = "Products";

const productContent = document.querySelectorAll(".text-content p");
productContent[3].textContent =
  "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//VISION
const vision = document.querySelectorAll(".text-content h4");
vision[4].textContent = "Vision";

const visionContent = document.querySelectorAll(".text-content p");
visionContent[4].textContent =
  "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//CONTACT
const contactSection = document.querySelector(".contact h4");
contactSection.textContent = "Contact";

const address = document.querySelector(".contact p");
address.textContent = "123 Way 456 Street Somewhere, USA";

const phoneNumber = address.nextElementSibling;
phoneNumber.textContent = "1 (888) 888-8888";

const email = phoneNumber.nextElementSibling;
email.textContent = "sales@greatidea.io";

//FOOTER
const footerCopyright = document.querySelector("footer p");
footerCopyright.textContent = "Copyright Great Idea! 2018";

const navColors = document.querySelectorAll("a");
navColors.forEach((link) => {
  link.style.color = "green";
});
