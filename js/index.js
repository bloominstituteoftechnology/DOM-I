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

let navOne = document.querySelector('nav a:nth-child(1)');
navOne.textContent = siteContent['nav']['nav-item-1']

let navTwo = document.querySelector('nav a:nth-child(2)');
navTwo.textContent = siteContent['nav']['nav-item-2']

let navThree = document.querySelector('nav a:nth-child(3)');
navThree.textContent = siteContent['nav']['nav-item-3']

let navFour = document.querySelector('nav a:nth-child(4)');
navFour.textContent = siteContent['nav']['nav-item-4']

let navFive = document.querySelector('nav a:nth-child(5)');
navFive.textContent = siteContent['nav']['nav-item-5']

let navSix = document.querySelector('nav a:nth-child(6)');
navSix.textContent = siteContent['nav']['nav-item-6']


let h1 = document.querySelector("h1")
let br = document.createElement("br")
let br2 = document.createElement("br")
let h1text1 = document.createTextNode("DOM")
let h1text2 = document.createTextNode("Is")
let h1text3 = document.createTextNode("Awesome")
h1.appendChild(h1text1)
h1.appendChild(br)
h1.appendChild(h1text2)
h1.appendChild(br2)
h1.appendChild(h1text3)

let codingImg = document.querySelector('#cta-img');
codingImg.setAttribute('src', siteContent['cta']['img-src'])

const button = document.querySelector('button')
button.textContent = siteContent['cta']['button']


let featuresHeading = document.querySelector('.text-content:nth-of-type(1) h4')
featuresHeading.textContent = siteContent['main-content']['features-h4']

let featuresParagraph = document.querySelector('.text-content:nth-of-type(1) p')
featuresParagraph.textContent = siteContent['main-content']['features-content']

let aboutHeading = document.querySelector('.text-content:nth-of-type(2) h4')
aboutHeading.textContent = siteContent['main-content']['about-h4']

let aboutParagraph = document.querySelector('.text-content:nth-of-type(2) p')
aboutParagraph.textContent = siteContent['main-content']['about-content']

let middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let servicesHeading = document.querySelector('.text-content:nth-of-type(3) h4')
servicesHeading.textContent = siteContent['main-content']['services-h4']

let servicesParagraph = document.querySelector('.text-content:nth-of-type(3) p')
servicesParagraph.textContent = siteContent['main-content']['services-content']

// let productHeading = document.querySelector('.text-content:nth-of-type(4) h4')
// productHeading.textContent = siteContent['main-content']['product-h4']

// let productParagraph = document.querySelector('.text-content:nth-of-type(4) p')
// productParagraph.textContent = siteContent['main-content']['product-content']

// let visionHeading = document.querySelector('.text-content:nth-of-type(5) h4')
// visionHeading.textContent = siteContent['main-content']['vision-h4']

// let visionParagraph = document.querySelector('.text-content:nth-of-type(5) p')
// visionParagraph.textContent = siteContent['main-content']['vision-content']

let contactHeading = document.querySelector('.contact h4')
contactHeading.textContent = siteContent['contact']['contact-h4']

// let contactAddress = document.querySelector('.contact p:nth-of-type(1)')
// contactAddress.textContent = siteContent['contact']['address']

let contactAddressOne = document.querySelector('.contact p:nth-of-type(1)')
contactAddressOne.appendChild(document.createTextNode('123 Way 456 Street'))
contactAddressOne.appendChild(document.createElement('br'))
contactAddressOne.appendChild(document.createTextNode('Somewhere, USA'))

let contactNumber = document.querySelector('.contact p:nth-of-type(2)')
contactNumber.textContent = siteContent['contact']['phone']

let contactEmail = document.querySelector('.contact p:nth-of-type(3)')
contactEmail.textContent = siteContent['contact']['email']

