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

const title = document.querySelector('h1')
title.textContent = "Dom is awesome"

const getStarted = document.querySelector('button')
getStarted.textContent = "Get Started"

const firstSection = document.getElementsByClassName('.text-content:nth-of-type(1)')
const firstTitle = document.querySelector('h4')
const firstPara = document.querySelector('p')
firstTitle.textContent = "Features"
firstPara.textContent = "lorem ipsum Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ..."

const secondSection = document.getElementsByClassName('.text-content:nth-of-type(2)')
const secondTitle = document.querySelector('h4')
const secondPara =document.querySelector('p')
secondTitle.textContent = "About"
secondPara.textContent = "lorem ipsum Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown ..."


const contactHeading = document.getElementsByClassName('.contact')
contactHeading.setAttribute('h4', siteContent['contact']['.contact-h4'])



const foot = document.getElementsByTagName('footer')
foot.textContent = siteContent['footer']['copyright']