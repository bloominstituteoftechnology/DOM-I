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

const links = document.querySelectorAll("a")
links.forEach((link, index) => {
  link.innerText = siteContent["nav"][`nav-item-${index + 1}`];
  link.style.color = "green"
})
const nav = document.querySelector("nav");
const newLink = document.createElement("a");
newLink.innerText = "stuff"
nav.appendChild(newLink)
const newLink2 = document.createElement("a");
newLink2.innerText = "things"
nav.prepend(newLink)

const title = document.querySelector("h1")
title.innerHTML = `DOM<br> Is<br> Awesome`

const button = document.querySelector(".cta-text button")
button.innerText = siteContent.cta["h1"]
const CtaImg = document.querySelector("#cta-img")
CtaImg.src = siteContent.cta["img-src"];

const textContent = document.querySelectorAll(".text-content")
const h1 = textContent[0].querySelector("h4")
h1.innerText = siteContent["main-content"]["services-h4"]
const h2 = textContent[1].querySelector("h4")
h2.innerText = siteContent["main-content"]["product-h4"]
const h3 = textContent[2].querySelector("h4")
h3.innerText = siteContent["main-content"]["vision-h4"]

const middleImg = document.querySelector("#middle-img")
middleImg.src = siteContent["main-content"]["middle-img-src"]

const p1 = textContent[0].querySelector("p")
p1.innerText = siteContent["main-content"]["services-content"]
const p2 = textContent[1].querySelector("p")
p2.innerText = siteContent["main-content"]["product-content"]
const p3 = textContent[2].querySelector("p")
p3.innerText = siteContent["main-content"]["vision-content"]


const contact = document.querySelector(".contact")
const contactHeader = contact.querySelector("h4")
contactHeader.innerText = siteContent.contact["contact-h4"]
const contactAddress = contact.querySelector("p")
contactAddress.innerText = siteContent.contact["address"]
const contactPhone = contact.querySelectorAll("p")[1]
contactPhone.innerText = siteContent.contact["phone"]
const contactEmail = contact.querySelectorAll("p")[2]
contactEmail.innerText = siteContent.contact["email"]

const footer = document.querySelector("footer");
const footerP = footer.querySelector("p");
footerP.innerText = siteContent.footer.copyright

