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

let navBar = document.querySelectorAll("a");
navBar[0].textContent = siteContent.nav["nav-item-1"]
navBar[1].textContent = siteContent.nav["nav-item-2"]
navBar[2].textContent = siteContent.nav["nav-item-3"]
navBar[3].textContent = siteContent.nav["nav-item-4"]
navBar[4].textContent = siteContent.nav["nav-item-5"]
navBar[5].textContent = siteContent.nav["nav-item-6"]

const h1 = document.querySelector("h1");
h1.innerHTML = siteContent.cta["h1"].split(" ").join("<br/>")

const topImg = document.querySelector("#cta-img");
topImg.src = siteContent.cta["img-src"];

const start = document.querySelector(".cta-text button");
start.textContent = siteContent.cta["button"];

const main = document.querySelectorAll(".top-content .text-content h4");
main[0].textContent = siteContent["main-content"]["features-h4"]
main[1].textContent = siteContent["main-content"]["about-h4"]

const mainP = document.querySelectorAll(".text-content p")
mainP[0].textContent = siteContent["main-content"]["features-content"]
mainP[1].textContent = siteContent["main-content"]["about-content"]

const middleImg = document.querySelector("#middle-img")
middleImg.src = siteContent["main-content"]["middle-img-src"];

const bottom = document.querySelectorAll(".bottom-content .text-content h4")
bottom[0].textContent = siteContent["main-content"]["services-h4"]
bottom[2].textContent = siteContent["main-content"]["vision-h4"]
bottom[1].textContent = siteContent["main-content"]["product-h4"]


const bottomP = document.querySelectorAll(".bottom-content .text-content p")
bottomP[0].textContent = siteContent["main-content"]["services-content"]
bottomP[2].textContent = siteContent["main-content"]["vision-content"]
bottomP[1].textContent = siteContent["main-content"]["product-content"]

const contact = document.querySelector(".contact h4")
contact.textContent = siteContent.contact["contact-h4"]

const contactP = document.querySelectorAll(".contact p")
contactP[0].textContent = siteContent.contact["address"]
contactP[1].textContent = siteContent.contact["phone"]
contactP[2].textContent = siteContent.contact["email"]

const footer = document.querySelector("footer")
footer.textContent = siteContent.footer["copyright"]



const head = document.querySelector("nav")
const us = document.createElement("a")
const loc = document.createElement("a")

us.textContent = "Us";
loc.textContent = "Location";

head.appendChild(us);
head.appendChild(loc);



const greenie = document.querySelectorAll("a");

greenie.forEach( a => a.style.color = "green" );