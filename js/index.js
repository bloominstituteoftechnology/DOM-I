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

// Navigation Top
const topNav = document.querySelectorAll('nav a');
topNav[0].textContent = "Services";
topNav[1].textContent = "Product";
topNav[2].textContent = "Vision";
topNav[3].textContent = "Features";
topNav[4].textContent = "About";
topNav[5].textContent = "Contact";

// Body
const circleImage = document.getElementById("cta-img")
circleImage.setAttribute('src',siteContent["cta"]["img-src"])

//titles of the body paragraphs
const contentTitle = document.querySelectorAll('.main-content h4')
contentTitle[0].textContent = siteContent['main-content']['features-h4']
contentTitle[1].textContent = siteContent['main-content']['about-h4']
contentTitle[2].textContent = siteContent['main-content']['services-h4']
contentTitle[3].textContent = siteContent['main-content']['product-h4']

//middle image
let middleImage = document.getElementById("middle-img")
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//paragraphs in the middle
const contentPar = document.querySelectorAll('.main-content p')
contentPar[0].textContent = siteContent['main-content']['features-content']
contentPar[1].textContent = siteContent['main-content']['about-content']
contentPar[2].textContent = siteContent['main-content']['services-content']
contentPar[3].textContent = siteContent['main-content']['product-content']


//title
const title = document.querySelector("h1")
title.textContent = siteContent["cta"]["h1"]

//button
const button = document.querySelector("button")
button.textContent = "Get Started";

//Contact me
const contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = siteContent['contact']['contact-h4']

const contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = siteContent['contact']['address']
contactInfo[1].textContent = siteContent['contact']['phone']
contactInfo[2].textContent = siteContent['contact']['email']



//Footer
const footer = document.querySelectorAll('footer p')
footer[0].textContent = siteContent['footer']['copyright']


//Starting out the Readme problems now
topNav.forEach(item=> item.style.color = 'green')

//New Nav Items
const homeLink = document.createElement('a')
homeLink.href = '#'
homeLink.textContent = "Home"
document.querySelector('nav').prepend(homeLink)
homeLink.style.color ='green'

const more = document.createElement('a')
more.href = '#'
more.textContent = "More"
document.querySelector('nav').appendChild(more)
more.style.color ='green'

