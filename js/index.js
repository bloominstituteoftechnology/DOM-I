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

const services = document.querySelector("a:nth-of-type(1)")
const product = document.querySelector("a:nth-of-type(2)")
const vision = document.querySelector("a:nth-of-type(3)")
const features = document.querySelector("a:nth-of-type(4)")
const about = document.querySelector("a:nth-of-type(5)")
const contact = document.querySelector("a:nth-of-type(6)")

const h1 = document.querySelector("h1")
const button = document.querySelector("button")
let cta = document.getElementById("cta-img")

const topContent = document.querySelector(".top-content")
const feats = topContent.querySelector(".text-content:nth-of-type(1) h4")
const featsText = topContent.querySelector(".text-content:nth-of-type(1) p")
const abou = topContent.querySelector(".text-content:nth-of-type(2) h4")
const abouText = topContent.querySelector(".text-content:nth-of-type(2) p")
let midImg = document.querySelector("#middle-img")
const botContent = document.querySelector(".bottom-content")
const serv = botContent.querySelector(".text-content:nth-of-type(1) h4")
const servText = botContent.querySelector(".text-content:nth-of-type(1) p")
const prod = botContent.querySelector(".text-content:nth-of-type(2) h4")
const prodText = botContent.querySelector(".text-content:nth-of-type(2) p")
const visi = botContent.querySelector(".text-content:nth-of-type(3) h4")
const visiText = botContent.querySelector(".text-content:nth-of-type(3) p")

const contactInfo = document.querySelector(".contact")
const h4 = contactInfo.querySelector("h4")
const address = contactInfo.querySelector("p:nth-of-type(1)")
const phone = contactInfo.querySelector("p:nth-of-type(2)")
const email = contactInfo.querySelector("p:nth-of-type(3)")

const footer = document.querySelector("footer")

const nav = document.querySelector("header nav")
const last =document.createElement("a")
const first =document.createElement("a")

let navColor = document.querySelectorAll("header nav a")

services.textContent = siteContent["nav"]["nav-item-1"]
product.textContent = siteContent["nav"]["nav-item-2"]
vision.textContent = siteContent["nav"]["nav-item-3"]
features.textContent = siteContent["nav"]["nav-item-4"]
about.textContent = siteContent["nav"]["nav-item-5"]
contact.textContent = siteContent["nav"]["nav-item-6"]

h1.textContent = siteContent["cta"]["h1"]
button.textContent = siteContent["cta"]["button"]
cta.setAttribute('src', siteContent["cta"]["img-src"])

feats.textContent = siteContent["main-content"]["features-h4"]
featsText.textContent = siteContent["main-content"]["features-content"]
abou.textContent = siteContent["main-content"]["about-h4"]
abouText.textContent = siteContent["main-content"]["about-content"]
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
serv.textContent = siteContent["main-content"]["services-h4"]
servText.textContent = siteContent["main-content"]["services-content"]
prod.textContent = siteContent["main-content"]["product-h4"]
prodText.textContent = siteContent["main-content"]["product-content"]
visi.textContent = siteContent["main-content"]["vision-h4"]
visiText.textContent = siteContent["main-content"]["vision-content"]

h4.textContent = siteContent["contact"]["contact-h4"]
address.textContent = siteContent["contact"]["address"]
phone.textContent = siteContent["contact"]["phone"]
email.textContent = siteContent["contact"]["email"]

footer.textContent = siteContent["footer"]["copyright"]

last.textContent = "More stuff"
first.textContent = "This stuff"
nav.appendChild(last)
nav.prepend(first)

navColor = document.querySelectorAll("header nav a")
navColor.forEach(element => element.style.color = "green")