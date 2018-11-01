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



//nav 
let navItem1 = document.querySelector('a:nth-child(1)');
navItem1.innerHTML = siteContent["nav"]["nav-item-1"]
navItem1.style.color = "green"

let navItem2 = document.querySelector('a:nth-child(2)');
navItem2.innerHTML = siteContent["nav"]["nav-item-2"]
navItem2.style.color = "green"

let navItem3 = document.querySelector('a:nth-child(3)');
navItem3.innerHTML = siteContent["nav"]["nav-item-3"]
navItem3.style.color = "green"

let navItem4 = document.querySelector('a:nth-child(4)');
navItem4.innerHTML = siteContent["nav"]["nav-item-4"]
navItem4.style.color = "green"

let navItem5 = document.querySelector('a:nth-child(5)');
navItem5.innerHTML = siteContent["nav"]["nav-item-5"]
navItem5.style.color = "green"

let navItem6 = document.querySelector('a:nth-child(6)');
navItem6.innerHTML = siteContent["nav"]["nav-item-6"]
navItem6.style.color = "green"

let navAll = document.querySelector('nav a')

let nav = document.querySelector('nav')
const backItem = document.createElement('a')
backItem.textContent = "Hello"
nav.appendChild(backItem)

const frontItem = document.createElement('a')
frontItem.textContent = "Hi again"
nav.prepend(frontItem)



//dom is awesome
//text 
let domIsAwesome = document.querySelector('.cta-text h1');
domIsAwesome.innerHTML = siteContent["cta"]["h1"]

let domIsAwesomeButton = document.querySelector('.cta-text h1 + button');
domIsAwesomeButton.textContent = siteContent["cta"]["button"]

// img
let introImg = document.getElementById("cta-img");
introImg.setAttribute('src', siteContent["cta"]["img-src"])



//features and about

//features
let featuresTitle = document.querySelector('.text-content:nth-child(1) h4');
featuresTitle.textContent = siteContent["main-content"]["features-h4"]

let featuresContent = document.querySelector('.text-content:nth-child(1) p');
featuresContent.textContent = siteContent["main-content"]["features-content"]

//about
let aboutTitle = document.querySelector('.text-content:nth-child(2) h4');
aboutTitle.textContent = siteContent["main-content"]["about-h4"]

let aboutContent = document.querySelector('.text-content:nth-child(2) p');
aboutContent.textContent = siteContent["main-content"]["about-content"]

//middle img
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])



//services product vision

const bottomContent = document.querySelector('.bottom-content');



//services
let servicesTitle = document.querySelector('.text-content:nth-child(3) h4');
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

let servicesContent = document.querySelector('.text-content:nth-child(3) p');
servicesContent.textContent = siteContent["main-content"]["services-content"]

//product
const productDiv = document.createElement('div')
productDiv.className = "text-content"
bottomContent.appendChild(productDiv)

const newProduct = document.createElement('h4')
newProduct.textContent = siteContent["main-content"]["product-h4"]

productDiv.appendChild(newProduct)

const newProductContent = document.createElement('p');
newProductContent.textContent = siteContent["main-content"]["product-content"]

productDiv.appendChild(newProductContent)


//vision
const visionDiv = document.createElement('div')
visionDiv.className = "text-content"
bottomContent.appendChild(visionDiv)

const newVision = document.createElement('h4')
newVision.textContent = siteContent["main-content"]["vision-h4"]

visionDiv.appendChild(newVision)

const newVisionContent = document.createElement('p');
newVisionContent.textContent = siteContent["main-content"]["vision-content"]

visionDiv.appendChild(newVisionContent)


//contact
let contactTitle = document.querySelector('.contact h4');
contactTitle.textContent = siteContent["contact"]["contact-h4"]

let contacta1 = document.querySelector('.contact p:nth-child(2)');
contacta1.textContent = siteContent["contact"]["address"]

let contacta2 = document.querySelector('.contact p:nth-child(3)')
contacta2.textContent = siteContent["contact"]["phone"]

let contacta3 = document.querySelector('.contact p:nth-child(4)')
contacta3.textContent = siteContent["contact"]["email"]

let footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"]