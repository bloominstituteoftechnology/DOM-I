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

let navAnchor = document.querySelectorAll("nav a")
navAnchor[0].innerText = siteContent.nav['nav-item-1']
navAnchor[1].innerText = siteContent.nav['nav-item-2']
navAnchor[2].innerText = siteContent.nav['nav-item-3']
navAnchor[3].innerText = siteContent.nav['nav-item-4']
navAnchor[4].innerText = siteContent.nav['nav-item-5']
navAnchor[5].innerText = siteContent.nav['nav-item-6']

navAnchor.forEach(function(a){
  a.style.color = "green"
})

let h1Thing = document.querySelector("h1")
h1Thing.innerText = siteContent.cta['h1']

let buttonThing = document.querySelector('button')
buttonThing.innerText = siteContent.cta['button']

let ctaImage = document.querySelector('#cta-img')
ctaImage.setAttribute('src', siteContent['cta']['img-src'])

let middleImage = document.querySelector('.middle-img')
middleImage.setAttribute('src', siteContent["main-content"]['middle-img-src'])

let h4Thing = document.querySelectorAll('.text-content h4')
h4Thing[0].innerText = siteContent["main-content"]['features-h4']
h4Thing[1].innerText = siteContent["main-content"]['about-h4']
h4Thing[2].innerText = siteContent["main-content"]['services-h4']
h4Thing[3].innerText = siteContent["main-content"]['product-h4']
h4Thing[4].innerText = siteContent["main-content"]['vision-h4']

let pThing = document.querySelectorAll('.text-content p')
pThing[0].innerText = siteContent["main-content"]['features-content']
pThing[1].innerText = siteContent["main-content"]['about-content']
pThing[2].innerText = siteContent["main-content"]['services-content']
pThing[3].innerText = siteContent["main-content"]['product-content']
pThing[4].innerText = siteContent["main-content"]['vision-content']

let contactH4 = document.querySelector('.contact h4')
contactH4.innerText = siteContent.contact['contact-h4']

let contactPs = document.querySelectorAll('.contact p')
contactPs[0].innerText = siteContent.contact['address']
contactPs[1].innerText = siteContent.contact['email']
contactPs[2].innerText = siteContent.contact['phone']

let footerCopy = document.querySelector('footer p')
footerCopy.innerText = siteContent.footer['copyright']

const navAppend = document.createElement('a')
    navAppend.textContent = 'Blog'
    navAppend.href = '#'
    navAppend.classList.add('menu-item')
    document.querySelector('nav').appendChild(navAppend)