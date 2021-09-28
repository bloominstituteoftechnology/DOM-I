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


let nav = document.querySelectorAll('nav a')

// const newNavArray = Array.from(nav)
nav.forEach((item,index) =>item.textContent = siteContent['nav'][`nav-item-${index + 1}`])


let cta = document.querySelector('.cta')
cta.querySelector('h1').innerHTML = "DOM <br> Is <br> Awesome"
cta.querySelector('button').textContent =siteContent['cta']['button']
cta.querySelector('#cta-img').setAttribute('src',siteContent['cta']['img-src'])

const mainContent = document.querySelector('.main-content')
const h4 = mainContent.querySelectorAll('h4')

h4[0].innerHTML = siteContent['main-content']['features-h4']
h4[1].innerHTML = siteContent['main-content']['about-h4']
h4[2].innerHTML = siteContent['main-content']['services-h4']
h4[3].innerHTML = siteContent['main-content']['product-h4']
h4[4].innerHTML = siteContent['main-content']['vision-h4']

const p = mainContent.querySelectorAll('p')

p[0].innerHTML = siteContent["main-content"]['features-content']
// p[1].innerHTML = siteContent['main-content']['about-content']
// p[2].innerHTML = siteContent['main-content']['services-content']
// p[3].innerHTML = siteContent['main-content']['product-content']
// p[4].innerHTML = siteContent['main-content']['vision-content']

const img = mainContent.querySelector('#middle-img')

img.setAttribute('src', siteContent['main-content']['middle-img-src'])

const contact = document.querySelector('.contact')
const contactH4 = contact.querySelector('h4')
contactH4.textContent = siteContent['contact']['contact-h4']


const para = contact.querySelectorAll('p')
para[0].innerHTML = '123 Way 456 Street <br> Somewhere, USA'
para[1].innerHTML = siteContent['contact']['phone']
para[2].innerHTML = siteContent['contact']['email']


const footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']