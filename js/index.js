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


const headerNav = document.querySelector('a') 
const allHeaderNavs =document.querySelectorAll('a')

allHeaderNavs[0].textContent= 'Services'
allHeaderNavs[1].textContent= 'Products'
allHeaderNavs[2].textContent= 'Vision'
allHeaderNavs[3].textContent= 'Features'
allHeaderNavs[4].textContent= 'About'
allHeaderNavs[5].textContent= 'Contacts'

const logoPic = document.getElementById("cta-img")
const ctaBtn = document.querySelector('button')
const ctaText = document.querySelector("cta-text, h1")

ctaText.textContent= "DOM Is Awesome",
ctaBtn.textContent= "Get Started";
logoPic.src = "img/header-img.png";


const contentH4 = document.querySelectorAll("h4")
const contentP = document.querySelectorAll("top-content, p")
const bottomContentP = document.querySelectorAll("bottom-content, p")

contentH4[0].textContent = "Features"
contentH4[1].textContent = "About"
contentH4[2].textContent = "Services"
contentH4[3].textContent = "Product"
contentH4[4].textContent = "Vision"
contentH4[5].textContent = "Contact"

contentP[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

contentP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bottomContentP[2].textContent ="Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bottomContentP[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

bottomContentP[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const midImg = document.getElementById("middle-img")
midImg.src = "img/mid-page-accent.jpg"

const contactP = document.querySelectorAll(".contact p")

contactP[0].textContent =  "123 Way 456 Street Somewhere, USA"
contactP[1].textContent = "1 (888) 888-8888"
contactP[2].textContent = "sales@greatidea.io"

const footerP = document.querySelector("footer")

footerP.textContent = "Copyright Great Idea! 2018"