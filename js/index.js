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
const nav = document.querySelectorAll('a')
nav.forEach((e, i) => e.textContent = siteContent['nav'][`nav-item-${i}`])
const h1 = document.querySelector('h1')
h1.textContent = siteContent.cta.h1
const btn = document.querySelector('button')
btn.textContent = siteContent.cta.button
const ctaimg = document.getElementById('cta-img');
ctaimg.src = siteContent.cta["img-src"];
const content = document.querySelectorAll('.text-content');
const features = content[0]
const ftHeading = features.querySelector('h4')
const ftContent = features.querySelector('p')
ftHeading.textContent = siteContent["main-content"]["features-h4"]
ftContent.textContent = siteContent["main-content"]["features-content"]
const about = content[1]
const abtHeading = about.querySelector('h4')
const abtContent = about.querySelector('p')
abtHeading.textContent = siteContent["main-content"]["about-h4"]
abtContent.textContent = siteContent["main-content"]["about-content"]
const imgMiddle = document.getElementById('middle-img');
imgMiddle.src = siteContent["main-content"]["middle-img-src"];
const services = content[2]
const serHeading = services.querySelector('h4')
const serContent = services.querySelector('p')
serHeading.textContent = siteContent["main-content"]["services-h4"]
serContent.textContent = siteContent["main-content"]["services-content"]
const products = content[3]
const proHeading = products.querySelector('h4')
const proContent = products.querySelector('p')
proHeading.textContent = siteContent["main-content"]["product-h4"]
proContent.textContent = siteContent["main-content"]["product-content"]
const vision = content[4]
const visHeading = vision.querySelector('h4')
const visContent = vision.querySelector('p')
visHeading.textContent = siteContent["main-content"]["vision-h4"]
visContent.textContent = siteContent["main-content"]["vision-content"]
const contact = document.querySelector('.contact');
const conHeading = contact.querySelector('h4')
conHeading.textContent = siteContent.contact["contact-h4"]
const addContent = contact.querySelectorAll('p');
addContent[0].textContent = siteContent.contact.address;
addContent[1].textContent = siteContent.contact.phone;
addContent[2].textContent = siteContent.contact.email
const footer = document.querySelector('footer')
const footContent = footer.querySelector('p');
footer.textContent = siteContent.footer.copyright;
console.log(footer)