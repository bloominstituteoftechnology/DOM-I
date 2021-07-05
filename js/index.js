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
let logo = document.getElementById("logo-img")
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NOTE: you can do ('.class:nth-of-type(1)') when selecting a specific element inside a nodeList


const title = document.querySelector('title')
title.textContent = 'Great Idea! DOM'

const a = document.querySelectorAll('a')
a[0].innerText = siteContent['nav']['nav-item-1']
a[1].innerText = siteContent['nav']['nav-item-2']
a[2].innerText = siteContent['nav']['nav-item-3']
a[3].innerText = siteContent['nav']['nav-item-4']
a[4].innerText = siteContent['nav']['nav-item-5']
a[5].innerText = siteContent['nav']['nav-item-6']


const h1 = document.querySelector('h1')
h1.innerHTML = 'DOM<br> Is<br> Awesome'

const button = document.querySelector('button')
button.textContent = siteContent["cta"]["button"]

const ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const textContenth4 = document.querySelectorAll('h4')
textContenth4[0].innerText = siteContent['main-content']['features-h4']
textContenth4[1].innerText = siteContent['main-content']['about-h4']
textContenth4[2].innerText = siteContent['main-content']['services-h4']
textContenth4[3].innerText = siteContent['main-content']['product-h4']
textContenth4[4].innerText = siteContent['main-content']['vision-h4']

const textContentp = document.querySelectorAll('p')
textContentp[0].innerText = siteContent['main-content']['features-content']
textContentp[1].innerText = siteContent['main-content']['about-content']
textContentp[2].innerText = siteContent['main-content']['services-content']
textContentp[3].innerText = siteContent['main-content']['product-content']
textContentp[4].innerText = siteContent['main-content']['vision-content']

const middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

textContenth4[5].innerText = siteContent['contact']['contact-h4']
textContentp[5].innerText = siteContent['contact']['address']
textContentp[6].innerText = siteContent['contact']['phone']
textContentp[7].innerText = siteContent['contact']['email']

textContentp[8].innerText = siteContent['footer']['copyright']

const nav = document.querySelector('nav')
const navItem1 = document.createElement('a')
navItem1.innerText = 'test-1'
navItem1.style.color = 'green'
nav.prepend(navItem1)


const navItem2 = document.createElement('a')
navItem2.innerText = 'test-2'
navItem2.style.color = 'green'
nav.appendChild(navItem2)