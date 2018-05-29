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

let nav = document.querySelector("nav")
nav.children[0].innerHTML = siteContent["nav"]["nav-item-1"]
nav.children[1].innerHTML = siteContent["nav"]["nav-item-2"]
nav.children[2].innerHTML = siteContent["nav"]["nav-item-3"]
nav.children[3].innerHTML = siteContent["nav"]["nav-item-4"]
nav.children[4].innerHTML = siteContent["nav"]["nav-item-5"]
nav.children[5].innerHTML = siteContent["nav"]["nav-item-6"]

let ctaH1 = document.querySelector('.cta h1')
let ctaButton = document.querySelector('.cta button')
let ctaImg = document.querySelector('#cta-img')

ctaH1.innerHTML = siteContent.cta.h1
ctaButton.innerHTML = siteContent.cta.button 
ctaImg.src = siteContent.cta["img-src"]

let featuresHeader = document.querySelector('.top-content').children[0].children[0]
let featuresContent = document.querySelector('.top-content').children[0].children[1]

let aboutHeader = document.querySelector('.top-content').children[1].children[0]
let aboutContent = document.querySelector('.top-content').children[1].children[1]

let servicesHeader = document.querySelector('.bottom-content').children[0].children[0]
let servicesContent = document.querySelector('.bottom-content').children[0].children[1]

let productHeader = document.querySelector('.bottom-content').children[1].children[0]
let productContent = document.querySelector('.bottom-content').children[1].children[1]

let visionHeader = document.querySelector('.bottom-content').children[2].children[0]
let visionContent = document.querySelector('.bottom-content').children[2].children[1]

let middleImg = document.querySelector('#middle-img')

featuresHeader.innerHTML = siteContent["main-content"]["features-h4"]
featuresContent.innerHTML = siteContent["main-content"]["features-content"]

aboutHeader.innerHTML = siteContent["main-content"]["about-h4"]
aboutContent.innerHTML = siteContent["main-content"]["about-content"]

servicesHeader.innerHTML = siteContent["main-content"]["services-h4"]
servicesContent.innerHTML = siteContent["main-content"]["services-content"]

productHeader.innerHTML = siteContent["main-content"]["product-h4"]
productContent.innerHTML = siteContent["main-content"]["product-content"]

visionHeader.innerHTML = siteContent["main-content"]["vision-h4"]
visionContent.innerHTML = siteContent["main-content"]["vision-content"]

middleImg.src = siteContent["main-content"]["middle-img-src"]
