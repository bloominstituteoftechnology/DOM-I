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

//nav
const navItems = document.querySelectorAll('nav a')
console.log(navItems)
navItems[0].textContent = siteContent.nav['nav-item-1']
navItems[1].textContent = siteContent.nav['nav-item-2']
navItems[2].textContent = siteContent.nav['nav-item-3']
navItems[3].textContent = siteContent.nav['nav-item-4']
navItems[4].textContent = siteContent.nav['nav-item-5']
navItems[5].textContent = siteContent.nav['nav-item-6']

//dom
const domHeader = document.querySelector('h1')
domHeader.textContent = siteContent.cta['h1']

//code
const codeSnippet = document.getElementById('cta-img')
codeSnippet.src = siteContent.cta['img-src']

//button 
const button = document.querySelector('button')
button.textContent = siteContent.cta['button']

//content
const par = document.querySelectorAll('.text-content p')
par[0].textContent = siteContent['main-content']['features-content']
par[1].textContent = siteContent['main-content']['about-content']
par[2].textContent = siteContent['main-content']['services-content']
par[3].textContent = siteContent['main-content']['product-content']
par[4].textContent = siteContent['main-content']['vision-content']


const head4 = document.querySelectorAll('.main-content h4')
head4[0].textContent = siteContent['main-content']['features-h4']
head4[1].textContent = siteContent['main-content']['about-h4']
head4[2].textContent = siteContent['main-content']['services-h4']
head4[3].textContent = siteContent['main-content']['product-h4']
head4[4].textContent = siteContent['main-content']['vision-h4']

const midImg = document.querySelector('.middle-img')
midImg.src = siteContent['main-content']['middle-img-src']