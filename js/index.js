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
nav[0].textContent = siteContent['nav']['nav-item-1']
nav[1].textContent = siteContent['nav']['nav-item-2']
nav[2].textContent = siteContent['nav']['nav-item-3']
nav[3].textContent = siteContent['nav']['nav-item-4']
nav[4].textContent = siteContent['nav']['nav-item-5']
nav[5].textContent = siteContent['nav']['nav-item-6']
nav.forEach((greenColor) => {
  return greenColor.style.color = 'green'
})

const h1 = document.querySelector('h1')
//console.log(h1)
h1.textContent = siteContent.cta.h1

const button = document.querySelector('button')
button.textContent = siteContent.cta.button

const mainImg = document.querySelector('#cta-img')
mainImg.src = siteContent.cta["img-src"]

const titleContent = document.querySelectorAll('.text-content h4')
titleContent[0].textContent = siteContent["main-content"]['features-h4']
titleContent[1].textContent = siteContent["main-content"]['about-h4']
titleContent[2].textContent = siteContent["main-content"]['services-h4']
titleContent[3].textContent = siteContent["main-content"]['products-h4']
titleContent[4].textContent = siteContent["main-content"]['vision-h4']

const pContent = document.querySelectorAll('p')
pContent[0].textContent = siteContent["main-content"]["features-content"]
pContent[1].textContent = siteContent["main-content"]["about-content"]
pContent[2].textContent = siteContent["main-content"]["services-content"]
pContent[3].textContent = siteContent["main-content"]["products-content"]
pContent[4].textContent = siteContent["main-content"]["vision-content"]

const midImg = document.querySelector('.middle-img')
midImg.src = siteContent["main-content"]["middle-img-src"]

const footerMain = document.querySelector('.contact h4')
footerMain.textContent = siteContent["contact"]["contact-h4"]


const footerInfo = document.querySelectorAll('.contact p')
footerInfo[0].textContent = siteContent["contact"]["address"]
footerInfo[1].textContent = siteContent["contact"]["phone"]
footerInfo[2].textContent =siteContent["contact"]["email"]

const footerCopyRight = document.querySelector('footer p')
footerCopyRight.textContent = "Copyright Great Idea! 2018"


//adding itmes to nav

const newNav = document.createElement('a');
newNav.textContent = "Other"
const parentElement = document.querySelector('nav');
parentElement.append(newNav)

const newNav2 = document.createElement('a');
newNav2.textContent = "Hello"
parentElement.prepend(newNav2)

//styling
navItems.forEach( element => {
  element.style.color = "green"
})

newNav.setAttribute("style", "color: green;");
newNav2.setAttribute("style", "color: green;");