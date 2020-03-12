const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])




const header = document.getElementsByTagName("header");
header.className = "header";

const navStuff = document.querySelectorAll("a");

const navBar = document.getElementsByTagName("nav");

// console.log(navStuff);
const nav_item = document.createElement("a");

const nav_item1 = document.querySelector("nav a");

nav_item.textContent = "nav item";
nav_item.style.textDecoration = "none";
nav_item.style.fontSize = "24px";

navStuff[0].textContent = siteContent.nav["nav-item-1"];
navStuff[1].textContent = siteContent.nav["nav-item-2"];
navStuff[2].textContent = siteContent.nav["nav-item-3"];
navStuff[3].textContent = siteContent.nav["nav-item-4"];
navStuff[4].textContent = siteContent.nav["nav-item-5"];
navStuff[5].textContent = siteContent.nav["nav-item-6"];

const ctaElement = document.getElementsByClassName("cta");
console.log(ctaElement);
// ctaElement.style.display= "flex";
const headerContent = document.querySelector("h1");
headerContent.textContent =siteContent.cta.h1;

const headerButton = document.getElementsByTagName("button");
headerButton[0].textContent = "Get Started";

ctaIMG=document.getElementById("cta-img");
ctaIMG.setAttribute("src","/img/header-img.png");

const mainSection = document.getElementsByClassName("text-content");
mainSection[0].firstChild.textContent= "FEATURES";

mainSection[0].lastChild.textContent = "Aliquam elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainSection[1].firstChild.textContent =  "ABOUT";
mainSection[1].lastChild.textContent = "Aliquam elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainSection[2].firstChild.textContent = "SERVICES";
mainSection[2].lastChild.textContent = "Aliquam elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainSection[3].firstChild.textContent = "PRODUCT";
mainSection[3].lastChild.textContent = "Aliquam elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
mainSection[4].firstChild.textContent ="VISION";
mainSection[4].lastChild.textContent = "Aliquam elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src","/img/mid-page-accent.jpg");

const contactSection = document.querySelector("contact");
const contactHeader = document.querySelector(".contact h4");

contactHeader.textContent = "CONTACT";

const contactList = document.querySelectorAll(".contact p");


let addressLine1 = "123 Way 456 Street";
let addressLine2 = "Somewhere, USA";
let wholeAddress= addressLine1 + " <br> " + addressLine2;
// contactSection.append("p");
contactList[0].textContent = wholeAddress;
contactList[1].textContent = "1(888) 888-8888";
contactList[2].textContent = "sales@greatidea.io";


const footerContent = document.querySelector("footer p");
footerContent.textContent = "Copyright Great Idea! 2018";