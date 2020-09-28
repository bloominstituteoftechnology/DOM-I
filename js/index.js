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
let navigator = document.querySelector("nav");
// navigator.forEach((nav, idx) => {
//   const navbar = navigator.querySelector("nav")
//   navbar.textContent = siteContent[idx]["nav"]["nav-item-1"]
// })


//navigator[0].textContent = siteContent["nav"]["nav-item-1"]
//navigator[1].textContent = siteContent["nav"]["nav-item-2"]

navigator.children[0].textContent = siteContent["nav"]["nav-item-1"]
navigator.children[1].textContent = siteContent["nav"]["nav-item-2"]
navigator.children[2].textContent = siteContent["nav"]["nav-item-3"]
navigator.children[3].textContent = siteContent["nav"]["nav-item-4"]
navigator.children[4].textContent = siteContent["nav"]["nav-item-5"]
navigator.children[5].textContent = siteContent["nav"]["nav-item-6"]


let h1 = document.querySelector("h1")
h1.textContent = siteContent["cta"]["h1"]

let button = document.querySelector("button")
button.textContent = siteContent.cta.button

let circlePic = document.querySelector("#cta-img")
circlePic.setAttribute('src', siteContent["cta"]["img-src"])


const featureHeader = document.querySelector(".text-content:nth-of-type(1) h4")
featureHeader.textContent = siteContent["main-content"]["features-h4"]
const featureP = document.querySelector(".text-content:nth-of-type(1) p")
featureP.textContent = siteContent["main-content"]["features-content"]

const aboutHeader = document.querySelector(".text-content:nth-of-type(2) h4")
aboutHeader.textContent = siteContent["main-content"]["about-h4"]

const aboutP = document.querySelector(".text-content:nth-of-type(2) p")
aboutP.textContent = siteContent["main-content"]["about-content"]

let hackerPic = document.querySelector("#middle-img")
hackerPic.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const servicesH = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4")
servicesH.textContent = siteContent['main-content']['services-h4']
const servicesP = document.querySelector(".bottom-content .text-content:nth-of-type(1) p")
servicesP.textContent = siteContent['main-content']['services-content']
const productH = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4")
productH.textContent = siteContent['main-content']['product-h4']
const productP = document.querySelector(".bottom-content .text-content:nth-of-type(2) p")
productP.textContent = siteContent['main-content']['product-content']
const visionH = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4")
visionH.textContent = siteContent['main-content']['vision-h4']
const visionP = document.querySelector(".bottom-content .text-content:nth-of-type(3) p")
visionP.textContent = siteContent['main-content']['vision-content']


const contactH = document.querySelector('.contact h4')
contactH.textContent = siteContent['contact']['contact-h4']
const contactA = document.querySelector('.contact p:nth-of-type(1)')
contactA.textContent = siteContent['contact']['address']
const contactP = document.querySelector('.contact p:nth-of-type(2)')
contactP.textContent = siteContent['contact']['phone']
const contactE = document.querySelector('.contact p:nth-of-type(3)')
contactE.textContent = siteContent['contact']['email']

const footer = document.querySelector('footer')
footer.textContent = siteContent["footer"]['copyright']

const newLink = document.createElement("a")
newLink.textContent = "eggstra"
newLink.id = "BlogLink"
newLink.href = '#'

document.querySelector("nav").appendChild(newLink)

const newestLink = document.createElement("a")
newestLink.textContent = "blogged"
newLink.href = "#"
document.querySelector("nav").appendChild(newestLink)

newLink.style.color = "green"
newestLink.style.color = "green"
navigator.children[0].style.color = "green"
navigator.children[1].style.color = "green"
navigator.children[2].style.color = "green"
navigator.children[3].style.color = "green"
navigator.children[4].style.color = "green"
navigator.children[5].style.color = "green"
