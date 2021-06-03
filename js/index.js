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

const ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

const middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const getStarted = document.querySelector(".cta-text button")
getStarted.textContent = siteContent["cta"]["button"]

const domIsAwesome = document.querySelector(".cta-text h1")
domIsAwesome.setAttribute('style', 'white-space: pre;')
domIsAwesome.textContent = 'DOM \n'
domIsAwesome.textContent += 'Is \n'
domIsAwesome.textContent += 'Awesome'

//features
const features = document.getElementsByClassName('text-content')[0]
const featuresTitle = features.querySelector("h4")
featuresTitle.textContent = siteContent["main-content"]["features-h4"]

const featuresInfo = features.querySelector("p")
featuresInfo.textContent = siteContent["main-content"]["features-content"]

//about
const about = document.getElementsByClassName('text-content')[1]
const aboutTitle = about.querySelector("h4")
aboutTitle.textContent = siteContent["main-content"]["about-h4"]

const aboutInfo = about.querySelector("p")
aboutInfo.textContent = siteContent["main-content"]["about-content"]

//services
const service = document.getElementsByClassName('text-content')[2]
const serviceTitle = service.querySelector("h4")
serviceTitle.textContent = siteContent["main-content"]["services-h4"]

const serviceInfo = service.querySelector("p")
serviceInfo.textContent = siteContent["main-content"]["services-content"]

//product
const product = document.getElementsByClassName('text-content')[3]
const productTitle = product.querySelector("h4")
productTitle.textContent = siteContent["main-content"]["product-h4"]

const productInfo = product.querySelector("p")
productInfo.textContent = siteContent["main-content"]["product-content"]

//vision
const vision = document.getElementsByClassName('text-content')[4]
const visionTitle = vision.querySelector("h4")
visionTitle.textContent = siteContent["main-content"]["vision-h4"]

const visionInfo = vision.querySelector("p")
visionInfo.textContent = siteContent["main-content"]["vision-content"]

//contact
const contact = document.querySelector(".contact")
const contactTitle = contact.querySelector("h4")
const contactAddress = contact.querySelector('p')
const contactPhoneNumber = contactAddress.nextElementSibling
const contactEmail = contactPhoneNumber.nextElementSibling

contactTitle.textContent = siteContent["contact"]["contact-h4"]
contactAddress.textContent = siteContent["contact"]["address"]
contactPhoneNumber.textContent = siteContent["contact"]["phone"]
contactEmail.textContent = siteContent["contact"]["email"]

//copyright
const copyright = document.querySelector('footer')
copyright.textContent = siteContent["footer"]["copyright"]

//nav bar
const navBar = document.querySelector('header nav')
const navBarItemOne = navBar.querySelector('a')
const navBarItemTwo = navBarItemOne.nextElementSibling
const navBarItemThree = navBarItemTwo.nextElementSibling
const navBarItemFour = navBarItemThree.nextElementSibling
const navBarItemFive = navBarItemFour.nextElementSibling
const navBarItemSix = navBarItemFive.nextElementSibling

navBarItemOne.textContent = siteContent["nav"]["nav-item-1"]
navBarItemTwo.textContent = siteContent["nav"]["nav-item-2"]
navBarItemThree.textContent = siteContent["nav"]["nav-item-3"]
navBarItemFour.textContent = siteContent["nav"]["nav-item-4"]
navBarItemFive.textContent = siteContent["nav"]["nav-item-5"]
navBarItemSix.textContent = siteContent["nav"]["nav-item-6"]

//changing nav text color
navBarItemOne.style.color = "green"
navBarItemTwo.style.color = "green"
navBarItemThree.style.color = "green"
navBarItemFour.style.color = "green"
navBarItemFive.style.color = "green"
navBarItemSix.style.color = "green"

//add two new items to the navBar
const newNavItemOne = document.createElement('a')
newNavItemOne.textContent = 'New Nav Item One'
navBar.appendChild(newNavItemOne)
newNavItemOne.href = '#'
newNavItemOne.style.color = "green"

const newNavItemTwo = document.createElement('a')
newNavItemTwo.textContent = 'New Nav Item Two'
navBar.appendChild(newNavItemTwo)
newNavItemTwo.href = '#'
newNavItemTwo.style.color = "green"