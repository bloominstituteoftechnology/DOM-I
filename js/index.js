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

const nav = document.querySelector('nav')
const item1 = nav.querySelector('a:nth-of-type(1)')
const item2 = nav.querySelector('a:nth-of-type(2)')
const item3 = nav.querySelector('a:nth-of-type(3)')
const item4 = nav.querySelector('a:nth-of-type(4)')
const item5 = nav.querySelector('a:nth-of-type(5)')
const item6 = nav.querySelector('a:nth-of-type(6)')

nav.style.color='green';
item1.textContent= siteContent.nav["nav-item-1"]
item2.textContent= siteContent.nav["nav-item-2"]
item3.textContent= siteContent.nav["nav-item-3"]
item4.textContent= siteContent.nav["nav-item-4"]
item5.textContent= siteContent.nav["nav-item-5"]
item6.textContent= siteContent.nav["nav-item-6"]

const domIsAwesome = document.querySelector('cta, h1')
const getStarted = document.querySelector('cta, button')
const headerImage = document.querySelector('#cta-img')

domIsAwesome.textContent=siteContent.cta.h1
getStarted.textContent=siteContent.cta.button
headerImage.setAttribute('src', siteContent['cta']["img-src"])

const topContentLeft = document.querySelector('.text-content')
const topContentRight = document.querySelector('.text-content:nth-of-type(2)')
const features = topContentLeft.querySelector('h4')
const about = topContentRight.querySelector('h4')

const featuresContent = topContentLeft.querySelector('p')
const aboutContent = topContentRight.querySelector('p')

features.textContent = siteContent["main-content"]["features-h4"]
about.textContent = siteContent["main-content"]["about-h4"]

featuresContent.textContent = siteContent["main-content"]["features-content"]
aboutContent.textContent = siteContent["main-content"]["about-content"]

const middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src',siteContent["main-content"]["middle-img-src"])

const bottomContent = document.querySelector('.bottom-content')
const service = bottomContent.querySelector('.text-content:nth-of-type(1)')
const product = bottomContent.querySelector('.text-content:nth-of-type(2)')
const vision = bottomContent.querySelector('.text-content:nth-of-type(3)')
const serviceH4 = service.querySelector('h4')
const productH4 = product.querySelector('h4')
const visionH4 = vision.querySelector('h4')
const serviceContent = service.querySelector('p')
const productContent = product.querySelector('p')
const visionContent = vision.querySelector('p')

serviceH4.textContent = siteContent["main-content"]["services-h4"]
productH4.textContent = siteContent["main-content"]["product-h4"]
visionH4.textContent = siteContent["main-content"]["vision-h4"]
serviceContent.textContent = siteContent["main-content"]["services-content"]
productContent.textContent = siteContent["main-content"]["product-content"]
visionContent.textContent = siteContent["main-content"]["vision-content"]

const contact = document.querySelector('.contact')

const contactH4 = contact.querySelector('h4')
const address = contact.querySelector('p:nth-of-type(1)')
const phone =  contact.querySelector('p:nth-of-type(2)')
const email  = contact.querySelector('p:nth-of-type(3)')

contactH4.textContent = siteContent.contact["contact-h4"]
address.textContent = siteContent.contact.address
phone.textContent = siteContent.contact.phone
email.textContent = siteContent.contact.email

const footer = document.querySelector('footer')
const copyright = footer.querySelector('p')

copyright.textContent = siteContent.footer.copyright

const website = document.createElement("a");
website.textContent = "Website";
website.href = "#";
document.querySelector("nav").appendChild(website);

const socialMedia = document.createElement("a");
socialMedia.textContent = "Social Media";
socialMedia.href = "#";
document.querySelector("nav").appendChild(socialMedia);