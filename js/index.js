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

const anchorTag = document.querySelectorAll('nav a');
console.log(anchorTag)
anchorTag[0].textContent = siteContent["nav"]["nav-item-1"]
anchorTag[1].textContent = siteContent["nav"]["nav-item-2"]
anchorTag[2].textContent = siteContent["nav"]["nav-item-3"]
anchorTag[3].textContent = siteContent["nav"]["nav-item-4"]
anchorTag[4].textContent = siteContent["nav"]["nav-item-5"]
anchorTag[5].textContent = siteContent["nav"]["nav-item-6"]


const heading = document.querySelector('h1')
heading.textContent = siteContent["cta"]["h1"]

const getStarted = document.querySelector('button')
getStarted.textContent = siteContent["cta"]["button"]

const image = document.querySelector('img')
image.setAttribute('src',siteContent["cta"]["img-src"])

const topHeading = document.querySelectorAll('.top-content h4')
console.log(topHeading)
topHeading[0].textContent = siteContent['main-content']['features-h4']
topHeading[1].textContent = siteContent['main-content']['about-h4']

const topParagraph = document.querySelectorAll('.top-content p')
topParagraph[0].textContent = siteContent['main-content']['features-content']
topParagraph[1].textContent = siteContent['main-content']['about-content']

const mainImage = document.querySelector('.main-content img')
mainImage.setAttribute('src',siteContent['main-content']['middle-img-src'])

const bottomHeading = document.querySelectorAll('.bottom-content h4')

bottomHeading[0].textContent = siteContent["main-content"]["services-h4"]
bottomHeading[1].textContent = siteContent["main-content"]["product-h4"]
bottomHeading[2].textContent = siteContent["main-content"]["vision-h4"]

const bottomParagraph = document.querySelectorAll('.bottom-content p')

bottomParagraph[0].textContent = siteContent ["main-content"] ["services-content"]
bottomParagraph[1].textContent = siteContent ["main-content"] ["product-content"]
bottomParagraph[2].textContent = siteContent ["main-content"] ["vision-content"]

const contact = document.querySelector('.contact h4')

contact.textContent = siteContent["contact"]["contact-h4"]

const contactInfo = document.querySelectorAll('.contact p')

contactInfo[0].textContent = siteContent["contact"]["address"]
contactInfo[1].textContent = siteContent["contact"]["phone"]
contactInfo[2].textContent = siteContent["contact"]["email"]

const copy = document.querySelector('footer p')
copy.textContent = siteContent["footer"]["copyright"]

const changeColor = document.querySelectorAll('header nav a')
console.log(changeColor)
changeColor[0].style.color = 'green'
changeColor[1].style.color = 'green'
changeColor[2].style.color = 'green'
changeColor[3].style.color = 'green'
changeColor[4].style.color = 'green'
changeColor[5].style.color = 'green'


const custom = document.createElement('a')
const content = document.createElement('a')
custom.innerHTML = "Custom"
content.innerHTML = "Content"

custom.style.color = 'green'
content.style.color = 'green'

const navigation = document.querySelector('nav')
navigation.appendChild(content)
navigation.appendChild(custom)





