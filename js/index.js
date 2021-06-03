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

let windowT = document.querySelector('title')
windowT.textContent = 'Great Idea!'

let nav = document.querySelectorAll('header nav a')
nav.forEach((link, index) => {
  link.texContent = siteContent.nav['nav-item-${index+1}']
})

let content = document.querySelector('section div h1')
content.textContent = siteContent.content.h1

let img = document.getElementById('img')
img.setAttribute('src', siteContent.img['img-src'])

let button = document.querySelector('section div button')
button.textContent = siteContent.button

let contentHeader = document.querySelectorAll('.top-content h4')
contentHeader[0].textContent = siteContent['main-content']['features-h4']
contentHeader[1].textContent = siteContent['main-content']['about-h4']

let topContent = document.querySelectorAll('.top-content p')
topContent[0].textContent = siteContent['main-content']['features-content']
topContent[1].textContent = siteContent['main-content']['about-content']

let mainImg = document.querySelector('main-img')
mainImg.setAttribute('src', siteContent['main-img']['middle-img-src'])

let bottomHeader = document.querySelectorAll('.bottom-content h4')
bottomHeader[0].textContent = siteContent['main-content']['service-h4']
bottomHeader[1].textContent = siteContent['main-content']['product-h4']
bottomHeader[2].textContent = siteContent['main-content']['vision-h4']

let bottomPar = document.querySelectorAll('.bottom-par')
bottomPar[0].textContent = siteContent['main-content']['services-content']
bottomPar[1].textContent = siteContent['main-content']['product-content']
bottomPar[2].textContent = siteContent['main-content']['vision-content']

let contact = document.querySelector('.contact-h4')
contact.textContent = siteContent.contact['contact-h4']

let contactP = document.querySelectorAll('contact p')
contactP[0].textContent = siteContent.contact.address;
contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

let footer = document.querySelector('footer')
footer.textContent = siteContent.footer.copyright

nav.forEach((item) => {
  item.style.color = 'green'
})

let freq = document.createElement('a')
freq.textContent = 'FAQ'
document.querySelector('nav').appendChild(freq)

let item = document.createElement('a')
item.textContent = 'First Item Link'
document.querySelector('nav').prepend(item)

