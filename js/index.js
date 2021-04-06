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


const title = document.querySelector('title')
title.textContent = 'Great Idea!'


const nav = document.querySelectorAll('nav a');

nav.forEach((nav, index) => {
  nav.textContent = siteContent.nav['nav-item-' +(index + 1)];
})

const headerImage = document.querySelector('#cta-img')
headerImage.setAttribute('src',siteContent.cta["img-src"]);

let domh1 = document.querySelector('h1')
domh1.innerHTML = siteContent.cta["h1"]

const button = document.querySelector('button')
button.textContent = siteContent.cta["button"]

const topContent = document.querySelectorAll('.top-content .text-content')
const text = topContent[0].querySelector('h4') 
text.textContent = siteContent["main-content"]["features-h4"]

const mainText = topContent[0].querySelector('p')
mainText.textContent = siteContent["main-content"]["features-content"]

const about = topContent[1].querySelector('h4')
about.textContent = siteContent["main-content"]['about-h4']

const aboutText = topContent[1].querySelector('p')
aboutText.textContent = siteContent["main-content"]["about-content"]

const bottomContent = document.querySelectorAll('.bottom-content .text-content')

const services  = bottomContent[0].querySelector('h4')
services.textContent = siteContent["main-content"]["services-h4"]

const servicesText  = bottomContent[0].querySelector('p')
servicesText.textContent = siteContent["main-content"]["services-content"]

const product = bottomContent[1].querySelector('h4')
product.textContent = siteContent["main-content"]["product-h4"]

const productText = bottomContent[1].querySelector('p')
productText.textContent = siteContent["main-content"]["product-content"]


const vision = bottomContent[2].querySelector('h4')
vision.textContent = siteContent["main-content"]["vision-h4"]

const visionText = bottomContent[2].querySelector('p')
visionText.textContent = siteContent["main-content"]["vision-content"]

const middleImage = document.querySelector('#middle-img')
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])


const contactText = document.querySelector('.contact h4')
contactText.textContent = siteContent["contact"]["contact-h4"]
const address = document.querySelector('.contact p:nth-child(2)')
address.textContent = siteContent["contact"]["address"]
const phone = document.querySelector('.contact p:nth-child(3)')
phone.textContent = siteContent["contact"]["phone"]
const email = document.querySelector('.contact p:nth-child(4)')
email.textContent = siteContent["contact"]["email"]


const footerText = document.querySelector('footer p')
footerText.textContent = siteContent["footer"]["copyright"]


nav.forEach((item) => {
  item.style.color = "green"
})