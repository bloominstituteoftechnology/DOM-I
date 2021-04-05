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

const header = document.querySelector('header');

let links = document.querySelectorAll("nav a");

links[0].href='#'
links[0].style.color='green'

links[1].href='#'
links[1].style.color='green'
links[2].href='#'
links[2].style.color='green'
links[3].href='#'
links[3].style.color='green'
links[4].href='#'
links[4].style.color='green'
links[5].href='#'
links[5].style.color='green'

const extra = document.createElement('a')
extra.textContent = "Hello"
extra.href = "#"
extra.style.color = 'green'
document.querySelector('nav').prepend(extra)

const extra2 = document.createElement('a')
extra2.textContent = "User"
extra2.href = "#"
extra2.style.color = 'green'
document.querySelector('nav').prepend(extra2)

const cta = document.querySelector('h1');

cta.innerHTML = 'Dom <br> Is <br> Awesome'

const btn = document.querySelector('button');
btn.textContent= 'get started'

const image = document.getElementById('cta-img')
image.setAttribute('src', 'img/header-img.png')

const h4 = document.querySelectorAll('h4')

h4[0].textContent="Features"
h4[1].textContent="About"
h4[2].textContent="Services"
h4[3].textContent="Product"
h4[4].textContent="Vision"
h4[5].textContent="Contact"