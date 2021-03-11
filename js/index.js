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

const anchorTags = document.querySelectorAll('nav a')
const ArrayAnchorTags = Array.from(anchorTags) 

ArrayAnchorTags[0].textContent= siteContent.nav["nav-item-1"]
ArrayAnchorTags[1].textContent= siteContent.nav["nav-item-2"]
ArrayAnchorTags[2].textContent= siteContent.nav["nav-item-3"]
ArrayAnchorTags[3].textContent= siteContent.nav["nav-item-4"]
ArrayAnchorTags[4].textContent= siteContent.nav["nav-item-4"]
ArrayAnchorTags[5].textContent= siteContent.nav["nav-item-6"]


let newHeader = document.querySelector(".cta h1")
newHeader.innerHTML = siteContent.cta.h1.split(" ").join("<br>")

let newButton = document.querySelector(".cta button")
    newButton.textContent = siteContent.cta.button

let newFeatures = document.querySelectorAll(".main-content h4")
    newFeatures[0].textContent = siteContent["main-content"]["features-h4"]

let fParagraph = document.querySelectorAll(".main-content p")
    fParagraph[0].textContent = siteContent["main-content"] ["features-content"]

let newAbout = document.querySelectorAll(".main-content h4")
    newAbout[1].textContent = siteContent["main-content"] ["about-h4"]

let aParagraph = document.querySelectorAll(".main-content p")
    newAbout[1].textContent = siteContent["main-content"] ["about-content"]

 let middleImage = document.getElementById("middle-img");
    middleImage.setAttribute('src', siteContent["main-content"] ["middle-img-src"])

let newBottom = document.querySelectorAll(".main-content h4")
    newBottom[2.textContent]