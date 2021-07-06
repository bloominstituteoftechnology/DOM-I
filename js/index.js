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



let link1 = document.querySelector("a:nth-of-type(1)")
link1.textContent = siteContent['nav']['nav-item-1']

let link2 = document.querySelector("a:nth-of-type(2)")
link2.textContent = siteContent['nav']['nav-item-2']

let link3 = document.querySelector("nav a:nth-of-type(3)")
link3.textContent = siteContent['nav']['nav-item-3']

let link4 = document.querySelector("nav a:nth-of-type(4)")
link4.textContent = siteContent['nav']['nav-item-4']

let link5 = document.querySelector("nav a:nth-of-type(5)")
link5.textContent = siteContent['nav']['nav-item-5']

let link6 = document.querySelector("nav a:nth-of-type(6)")
link6.textContent = siteContent['nav']['nav-item-6']



let title = document.querySelector(".cta-text h1")
title.textContent = siteContent['cta']['h1']



let button = document.querySelector(".cta-text button")
button.textContent = siteContent['cta']['button']



let ctaImg = document.getElementById("cta-img")
ctaImg.setAttribute('src',siteContent["cta"]["img-src"])



let topLeftTitle = document.querySelector(".top-content .text-content:nth-of-type(1) h4")
topLeftTitle.textContent = siteContent['main-content']['features-h4']

let topLeftContent = document.querySelector(".top-content .text-content:nth-of-type(1) p")
topLeftContent.textContent = siteContent['main-content']['features-content']

let topRightTitle = document.querySelector(".top-content .text-content:nth-of-type(2) h4")
topRightTitle.textContent = siteContent['main-content']['about-h4']

let topRightContent = document.querySelector(".top-content .text-content:nth-of-type(2) p")
topRightContent.textContent = siteContent['main-content']['features-content']



let middleImg = document.getElementById("middle-img")
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"])



let bottomLeftTitle = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4")
bottomLeftTitle.textContent = siteContent['main-content']['services-h4']

let bottomLeftContent = document.querySelector(".bottom-content .text-content:nth-of-type(1) p")
bottomLeftContent.textContent = siteContent['main-content']['services-content']

let bottomMiddleTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4")
bottomMiddleTitle.textContent = siteContent['main-content']['product-h4']

let bottomMiddleContent = document.querySelector(".bottom-content .text-content:nth-of-type(2) p")
bottomMiddleContent.textContent = siteContent['main-content']['product-content']


let bottomRightTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4")
bottomRightTitle.textContent = siteContent['main-content']['vision-h4']

let bottomRightContent = document.querySelector(".bottom-content .text-content:nth-of-type(3) p")
bottomRightContent.textContent = siteContent['main-content']['vision-content']


let contactTitle = document.querySelector(".contact h4")
contactTitle.textContent = siteContent['contact']['contact-h4']

let contactAddres = document.querySelector(".contact p:nth-of-type(1)")
contactAddres.textContent = siteContent['contact']['address']

let contactPhone = document.querySelector(".contact p:nth-of-type(2)")
contactPhone.textContent = siteContent['contact']['phone']

let contactEmail = document.querySelector(".contact p:nth-of-type(3)")
contactEmail.textContent = siteContent['contact']['email']


let footer = document.querySelector("footer p")
footer.textContent = siteContent['footer']['copyright']