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
logo.setAttribute('src', siteContent["nav"]["img-src"]);
const allLinks = document.querySelectorAll('a')
allLinks[0].textContent = siteContent['nav']['nav-item-1']
allLinks[1].textContent = siteContent['nav']['nav-item-2']
allLinks[2].textContent = siteContent['nav']['nav-item-3']
allLinks[3].textContent = siteContent['nav']['nav-item-4']
allLinks[4].textContent = siteContent['nav']['nav-item-5']
allLinks[5].textContent = siteContent['nav']['nav-item-6']
allLinks.forEach((greenColor) =>{
  return greenColor.style.color ='green'
})

const Title = document.querySelector('.cta-text h1') 
Title.textContent = 'Dom Is Awesome'

const LinkBttn = document.querySelector('.cta-text button')
LinkBttn.textContent = 'Get Started'

const topPic = document.getElementById('cta-img')
topPic.setAttribute('src', siteContent["cta"]["img-src"])

const featTop = document.querySelectorAll('.top-content .text-content h4')
featTop[0].textContent = (siteContent['main-content']['features-h4'])

const featInfo = document.querySelectorAll('.top-content .text-content p')
featInfo[0].textContent = (siteContent['main-content']['features-content'])

const aboutTop = document.querySelectorAll('.top-content .text-content h4')
aboutTop[1].textContent = (siteContent['main-content']['about-h4'])

const aboutInfo = document.querySelectorAll('.top-content .text-content p')
aboutInfo[1].textContent = (siteContent['main-content']['about-content'])

const bttmPic = document.getElementById('middle-img')
bttmPic.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const servTop = document.querySelectorAll('.bottom-content .text-content h4')
servTop[0].textContent = (siteContent['main-content']['services-h4'])

const servInfo = document.querySelectorAll('.bottom-content .text-content p')
servInfo[0].textContent = (siteContent['main-content']['services-content'])

const proTop = document.querySelectorAll('.bottom-content .text-content h4')
proTop[1].textContent = (siteContent['main-content']['product-h4'])

const proInfo = document.querySelectorAll('.bottom-content .text-content p')
proInfo[1].textContent = (siteContent['main-content']['product-content'])

const visTop = document.querySelectorAll('.bottom-content .text-content h4')
visTop[2].textContent = (siteContent['main-content']['vision-h4'])

const visInfo = document.querySelectorAll('.bottom-content .text-content p')
visInfo[2].textContent = (siteContent['main-content']['vision-content'])

const lastSection = document.querySelector('.contact h4')
lastSection.textContent = (siteContent['contact']['contact-h4'])


const lastSection2 = document.querySelectorAll('.contact p')
lastSection2[0].textContent = (siteContent['contact']['address'])

lastSection2[1].textContent = (siteContent['contact']['phone'])

lastSection2[2].textContent = (siteContent['contact']['email'])

const footerSection = document.querySelector('footer p')
footerSection.textContent = (siteContent['footer']['copyright'])

const nav = document.querySelector('nav')
const newHome = document.createElement('a')
newHome.textContent = 'Home'
nav.prepend(newHome)
newHome.style.color ='green'
const newCat = document.createElement('a')
newCat.textContent = 'Categories'
nav.appendChild(newCat)
newCat.style.color = 'green'
