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

let navLinks = document.querySelectorAll('nav a')
navLinks[0].textContent = "Services"
navLinks[0].href = '#'
navLinks[1].textContent = "Product"
navLinks[1].href = '#'
navLinks[2].textContent = "Vision"
navLinks[2].href = '#'
navLinks[3].textContent = "Features"
navLinks[3].href = '#'
navLinks[4].textContent = "About"
navLinks[4].href = '#'
navLinks[5].textContent = "Contact"
navLinks[5].href = '#'

const ctaStuff = document.querySelector('h1')

ctaStuff.textContent = 'DOM IS AWESOME'

const button = document.querySelector('button')
button.textContent = 'Get Started'

const image = document.getElementById("cta-img")
image.setAttribute('src', "img/header-img.png")

const h4Stuff = document.querySelectorAll('h4')

h4Stuff[0].textContent = "Features"
h4Stuff[1].textContent = "About"
h4Stuff[2].textContent = "Services"
h4Stuff[3].textContent = "Product"
h4Stuff[4].textContent = "Vision"
h4Stuff[5].textContent = "Contact"

h4Stuff[0].nextElementSibling.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

h4Stuff[1].nextElementSibling.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis"

h4Stuff[2].nextElementSibling.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

h4Stuff[3].nextElementSibling.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

h4Stuff[4].nextElementSibling.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

h4Stuff[5].nextElementSibling.textContent = "123 Way 456 Street Somewhere, USA"

h4Stuff[5].nextElementSibling.nextElementSibling.textContent = "1 (888) 888-8888"

h4Stuff[5].nextElementSibling.nextElementSibling.nextElementSibling.textContent = "sales@greatidea.io"

const image2 = document.getElementById('middle-img')
image2.setAttribute('src', 'img/mid-page-accent.jpg')