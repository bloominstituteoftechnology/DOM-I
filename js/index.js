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

// Nav
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let anchorNL = document.querySelectorAll("nav a")
let anchorArray = Array.from(anchorNL)
for(let i=0; i < anchorArray.length ; i++){
  anchorArray[i].textContent = siteContent["nav"][`nav-item-${i+1}`]
  anchorArray[i].style.color = 'green'
}

let djbLeft = document.createElement('p')
let djbRight = document.createElement('p')
djbLeft.textContent = "djb_left"
djbRight.textContent = "djb_right"
let nav = document.querySelector("nav")
nav.prepend(djbLeft)
nav.append(djbRight)

// CTA
let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let title = document.querySelector("h1")
title.textContent = siteContent['cta']["h1"]

let actionButton = document.querySelector(".cta button")
actionButton.textContent = siteContent["cta"]["button"]

// Main Content
let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let topContentHeadersNL = document.querySelectorAll(".top-content h4")
topContentHeadersNL[0].textContent = siteContent["main-content"]["features-h4"]
topContentHeadersNL[1].textContent = siteContent["main-content"]["about-h4"]

let topContentParaNL = document.querySelectorAll(".top-content p")
topContentParaNL[0].textContent = siteContent["main-content"]["features-content"]
topContentParaNL[1].textContent = siteContent["main-content"]["about-content"]

let bottomContentHeadersNL = document.querySelectorAll(".bottom-content h4")
bottomContentHeadersNL[0].textContent = siteContent["main-content"]["services-h4"]
bottomContentHeadersNL[1].textContent = siteContent["main-content"]["product-h4"]
bottomContentHeadersNL[2].textContent = siteContent["main-content"]["vision-h4"]

let bottomContentParaNL = document.querySelectorAll(".bottom-content p")
bottomContentParaNL[0].textContent = siteContent["main-content"]["services-content"]
bottomContentParaNL[1].textContent = siteContent["main-content"]["product-content"]
bottomContentParaNL[2].textContent = siteContent["main-content"]["vision-content"]

// Contact
let contactHeader = document.querySelector(".contact h4")
contactHeader.textContent = siteContent["contact"]["contact-h4"]

let contactParaNL = document.querySelectorAll(".contact p")
let contactParaArray = Array.from(contactParaNL)
contactParaArray[0].textContent = siteContent["contact"]["address"]
contactParaArray[1].textContent = siteContent["contact"]["phone"]
contactParaArray[2].textContent = siteContent["contact"]["email"]

// Footer
let footerText = document.querySelector("footer p")
footerText.textContent = siteContent["footer"]["copyright"]