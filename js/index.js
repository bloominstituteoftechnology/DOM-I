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

const ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

const middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const firstNav = document.querySelector("a:nth-of-type(1)")
firstNav.textContent = siteContent['nav']['nav-item-1']
const secondNav = document.querySelector("a:nth-of-type(2)")
secondNav.textContent = siteContent['nav']['nav-item-2']
const thirdNav = document.querySelector("a:nth-of-type(3)")
thirdNav.textContent = siteContent['nav']['nav-item-3']
const fourthNav = document.querySelector("a:nth-of-type(4)")
fourthNav.textContent = siteContent['nav']['nav-item-4']
const fifthNav = document.querySelector("a:nth-of-type(5)")
fifthNav.textContent = siteContent['nav']['nav-item-5']
const sixthNav = document.querySelector("a:nth-of-type(6)")
sixthNav.textContent = siteContent['nav']['nav-item-6']

const facebookLink = document.createElement('a')
facebookLink.textContent = 'Facebook'
facebookLink.href = '#'
document.querySelector('nav').appendChild(facebookLink)
const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = '#'
document.querySelector('nav').prepend(blogLink)

const title = document.querySelector('h1')
title.textContent = siteContent['cta']['h1']

const getStarted = document.querySelector('button')
getStarted.textContent = siteContent['cta']['button']

const firstSection = document.querySelector('.top-content .text-content:nth-of-type(1)')
const featuresHead = firstSection.querySelector('h4')
const featuresPara = firstSection.querySelector('p')
featuresHead.textContent = siteContent['main-content']['features-h4']
featuresPara.textContent = siteContent['main-content']['features-content']

const secondSection = document.querySelector('.top-content .text-content:nth-of-type(2)')
const aboutHead = secondSection.querySelector('h4')
const aboutPara = secondSection.querySelector('p')
aboutHead.textContent = siteContent['main-content']['about-h4']
aboutPara.textContent = siteContent['main-content']['about-content']

const thirdSection = document.querySelector('.bottom-content .text-content:nth-of-type(1)')
const servicesHead = thirdSection.querySelector('h4')
const servicesPara = thirdSection.querySelector('p')
servicesHead.textContent = siteContent['main-content']['services-h4']
servicesPara.textContent = siteContent['main-content']['services-content']

const fourthSection = document.querySelector('.bottom-content .text-content:nth-of-type(2)')
const productHead = fourthSection.querySelector('h4')
const productPara = fourthSection.querySelector('p')
productHead.textContent = siteContent['main-content']['product-h4']
productPara.textContent = siteContent['main-content']['product-content']

const fifthSection = document.querySelector('.bottom-content .text-content:nth-of-type(3)')
const visionHead = fifthSection.querySelector('h4')
const visionPara = fifthSection.querySelector('p')
visionHead.textContent = siteContent['main-content']['vision-h4']
visionPara.textContent = siteContent['main-content']['vision-content']


const contactSection = document.querySelector('.contact')
const contactHead = contactSection.querySelector('h4')
const address = contactSection.querySelector('p:nth-of-type(1)')
const phone = contactSection.querySelector('p:nth-of-type(2)')
const email = contactSection.querySelector('p:nth-of-type(3)')
contactHead.textContent = siteContent['contact']['contact-h4']
address.textContent = siteContent['contact']['address']
phone.textContent = siteContent['contact']['phone']
email.textContent = siteContent['contact']['email']

const foot = document.querySelector('footer')
foot.textContent = siteContent['footer']['copyright']