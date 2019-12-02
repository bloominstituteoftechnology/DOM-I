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

const navBar = document.querySelectorAll ('a')
navBar.forEach((element, i) => {
  element.textContent = siteContent["nav"][`nav-item-${i+1}`]
})

const head = document.querySelector ('h1')
head.textContent = siteContent["cta"]['h1']

const butt = document.querySelector('button')
butt.textContent = siteContent['cta']['button']

let picTwo = document.querySelector('#cta-img')
picTwo.setAttribute('src', siteContent['cta']['img-src'])

const topSection = document.querySelectorAll ('.text-content')
console.log(topSection[0].children[0])
topSection[0].children[0].textContent = siteContent['main-content']['features-h4']
topSection[0].children[1].textContent = siteContent['main-content']['features-content']
topSection[1].children[0].textContent = siteContent['main-content']['about-h4']
topSection[1].children[1].textContent = siteContent['main-content']['about-content']
topSection[2].children[0].textContent = siteContent['main-content']['services-h4']
topSection[2].children[1].textContent = siteContent['main-content']['services-content']
topSection[3].children[0].textContent = siteContent['main-content']['product-h4']
topSection[3].children[1].textContent = siteContent['main-content']['product-content']
topSection[4].children[0].textContent = siteContent['main-content']['vision-h4']
topSection[4].children[1].textContent = siteContent['main-content']['vision-content']

const midPic = document.querySelector('.middle-img')
midPic.setAttribute('src', siteContent['main-content']['middle-img-src'])

const contact = document.querySelector('.contact')
contact.children[0].textContent = siteContent ['contact']['contact-h4']
contact.children[1].textContent = siteContent ['contact']['address']
contact.children[2].textContent = siteContent ['contact']['phone']
contact.children[3].textContent = siteContent ['contact']['email']

const foot = document.querySelector('footer')
foot.textContent = siteContent ['footer']['copyright']

const newTag = document.createElement('a')
newTag.textContent = 'Goodbye'
const parentElement = document.querySelector('nav')
parentElement.append(newTag)

const newTagTwo = document.createElement('a')
newTagTwo.textContent = 'Hello'
const parentElementtwo = document.querySelector('nav')
parentElementtwo.prepend(newTagTwo)

//stretch
const headerbg = document.querySelectorAll('.text-content')
headerbg.forEach(element => {element.style.backgroundColor = 'yellow'})

const headercolor = document.querySelectorAll('.text-content h4')
headercolor.forEach(element => {element.style.color = 'aqua'})

const domcolor = document.querySelectorAll('h1')
domcolor.forEach(element => {element.style.color = 'darkorchid'})


