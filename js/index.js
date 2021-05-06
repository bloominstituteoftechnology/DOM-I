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
    "address" : " '123 Way 456 Street Somewhere, USA ",
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

const nav = document.querySelectorAll('header nav a');

nav.forEach((a, index) => {
  a.textContent = siteContent['nav']['nav-item-' +(index + 1)];
  a.style.color = 'green'
})


let domH1 = document.querySelector('h1')
domH1.textContent = siteContent['cta']['h1']
let button =document.querySelector('button')
button.textContent = siteContent['cta']['button']
button.borderRadius = '4 px'
let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])


let topContent = document.querySelectorAll('.top-content .text-content')
let features =topContent[0].querySelector('h4')
features.textContent= siteContent['main-content']['features-h4']
let featuresText = topContent[0].querySelector('p')
featuresText.textContent= siteContent['main-content']['features-content']

let about =topContent[1].querySelector('h4')
about.textContent= siteContent['main-content']['about-h4']
let aboutText = topContent[1].querySelector('p')
aboutText.textContent= siteContent['main-content']['about-content']

let middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src' , siteContent['main-content']['middle-img-src'])

let bottomContent = document.querySelectorAll('.bottom-content .text-content')
let service = bottomContent[0].querySelector('h4')
service.textContent= siteContent['main-content']['services-h4']
let serviceText = bottomContent[0].querySelector('p')
serviceText.textContent= siteContent['main-content']['services-content']
let product = bottomContent[1].querySelector('h4')


product.textContent= siteContent['main-content']['product-h4']
let productText = bottomContent[1].querySelector('p')
productText.textContent= siteContent['main-content']['product-content']

let vision = bottomContent[2].querySelector('h4')
vision.textContent= siteContent['main-content']['vision-h4']
let visionText = bottomContent[2].querySelector('p')
visionText.textContent= siteContent['main-content']['vision-content']




let contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent['contact']['contact-h4']


let address = document.querySelector('.contact p:nth-child(2)')
address.textContent = siteContent['contact']['address']


let phone =document.querySelector('.contact p:nth-child(3)')
phone.textContent = siteContent['contact']['phone']

let email = document.querySelector('.contact p:nth-child(4)')
email.textContent = siteContent['contact']['email']


let footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']

let newLink = document.createElement('a')
newLink.classList.add('nav-item-7')
newLink.textContent  = 'Blog'
document.querySelector('nav').prepend(newLink)

let newLink2 = document.createElement('a')
newLink2.classList.add('nav-item-8')
newLink2.textContent  = 'Help'
document.querySelector('nav').appendChild(newLink2)



const mainText = document.querySelectorAll('.main-content .text-content p')
mainText.forEach(ele =>{
  ele.style.color = 'hotpink'
  ele.style.backgroundColor = 'blue' })

  const mainHeader = document.querySelectorAll('.main-content .text-content h4')
  mainHeader.forEach(ele2 => {
    ele2.style.color = 'red'
    ele2.style.backgroundColor ='yellow'
})



